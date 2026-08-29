import type { Metadata } from "next";
import type { Faq, Service, WorkPost } from "@/lib/site";
import { processSteps, reviews, services, site, areas } from "@/lib/site";

const businessId = `${site.domain}/#business`;
const websiteId = `${site.domain}/#website`;
const logoUrl = `${site.domain}/brand/logo-mark.png`;

export const defaultTitle =
  "Overalled Pressure Washing | Crosby, Huffman & Lake Houston";

export const defaultDescription =
  "Owner-operated soft washing and pressure washing in Crosby, Huffman, Kingwood, Humble, and Lake Houston. 100% recommend across 37 reviews. Free same-day quotes.";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return site.domain;
  return `${site.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  robots,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  robots?: Metadata["robots"];
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : `${site.domain}/opengraph-image`;
  const ogAlt = imageAlt ?? title;

  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: { "en-US": url },
      types: { "text/plain": "/llms.txt" },
    },
    robots,
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export type Crumb = { name: string; path: string };

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function faqAnchor(question: string) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function faqSchema(faqs: Faq[], path = "/") {
  const page = absoluteUrl(path);
  return {
    "@type": "FAQPage",
    "@id": `${page}#faq`,
    url: `${page}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      "@id": `${page}#${faqAnchor(faq.question)}`,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageSchema({
  path,
  title,
  description,
  type = "WebPage",
  speakable,
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
  speakable?: string[];
}) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": websiteId },
    about: { "@id": businessId },
    mainEntity: { "@id": businessId },
    inLanguage: "en-US",
    dateModified: "2026-08-29",
    ...(speakable
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakable,
          },
        }
      : {}),
  };
}

function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    name: "Exterior cleaning services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: service.method,
        description: service.summary,
        url: absoluteUrl(`/services/${service.slug}`),
        areaServed: areaServedList(),
        provider: { "@id": businessId },
      },
    })),
  };
}

function areaServedList() {
  return areas.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: {
      "@type": "State",
      name: "Texas",
    },
  }));
}

function reviewSchema() {
  return reviews.map((review) => ({
    "@type": "Review",
    itemReviewed: { "@id": businessId },
    author: { "@type": "Person", name: review.name },
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
  }));
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    alternateName: "Overalled",
    legalName: site.legalName,
    url: site.domain,
    telephone: site.phoneE164,
    email: site.email,
    image: [
      logoUrl,
      absoluteUrl("/work/facebook/01.jpg"),
      absoluteUrl("/about/crew.jpg"),
      absoluteUrl(site.ownerPhoto),
    ],
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      caption: site.legalName,
    },
    description: site.bio,
    disambiguatingDescription:
      "Owner-operated pressure washing and soft washing in Crosby, Texas and the Lake Houston area. Not Overall Pressure Washing in San Antonio.",
    foundingDate: site.formed,
    foundingLocation: {
      "@type": "City",
      name: site.locality,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    slogan: site.tagline,
    award: site.award,
    knowsLanguage: "en",
    currenciesAccepted: "USD",
    knowsAbout: [
      "Pressure washing",
      "Soft washing",
      "House washing",
      "Roof cleaning",
      "Driveway cleaning",
      "Vinyl siding cleaning",
      "Commercial pressure washing",
      "Fleet washing",
      "Equipment washing",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areaServedList(),
    sameAs: [site.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      email: site.email,
      contactType: "customer service",
      areaServed: "US-TX",
      availableLanguage: "English",
    },
    employee: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Owner",
      image: `${site.domain}${site.ownerPhoto}`,
      worksFor: { "@id": businessId },
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Request a free quote",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/contact"),
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: site.reviewCount,
      ratingCount: site.reviewCount,
    },
    review: reviewSchema(),
    hasOfferCatalog: offerCatalog(),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.domain,
    name: site.name,
    description: defaultDescription,
    inLanguage: "en-US",
    publisher: { "@id": businessId },
  };
}

export function howToSchema() {
  return {
    "@type": "HowTo",
    name: "How to get a pressure washing quote from Overalled",
    description:
      "Request a free quote, we wash on the scheduled day, you inspect the result.",
    url: absoluteUrl("/#how-it-works"),
    step: processSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.text,
      ...(index === 0 ? { url: absoluteUrl("/contact") } : {}),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.name,
    serviceType: service.method,
    description: service.body,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.hero),
    provider: { "@id": businessId },
    areaServed: areaServedList(),
    brand: { "@id": businessId },
    termsOfService: absoluteUrl("/terms"),
  };
}

function monthToIso(label: string): string {
  const [month, year] = label.split(" ");
  const months: Record<string, string> = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };
  const mm = month ? months[month] : undefined;
  return mm && year ? `${year}-${mm}-01` : `${site.formed}-01-01`;
}

export function workCollectionSchema(posts: WorkPost[]) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl("/work")}#collection`,
    name: "Pressure washing jobs from the Overalled Facebook page",
    url: absoluteUrl("/work"),
    about: { "@id": businessId },
    hasPart: posts.map((post) => ({
      "@type": "SocialMediaPosting",
      url: post.href,
      headline: post.caption.slice(0, 110),
      articleBody: post.caption,
      datePublished: monthToIso(post.dateLabel),
      author: { "@id": businessId },
      image: post.photos.map((photo) => absoluteUrl(photo.src)),
    })),
  };
}

export function graph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema(), websiteSchema(), ...nodes],
  };
}
