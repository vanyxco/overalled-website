import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { areaGuides } from "@/lib/areas";
import { areaFaqs } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { services, site } from "@/lib/site";

const title = "Pressure Washing Near Crosby, Kingwood & Humble";
const description = `${site.legalName} serves Crosby, Huffman, Lake Houston, Kingwood, Humble, Atascocita, Porter, New Caney, Dayton, Mont Belvieu, The Woodlands, and northeast Houston. Soft wash and pressure washing.`;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service area", path: "/service-area" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({ path: "/service-area", title, description }),
            breadcrumbSchema(crumbs),
            faqSchema(areaFaqs, "/service-area"),
          ],
        }}
      />
      <PageHero
        eyebrow="Service area"
        title="Lake Houston and the towns around it."
        lede={`${site.legalName} is based in Crosby. We run west to The Woodlands, east to Dayton and Mont Belvieu, north through Porter and New Caney, and through Kingwood, Humble, and Atascocita. If the drive from Crosby is reasonable, send the address.`}
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          {areaGuides.map((area) => (
            <article
              key={area.slug}
              id={area.slug}
              className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0"
            >
              <h2 className="display text-3xl text-navy">{area.name}, Texas</h2>
              <p className="mt-4 leading-relaxed text-mute">{area.blurb}</p>
              <p className="mt-4">
                <Link href="/contact" className="nav-link label text-orange">
                  Quote a job in {area.name}
                </Link>
              </p>
            </article>
          ))}
          <div className="border-t border-line pt-12">
            <h2 className="display text-3xl text-navy">What we wash here</h2>
            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="nav-link text-navy"
                  >
                    {service.name}
                  </Link>
                  <span className="text-mute"> — {service.short}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FaqList faqs={areaFaqs} heading="Service area questions" />
    </main>
  );
}
