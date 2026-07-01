import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Maroš Jančo — Senior AI Engineer";

// Static OG image generated at build (spec §7.3). System font for offline-safe
// builds; layout/colour match the site. Content is centred (not left-aligned)
// so it survives LinkedIn's centre-cropped square preview, which otherwise
// slices off a left-aligned title.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#fafaf7",
          color: "#1a1a1a",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Maroš Jančo
        </div>
        <div style={{ marginTop: 16, fontSize: 40, color: "#6b6b6b" }}>
          Senior AI Engineer
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "#1f3a68",
          }}
        >
          marosjanco.com
        </div>
      </div>
    ),
    size,
  );
}
