import Link from "next/link";
import styles from "./jamal-ul-quran/page.module.css";
export default function QuranAppLink() {
  return <Link href="/jamal-ul-quran" className={styles.homeCallout}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/jamal-ul-quran-logo.svg" width="125" height="93" alt="Jamal ul Quran app logo" />
    <div><strong>Jamal ul Quran: Balochi Quran</strong><p>Arabic Quran with Balochi translation, now on Android.</p></div>
    <span>Explore the app →</span>
  </Link>;
}
