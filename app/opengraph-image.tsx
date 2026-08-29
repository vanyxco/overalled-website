import { ImageResponse } from "next/og";
import { loadOgFonts, ogSize, publicDataUrl } from "@/lib/og-fonts";
import { site } from "@/lib/site";

export const alt =
  "Overalled Pressure Washing — Crosby, Huffman, and Lake Houston exterior cleaning";
export const size = ogSize;
export const contentType = "image/png";

const SPLIT = 600;

export default async function OpenGraphImage() {
  const [fonts, dirty, clean, logo] = await Promise.all([
    loadOgFonts(),
    publicDataUrl("/hero/dirty.jpg"),
    publicDataUrl("/hero/clean.jpg"),
    publicDataUrl("/brand/logo-wide.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "#061433",
        }}
      >
        <img
          src={dirty}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            objectPosition: "center 70%",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: SPLIT,
            width: 1200 - SPLIT,
            height: 630,
            overflow: "hidden",
          }}
        >
          <img
            src={clean}
            alt=""
            width={1200}
            height={630}
            style={{
              objectFit: "cover",
              objectPosition: "center 70%",
              marginLeft: -SPLIT,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "52%",
            left: SPLIT - 70,
            width: 140,
            height: "36%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.08) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: SPLIT - 10,
            width: 20,
            height: 630,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(44,186,245,0.55) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            top: 44,
            left: 44,
            bottom: 44,
            width: 532,
            padding: "36px 40px",
            background: "rgba(6, 20, 51, 0.88)",
            borderRadius: 24,
            border: "1px solid rgba(16, 108, 208, 0.48)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={logo}
              alt=""
              width={196}
              height={66}
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontFamily: "Barlow",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#E07020",
              }}
            >
              Serving Texas
            </div>
            <div
              style={{
                display: "flex",
                width: 48,
                height: 1,
                marginTop: 14,
                background: "#E08A2C",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Archivo",
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: 50,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#2CBAF5",
              }}
            >
              Pressure Washing
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 10,
                fontFamily: "Archivo Black",
                fontSize: 38,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FBFAF6",
              }}
            >
              <div style={{ display: "flex" }}>that restores what</div>
              <div style={{ display: "flex" }}>
                the{" "}
                <span
                  style={{
                    fontFamily: "Fraunces",
                    fontStyle: "italic",
                    fontWeight: 600,
                    padding: "0 8px",
                  }}
                >
                  years
                </span>{" "}
                left behind.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow",
                fontSize: 20,
                fontWeight: 600,
                color: "#2CBAF5",
              }}
            >
              {site.recommend} recommend · {site.reviewCount} reviews
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 8,
                fontFamily: "Archivo Black",
                fontSize: 30,
                letterSpacing: "-0.02em",
                color: "#FBFAF6",
              }}
            >
              {site.phone}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 8,
                fontFamily: "Barlow",
                fontSize: 18,
                fontWeight: 600,
                color: "rgba(251,250,246,0.85)",
              }}
            >
              Crosby · Huffman · Kingwood · Lake Houston
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
