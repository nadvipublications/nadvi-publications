"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

const measurementId = "G-5HVNJWWDX6";
const consentKey = "nadvi-analytics-consent";
type Choice = "granted" | "denied" | null;

function storedChoice(): Choice {
  try {
    const value = localStorage.getItem(consentKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch { return null; }
}
function subscribe(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== consentKey && event.key !== null) return;
    if (event.newValue !== "granted") window.location.reload();
    else onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => window.removeEventListener("storage", onStorage);
}
const serverChoice = () => null;

export default function WebsiteAnalytics() {
  const saved = useSyncExternalStore(subscribe, storedChoice, serverChoice);
  const [sessionChoice, setSessionChoice] = useState<Choice>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const choice = sessionChoice ?? saved;

  function choose(value: Exclude<Choice, null>) {
    try { localStorage.setItem(consentKey, value); } catch { /* Keep this visit's choice if storage is unavailable. */ }
    setSessionChoice(value);
    setPreferencesOpen(false);
    if (value === "denied" && choice === "granted") {
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (!/^_ga(?:_|$)/.test(name)) continue;
        for (const domain of ["", window.location.hostname, window.location.hostname.replace(/^www\./, "")]) {
          document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ""}`;
        }
      }
      window.location.reload();
    }
  }

  return <>
    {choice === "granted" && <>
      <Script id="nadvi-analytics-config" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {analytics_storage:'granted', ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied'});
        gtag('js', new Date());
        gtag('config', '${measurementId}', {allow_google_signals:false, allow_ad_personalization_signals:false});
      `}</Script>
      <Script id="nadvi-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    </>}
    {choice === null || preferencesOpen ? <section className="analytics-notice" aria-label="Analytics cookie preferences">
      <div><strong>Analytics cookies</strong><p>May we use Google Analytics to understand visits and improve this website? You can use the website without accepting. <Link href="/website-privacy">Website privacy</Link></p><p lang="ur" dir="rtl">کیا آپ ویب سائٹ کے استعمال کی جانچ کے لیے Analytics cookies کی اجازت دیتے ہیں؟ انکار کے باوجود ویب سائٹ استعمال کر سکتے ہیں۔</p></div>
      <div className="analytics-actions"><button onClick={() => choose("denied")}>Reject analytics / انکار</button><button onClick={() => choose("granted")}>Allow analytics / اجازت</button></div>
    </section> : <button className="analytics-preferences" onClick={() => setPreferencesOpen(true)}>Cookie preferences</button>}
  </>;
}
