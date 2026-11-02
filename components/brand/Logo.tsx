import { useId } from "react";
import paths from "./wordmark-paths.json";

type MarkProps = { size?: number; className?: string; title?: string };

/** The SHOAIBX symbol: an "X" whose rising stroke becomes a growth arrow. */
export function LogoMark({ size = 40, className, title }: MarkProps) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6A55FF" />
          <stop offset="1" stopColor="#14B4DC" />
        </linearGradient>
        <linearGradient id={`${id}h`} x1="32" y1="0" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity=".22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}g)`} />
      <rect width="64" height="64" rx="16" fill={`url(#${id}h)`} />
      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 45 45 19M31 19h14v14" />
        <path d="M19 19l8.5 8.5M36.5 36.5 45 45" opacity=".72" />
      </g>
    </svg>
  );
}

type LogoProps = { variant?: "light" | "dark"; className?: string; showLimited?: boolean };

/**
 * Full horizontal logo. `light` is for light backgrounds, `dark` for dark ones.
 * The wordmark is outlined vector paths so it renders identically everywhere.
 */
export function Logo({ variant = "light", className, showLimited = true }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const onDark = variant === "dark";
  const xOffset = 80 + paths.mainWidth + 0.8;
  return (
    <svg
      viewBox={`0 0 ${Math.ceil(paths.width)} 64`}
      className={className}
      role="img"
      aria-label="SHOAIBX LIMITED"
    >
      <defs>
        <linearGradient id={`${id}x`} x1="0" y1="-30" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={onDark ? "#9A8CFF" : "#5A44F5"} />
          <stop offset="1" stopColor={onDark ? "#45DAF7" : "#0E9FC6"} />
        </linearGradient>
      </defs>
      <LogoMarkInner />
      <g fill={onDark ? "#FFFFFF" : "#0B1124"} transform="translate(80 37)">
        {paths.main.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g fill={`url(#${id}x)`} transform={`translate(${xOffset.toFixed(2)} 37)`}>
        {paths.x.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {showLimited && (
        <g fill={onDark ? "#A9B2C7" : "#5B6478"} transform="translate(81 55.5)">
          {paths.limited.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      )}
    </svg>
  );
}

function LogoMarkInner() {
  const id = useId().replace(/:/g, "");
  return (
    <g>
      <defs>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6A55FF" />
          <stop offset="1" stopColor="#14B4DC" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}g)`} />
      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 45 45 19M31 19h14v14" />
        <path d="M19 19l8.5 8.5M36.5 36.5 45 45" opacity=".72" />
      </g>
    </g>
  );
}
