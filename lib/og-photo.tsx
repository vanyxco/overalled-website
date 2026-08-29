import { ImageResponse } from "next/og";
import { loadOgFonts, ogSize, publicDataUrl } from "@/lib/og-fonts";
import { site } from "@/lib/site";

export { ogSize };

export async function photoOgImage({
  photoPath,
  kicker,
  title,
}: {
  photoPath: string;
  kicker: string;
  title: string;
}) {
  const [fonts, photo, logo] = await Promise.all([
    loadOgFonts(),
    publicDataUrl(photoPath),
    publicDataUrl("/brand/logo-mark.png"),
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
          src={photo}
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
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: 48,
            background:
              "linear-gradient(to top, rgba(6,20,51,0.94) 0%, rgba(6,20,51,0.42) 46%, rgba(6,20,51,0.12) 100%)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt=""
              width={72}
              height={72}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 980,
              padding: "28px 32px",
              background: "rgba(6, 20, 51, 0.82)",
              borderRadius: 24,
              border: "1px solid rgba(16, 108, 208, 0.45)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Barlow",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#E07020",
              }}
            >
              {kicker}
            </div>
            <div
              style={{
                display: "flex",
                width: 48,
                height: 1,
                marginTop: 12,
                background: "#E08A2C",
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontFamily: "Archivo Black",
                fontSize: 52,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#FBFAF6",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                fontFamily: "Barlow",
                fontSize: 22,
                fontWeight: 600,
                color: "rgba(251,250,246,0.85)",
              }}
            >
              {site.phone} · Crosby · Huffman · Kingwood · Lake Houston
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
