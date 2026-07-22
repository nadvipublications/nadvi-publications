import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFile, spawn } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const exec = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const cataloguePath = path.join(root, "data", "uploaded-books.json");
const coverDirectory = path.join(root, "public", "books");
const token = crypto.randomBytes(24).toString("hex");
const port = 4178;
const languages = ["Balochi", "Urdu", "Persian", "Arabic", "English"];
const formats = ["Print", "PDF", "EPUB", "Audiobook"];
const imageTypes = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

function slugify(value) {
  const slug = value.normalize("NFKD").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").toLowerCase();
  return (slug || `book-${Date.now()}`).slice(0, 80);
}

async function git(...args) {
  return exec("git", args, { cwd: root, windowsHide: true });
}

async function preflight() {
  const { stdout } = await git("status", "--porcelain");
  const changes = stdout.split(/\r?\n/).filter(Boolean).filter(line => !line.includes("tsconfig.tsbuildinfo"));
  if (changes.length) throw new Error(`Publishing stopped because the website has unfinished changes:\n${changes.join("\n")}\nPlease ask Codex to check these changes once.`);
}

function validate(input) {
  if (input.token !== token) throw new Error("This publisher session expired. Close it and open the launcher again.");
  if (!input.title?.trim() || !input.author?.trim() || !input.description?.trim()) throw new Error("Title, author, and description are required.");
  if (!languages.includes(input.language) || !formats.includes(input.format)) throw new Error("Choose a valid language and format.");
  if (!imageTypes[input.coverType]) throw new Error("The cover must be a JPG, PNG, or WebP image.");
  const match = String(input.coverData || "").match(/^data:[^;]+;base64,(.+)$/);
  if (!match) throw new Error("Please choose a cover image.");
  const cover = Buffer.from(match[1], "base64");
  if (!cover.length || cover.length > 8 * 1024 * 1024) throw new Error("The cover must be smaller than 8 MB.");
  return cover;
}

async function publish(input) {
  await preflight();
  const cover = validate(input);
  const catalogue = JSON.parse(fs.readFileSync(cataloguePath, "utf8"));
  const baseSlug = slugify(input.title);
  let slug = baseSlug;
  let suffix = 2;
  while (catalogue.some(book => book.slug === slug)) slug = `${baseSlug}-${suffix++}`;
  const extension = imageTypes[input.coverType];
  const relativeCover = `/books/${slug}.${extension}`;
  const coverPath = path.join(coverDirectory, `${slug}.${extension}`);
  const book = {
    slug,
    title: input.title.trim(),
    ...(input.translated?.trim() ? { translated: input.translated.trim() } : {}),
    author: input.author.trim(),
    language: input.language,
    format: input.format,
    price: Number(input.price || 0),
    ...(Number(input.oldPrice) > 0 ? { old: Number(input.oldPrice) } : {}),
    rating: 5,
    reviews: 0,
    color: "#173f35",
    category: input.category?.trim() || "General",
    badge: "NEW",
    rtl: ["Balochi", "Urdu", "Persian", "Arabic"].includes(input.language),
    coverImage: relativeCover,
    description: input.description.trim(),
    ...(Number(input.year) > 0 ? { publishedYear: Number(input.year) } : {}),
    ...(Number(input.pages) > 0 ? { pages: Number(input.pages) } : {}),
    ...(input.isbn?.trim() ? { isbn: input.isbn.trim() } : {})
  };
  fs.mkdirSync(coverDirectory, { recursive: true });
  const previous = fs.readFileSync(cataloguePath);
  let committed = false;
  fs.writeFileSync(coverPath, cover);
  fs.writeFileSync(cataloguePath, `${JSON.stringify([book, ...catalogue], null, 2)}\n`);
  try {
    await exec("npm", ["run", "typecheck"], { cwd: root, windowsHide: true });
    await git("add", "data/uploaded-books.json", `public/books/${slug}.${extension}`);
    await git("commit", "-m", `Add book: ${input.title.trim()}`);
    committed = true;
    await git("push", "origin", "main");
  } catch (error) {
    fs.writeFileSync(cataloguePath, previous);
    if (fs.existsSync(coverPath)) fs.unlinkSync(coverPath);
    if (committed) try { await git("reset", "--mixed", "HEAD~1"); } catch {}
    throw new Error(`The book was not published. ${error.stderr || error.message}`);
  }
  return book;
}

