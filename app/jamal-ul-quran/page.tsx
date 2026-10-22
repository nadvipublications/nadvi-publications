import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Download, Bookmark, Copy } from "lucide-react";
import styles from "./page.module.css";

const origin = "https://www.nadvipublications.online";
const url = `${origin}/jamal-ul-quran`;
const image = `${origin}/jamal-ul-quran-social-v1.png`;
const title = "Jamal ul Quran: Balochi Quran";
const description = "Read the Holy Quran in Arabic with Balochi translation. Download Jamal ul Quran by Nadvi Publications from Google Play.";
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: {
    type: "website", siteName: "Nadvi Publications", title, description, url,
    images: [{ url: image, secureUrl: image, type: "image/png", width: 1200, height: 630,
      alt: "Original Jamal ul Quran app logo — Arabic Quran with Balochi translation" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};
const playUrl = "https://play.google.com/store/apps/details?id=com.nadvipublications.alquran";

export default function JamalUlQuranPage() {
  return <div className={styles.page}>
    <a className={styles.skip} href="#quran-app">Skip to app download</a>
    <header className={styles.header}>
      <Link href="/" aria-label="Nadvi Publications home">
        {/* Original publisher artwork, preserved at its original aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/nadvi-publications-logo-new.png" width="285" height="76" alt="Nadvi Publications — مکتبہ ندوی" />
      </Link>
      <Link className={styles.back} href="/"><ArrowLeft size={16} aria-hidden="true" /> Back to website</Link>
    </header>
    <main id="quran-app" className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.logoPanel}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.appLogo} src="/jamal-ul-quran-logo.svg" width="333" height="247" alt="جمال القرآن — Jamal ul Quran" fetchPriority="high" />
          <span className={styles.publisher}>NADVI PUBLICATIONS · مکتبہ ندوی</span>
        </div>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>THE QURAN, IN YOUR LANGUAGE</span>
          <h1 lang="ur" dir="rtl">جمال القرآن: بلوچی ترجمہ</h1>
          <p className={styles.englishName}>{title}</p>
          <p className={styles.urduIntro} lang="ur" dir="rtl">قرآنِ پاک کا عربی متن اور بلوچی ترجمہ، اب آپ کے موبائل پر۔ اپنی سہولت کے مطابق پڑھیں، ترجمہ دیکھیں اور آیات اپنے عزیزوں کے ساتھ شیئر کریں۔</p>
          <p className={styles.englishIntro}>Read the Holy Quran in Arabic with its Balochi translation. A thoughtful reading companion from Nadvi Publications.</p>
          <a className={styles.download} href={playUrl}>
            <Download size={23} aria-hidden="true" />
            <span><strong lang="ur" dir="rtl">Google Play سے ڈاؤنلوڈ کریں</strong><small>Get it on Google Play · Android</small></span>
          </a>
          <p className={styles.installNote} lang="ur" dir="rtl">ایپ انسٹال کرنے کے لیے اوپر کا بٹن دبائیں۔</p>
        </div>
      </div>
      <section className={styles.features} aria-label="App features">
        <article><BookOpen aria-hidden="true" /><h2 lang="ur" dir="rtl">عربی اور بلوچی</h2><p>Arabic Quran text with Balochi translation</p></article>
        <article><Bookmark aria-hidden="true" /><h2 lang="ur" dir="rtl">اپنی جگہ محفوظ کریں</h2><p>Bookmarks for your reading</p></article>
        <article><Copy aria-hidden="true" /><h2 lang="ur" dir="rtl">کاپی اور شیئر کریں</h2><p>Share verses and their translation</p></article>
      </section>
    </main>
    <footer className={styles.footer}><span>Nadvi Publications / <span lang="ur" dir="rtl">مکتبہ ندوی</span></span><Link href="/privacy-policy">Privacy Policy</Link></footer>
  </div>;
}
