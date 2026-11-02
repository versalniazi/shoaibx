import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "light" | "outline-light";

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", size = "md", arrow, className = "", children, ...rest }: Props) {
  return (
    <Link {...rest} className={`btn btn-${variant} ${size === "lg" ? "btn-lg" : ""} group ${className}`}>
      {children}
      {arrow && <Icon name="arrowRight" size={18} className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
