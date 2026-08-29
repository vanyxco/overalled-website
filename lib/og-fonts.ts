import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

const fontsDir = join(process.cwd(), "design/fonts");
const publicDir = join(process.cwd(), "public");

export async function loadOgFonts() {
  const [archivoBlack, archivoItalic, barlow, fraunces] = await Promise.all([
    readFile(join(fontsDir, "ArchivoBlack-Regular.ttf")),
    readFile(join(fontsDir, "Archivo-ExtraBoldItalic.ttf")),
    readFile(join(fontsDir, "Barlow-SemiBold.ttf")),
    readFile(join(fontsDir, "Fraunces-SemiBoldItalic.ttf")),
  ]);

  return [
    {
      name: "Archivo Black",
      data: archivoBlack,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Archivo",
      data: archivoItalic,
      weight: 800 as const,
      style: "italic" as const,
    },
    {
      name: "Barlow",
      data: barlow,
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Fraunces",
      data: fraunces,
      weight: 600 as const,
      style: "italic" as const,
    },
  ];
}

export async function publicDataUrl(path: string) {
  const relative = path.replace(/^\//, "");
  const ext = relative.split(".").pop()?.toLowerCase();
  const mime =
    ext === "png"
      ? "image/png"
      : ext === "webp"
        ? "image/webp"
        : "image/jpeg";
  const file = await readFile(join(publicDir, relative));
  return `data:${mime};base64,${file.toString("base64")}`;
}
