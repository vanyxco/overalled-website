import type { MetadataRoute } from "next";
import { defaultDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: "Overalled",
    description: defaultDescription,
    start_url: "/",
    display: "browser",
    background_color: "#061433",
    theme_color: "#061433",
    lang: "en-US",
    icons: [
      {
        src: "/brand/logo-mark.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
