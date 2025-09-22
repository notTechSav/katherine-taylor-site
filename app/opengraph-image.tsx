/* Dynamic OG card (1200x630) using next/og */
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const title = "The Katherine Taylor Experience";
  const subtitle =
    "For over a decade, discipline became intuition — mastery delivered with discretion.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg,#111111,#2c2c2c)",
          color: "#f9f9f9",
          padding: "64px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 24,
            padding: 56,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 2, opacity: 0.7 }}>
            KATHERINE TAYLOR
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: -0.5,
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                maxWidth: 900,
                opacity: 0.85,
              }}
            >
              {subtitle}
            </div>
          </div>
          <div style={{ opacity: 0.55, fontSize: 22 }}>
            katherinetaylorescort.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