const page = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Nadvi Book Publisher</title><style>
*{box-sizing:border-box}body{margin:0;background:#f5f0e6;color:#1d2622;font:15px Arial,sans-serif}.top{background:#173f35;color:#fff;padding:22px max(20px,calc((100% - 900px)/2))}.top h1{margin:0;font:700 28px Georgia,serif}.top p{margin:7px 0 0;color:#d9e6e1}.wrap{max-width:900px;margin:24px auto 50px;padding:0 20px}form{background:#fff;border:1px solid #d8d2c7;padding:26px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.full{grid-column:1/-1}label{display:grid;gap:7px;font-weight:700;font-size:13px}input,select,textarea{width:100%;padding:12px;border:1px solid #9fa59f;background:#fff;font:inherit}textarea{min-height:120px;resize:vertical}.hint{font-size:12px;color:#67706c;font-weight:400}.preview{display:none;max-width:160px;max-height:240px;border:1px solid #ddd}.actions{display:flex;align-items:center;gap:14px}.publish{border:0;background:#173f35;color:#fff;padding:14px 24px;font-weight:700;font-size:16px}.publish:disabled{opacity:.55}.status{white-space:pre-wrap;line-height:1.5}.ok{color:#176642}.error{color:#9a2832}@media(max-width:650px){form{grid-template-columns:1fr;padding:18px}.full{grid-column:auto}.actions{align-items:flex-start;flex-direction:column}}
</style></head><body><div class="top"><h1>Nadvi Book Publisher</h1><p>Private publishing tool running only on this computer</p></div><main class="wrap"><form id="form">
<label>Book cover *<input id="cover" type="file" accept="image/jpeg,image/png,image/webp" required><span class="hint">JPG, PNG, or WebP; maximum 8 MB. A portrait cover works best.</span><img id="preview" class="preview" alt="Cover preview"></label>
<label>Book title *<input name="title" required></label><label>Translated / English title<input name="translated"></label><label>Author *<input name="author" required></label>
<label>Language *<select name="language">${languages.map(x => `<option>${x}</option>`).join("")}</select></label><label>Format *<select name="format">${formats.map(x => `<option>${x}</option>`).join("")}</select></label>
<label>Price (USD)<input name="price" type="number" min="0" step="0.01" value="0"></label><label>Old price (optional)<input name="oldPrice" type="number" min="0" step="0.01"></label>
<label>Category<input name="category" placeholder="History, Poetry, Children..." value="General"></label><label>Publication year<input name="year" type="number" min="1000" max="2100"></label>
<label>Number of pages<input name="pages" type="number" min="1"></label><label>ISBN (optional)<input name="isbn"></label>
<label class="full">Book description *<textarea name="description" required placeholder="Write a clear description of the book, its subject, and who should read it."></textarea></label>
<div class="full actions"><button class="publish" type="submit">Publish to Website</button><span id="status" class="status">GitHub and Vercel will update automatically.</span></div>
</form></main><script>
const form=document.querySelector('#form'),cover=document.querySelector('#cover'),preview=document.querySelector('#preview'),status=document.querySelector('#status'),button=document.querySelector('.publish');let coverData='';
cover.onchange=()=>{const file=cover.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{coverData=reader.result;preview.src=coverData;preview.style.display='block'};reader.readAsDataURL(file)};
form.onsubmit=async event=>{event.preventDefault();button.disabled=true;status.className='status';status.textContent='Checking, saving, and publishing. Please keep this window open...';const values=Object.fromEntries(new FormData(form));values.coverData=coverData;values.coverType=cover.files[0]?.type;values.token='${token}';try{const response=await fetch('/publish',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(values)});const result=await response.json();if(!response.ok)throw new Error(result.error);status.className='status ok';status.textContent='Published successfully. Vercel is updating the live website now (usually 1-3 minutes).';form.reset();preview.style.display='none';coverData=''}catch(error){status.className='status error';status.textContent=error.message}finally{button.disabled=false}};
</script></body></html>`;

if (process.argv.includes("--check")) {
  JSON.parse(fs.readFileSync(cataloguePath, "utf8"));
  console.log("Book Publisher configuration is valid.");
  process.exit(0);
}

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") { response.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" }); return response.end(page); }
  if (request.method === "GET" && request.url === "/health") { response.writeHead(200, { "content-type": "application/json" }); return response.end('{"ok":true}'); }
  if (request.method === "POST" && request.url === "/publish") {
    let body = "";
    request.on("data", chunk => { body += chunk; if (body.length > 12 * 1024 * 1024) request.destroy(); });
    request.on("end", async () => { try { const book = await publish(JSON.parse(body)); response.writeHead(200, { "content-type": "application/json" }); response.end(JSON.stringify({ ok: true, book })); } catch (error) { response.writeHead(400, { "content-type": "application/json" }); response.end(JSON.stringify({ error: error.message })); } });
    return;
  }
  response.writeHead(404); response.end("Not found");
});

server.listen(port, "127.0.0.1", () => {
  const url = `http://127.0.0.1:${port}`;
  console.log(`Nadvi Book Publisher is open at ${url}`);
  console.log("Keep this window open while publishing. Press Ctrl+C to close it.");
  spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore", windowsHide: true }).unref();
});
