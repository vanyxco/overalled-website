import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { WashReveal } from "@/components/wash-reveal";
import { servicesFaqs } from "@/lib/faq";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const title = "Pressure Washing Services | House, Roof & Driveways";
const description =
  "House wash, roof soft-wash, vinyl siding, driveways, decks, fences, and commercial storefronts in Crosby, Huffman, Kingwood, Humble, and Lake Houston.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path: "/services",
              title,
              description,
              type: "CollectionPage",
            }),
            breadcrumbSchema(crumbs),
            faqSchema(servicesFaqs, "/services"),
            {
              "@type": "ItemList",
              name: "Exterior cleaning services",
              numberOfItems: services.length,
              itemListElement: services.map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: service.name,
                url: absoluteUrl(`/services/${service.slug}`),
              })),
            },
          ],
        }}
      />
      <PageHero
        eyebrow="Services"
        title="The right pressure. The right chemistry. Every surface."
        lede="Soft wash where high pressure would do damage. Surface cleaners where concrete needs an even finish. House, roof, vinyl, driveway, deck, fence, and commercial work across Lake Houston."
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pt-16 md:px-8 md:pt-24">
          <h2 className="display text-3xl text-navy">
            Pressure washing vs. soft washing
          </h2>
          <p className="mt-5 leading-relaxed text-mute">
            Pressure washing is for concrete: driveways, walks, lots, dumpster
            pads. Soft washing is for houses, vinyl, and roofs — chemistry at
            garden-hose pressure so paint, shingles, and siding stay intact.
            Overalled matches the method to the surface instead of putting a
            wand on everything.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {services.map((service) => (
              <li
                key={service.slug}
                className="overflow-hidden rounded-xl border border-line bg-paper"
              >
                <Link href={`/services/${service.slug}`} className="group block">
                  <WashReveal className="aspect-16/10">
                    <Image
                      src={service.hero}
                      alt={service.heroAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={cn(
                        "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]",
                        service.heroClass,
                      )}
                    />
                  </WashReveal>
                  <div className="px-6 py-8 md:px-8">
                    <p className="label text-orange">{service.method}</p>
                    <h2 className="display mt-3 text-3xl text-navy transition-colors group-hover:text-orange">
                      {service.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-mute">
                      {service.summary}
                    </p>
                    <p className="nav-link label mt-6 inline-block text-orange">
                      Learn more
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqList faqs={servicesFaqs} heading="How we choose a method" />
    </main>
  );
}
