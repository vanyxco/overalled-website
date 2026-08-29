import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Terms of Use | Overalled Pressure Washing";
const description = `Submitting the quote form on ${site.domain.replace("https://", "")} requests an estimate from ${site.legalName}. It is not a contract. Final pricing depends on the property.`;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms", path: "/terms" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({ path: "/terms", title, description }),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms"
        lede="Quotes are estimates until we see the property. Weather and access can move a day."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute md:px-8">
        <h2 className="display text-2xl text-navy">Quotes</h2>
        <p className="mt-4">
          Submitting the form requests a quote from {site.legalName}. It is not
          a contract. Final pricing depends on square footage, soil load, and
          access.
        </p>
        <h2 className="display mt-10 text-2xl text-navy">The work</h2>
        <p className="mt-4">
          Soft-washing and pressure washing carry ordinary risks of water work.
          We match methods to surfaces to keep those risks low. Weather and
          locked gates can move a scheduled day; we will say so.
        </p>
        <p className="mt-8">
          Site content © {new Date().getFullYear()} {site.legalName}.
        </p>
      </article>
    </main>
  );
}
