import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared branded Open Graph card used by the site and individual pages. */
export function renderOg({ eyebrow, title, footer = "Digital Marketing · Website Development · Online Advertising · SEO" }: { eyebrow: string; title: string; footer?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#070B1A", color: "#fff", position: "relative" }}>
        <div style={{ position: "absolute", top: -200, right: -150, width: 640, height: 640, borderRadius: 640, background: "radial-gradient(circle, rgba(106,85,255,.55), rgba(106,85,255,0) 70%)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -260, left: -120, width: 620, height: 620, borderRadius: 620, background: "radial-gradient(circle, rgba(20,180,220,.4), rgba(20,180,220,0) 70%)", display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(135deg,#6A55FF,#14B4DC)", display: "flex" }}>
            <svg viewBox="0 0 64 64" width="72" height="72">
              <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 45 45 19M31 19h14v14" />
                <path d="M19 19l8.5 8.5M36.5 36.5 45 45" opacity=".72" />
              </g>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, display: "flex" }}>
              SHOAIB<span style={{ color: "#45DAF7" }}>X</span>
            </div>
            <div style={{ fontSize: 16, letterSpacing: 6, color: "#A9B2C7" }}>LIMITED</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div style={{ fontSize: 24, color: "#7EE6FA", textTransform: "uppercase", letterSpacing: 3, marginBottom: 18 }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 60 ? 54 : 66, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5 }}>{title}</div>
        </div>
        <div style={{ fontSize: 22, color: "#B8BFCE", display: "flex" }}>{footer}</div>
      </div>
    ),
    ogSize,
  );
}
