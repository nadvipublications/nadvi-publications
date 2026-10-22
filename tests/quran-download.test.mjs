import test from 'node:test';
import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL || 'http://localhost:3210';
const canonical = 'https://www.nadvipublications.online/jamal-ul-quran';
const social = 'https://www.nadvipublications.online/jamal-ul-quran-social-v1.png';
const play = 'https://play.google.com/store/apps/details?id=com.nadvipublications.alquran';
test('initial GET HTML contains complete crawler metadata and correct download destination',async()=>{
 const response=await fetch(`${base}/jamal-ul-quran`,{headers:{'User-Agent':'WhatsApp/2.26'}});
 assert.equal(response.status,200);
 const html=await response.text();
 const head=html.split('</head>')[0];
 const get=(key)=>{const escaped=key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); return head.match(new RegExp(`<meta (?:name|property)="${escaped}" content="([^"]*)"`))?.[1];};
 assert.match(head,/<title>Jamal ul Quran: Balochi Quran<\/title>/);
 assert.match(head,new RegExp(`<link rel="canonical" href="${canonical}"`));
 for(const key of ['description','og:description','twitter:description']) assert.ok(get(key)?.includes('Balochi translation'),key);
 for(const key of ['og:title','twitter:title']) assert.equal(get(key),'Jamal ul Quran: Balochi Quran');
 assert.equal(get('og:type'),'website'); assert.equal(get('og:site_name'),'Nadvi Publications');
 assert.equal(get('og:url'),canonical);
 for(const key of ['og:image','og:image:secure_url','twitter:image'])assert.equal(get(key),social,key);
 assert.equal(get('og:image:type'),'image/png');assert.equal(get('og:image:width'),'1200');assert.equal(get('og:image:height'),'630');assert.ok(get('og:image:alt'));
 assert.equal(get('twitter:card'),'summary_large_image');
 assert.ok(html.includes(`href="${play}"`));assert.ok(html.includes('dir="rtl"'));
 assert.doesNotMatch(head,/http-equiv="refresh"/i);assert.doesNotMatch(html,/\.apk(?:["?])/i);
});
test('social preview is a publicly fetched 1200 by 630 PNG',async()=>{
 const response=await fetch(`${base}/jamal-ul-quran-social-v1.png`);assert.equal(response.status,200);assert.match(response.headers.get('content-type'),/^image\/png/);
 const bytes=Buffer.from(await response.arrayBuffer()); assert.equal(bytes.readUInt32BE(16),1200);assert.equal(bytes.readUInt32BE(20),630);
});
test('home links and crawler discovery include the app page',async()=>{
 const home=await(await fetch(base)).text();assert.ok(home.includes('href="/jamal-ul-quran"'));
 const robots=await(await fetch(`${base}/robots.txt`)).text();assert.ok(robots.includes('Allow: /'));assert.ok(robots.includes('https://www.nadvipublications.online/sitemap.xml'));
 const sitemap=await(await fetch(`${base}/sitemap.xml`)).text();assert.ok(sitemap.includes(canonical));assert.ok(!sitemap.includes('nadvi.example'));
});
