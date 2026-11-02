import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { buildMetadata } from "@/lib/seo";
import { registeredOfficeOneLine, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact SHOAIBX LIMITED about website design, digital marketing, online advertising or SEO. Send an enquiry, email or call for a free, no-obligation quote.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review your enquiry", text: "We read every enquiry personally and may ask a few follow-up questions." },
  { title: "Free consultation", text: "We arrange a short call or video meeting to understand your goals." },
  { title: "Clear proposal", text: "You receive a written recommendation with scope, timeline and price." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s talk about <span className="gradient-text">your goals</span>
          </>
        }
        intro="Tell us about your business and what you would like to achieve. We will respond with honest advice and a clear, no-obligation quote."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <Suspense fallback={<div className="card h-[900px] animate-pulse bg-ink-50" aria-hidden="true" />}>
              <ContactForm />
            </Suspense>
          </div>

          <aside className="space-y-6">
            <div className="card p-7">
              <h2 className="text-xl font-bold">Contact details</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="mail" size={22} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-ink-500">Email</span>
                      <span className="block font-semibold break-all text-ink-900 group-hover:text-brand-700">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref} className="group flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name="phone" size={22} />
                    </span>
                    <span>
                      <span className="block text-sm text-ink-500">Telephone</span>
                      <span className="block font-semibold text-ink-900 group-hover:text-brand-700">{site.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card p-7">
              <h2 className="text-xl font-bold">What happens next?</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-ink-600">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-[var(--radius-card)] bg-ink-50 p-7 text-sm text-ink-600">
              <h2 className="font-display text-base font-bold text-ink-900">Company details</h2>
              <p className="mt-2">
                {site.legalName} · Company number {site.companyNumber}
                <br />
                Registered office: {registeredOfficeOneLine}
              </p>
              <p className="mt-2 text-xs text-ink-500">Our registered office is not open to visitors. Please contact us by email or telephone.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
