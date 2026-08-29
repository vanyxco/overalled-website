import type { Metadata, Viewport } from "next";
import {
  Atkinson_Hyperlegible_Next,
  Fraunces,
  Great_Vibes,
} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";
import { defaultDescription, defaultTitle, graph } from "@/lib/seo";
import { telHref } from "@/lib/utils";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#071525",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.domain }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "home and construction",
  keywords: [
    "pressure washing Crosby TX",
    "soft wash Lake Houston",
    "house washing Kingwood",
    "roof soft wash Huffman",
    "driveway cleaning Humble",
    "commercial pressure washing Atascocita",
    "Overalled Pressure Washing",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: { icon: "/brand/logo.jpg", apple: "/brand/logo.jpg" },
  other: {
    "geo.region": "US-TX",
    "geo.placename": site.locality,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${fraunces.variable} ${atkinson.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <JsonLd data={graph([])} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <a
          href={telHref(site.phone)}
          className="label fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 bg-orange px-6 py-3.5 text-lg text-white md:hidden"
        >
          Call {site.phone}
        </a>
      </body>
    </html>
  );
}
