import styles from "./jamal-ul-quran/page.module.css";
export default function QuranAppLink() {
  return <a href="https://play.google.com/store/apps/details?id=com.nadvipublications.alquran" className={styles.homeCallout}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/jamal-ul-quran-logo.svg" width="125" height="93" alt="Jamal ul Quran app logo" />
    <div><strong>Jamal ul Quran<br />Balochi Rajank</strong><p>The Holy Quran with Balochi Translation now available on Google Play Store, Click to Download</p></div>
    <span>Download the app →</span>
  </a>;
}
