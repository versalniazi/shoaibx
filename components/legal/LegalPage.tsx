import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

type Props = { title: string; intro: string; path: string; sections: { id: string; title: string }[]; children: ReactNode };

export function LegalPage({ title, intro, path, sections, children }: Props) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} breadcrumbs={[{ name: title, path }]} />
      <div className="container-site grid max-w-6xl gap-12 py-14 lg:grid-cols-[1fr_260px] lg:py-20">
        <div className="min-w-0">
          <div className="mb-10 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900" role="note">
            <Icon name="info" size={20} className="mt-0.5 shrink-0" />
            <p>
              <strong>Draft for review.</strong> This document is a professionally structured draft. It must be reviewed against {site.legalName}&apos;s actual business
              practices — and ideally by a qualified legal adviser — before it is relied upon. Last updated: {site.legalLastUpdated}.
            </p>
          </div>
          <div className="prose-site">{children}</div>
        </div>
        <aside className="hidden lg:block">
          <nav aria-label="Contents" className="sticky top-28">
            <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase">Contents</p>
            <ol className="mt-4 space-y-2 border-l border-ink-100 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-ink-600 hover:border-brand-500 hover:text-brand-700">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>
    </>
  );
}
