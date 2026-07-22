"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type InquiryBook = {
  title: string;
  author: string;
  language: string;
};

export default function InquiryModal({ book, onClose }: { book: InquiryBook; onClose: () => void }) {
  const [contact, setContact] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Nadvi Publications, I am interested in "${book.title}" by ${book.author} (${book.language}). My email or WhatsApp number is: ${contact}. Please send me the full details.`;
    window.open(`https://wa.me/971527266343?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="inquiry-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <section className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
        <button className="inquiry-close" onClick={onClose} aria-label="Close inquiry"><X /></button>
        <MessageCircle className="inquiry-mark" />
        <span className="eyebrow">BOOK INQUIRY</span>
        <h2 id="inquiry-title">Interested in this book?</h2>
        <p><strong>{book.title}</strong><br />Share your email address or WhatsApp number and we will send you the full details.</p>
        <form onSubmit={submit}>
          <label htmlFor="inquiry-contact">Email address or WhatsApp number</label>
          <input id="inquiry-contact" value={contact} onChange={event => setContact(event.target.value)} required autoFocus placeholder="you@example.com or +92..." />
          <button type="submit"><Send /> Continue to WhatsApp</button>
        </form>
      </section>
    </div>
  );
}
