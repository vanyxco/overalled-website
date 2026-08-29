import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Privacy Policy | Overalled Pressure Washing";
const description = `How ${site.legalName} uses quote-form information. We email what you submit to ${site.email}. We do not sell it.`;
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy", path: "/privacy" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({ path: "/privacy", title, description }),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lede="We collect what you type into the quote form so we can price the job."
        crumbs={crumbs}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute md:px-8">
        <h2 className="display text-2xl text-navy">What we collect</h2>
        <p className="mt-4">
          {site.legalName} collects your name, phone, email, property address,
          city, and the services you request, plus any notes you type. That
          information is emailed to {site.email} so we can quote and schedule
          the wash.
        </p>
        <h2 className="display mt-10 text-2xl text-navy">What we do not do</h2>
        <p className="mt-4">
          We do not sell that information. We do not run advertising pixels on
          this site. If that changes, this page will say so.
        </p>
        <h2 className="display mt-10 text-2xl text-navy">Questions</h2>
        <p className="mt-4">
          {site.email} or {site.phone}.
        </p>
      </article>
    </main>
  );
}
