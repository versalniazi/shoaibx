import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";

type Props = { title: string; description: string; href: string; icon: IconName; delay?: number };

export function ServiceCard({ title, description, href, icon, delay = 0 }: Props) {
  return (
    <article
      className="card card-hover group relative flex flex-col overflow-hidden p-7"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <div aria-hidden className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-brand-100 to-accent-300/40 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-[var(--shadow-glow)]">
        <Icon name={icon} size={24} />
      </span>
      <h3 className="relative mt-6 text-xl font-bold">{title}</h3>
      <p className="relative mt-3 flex-1 leading-relaxed text-ink-600">{description}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 after:absolute after:inset-0 after:content-['']">
        Learn more<span className="sr-only"> about {title}</span>
        <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
