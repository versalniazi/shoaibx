import type { Metadata } from "next";
import { ProjectMockup } from "@/components/illustrations/ProjectMockup";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { demoProjects } from "@/lib/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Demonstration Projects",
  description:
    "Demonstration projects showing the website, e-commerce, landing page and reporting work SHOAIBX LIMITED delivers. Concept pieces are clearly labelled.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Examples of what we <span className="gradient-text">design and build</span>
          </>
        }
        intro="The projects below are demonstration concepts created by our team to illustrate our approach and capabilities. They are not client projects, and the businesses shown are fictional."
        breadcrumbs={[{ name: "Our Work", path: "/portfolio" }]}
      >
        <ButtonLink href="/contact?service=website-development" size="lg" arrow>
          Request a Website
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="mb-12 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900" role="note">
            <Icon name="info" size={20} className="mt-0.5 shrink-0" />
            <p>
              <strong>Demonstration projects:</strong> these concepts show the type of work we deliver. Real client case studies will be added here, with each client&apos;s
              permission, as projects are completed.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {demoProjects.map((p) => (
              <article key={p.slug} id={p.slug} className="card overflow-hidden" data-reveal>
                <div className="relative">
                  <ProjectMockup project={p} />
                  <span className="absolute top-4 left-4 rounded-full bg-ink-950/85 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">Demonstration project</span>
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">
                    {p.type} · {p.sector}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Services shown">
                    {p.services.map((s) => (
                      <li key={s} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-6 text-sm font-semibold">The concept brief</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{p.brief}</p>
                  <h3 className="mt-5 text-sm font-semibold">Our approach</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    {p.approach.map((a) => (
                      <li key={a} className="flex gap-2.5">
                        <Icon name="check" size={18} strokeWidth={2.25} className="mt-0.5 shrink-0 text-brand-600" />
                        <span className="text-ink-700">{a}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-5 text-sm font-semibold">What it demonstrates</h3>
                  <p className="mt-1 text-sm text-ink-600">{p.demonstrates.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's build something real for your business" primary={{ label: "Start Your Project", href: "/contact" }} />
    </>
  );
}
