import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { contactFaqs } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import { site } from "@/lib/site";
import { telHref } from "@/lib/utils";

const title = "Free Pressure Washing Quote | Crosby & Lake Houston";
const description = `Request a free pressure washing or soft-wash quote in Crosby, Huffman, Kingwood, Humble, and Lake Houston. Call ${site.phone} or send the form. Typical same-day reply.`;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path: "/contact",
              title,
              description,
              type: "ContactPage",
            }),
            breadcrumbSchema(crumbs),
            faqSchema(contactFaqs, "/contact"),
          ],
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Request a quote."
        lede="Address, photos if you have them, and what you want washed. The form goes to our inbox. Or skip it and call."
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4 space-y-8">
            <address className="not-italic space-y-8">
              <div>
                <p className="label text-mute">Phone</p>
                <a
                  href={telHref(site.phone)}
                  className="display mt-2 block text-3xl text-navy"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="label text-mute">Email</p>
                <a href={`mailto:${site.email}`} className="mt-2 block text-navy">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="label text-mute">Based in</p>
                <p className="mt-2 text-navy">
                  {site.locality}, {site.region} {site.postalCode}
                </p>
                <p className="mt-2 text-mute">
                  Serving Lake Houston and the communities around Crosby.
                </p>
              </div>
              <div>
                <p className="label text-mute">Facebook</p>
                <a href={site.facebook} className="mt-2 block text-navy">
                  {site.legalName}
                </a>
              </div>
            </address>
            <p className="leading-relaxed text-mute">
              Requests from this site go to {site.email}. Nothing is sold to a
              lead marketplace.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <QuoteForm />
          </div>
        </div>
      </section>
      <FaqList faqs={contactFaqs} heading="Before you write" />
    </main>
  );
}
