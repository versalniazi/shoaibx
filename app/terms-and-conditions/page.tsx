import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { registeredOfficeOneLine, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions on which SHOAIBX LIMITED provides website development, digital marketing, online advertising and SEO services.",
  path: "/terms-and-conditions",
});

const sections = [
  { id: "about", title: "About these terms" },
  { id: "agreement", title: "Service agreements" },
  { id: "scope", title: "Project scope" },
  { id: "payment", title: "Prices and payment" },
  { id: "timelines", title: "Delivery timelines" },
  { id: "revisions", title: "Revisions" },
  { id: "client", title: "Client responsibilities" },
  { id: "third-party", title: "Third-party costs and services" },
  { id: "results", title: "No guaranteed results" },
  { id: "ip", title: "Intellectual property" },
  { id: "cancellation", title: "Cancellations" },
  { id: "liability", title: "Limitation of liability" },
  { id: "confidentiality", title: "Confidentiality and data" },
  { id: "website-use", title: "Use of this website" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" path="/terms-and-conditions" intro="The terms on which we provide our services and you use this website." sections={sections}>
      <h2 id="about">1. About these terms</h2>
      <p>
        These terms apply to services provided by <strong>{site.legalName}</strong> (company number {site.companyNumber}, registered office {registeredOfficeOneLine}) to
        business customers, and to your use of this website. Please read them carefully. If anything in a written quote or proposal we send you conflicts with these terms, the
        quote or proposal takes priority for that project.
      </p>
      <p>
        Our services are intended for businesses. If you are a consumer, you have statutory rights (including under the Consumer Rights Act 2015 and the Consumer Contracts
        Regulations 2013) that these terms do not affect. <em>[OWNER TO CONFIRM whether services are offered to consumers and, if so, include cancellation-right wording.]</em>
      </p>

      <h2 id="agreement">2. Service agreements</h2>
      <p>
        A contract is formed when you accept our written quote, proposal or order confirmation (for example, by email) and any required initial payment is made. Enquiries,
        prices on this website and consultations are not binding offers.
      </p>

      <h2 id="scope">3. Project scope</h2>
      <p>
        Each project&apos;s deliverables are set out in the relevant package description or written quote (&quot;the Scope&quot;). Work outside the Scope — such as additional
        pages, features, revisions beyond those included, or new requirements — will be quoted separately and only carried out with your written agreement.
      </p>

      <h2 id="payment">4. Prices and payment</h2>
      <ul>
        <li>All prices are in pounds sterling (GBP). Any VAT that applies will be shown on your quote and invoice.</li>
        <li>Fixed-price packages are payable in full before work begins unless otherwise agreed in writing.</li>
        <li>For larger projects we may require a deposit (typically 50%) before work starts, with the balance due before launch or handover. The schedule will be stated in your quote.</li>
        <li>Invoices are payable within 14 days unless otherwise stated.</li>
        <li>We may pause work on overdue accounts. We reserve the right to charge statutory interest on late payments under the Late Payment of Commercial Debts (Interest) Act 1998.</li>
      </ul>
      <p><em>[OWNER TO CONFIRM deposit, payment terms and accepted payment methods.]</em></p>

      <h2 id="timelines">5. Delivery timelines</h2>
      <p>
        Turnaround times shown on our website are typical estimates in working days. Timelines begin once we have received your order confirmation, any agreed payment, and the
        content, information and access we need. We will do our best to meet agreed dates, but delays caused by late content, feedback or third parties may extend timelines.
      </p>

      <h2 id="revisions">6. Revisions</h2>
      <p>
        Each package includes the number of revision rounds stated. A revision round is a single, consolidated set of feedback on the work delivered. Additional revision rounds,
        or changes that alter the agreed Scope, may be charged separately — we will always tell you before doing chargeable work.
      </p>

      <h2 id="client">7. Client responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>provide accurate information, content, images and feedback in good time;</li>
        <li>ensure you have the rights to any materials you provide to us (text, images, logos, trademarks);</li>
        <li>provide necessary access to accounts, hosting or platforms, and keep your own passwords secure;</li>
        <li>review and approve work before it goes live;</li>
        <li>ensure your website content, products and advertising comply with applicable laws and platform policies.</li>
      </ul>

      <h2 id="third-party">8. Third-party costs and services</h2>
      <p>
        Unless specifically included in writing, our prices do not include domain registration, hosting, premium themes or plugins, software licences, third-party
        subscriptions, stock media, or advertising spend. These are paid by you, usually directly to the provider. Third-party services are governed by the provider&apos;s own
        terms, and we are not responsible for their availability, pricing changes or policy decisions (for example, advertising account suspensions).
      </p>

      <h2 id="results">9. No guaranteed results</h2>
      <p>
        We provide our services with reasonable skill and care. However, search engine rankings, advertising performance, website traffic, leads and sales depend on many
        factors outside our control. We do not guarantee any specific ranking, traffic level, number of leads, sales or return on investment.
      </p>

      <h2 id="ip">10. Intellectual property</h2>
      <ul>
        <li>Once you have paid in full, ownership of the bespoke deliverables we create specifically for you (such as custom designs and written content) transfers to you.</li>
        <li>Third-party components (such as themes, plugins, fonts, libraries and stock images) remain subject to their own licences.</li>
        <li>We retain ownership of our pre-existing tools, code libraries, templates and know-how, and grant you a non-exclusive licence to use them as part of your deliverables.</li>
        <li>Unless you ask us not to, we may reference completed work in our portfolio, without disclosing confidential information.</li>
      </ul>

      <h2 id="cancellation">11. Cancellations</h2>
      <ul>
        <li>You may cancel a project by notifying us in writing. You will pay for work completed up to the date of cancellation and any non-refundable third-party costs incurred on your behalf.</li>
        <li>If you cancel a fixed-price package before work starts, we will refund any payment made, less any third-party costs already incurred.</li>
        <li>If a project is paused by you for more than 30 days without agreement, we may treat it as cancelled and invoice for work completed.</li>
        <li>We may end a contract if you materially breach these terms and do not remedy the breach within 14 days of notice, or if payment is significantly overdue.</li>
      </ul>
      <p><em>[OWNER TO CONFIRM cancellation and refund policy.]</em></p>

      <h2 id="liability">12. Limitation of liability</h2>
      <ul>
        <li>Nothing in these terms limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot be limited by law.</li>
        <li>We are not liable for indirect or consequential loss, or for loss of profits, revenue, business, goodwill or data.</li>
        <li>Our total liability arising from any project is limited to the total fees paid by you for that project.</li>
        <li>We are not responsible for losses caused by third-party services, hosting failures, platform changes or changes made to your website by others.</li>
      </ul>

      <h2 id="confidentiality">13. Confidentiality and data</h2>
      <p>
        Each party will keep the other&apos;s confidential information confidential. Where we process personal data on your behalf, we will do so in accordance with UK data
        protection law and, where required, a written data processing agreement. Our handling of personal data is described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2 id="website-use">14. Use of this website</h2>
      <p>
        Information on this website is provided for general guidance and may change without notice. Demonstration projects shown in our portfolio are concepts, not client work.
        You may not misuse the website, attempt to gain unauthorised access, or submit unlawful or spam content through our forms.
      </p>

      <h2 id="law">15. Governing law</h2>
      <p>These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction.</p>

      <h2 id="contact">16. Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
