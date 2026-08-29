import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { aboutFaqs } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { site } from "@/lib/site";

const title = "About Overalled | Owner-Operated in Crosby, TX";
const description = `${site.legalName} is Rocky’s owner-operated exterior cleaning company in Crosby, serving Huffman, Kingwood, Humble, and Lake Houston. ${site.recommend} recommend across ${site.reviewCount} reviews.`;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path: "/about",
              title,
              description,
              type: "AboutPage",
            }),
            breadcrumbSchema(crumbs),
            faqSchema(aboutFaqs, "/about"),
          ],
        }}
      />
      <PageHero
        eyebrow="About"
        title="Owner-operated exterior cleaning for Lake Houston."
        lede="A Texas LLC serving homes and businesses from Crosby to The Woodlands. Soft wash where the surface needs it. Pressure and a surface cleaner where concrete needs an even finish."
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <figure className="md:col-span-5">
            <div className="relative">
              <Image
                src={site.ownerPhoto}
                alt={`${site.owner}, owner of ${site.legalName}, in overalls with a pressure washer wand`}
                width={1024}
                height={1536}
                sizes="(min-width: 768px) 42vw, 100vw"
                className="relative z-10 h-auto w-full bg-transparent"
                priority
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-[14%] bottom-[3%] left-[14%] z-0 h-12 rounded-full bg-navy/25 blur-2xl"
              />
            </div>
            <figcaption className="mt-6">
              <p className="font-display text-2xl text-navy">{site.owner}</p>
              <p className="mt-1 text-mute">Owner, {site.name}</p>
            </figcaption>
          </figure>
          <div className="md:col-span-6 md:col-start-7 space-y-6 leading-relaxed text-mute">
            <p>
              {site.legalName} is a Texas LLC formed in {site.formed}, based in
              Crosby. We serve Huffman, Lake Houston, Kingwood, Humble,
              Atascocita, Porter, New Caney, Dayton, Mont Belvieu, The Woodlands,
              and northeast Houston. The name is Overalled — with the -ed. We are
              not Overall Pressure Washing in San Antonio. {site.owner} is the
              one on the wand — that is why so many reviews use his first name.
            </p>
            <p>
              {site.bio} Quotes are priced from photos and the address. The
              person who quotes the job is the person who washes it.
            </p>
            <p>
              In 2026 the Crosby–Huffman community voted Overalled a Cream of
              the Crop runner-up for Best Power Washing Company. The Facebook
              page sits at {site.recommend} recommend across {site.reviewCount}{" "}
              reviews, with {site.followers} following the work.
            </p>
            <p className="border-l border-brass pl-5 font-display text-2xl text-navy">
              Listing-day washes, storefronts before open, and regular
              residential maintenance. We schedule around the property.
            </p>
            <p>
              See{" "}
              <Link href="/work" className="nav-link text-navy">
                recent jobs
              </Link>
              , read the{" "}
              <Link href="/services" className="nav-link text-navy">
                methods
              </Link>
              , or{" "}
              <Link href="/contact" className="nav-link text-navy">
                request a quote
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <FaqList faqs={aboutFaqs} heading="About the company" />
    </main>
  );
}
