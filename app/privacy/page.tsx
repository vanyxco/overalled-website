import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        lede="We collect what you type into the quote form so Rocky can price the job."
      />
      <article className="mx-auto max-w-3xl px-5 py-16 leading-relaxed text-mute md:px-8">
        <p>
          {site.legalName} collects your name, phone, email, property address,
          and the services you request. That information is emailed to{" "}
          {site.email} and is not sold. We do not run ads pixels on this site
          yet. If that changes, this page will say so.
        </p>
        <p className="mt-4">
          Questions: {site.email} or {site.phone}.
        </p>
      </article>
    </main>
  );
}
