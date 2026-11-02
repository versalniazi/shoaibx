import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";
import { LegalPage } from "@/components/legal/LegalPage";
import { CONSENT_COOKIE, CONSENT_MAX_AGE_DAYS } from "@/lib/consent";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How SHOAIBX LIMITED uses essential, analytics and marketing cookies, and how to manage your cookie preferences.",
  path: "/cookie-policy",
});

const sections = [
  { id: "what", title: "What are cookies?" },
  { id: "essential", title: "Essential cookies" },
  { id: "analytics", title: "Analytics cookies" },
  { id: "marketing", title: "Marketing cookies" },
  { id: "third-party", title: "Third-party cookies" },
  { id: "preferences", title: "Managing your preferences" },
  { id: "changes", title: "Changes and contact" },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" path="/cookie-policy" intro="What cookies we use, why, and how you can control them." sections={sections}>
      <h2 id="what">1. What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. Similar technologies, such as local storage and tracking pixels, work in a similar way and
        are covered by this policy. Under the Privacy and Electronic Communications Regulations (PECR), we ask for your consent before using any cookies that are not strictly
        necessary.
      </p>

      <h2 id="essential">2. Essential (strictly necessary) cookies</h2>
      <p>These cookies are required for the website to work and cannot be switched off. They do not track you for analytics or advertising.</p>
      <div className="overflow-x-auto"><table>
        <thead>
          <tr><th scope="col">Name</th><th scope="col">Provider</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr>
        </thead>
        <tbody>
          <tr><td><code>{CONSENT_COOKIE}</code></td><td>{site.legalName}</td><td>Remembers your cookie choices.</td><td>{CONSENT_MAX_AGE_DAYS} days</td></tr>
          <tr><td>Security cookies (if enabled)</td><td>Cloudflare Turnstile</td><td>Protects our contact form from spam and abuse.</td><td>Session</td></tr>
        </tbody>
      </table></div>

      <h2 id="analytics">3. Analytics cookies</h2>
      <p>
        With your consent, we use Google Analytics to understand how visitors use our website — for example which pages are visited and how people arrive — so we can improve
        it. These cookies are <strong>not set until you choose to accept them</strong>.
      </p>
      <div className="overflow-x-auto"><table>
        <thead>
          <tr><th scope="col">Name</th><th scope="col">Provider</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr>
        </thead>
        <tbody>
          <tr><td><code>_ga</code></td><td>Google</td><td>Distinguishes unique visitors.</td><td>Up to 2 years</td></tr>
          <tr><td><code>_ga_*</code></td><td>Google</td><td>Maintains session state.</td><td>Up to 2 years</td></tr>
        </tbody>
      </table></div>

      <h2 id="marketing">4. Marketing cookies</h2>
      <p>
        With your consent, and only if enabled, we may use the Meta Pixel to measure the effectiveness of our advertising on Facebook and Instagram and to show relevant ads.
        These cookies are <strong>not set until you choose to accept them</strong>.
      </p>
      <div className="overflow-x-auto"><table>
        <thead>
          <tr><th scope="col">Name</th><th scope="col">Provider</th><th scope="col">Purpose</th><th scope="col">Duration</th></tr>
        </thead>
        <tbody>
          <tr><td><code>_fbp</code></td><td>Meta</td><td>Measures and improves advertising.</td><td>Up to 3 months</td></tr>
        </tbody>
      </table></div>

      <h2 id="third-party">5. Third-party cookies</h2>
      <p>
        Analytics and marketing cookies are set by third parties (Google and Meta) who process the information under their own privacy policies. You can learn more at{" "}
        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Google&apos;s cookie information</a> and{" "}
        <a href="https://www.facebook.com/privacy/policies/cookies/" target="_blank" rel="noopener noreferrer">Meta&apos;s cookie policy</a>. Links to external websites may also
        set their own cookies once you visit them.
      </p>

      <h2 id="preferences">6. Managing your preferences</h2>
      <p>
        When you first visit, our cookie banner lets you <strong>Accept All</strong>, <strong>Reject Non-Essential</strong> or <strong>Manage Preferences</strong> by category.
        You can change your mind at any time:
      </p>
      <p>
        <CookieSettingsButton className="btn btn-primary" label="Change cookie settings" />
      </p>
      <p>
        If you withdraw consent, we stop loading the relevant services and remove their cookies where we can. You can also block or delete cookies in your browser settings,
        although some parts of the website may not work as intended.
      </p>

      <h2 id="changes">7. Changes and contact</h2>
      <p>
        We will update this policy if the cookies we use change. For questions, email <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
