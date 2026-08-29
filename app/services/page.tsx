import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "House wash, roof soft-wash, vinyl siding, driveways, decks, fences, and commercial storefronts across Lake Houston.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="The right pressure. The right chemistry. Every surface."
        lede="Soft wash where high PSI would do damage. Surface cleaners where concrete needs an even cut. That is the whole game."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <ul className="grid gap-px bg-line md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="bg-paper">
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={service.hero}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="px-6 py-8 md:px-8">
                    <p className="label text-orange">{service.method}</p>
                    <h2 className="display mt-3 text-3xl text-navy transition-colors group-hover:text-orange">
                      {service.name}
                    </h2>
                    <p className="mt-4 leading-relaxed text-mute">
                      {service.summary}
                    </p>
                    <p className="nav-link label mt-6 inline-block text-orange">
                      Learn more
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
