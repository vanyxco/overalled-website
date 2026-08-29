import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { workItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Driveways, houses, fences, and storefronts washed across Lake Houston, Crosby, Huffman, Kingwood, and Humble.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Work"
        title="Proof lives in the concrete."
        lede="Real Gulf Coast grime. Real wipe lines. The kind of before-and-after that makes a neighbor walk over and ask for the number."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl columns-1 gap-4 px-5 py-20 md:columns-2 md:px-8 md:py-28">
          {workItems.map((item) => (
            <figure key={item.src} className="group mb-4 break-inside-avoid">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/85 via-navy/35 to-transparent p-5 pt-16 text-white">
                  <p className="font-display text-xl">{item.title}</p>
                  <p className="mt-1 text-white/85">{item.caption}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
