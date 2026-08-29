import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WorkFeed } from "@/components/work-feed";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { workFaqs } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  webPageSchema,
  workCollectionSchema,
} from "@/lib/seo";
import { site, workPosts } from "@/lib/site";

const title = "Pressure Washing Jobs | Lake Houston Before & After";
const description =
  "Real house washes, driveways, roofs, and commercial jobs from the Overalled Facebook page. Crosby, Huffman, Kingwood, Humble, and Lake Houston — newest first.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
];

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/work",
  image: "/work/opengraph-image",
  imageAlt:
    "Freshly washed brick and windows on a residential home — Overalled Pressure Washing jobs in Lake Houston",
});

export default function WorkPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path: "/work",
              title,
              description,
              type: "CollectionPage",
            }),
            breadcrumbSchema(crumbs),
            workCollectionSchema(workPosts),
            faqSchema(workFaqs, "/work"),
          ],
        }}
      />
      <PageHero
        eyebrow="Work"
        title="Jobs around Lake Houston."
        lede="Newest first, with the captions from the page. Open a photo for the rest of the album, or jump to the post on Facebook."
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <WorkFeed posts={workPosts} variant="feed" />
          <a
            href={site.facebook}
            className="nav-link label mt-16 inline-block text-orange"
          >
            Facebook page
          </a>
        </div>
      </section>
      <FaqList faqs={workFaqs} heading="About this feed" />
    </main>
  );
}
