import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { BackLink, PageHero } from "@/components/page-hero";
import { WashReveal } from "@/components/wash-reveal";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: `/services/${service.slug}/opengraph-image`,
    imageAlt: `${service.heroAlt}. ${service.name} by Overalled Pressure Washing in Crosby and Lake Houston.`,
    keywords: [
      `${service.name} Crosby TX`,
      `${service.name} Lake Houston`,
      `${service.name} Kingwood`,
      `${service.name} Humble`,
      `${service.method} ${service.name}`,
    ],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = services.filter((item) =>
    service.related.includes(item.slug),
  );
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];
  const path = `/services/${service.slug}`;

  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPageSchema({
              path,
              title: service.seoTitle,
              description: service.seoDescription,
            }),
            breadcrumbSchema(crumbs),
            serviceSchema(service),
            faqSchema(service.faqs, path),
          ],
        }}
      />
      <PageHero
        eyebrow={service.method}
        title={service.name}
        lede={service.summary}
        crumbs={crumbs}
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <BackLink href="/services" label="All services" />
            <WashReveal className="mt-8 aspect-16/10 rounded-xl">
              <Image
                src={service.hero}
                alt={service.heroAlt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className={cn("object-cover", service.heroClass)}
                priority
              />
            </WashReveal>
            <p className="mt-10 leading-relaxed text-mute">{service.body}</p>
            <p className="mt-6 leading-relaxed text-mute">
              Available in Crosby, Huffman, Lake Houston, Kingwood, Humble,
              Atascocita, and the towns around them.{" "}
              <Link href="/service-area" className="nav-link text-navy">
                Full service area
              </Link>
              .
            </p>
            <h2 className="display mt-12 text-2xl text-navy">Surfaces</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.surfaces.map((surface) => (
                <li
                  key={surface}
                  className="btn label inline-flex min-h-11 items-center border border-brass/40 px-3 py-2 text-navy"
                >
                  {surface}
                </li>
              ))}
            </ul>
            {related.length > 0 ? (
              <>
                <h2 className="display mt-12 text-2xl text-navy">
                  Related services
                </h2>
                <ul className="mt-5 space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="nav-link text-navy"
                      >
                        {item.name}
                      </Link>
                      <span className="text-mute"> — {item.short}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <p className="label text-orange">Quote this surface</p>
            <span className="rule mt-5" aria-hidden />
            <div className="mt-6">
              <QuoteForm />
            </div>
          </aside>
        </div>
      </section>
      {service.faqs.length > 0 ? (
        <FaqList faqs={service.faqs} heading={`${service.name} questions`} />
      ) : null}
    </main>
  );
}
