import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { BackLink, PageHero } from "@/components/page-hero";
import { services } from "@/lib/site";

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
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main id="main">
      <PageHero
        eyebrow={service.method}
        title={service.name}
        lede={service.summary}
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <BackLink href="/services" label="All services" />
            <div className="relative mt-8 aspect-16/10 overflow-hidden">
              <Image
                src={service.hero}
                alt=""
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-10 leading-relaxed text-mute">
              {service.body}
            </p>
            <h2 className="display mt-12 text-2xl text-navy">Surfaces</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.surfaces.map((surface) => (
                <li
                  key={surface}
                  className="label border border-brass/40 px-3 py-2 text-navy"
                >
                  {surface}
                </li>
              ))}
            </ul>
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
    </main>
  );
}
