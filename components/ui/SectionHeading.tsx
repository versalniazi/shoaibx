import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "center", as: Tag = "h2", className = "" }: Props) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`} data-reveal>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">{title}</Tag>
      {intro && <p className="mt-4 text-lg leading-relaxed text-ink-500 on-dark:text-ink-300">{intro}</p>}
    </div>
  );
}
