import { ogSize, photoOgImage } from "@/lib/og-photo";

export const alt =
  "Freshly washed brick and windows on a residential home — Overalled Pressure Washing jobs in Lake Houston";
export const size = ogSize;
export const contentType = "image/png";

export default async function WorkOgImage() {
  return photoOgImage({
    photoPath: "/work/facebook/01.jpg",
    kicker: "Overalled · Work",
    title: "Jobs as posted on Facebook",
  });
}
