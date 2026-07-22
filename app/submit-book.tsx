"use client";

import { FormEvent, useState } from "react";
import { BookUp, Send, ShieldCheck } from "lucide-react";

export default function SubmitBook() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Nadvi Publications, I would like to submit a book proposal.",
      `Book title: ${data.get("title")}`,
      `Author: ${data.get("author")}`,
      `Language: ${data.get("language")}`,
      `Category: ${data.get("category")}`,
      `Contact: ${data.get("contact")}`,
      `Summary: ${data.get("summary")}`,
    ].join("\n");
    window.open(`https://wa.me/971527266343?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="submit-page">
      <section className="submit-intro">
        <span className="eyebrow">PUBLISH WITH NADVI</span>
        <h1>Place your book on our shelf</h1>
        <p>Authors and publishers may send us a book proposal for editorial review. Start with the details below; please do not send a complete manuscript through a public link.</p>
        <div className="submission-safety"><ShieldCheck /><span><strong>Secure manuscript handling</strong>Shortlisted proposals receive a private, time-limited upload link. Files are reviewed privately and are never placed in the public website folder.</span></div>
      </section>
      <form className="submission-form" onSubmit={submit}>
        <BookUp />
        <h2>Book proposal</h2>
        <label>Book title<input name="title" required /></label>
        <label>Author or publisher<input name="author" required /></label>
        <div><label>Language<select name="language" required><option>Balochi</option><option>Urdu</option><option>Persian</option><option>Arabic</option><option>English</option></select></label><label>Category<input name="category" required /></label></div>
        <label>Email or WhatsApp number<input name="contact" required /></label>
        <label>Short description<textarea name="summary" rows={5} required /></label>
        <label className="submission-consent"><input type="checkbox" required /> I confirm that I own or control the rights needed to submit this work.</label>
        <button type="submit"><Send /> Send proposal on WhatsApp</button>
        {sent && <p className="submission-sent">Your proposal message is ready in WhatsApp.</p>}
      </form>
    </div>
  );
}
