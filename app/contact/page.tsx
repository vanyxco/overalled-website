import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Free pressure washing quotes in the Lake Houston area. Call ${site.phone} or send the form — it goes to Rocky’s email.`,
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Tell us what the years left behind."
        lede="Address, photos if you have them, what you want washed. The form emails Rocky directly. Or skip it and call."
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4 space-y-8">
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
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-navy"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="label text-mute">Facebook</p>
              <a href={site.facebook} className="mt-2 block text-navy">
                Message the page
              </a>
            </div>
            <p className="leading-relaxed text-mute">
              Leads from this site go to {site.email}. No CRM tax. No third-party
              “lead marketplace.” Just the inbox.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
