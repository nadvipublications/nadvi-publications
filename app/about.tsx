import { BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <span className="eyebrow">ABOUT NADVI PUBLICATIONS</span>
        <h1>Books across languages and borders</h1>
        <p>Nadvi Publications is an independent multilingual publishing house bringing meaningful books, enduring ideas, and distinctive voices to readers in Balochi, Urdu, Persian, and English. We preserve cultural memory, support original scholarship, and carry valuable literature to new generations.</p>
        <p>Our collection spans literature, poetry, history, education, research, children&apos;s books, eBooks, and audiobooks. Every title is selected with care and made accessible, because every language carries the identity of its people and every worthwhile book deserves to travel.</p>
      </section>
      <aside className="about-principle">
        <BookOpen />
        <blockquote>Every language carries the identity of its people.</blockquote>
        <span>NADVI PUBLICATIONS</span>
      </aside>
    </div>
  );
}
