import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#a1a1aa",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: 20,
              color: "#71717a",
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <span>Next.js</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>React</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>TypeScript</span>
            <span style={{ color: "#3f3f46" }}>|</span>
            <span>Node.js</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: 18,
            color: "#52525b",
          }}
        >
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
