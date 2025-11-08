import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(
    (<div style={{
      display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",
      fontSize:56,fontWeight:700
    }}>Axis Media — Websites • SEO • Ads</div>), { ...size }
  );
}
