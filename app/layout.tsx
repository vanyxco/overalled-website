import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible_Next,
  Fraunces,
  Great_Vibes,
} from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | Lake Houston Exterior Cleaning`,
    template: `%s | ${site.name}`,
  },
  description:
    "Residential and commercial pressure washing and soft washing across Crosby, Huffman, Kingwood, Humble, Atascocita, and Lake Houston. 100% recommend. Rocky shows up overalled.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: site.domain,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/brand/logo.jpg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  telephone: site.phone,
  email: site.email,
  url: site.domain,
  image: `${site.domain}/brand/logo.jpg`,
  areaServed: "Crosby, Huffman, Kingwood, Humble, Atascocita, Lake Houston, TX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Crosby",
    addressRegion: "TX",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(site.reviewCount),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${atkinson.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
          className="label fixed right-4 bottom-4 z-50 bg-orange px-6 py-3.5 text-lg text-white md:hidden"
        >
          Call {site.phone}
        </a>
      </body>
    </html>
  );
}
