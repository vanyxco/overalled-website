import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Overalled Pressure Washing — Crosby, Huffman, and Lake Houston exterior cleaning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo.jpg"));
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#071525",
          color: "#FBFAF6",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={src}
            alt=""
            width={96}
            height={96}
            style={{ objectFit: "cover" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 42, color: "#F4A261" }}>Overalled</div>
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.08em",
                color: "#FBFAF6",
              }}
            >
              Pressure Washing LLC
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <div style={{ fontSize: 56, lineHeight: 1.15, fontWeight: 600 }}>
            Soft wash the house. Surface-clean the drive.
          </div>
          <div style={{ fontSize: 28, color: "#C4A35A" }}>
            Crosby · Huffman · Kingwood · Humble · Lake Houston
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
