import { ogSize, renderOg } from "@/lib/og/render";

export const alt = "SHOAIBX LIMITED — Digital Solutions That Move Your Business Forward";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ eyebrow: "UK Digital Marketing & Technology", title: "Digital Solutions That Move Your Business Forward." });
}
