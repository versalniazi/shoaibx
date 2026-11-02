import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTASection({
  title = "Ready to Grow Your Business Online?",
  text = "Tell us about your goals and we will recommend a clear, realistic plan — with transparent pricing and no obligation.",
  primary = { label: "Start Your Project", href: "/contact" },
  secondary = { label: "View Pricing", href: "/pricing" },
}: Props) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-site">
        <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 text-center sm:px-12 sm:py-20" data-reveal>
          <div aria-hidden className="bg-grid-dark absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div aria-hidden className="absolute -top-24 left-1/4 -z-10 size-80 rounded-full bg-brand-600/40 blur-3xl" />
          <div aria-hidden className="absolute right-1/4 -bottom-24 -z-10 size-80 rounded-full bg-accent-500/30 blur-3xl" />
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-300">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={primary.href} variant="light" size="lg" arrow>
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="outline-light" size="lg">
              {secondary.label}
            </ButtonLink>
          </div>
          <p className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-ink-300 sm:flex-row sm:gap-6">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="mail" size={16} /> {site.email}
            </a>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
              <Icon name="phone" size={16} /> {site.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
