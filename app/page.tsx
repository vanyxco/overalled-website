import type { Metadata } from "next";
import Link from "next/link";
import { HeroWash } from "@/components/hero-wash";
import { ProofBar } from "@/components/proof-bar";
import { QuoteForm } from "@/components/quote-form";
import { WorkFeed } from "@/components/work-feed";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { areaGuides } from "@/lib/areas";
import { homeFaqs } from "@/lib/faq";
import {
  defaultDescription,
  defaultTitle,
  faqSchema,
  howToSchema,
  pageMetadata,
  webPageSchema,
} from "@/lib/seo";
import {
  featuredWork,
  processSteps,
  reviews,
  services,
  site,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path: "/",
              title: defaultTitle,
              description: defaultDescription,
              speakable: ["h1", "#hero-kicker", "#definition", "#faq"],
            }),
            faqSchema(homeFaqs, "/"),
            howToSchema(),
          ],
        }}
      />
      <HeroWash />
      <main id="main">
        <ProofBar />
        <Difference />
        <Services />
        <Work />
        <Process />
        <Area />
        <Reviews />
        <FaqList faqs={homeFaqs} />
        <QuoteBand />
      </main>
    </>
  );
}

function Difference() {
  return (
    <section id="difference" className="scroll-mt-28 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-12 md:px-8 md:py-36">
        <div className="md:col-span-5">
          <p className="label text-orange">The approach</p>
          <span className="rule mt-5" aria-hidden />
          <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
            The right method
            <br />
            for every surface.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 leading-relaxed text-mute">
          <p id="definition">
            {site.legalName} is an owner-operated soft-wash and pressure-washing
            company based in Crosby, Texas. We clean homes and businesses
            across Huffman, Kingwood, Humble, Atascocita, and the rest of the
            Lake Houston area.
          </p>
          <p>
            Lake Houston humidity paints everything green. More pressure is not
            always the answer. We match the method to the surface — soft
            chemistry on the house and roof, a surface cleaner on concrete for
            an even finish. The same process on a storefront or a parking
            approach: scheduled, thorough, and left looking maintained.
          </p>
          <p>
            That is why the Facebook page sits at {site.recommend} recommend
            across {site.reviewCount} reviews, why Crosby–Huffman voted
            Overalled a Cream of the Crop runner-up in 2026, and why the
            number keeps getting passed along.
          </p>
          <p className="border-l border-brass pl-5 font-display text-2xl text-navy">
            We treat the property like it is going on the market. Sometimes it
            is.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="label text-water">Services</p>
            <span className="rule mt-5" aria-hidden />
            <h2 className="display mt-6 max-w-xl text-4xl md:text-5xl">
              Every surface has a right way to get clean.
            </h2>
          </div>
          <Link
            href="/services"
            className="nav-link label text-orange-hot hover:text-white"
          >
            All services
          </Link>
        </div>
        <ul className="mt-16 border-t border-white/15">
          {services.map((service, index) => (
            <li key={service.slug} className="border-b border-white/15">
              <Link
                href={`/services/${service.slug}`}
                className="service-row group grid grid-cols-[auto_1fr] items-baseline gap-4 rounded-xl py-6 transition-colors hover:bg-white/5 md:grid-cols-[4.5rem_1fr_auto_auto] md:gap-6 md:px-3 md:py-7"
              >
                <span className="script text-3xl text-orange-hot">
                  0{index + 1}
                </span>
                <span>
                  <span className="display text-2xl transition-colors group-hover:text-orange-hot md:text-3xl">
                    {service.name}
                  </span>
                  <span className="mt-1 block text-white/85">
                    {service.short}
                  </span>
                </span>
                <span className="label hidden text-water md:inline">
                  {service.method}
                </span>
                <span className="label hidden text-orange-hot transition-transform duration-500 group-hover:translate-x-1 md:inline">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-28 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">Work</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 max-w-2xl text-4xl text-navy md:text-5xl">
          Recent jobs around Lake Houston.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-mute">
          Photos and captions as posted. Houses, driveways, and commercial
          work around Lake Houston.
        </p>
        <WorkFeed posts={featuredWork} variant="home" />
        <div className="mt-12 flex flex-wrap gap-8">
          <Link href="/work" className="nav-link label text-orange">
            Full feed
          </Link>
          <a href={site.facebook} className="nav-link label text-orange">
            Facebook page
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">How it works</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
          Request. Wash. Inspect.
        </h2>
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {processSteps.map((step, index) => (
            <li
              key={step.n}
              className={
                index < processSteps.length - 1
                  ? "md:border-r md:border-brass/40 md:px-10 md:first:pl-0"
                  : "md:px-10"
              }
            >
              <p className="script text-5xl text-orange">{step.n}</p>
              <h3 className="display mt-5 text-2xl text-navy">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-mute">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Area() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-32">
        <p className="label text-water">Service area</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 max-w-3xl text-4xl md:text-5xl">
          Crosby to The Woodlands. Lake Houston and the communities around it.
        </h2>
        <ul className="mt-14 flex flex-wrap gap-3">
          {areaGuides.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/service-area#${area.slug}`}
                className="btn label inline-block border border-brass/35 px-4 py-2.5 text-white/90 transition-colors hover:border-brass hover:text-white"
              >
                {area.name}, TX
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/service-area"
          className="nav-link label mt-10 inline-block text-orange-hot"
        >
          Full service area
        </Link>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">Reviews</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
          {site.recommend} recommend. {site.reviewCount} times over.
        </h2>
        <div className="mt-16 columns-1 gap-12 md:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <blockquote
              key={review.name}
              className="mb-12 break-inside-avoid border-t border-brass/50 pt-6"
            >
              <p className="leading-relaxed text-ink">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-5">
                <cite className="label not-italic text-navy">
                  {review.name}
                </cite>
                <p className="mt-1 text-mute">{review.place}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section id="quote" className="scroll-mt-28 bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-12 md:px-8 md:py-36">
        <div className="md:col-span-5">
          <p className="label text-orange">Free quote</p>
          <span className="rule mt-5" aria-hidden />
          <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
            Request a free quote.
          </h2>
          <p className="mt-6 leading-relaxed text-mute">
            Address, a few photos, and what you want washed. We typically reply
            the same day. Call {site.phone} if you need us sooner.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
