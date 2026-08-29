import Image from "next/image";
import Link from "next/link";
import { HeroWash } from "@/components/hero-wash";
import { QuoteForm } from "@/components/quote-form";
import {
  areas,
  processSteps,
  reviews,
  services,
  site,
  workItems,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroWash />
      <main id="main">
        <ProofBar />
        <Difference />
        <Services />
        <Work />
        <Process />
        <Area />
        <Reviews />
        <QuoteBand />
      </main>
    </>
  );
}

function ProofBar() {
  const items = [
    `${site.recommend} recommend · ${site.reviewCount} reviews`,
    `${site.followers} neighbors following`,
    "Homes and storefronts · same wand",
    site.award,
  ];
  return (
    <section className="border-y border-brass/35 bg-canvas">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-baseline md:justify-between md:gap-10 md:px-8">
        {items.map((item) => (
          <p key={item} className="label max-w-sm leading-relaxed text-navy">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function Difference() {
  return (
    <section id="difference" className="scroll-mt-28 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 md:grid-cols-12 md:px-8 md:py-36">
        <div className="md:col-span-5">
          <p className="label text-orange">The difference</p>
          <span className="rule mt-5" aria-hidden />
          <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
            Not a rented machine.
            <br />A neighbor in overalls.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 space-y-6 leading-relaxed text-mute">
          <p>
            Lake Houston humidity paints everything green. Most crews answer
            that with more PSI. Rocky matches the method to the surface — soft
            chemistry on the house and roof, a surface cleaner on the concrete
            so you do not get zebra stripes. Same playbook on a bank lot or a
            shop walk: early, even, and looking like the place is run tight.
          </p>
          <p>
            That is why the Facebook page sits at {site.recommend} recommend
            across {site.reviewCount} reviews, why Crosby–Huffman voted
            Overalled a Cream of the Crop runner-up in 2026, and why neighbors
            keep handing each other the number.
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
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-7 transition-colors hover:bg-white/5 md:grid-cols-[4.5rem_1fr_auto_auto] md:px-2"
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
                <span className="label text-orange-hot transition-transform duration-500 group-hover:translate-x-1">
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
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">Work</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 max-w-2xl text-4xl text-navy md:text-5xl">
          The before lives on the right. Until it doesn&apos;t.
        </h2>
        <div className="mt-16 grid gap-3 md:grid-cols-12 md:gap-4">
          {workItems.map((item, index) => (
            <figure
              key={item.src}
              className={
                index === 0
                  ? "group relative md:col-span-7 md:row-span-2"
                  : "group relative md:col-span-5"
              }
            >
              <div
                className={
                  index === 0
                    ? "relative aspect-4/5 overflow-hidden md:aspect-auto md:h-full md:min-h-135"
                    : "relative aspect-4/3 overflow-hidden"
                }
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/85 via-navy/35 to-transparent p-5 pt-16 text-white">
                  <span className="font-display text-xl">{item.title}</span>
                  <span className="mt-1 block text-white/85">{item.caption}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
        <Link
          href="/work"
          className="nav-link label mt-12 inline-block text-orange"
        >
          Full gallery
        </Link>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">How it goes</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 text-4xl text-navy md:text-5xl">
          Three steps. No circus.
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
          Crosby to The Woodlands. If we can drive it before lunch, we wash it.
        </h2>
        <ul className="mt-14 flex flex-wrap gap-3">
          {areas.map((city) => (
            <li
              key={city}
              className="label border border-brass/35 px-4 py-2.5 text-white/90"
            >
              {city}, TX
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">Neighbors</p>
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
            Send the address. Get a number back.
          </h2>
          <p className="mt-6 leading-relaxed text-mute">
            Photos from the driveway — or the parking lot — help. Same-day
            replies are the norm. Rocky still answers the phone at {site.phone}.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
