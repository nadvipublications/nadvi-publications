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
    <p className="privacy-updated">Last updated: October 30, 2026</p>
    <p>{"Nadvi Publications (\"we\", \"our\", or \"us\") provides the Al Quran (Jamal al-Qur'an) mobile application (the \"App\")."}</p>
    <h2>{"1. About this policy and the App"}</h2>
    <p>{"This policy covers the Al Quran (Jamal al-Qur'an) mobile application published by Nadvi Publications. It describes the current Android app prepared on October 30, 2026, including Quran and Dua reading, Arabic-script choices, Balochi translation, downloaded recitation, and offline Prayer Times. The website privacy-policy page publishes this same mobile-app policy; it is not a description of unrelated website shopping or payment services."}</p>
    <p>{"The App does not require an account or sign-in. Names, phone numbers, postal addresses and account credentials are not required to read or listen."}</p>
    <h2>{"2. Reading preferences and content stored on your device"}</h2>
    <p>{"Bookmarks, Resume Reading position, text size, colour and boldness preferences, and other reading settings are stored in app-private device storage. Arabic text and Balochi translations are bundled for offline reading. Choosing Indo-Pak or Uthmani changes the reading display; it does not send your selection or reading text to Nadvi Publications. The Arabic-script selection lasts for the current app process and starts with Indo-Pak in a new process."}</p>
    <p>{"The App does not include an advertising or analytics SDK in this current version. It does not request an advertising identifier or send reading history, bookmarks or font settings to a developer-operated server."}</p>
    <h2>{"3. Offline Prayer Times and optional approximate location"}</h2>
    <p>{"Prayer times are calculated on the device from a selected city or coordinates, timezone, calculation method and Asr setting. City and timezone information is bundled for offline use. The current Prayer Times implementation does not call AlAdhan, an IP-geolocation API or a developer-operated location server. It does not transmit the selected city or prayer coordinates off your device."}</p>
    <p>{"You can select a city manually without location permission. Only when you choose Use My Location and agree does the App request Android foreground approximate location permission for one lookup while the Prayer Times screen is visible. It does not request precise or background location permission or continuously track movement. Android's location provider may use its own services under the device provider's policies; the coordinates returned to this App are processed and stored locally for prayer calculations."}</p>
    <p>{"The selected location, timezone and prayer calculation preferences remain in app-private storage until changed or removed with the App's data. Update your city when travelling; the App does not follow your background location."}</p>
    <h2>{"4. Optional prayer notifications and alarms"}</h2>
    <p>{"Prayer reminders are off by default and are enabled by your choice. Android notification permission and, on supported versions, user-granted Alarms & reminders access allow time-sensitive prayer notifications with a short takbir sound. The App uses SCHEDULE_EXACT_ALARM rather than the automatically granted USE_EXACT_ALARM permission. It does not request full-screen-intent access or permission to bypass Do Not Disturb."}</p>
    <p>{"Reminder times are prepared and stored locally. After a device restart, app update or time/timezone change, a local receiver can re-arm a saved reminder. You may turn reminders off in the App or revoke notification/alarm access in Android settings. Phone sound, Do Not Disturb, battery restrictions and Force Stop can affect delivery."}</p>
    <h2>{"5. Audio downloads and background playback"}</h2>
    <p>{"When you choose to download recitation, the App requests the selected audio from the publisher's external GitHub Releases hosting over HTTPS, verifies its expected SHA-256 hash and stores it in app-private storage for offline playback. No prayer location coordinates, bookmarks or reading history are included in these download requests."}</p>
    <p>{"GitHub and its delivery infrastructure receive ordinary request information needed to serve a download, such as your IP address, requested file and request time, and may process or retain technical information under their privacy policies. IP addresses can be used by a provider to infer general location. This network processing is separate from the App's on-device prayer location calculation. GitHub privacy statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"}</p>
    <p>{"Playback starts through a user action. A mediaPlayback foreground service lets recitation continue while the App is in the background and provides notification controls to pause, resume or stop. The selected recitation, listening mode and playback position are retained locally for media resumption. This feature does not record the microphone."}</p>
    <h2>{"6. Google Play update checks and external links"}</h2>
    <p>{"The App contacts Google Play to check whether an update is available and may offer to open the Play Store to install it. Google Play processes the technical information needed to provide its service under Google's privacy policy: https://policies.google.com/privacy. The App does not send your prayer coordinates, reading history or bookmarks as part of its update-check request."}</p>
    <p>{"If you open an external website, store listing, email or other linked service, that service handles information under its own policy. If you contact Nadvi Publications, we receive the information you choose to send and use it to respond to your enquiry."}</p>
    <h2>{"7. Copying and sharing verses"}</h2>
    <p>{"Copy Text places the selected content on your device clipboard. Sharing a verse image uses a temporary file in the App's sharing cache and Android's sharing interface. Content is shared with the destination you choose. The App does not automatically upload a verse card to a developer server. Clipboard behaviour and the app you choose to receive a share are governed by your device and that app."}</p>
    <h2>{"8. Advertising and earlier app versions"}</h2>
    <p>{"The current version does not display advertisements, initialise Google Mobile Ads or UMP advertising consent, or request an advertising identifier."}</p>
    <p>{"Earlier versions may have used Google AdMob/UMP and online AlAdhan prayer-time requests. If you are still using such a version, those features may transmit the information described in that version's policy: advertising SDKs may process identifiers, IP address, interactions and diagnostics, while AlAdhan receives an entered city/country, calendar date, calculation method and ordinary network request information. These are not features of the current version described above. Updating the App does not itself erase data previously retained by a third-party provider."}</p>
    <h2>{"9. Retention, device backup and deletion"}</h2>
    <p>{"Local reading preferences, bookmarks, prayer settings, downloaded audio and playback state remain on the device until changed, removed through available App controls, cleared in Android App storage settings, or uninstalled. A temporary share image may remain in the App cache until that cache is cleared. Android backup/restore may retain or restore some preferences according to your device and Google backup settings; backup is distinct from a Nadvi Publications user-account database."}</p>
    <p>{"Nadvi Publications does not operate a database of App user accounts or a server collecting prayer locations or reading history. Google, GitHub and other chosen external services manage their own retention and deletion. If you voluntarily contact us, contact us again to request access, correction or deletion of information you supplied; applicable legal or record-keeping requirements may limit deletion. Email: nadvipublications@gmail.com."}</p>
    <h2>{"10. Security"}</h2>
    <p>{"Audio downloads and the linked services described above use HTTPS. App-private storage and Android sharing controls limit ordinary access to local files. We do not claim that offline content, local storage or a distributed app is impossible to inspect or that any security measure is infallible. No method of transmission or storage can be guaranteed completely secure."}</p>
    <h2>{"11. Children's privacy"}</h2>
    <p>{"The App provides general-audience religious reading and listening content. An account or personal profile is not required. We do not knowingly request personal information from children for App use. The current App has no advertisements. A parent or guardian who believes a child has voluntarily sent us personal information may contact us at nadvipublications@gmail.com."}</p>
    <h2>{"12. Changes to this policy"}</h2>
    <p>{"We may update this policy when App features, providers or privacy practices change. The updated policy will be published at the address below and its last-updated date revised. The policy text bundled with an already-installed version changes when that version is updated."}</p>
    <h2>{"13. Contact us"}</h2>
    <p>{"Nadvi Publications"}</p>
    <p>{"Email: nadvipublications@gmail.com"}</p>
    <p>{"Website: https://www.nadvipublications.online"}</p>
    <p>{"Privacy Policy: https://www.nadvipublications.online/privacy-policy"}</p>
      </article></main>
      <footer className="privacy-footer"><span>© 2026 Nadvi Publications. All rights reserved.</span><Link href="/privacy-policy">Privacy Policy</Link></footer>
    </div>
  );
}

