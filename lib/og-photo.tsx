import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

export async function photoOgImage({
  photoPath,
  kicker,
  title,
}: {
  photoPath: string;
  kicker: string;
  title: string;
}) {
  const file = await readFile(
    join(process.cwd(), "public", photoPath.replace(/^\//, "")),
  );
  const src = `data:image/jpeg;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "#061433",
          fontFamily: "Arial Black, Impact, Helvetica, sans-serif",
        }}
      >
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            padding: 56,
            background:
              "linear-gradient(to top, #061433 0%, rgba(6,20,51,0.55) 42%, rgba(6,20,51,0.2) 100%)",
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.14em",
              color: "#E07020",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: 52,
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#FBFAF6",
              marginTop: 12,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 24, color: "#E08A2C", marginTop: 18 }}>
            Crosby · Huffman · Kingwood · Humble · Lake Houston
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
