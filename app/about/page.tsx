import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Overalled Pressure Washing LLC is Rocky’s Lake Houston crew — overalls on, surfaces matched, neighbors quoting neighbors.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="We show up overalled."
        lede="The name is the whole promise. Put the work clothes on. Do the job like the house is yours. Leave it looking years younger."
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="relative aspect-4/5 border border-line bg-canvas md:col-span-5">
            <Image
              src="/brand/logo.jpg"
              alt="Overalled Pressure Washing logo with the overalls mascot"
              fill
              className="object-contain bg-canvas p-10"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-6 leading-relaxed text-mute">
            <p>
              {site.legalName} is a Texas LLC serving Crosby, Huffman, Lake
              Houston, Kingwood, Humble, Atascocita, Porter, Dayton, Mont
              Belvieu, The Woodlands, and Houston. {site.owner} runs the wand
              himself. That is why the reviews keep using his first name.
            </p>
            <p>
              {site.bio} Soft wash on the house and roof. Pressure and a
              surface cleaner on concrete. No rented-machine circus, no
              disappearing after the check.
            </p>
            <p>
              In 2026 the Crosby–Huffman community voted Overalled a Cream of
              the Crop runner-up for Best Power Washing Company. The Facebook
              page sits at {site.recommend} recommend across {site.reviewCount}{" "}
              reviews, with {site.followers} neighbors following along.
            </p>
            <p className="border-l border-brass pl-5 font-display text-2xl text-navy">
              Sunday fundays happen. So do listing-day washes. We work around
              the life of the house.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
