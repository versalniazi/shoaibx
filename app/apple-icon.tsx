import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "linear-gradient(135deg,#6A55FF,#14B4DC)" }}>
        <svg viewBox="0 0 64 64" width="180" height="180">
          <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 45 45 19M31 19h14v14" />
            <path d="M19 19l8.5 8.5M36.5 36.5 45 45" opacity=".72" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
