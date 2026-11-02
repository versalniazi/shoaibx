import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
};

/** Standard hero for internal pages. Always renders the page's single <h1>. */
export function PageHero({ eyebrow, title, intro, breadcrumbs, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-brand-300/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-accent-300/25 blur-3xl" />
      <div className="container-site relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <div className={`mt-8 grid items-center gap-10 ${aside ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            <h1 className="text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.5rem]">{title}</h1>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">{intro}</p>}
            {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
          </div>
          {aside && <div className="hidden lg:block">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
