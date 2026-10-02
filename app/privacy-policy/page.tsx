import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Al Quran (Jamal al-Qur'an) mobile application published by Nadvi Publications.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-shell">
      <header className="privacy-header">
        <Link href="/" aria-label="Nadvi Publications home"><Image src="/nadvi-publications-logo-new.png" alt="Nadvi Publications - مکتبہ ندوی" width="1770" height="545" priority /></Link>
        <Link href="/">Back to website</Link>
      </header>
      <main className="privacy-page"><article>
<h1>Privacy Policy</h1>
    <p className="privacy-updated">Last updated: October 2, 2026</p>
    <p>Nadvi Publications ("we", "our", or "us") provides the Al Quran (Jamal al-Qur'an) mobile application (the "App"). This Privacy Policy explains how information may be handled when you use the App.</p>

    <h2>1. About the App</h2>
    <p>Al Quran (Jamal al-Qur'an) is a Quran reading application published by Nadvi Publications.</p>
    <p>It provides the Holy Quran with Balochi translation, a Dua section, Prayer Times, and related Islamic reading content and features.</p>
    <p>The App does not require users to create an account or sign in in order to read its content.</p>

    <h2>2. Information We Directly Collect</h2>
    <p>Nadvi Publications does not require users to provide personal information such as their name, postal address, phone number, or account credentials in order to use the Quran reading features of the App.</p>
    <p>However, the App uses third-party services, including Google AdMob / Google Mobile Ads, which may automatically collect or process certain information as described below.</p>

    <h2>3. Advertising and Google AdMob</h2>
    <p>The App uses Google AdMob / Google Mobile Ads to display advertisements.</p>
    <p>When advertisements are displayed, Google and its advertising technologies may automatically collect or process information such as:</p>
    <ul>
      <li>IP address, which may be used to estimate general location;</li>
      <li>device and advertising identifiers;</li>
      <li>app interactions, such as app launches, taps, and ad interactions;</li>
      <li>diagnostic and performance information;</li>
      <li>other information required for advertising, analytics, security, and fraud prevention.</li>
    </ul>
    <p>The precise data processed may depend on the user's device, location, privacy choices, Google settings, the version and configuration of the Google Mobile Ads SDK, and applicable law.</p>
    <p>Google processes information according to its own privacy policies and applicable terms.</p>

    <h2>4. Advertising Choices and Consent</h2>
    <p>The App uses Google's User Messaging Platform (UMP) to request, record, and manage advertising privacy and consent choices where required by applicable law or Google advertising policies.</p>
    <p>Depending on the user's region and choices, advertisements may be personalized, non-personalized, limited, or otherwise handled according to applicable privacy requirements and Google advertising settings.</p>
    <p>Users may also be able to manage advertising-related identifiers and privacy settings through their Android device or Google account settings.</p>

    <h2>5. Third-Party Services</h2>
    <p>The App may use Google services necessary for advertising and technical operation.</p>
    <p>When the user opens Prayer Times, the App sends the city and country entered by the user, the requested calendar date, and the selected calculation-method number to the AlAdhan prayer-times service over HTTPS. AlAdhan returns prayer times, timezone, calculation-method, and calendar information. The App does not request GPS, approximate or precise Android location, latitude or longitude, and it does not access location in the background. Like other internet services, AlAdhan receives the IP address and technical request information needed to answer the request.</p>
    <p>The selected city and country are stored on the device until the user changes them, clears the App's data, or uninstalls the App. Returned prayer-time information is kept in memory for the current use and is not saved by the App as a permanent timetable. Nadvi Publications does not operate a server that receives or stores Prayer Times requests. AlAdhan and Google determine their own server-side retention under their policies.</p>
    <p>Third-party services may process information according to their own privacy policies and terms.</p>
    <p>Nadvi Publications does not control the independent privacy practices of third-party service providers.</p>

    <h2>6. Children's Privacy</h2>
    <p>The App is a general-audience Quran reading application and is not specifically directed only to children.</p>
    <p>We do not knowingly ask children to provide personal information directly to Nadvi Publications through the App.</p>
    <p>Advertising and third-party services used in the App must be configured and used in accordance with applicable Google Play, Google AdMob, and legal requirements.</p>

    <h2>7. Data Security</h2>
    <p>We take reasonable measures within our control to protect the App and information handled through it.</p>
    <p>Information transmitted by third-party services is subject to the security practices of those service providers.</p>
    <p>No method of electronic transmission or storage can be guaranteed to be completely secure.</p>

    <h2>8. Data Retention and Deletion</h2>
    <p>The App does not currently provide user accounts, and Nadvi Publications does not maintain a user account database for the App.</p>
    <p>Because the App does not require users to submit account information directly to Nadvi Publications, there is normally no personal user account data held by Nadvi Publications to delete.</p>
    <p>Information processed by third-party services such as Google may be retained or deleted according to those providers' policies, user privacy settings, and applicable legal requirements.</p>
    <p>If you believe that you have provided personal information directly to Nadvi Publications and would like to ask about access, correction, or deletion, contact:</p>
    <p><a href="mailto:nadvipublications@gmail.com">nadvipublications@gmail.com</a></p>

    <h2>9. External Links</h2>
    <p>The App may contain links to external websites or services.</p>
    <p>Nadvi Publications is not responsible for the content or privacy practices of external websites or services.</p>
    <p>Users should review the privacy policies of those services when appropriate.</p>

    <h2>10. Changes to This Privacy Policy</h2>
    <p>We may update this Privacy Policy when the App, third-party services, legal requirements, or privacy practices change.</p>
    <p>Any updated version will be published on our website, and the "Last updated" date will be revised accordingly.</p>

    <h2>11. Contact Us</h2>
    <p>If you have questions or concerns about this Privacy Policy or the privacy practices of the App, please contact:</p>
    <p><strong>Nadvi Publications</strong></p>
    <p>Email:<br /><a href="mailto:nadvipublications@gmail.com">nadvipublications@gmail.com</a></p>
    <p>Website:<br /><a href="https://www.nadvipublications.online">https://www.nadvipublications.online</a></p>
    <p>Privacy Policy:<br /><a href="https://www.nadvipublications.online/privacy-policy">https://www.nadvipublications.online/privacy-policy</a></p>
      </article></main>
      <footer className="privacy-footer"><span>© 2026 Nadvi Publications. All rights reserved.</span><Link href="/privacy-policy">Privacy Policy</Link></footer>
    </div>
  );
}

