import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/data/content";

// See node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.md
// This file is picked up automatically — no wiring needed in layout.tsx.
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // A small pre-cropped copy (see public/images/profile-photo-og.jpg) — the
  // source photo is a 4032px phone shot, and embedding that at build time
  // for a 630px-tall image would be pure waste.
  const photo = await readFile(
    join(process.cwd(), "public/images/profile-photo-og.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0a0a0b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <img
            src={photoSrc}
            width={200}
            height={200}
            style={{
              borderRadius: 28,
              objectFit: "cover",
              border: "2px solid #1f1f23",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 30,
                color: "#5eead4",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              {profile.location}
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 600,
                color: "#ededee",
                lineHeight: 1.1,
              }}
            >
              {profile.name}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 36,
            color: "#8a8a92",
            lineHeight: 1.35,
            maxWidth: 980,
          }}
        >
          {profile.title}
        </div>
      </div>
    ),
    { ...size },
  );
}
