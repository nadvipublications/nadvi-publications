"use client";

import { useEffect } from "react";
import { Check, X } from "lucide-react";

type InquiryBook = {
  title: string;
  author: string;
  language: string;
};

export default function InquiryModal({ book, onClose }: { book: InquiryBook; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  return (
    <div className="inquiry-backdrop" role="presentation" onClick={onClose}>
      <section className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={event => event.stopPropagation()}>
        <button className="inquiry-close" onClick={onClose} aria-label="Close inquiry"><X /></button>
        <Check className="inquiry-mark" />
        <span className="eyebrow">THANK YOU</span>
        <h2 id="inquiry-title">Thank you for your interest</h2>
        <p>WhatsApp has opened with your enquiry about <strong>{book.title}</strong>. We will provide more information about the book and other details.</p>
        <p>Have a nice day.</p>
        <button type="button" onClick={onClose}>Close</button>
      </section>
    </div>
  );
}
