import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Privacy and Analytics",
  description: "How optional Google Analytics measurement works on the Nadvi Publications website.",
  alternates: { canonical: "/website-privacy" },
};

export default function WebsitePrivacy() {
  return <div className="privacy-shell">
    <header className="privacy-header"><Link href="/">Nadvi Publications</Link><Link href="/">Back to website</Link></header>
    <main className="privacy-page"><article>
      <h1>Website privacy and analytics</h1>
      <p>This page describes analytics on the Nadvi Publications website. For the Jamal ul Quran mobile application, read the <Link href="/privacy-policy">app privacy policy</Link>.</p>
      <h2>Your choice</h2>
      <p>Google Analytics loads only after you choose “Allow analytics”. Rejecting analytics does not prevent you from browsing the website. We store your choice in your browser’s local storage. Use “Cookie preferences” to change it. Withdrawing permission reloads the page to stop analytics and removes this website’s Google Analytics cookies.</p>
      <h2>What analytics measures</h2>
      <p>If allowed, Google Analytics measures page views and interactions such as scrolling, outbound links and downloads, along with browser, device and approximate location information. Google receives technical information needed to process these visits. Analytics cookies help distinguish visits. We do not enable Google signals or advertising personalization in this website tag.</p>
      <p>See <a href="https://policies.google.com/technologies/partner-sites">how Google uses information from websites that use its services</a> and <a href="https://policies.google.com/privacy">Google’s privacy policy</a>.</p>
      <h2>Other website storage and contact</h2>
      <p>The bookstore may store your cart in your browser. Following a WhatsApp, Google Play or other external link takes you to a service with its own privacy practices. Contact us about this website at <a href="mailto:nadvipublications@gmail.com">nadvipublications@gmail.com</a>.</p>
    </article></main>
  </div>;
}
