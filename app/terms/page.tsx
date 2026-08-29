import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title="Terms"
        lede="Quotes are estimates until we see the property. Weather and access can move a day."
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute md:px-8">
        <p>
          Submitting the form requests a quote from {site.legalName}. It is not
          a contract. Final pricing depends on square footage, soil load, and
          access. Soft-washing and pressure washing carry ordinary risks of
          water work; we match methods to surfaces to keep those risks low.
        </p>
        <p className="mt-4">
          Site content © {new Date().getFullYear()} {site.legalName}.
        </p>
      </article>
    </main>
  );
}
