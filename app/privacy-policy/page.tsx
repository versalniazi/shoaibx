import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { registeredOfficeOneLine, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SHOAIBX LIMITED collects, uses, stores and protects personal information, including contact form enquiries, and your rights under UK data protection law.",
  path: "/privacy-policy",
});

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "contact-form", title: "Contact form enquiries" },
  { id: "how-we-use", title: "How we use your information" },
  { id: "lawful-basis", title: "Lawful bases for processing" },
  { id: "third-parties", title: "Third-party services" },
  { id: "international", title: "International transfers" },
  { id: "retention", title: "Data retention" },
  { id: "security", title: "Security" },
  { id: "your-rights", title: "Your rights" },
  { id: "cookies", title: "Cookies" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" intro="How we collect, use and protect your personal information." sections={sections}>
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        This website is operated by <strong>{site.legalName}</strong>, a {site.companyType.toLowerCase()} registered in {site.registeredIn} under company number{" "}
        {site.companyNumber}, with its registered office at {registeredOfficeOneLine} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
      </p>
      <p>
        For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, we are the data controller of personal information
        collected through this website. You can contact us about privacy matters at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <em>[OWNER TO CONFIRM: ICO registration status and number, if applicable. Most organisations that process personal data must pay a data protection fee to the
        Information Commissioner&apos;s Office unless exempt.]</em>
      </p>

      <h2 id="information-we-collect">2. Information we collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li><strong>Information you give us</strong> — for example your name, business name, email address, phone number, website address, the service you are interested in, your approximate budget and the details of your project when you complete our enquiry form, email or call us.</li>
        <li><strong>Client information</strong> — if you become a client, information needed to deliver our services, such as account access details you choose to share, invoicing information and correspondence.</li>
        <li><strong>Technical information</strong> — our hosting provider automatically processes information such as IP addresses, browser type and pages requested in server logs to deliver and secure the website.</li>
        <li><strong>Analytics information</strong> — only if you consent to analytics cookies, information about how you use the website (see our <Link href="/cookie-policy">Cookie Policy</Link>).</li>
      </ul>
      <p>We do not knowingly collect special category data, and we ask that you do not include sensitive personal information in enquiries.</p>

      <h2 id="contact-form">3. Contact form enquiries</h2>
      <p>
        When you submit our enquiry form, the information you provide is sent securely to our business email inbox via a transactional email service so that we can respond to
        you. We do not store enquiries in a website database. Before sending, you are asked to confirm you have read this policy.
      </p>
      <p>
        To protect the form from spam and abuse, we use measures such as a hidden &quot;honeypot&quot; field, submission timing checks and temporary rate limiting based on
        your IP address. <em>[If enabled: we also use Cloudflare Turnstile, a security check that may process technical information about your browser.]</em>
      </p>

      <h2 id="how-we-use">4. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide quotes or proposals.</li>
        <li>To deliver services you have ordered and manage our relationship with you.</li>
        <li>To send invoices, collect payments and keep financial records.</li>
        <li>To maintain the security and performance of our website.</li>
        <li>With your consent, to understand how our website is used and to measure advertising.</li>
        <li>To comply with legal and regulatory obligations.</li>
      </ul>
      <p>We do not sell your personal information. We will only send you marketing emails if you have agreed to receive them or where otherwise permitted by law, and you can opt out at any time.</p>

      <h2 id="lawful-basis">5. Lawful bases for processing</h2>
      <ul>
        <li><strong>Steps prior to a contract / contract</strong> — responding to enquiries about our services and delivering services you order.</li>
        <li><strong>Legitimate interests</strong> — running and securing our business and website, and handling general correspondence, where these interests are not overridden by your rights.</li>
        <li><strong>Consent</strong> — analytics and marketing cookies, and any optional marketing communications. You can withdraw consent at any time.</li>
        <li><strong>Legal obligation</strong> — keeping accounting and tax records.</li>
      </ul>

      <h2 id="third-parties">6. Third-party services</h2>
      <p>We use carefully selected service providers (data processors) who process personal information on our behalf, under contract, only as needed to provide their services. These may include:</p>
      <ul>
        <li><strong>Website hosting</strong> — <em>[e.g. Vercel Inc. — OWNER TO CONFIRM]</em></li>
        <li><strong>Transactional email delivery</strong> for contact form messages — <em>[e.g. Resend or your SMTP provider — OWNER TO CONFIRM]</em></li>
        <li><strong>Email hosting</strong> — Google (Gmail), for our business inbox.</li>
        <li><strong>Analytics</strong> — Google Analytics, only with your consent.</li>
        <li><strong>Advertising measurement</strong> — Meta Pixel, only with your consent and only if enabled.</li>
        <li><strong>Spam protection</strong> — Cloudflare Turnstile, only if enabled.</li>
      </ul>
      <p>We may also share information with professional advisers (such as accountants or lawyers) or where required by law.</p>

      <h2 id="international">7. International transfers</h2>
      <p>
        Some of our service providers may process data outside the United Kingdom, including in the United States. Where this happens, we rely on appropriate safeguards
        recognised under UK data protection law, such as adequacy regulations (including the UK–US data bridge for certified organisations) or the International Data Transfer
        Agreement / Addendum to standard contractual clauses.
      </p>

      <h2 id="retention">8. Data retention</h2>
      <ul>
        <li><strong>Enquiries that do not lead to work</strong> — kept for up to 24 months, then deleted.</li>
        <li><strong>Client records and correspondence</strong> — kept for the duration of our relationship and up to 6 years afterwards, in line with UK limitation periods.</li>
        <li><strong>Accounting records</strong> — kept for at least 6 years as required by UK law.</li>
        <li><strong>Analytics data</strong> — retained according to the settings in our analytics account (we aim for no more than 14 months).</li>
      </ul>
      <p><em>[OWNER TO CONFIRM retention periods reflect actual practice.]</em></p>

      <h2 id="security">9. Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect personal information, including encrypted (HTTPS) connections, access controls and reputable
        service providers. No method of transmission over the internet is completely secure, but we work to protect your information.
      </p>

      <h2 id="your-rights">10. Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>access the personal information we hold about you;</li>
        <li>ask us to correct inaccurate or incomplete information;</li>
        <li>ask us to delete your information in certain circumstances;</li>
        <li>ask us to restrict or object to certain processing;</li>
        <li>request a copy of your information in a portable format, where applicable;</li>
        <li>withdraw consent at any time, where we rely on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within one month. If you are unhappy with how we have handled
        your information, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or on 0303 123 1113. We would appreciate the chance to resolve your concern first.
      </p>

      <h2 id="cookies">11. Cookies</h2>
      <p>
        We use strictly necessary cookies and, only with your consent, analytics and marketing cookies. See our <Link href="/cookie-policy">Cookie Policy</Link> for full details
        and how to change your preferences.
      </p>

      <h2 id="changes">12. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be published on this page with the date it was last updated.</p>

      <h2 id="contact">13. Contact us</h2>
      <p>
        {site.legalName}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Telephone: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        <br />
        Registered office: {registeredOfficeOneLine}
      </p>
    </LegalPage>
  );
}
