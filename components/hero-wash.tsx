"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { WashLance } from "@/components/wash-lance";
import { site } from "@/lib/site";
import { telHref } from "@/lib/utils";

export function HeroWash() {
  return (
    <div>
      <WashChapter
        act="01 / Residential"
        kicker="Crosby, Huffman & Lake Houston"
        heading="h1"
        title={
          <>
            Pressure washing
            <br className="sm:hidden" /> that restores what the{" "}
            <em className="script text-[1.15em] not-italic text-orange-hot">
              years
            </em>{" "}
            left behind.
          </>
        }
        body="Soft wash for houses and roofs. Surface cleaning for concrete. 100% recommend across 37 reviews."
        hint="Scroll to wash the drive"
        dirtySrc="/hero/dirty.jpg"
        cleanSrc="/hero/clean.jpg"
        dirtyAlt="Stained suburban driveway before washing"
        cleanAlt="The same driveway after a professional wash"
        objectClass="object-cover object-[center_70%]"
        priority
      />
      <ActBreak />
      <WashChapter
        act="02 / Commercial"
        kicker="Commercial pressure washing"
        heading="h2"
        title={
          <>
            First impressions get{" "}
            <em className="script text-[1.15em] not-italic text-orange-hot">
              washed
            </em>{" "}
            too.
          </>
        }
        body="Storefronts, banks, and parking approaches — scheduled around your hours and finished before customers arrive."
        hint="Scroll to wash the lot"
        dirtySrc="/hero/bank-dirty.jpg"
        cleanSrc="/hero/bank-clean.jpg"
        dirtyAlt="Neglected commercial bank parking lot before washing"
        cleanAlt="The same bank storefront after a professional wash"
        objectClass="object-cover object-[center_55%]"
      />
    </div>
  );
}

function ActBreak() {
  return (
    <section
      aria-label="From residential to commercial"
      className="relative flex min-h-dvh items-center bg-navy text-white"
    >
      <div className="grain" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
        <p className="label text-orange-hot md:col-span-3">
          Residential and commercial
        </p>
        <div className="md:col-span-9">
          <span className="rule mb-6" aria-hidden />
          <p className="display text-4xl sm:text-5xl md:text-6xl">
            The same standard
            <br />
            on every property.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Homes, storefronts, and parking lots across Lake Houston. Soft wash
            where high pressure would do damage. Surface cleaning where concrete
            needs an even finish.
          </p>
        </div>
      </div>
    </section>
  );
}

function WashChapter({
  act,
  kicker,
  heading: Heading,
  title,
  body,
  hint,
  dirtySrc,
  cleanSrc,
  dirtyAlt,
  cleanAlt,
  objectClass,
  priority = false,
}: {
  act: string;
  kicker: string;
  heading: "h1" | "h2";
  title: ReactNode;
  body: string;
  hint: string;
  dirtySrc: string;
  cleanSrc: string;
  dirtyAlt: string;
  cleanAlt: string;
  objectClass: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const clipRight = useTransform(scrollYProgress, [0.04, 0.82], [62, 0]);
  const clipPath = useTransform(clipRight, (value) => `inset(0 ${value}% 0 0)`);
  const lineLeft = useTransform(clipRight, (value) => `${100 - value}%`);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.28, 0.52], [1, 1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.52], [0, -20]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[240vh] bg-navy">
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="relative h-full">
          <div className="absolute inset-0">
            <Image
              src={dirtySrc}
              alt={dirtyAlt}
              fill
              priority={priority}
              sizes="100vw"
              className={objectClass}
            />
          </div>
          {reduce ? (
            <div className="absolute inset-0 [clip-path:inset(0_45%_0_0)]">
              <Image
                src={cleanSrc}
                alt=""
                fill
                priority={priority}
                sizes="100vw"
                className={objectClass}
              />
            </div>
          ) : (
            <motion.div className="absolute inset-0" style={{ clipPath }}>
              <Image
                src={cleanSrc}
                alt={cleanAlt}
                fill
                priority={priority}
                sizes="100vw"
                className={objectClass}
              />
            </motion.div>
          )}

          {reduce ? <WashLance left="55%" /> : <WashLance left={lineLeft} />}

          {/* Readability scrims: top for the nav, bottom for type. Keep the upper photo clear for the lance. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-linear-to-b from-navy/85 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[68%] bg-linear-to-t from-navy from-25% via-navy/92 via-58% to-navy/55 md:h-[56%]" />
          <div className="pointer-events-none absolute inset-0 z-10 bg-navy/25" />
          <div className="grain z-10" />

          <p className="hero-type label absolute top-23 left-5 z-20 text-white md:top-32 md:left-8">
            {act}
          </p>

          <motion.div
            className="relative z-20 flex h-full flex-col justify-end px-5 pb-32 text-white md:px-8 md:pb-16"
            style={reduce ? undefined : { opacity: copyOpacity, y: copyY }}
          >
            <div className="hero-type mx-auto w-full max-w-3xl text-center md:mx-0 md:max-w-2xl md:text-left">
              <p
                id={Heading === "h1" ? "hero-kicker" : undefined}
                className="label text-orange-hot"
              >
                {kicker}
              </p>
              <Heading className="display mt-4 text-4xl sm:text-5xl lg:text-6xl">
                {title}
              </Heading>
              <p className="mt-5 hidden max-w-xl text-lg leading-relaxed text-white md:mt-6 md:block md:text-xl">
                {body}
              </p>
              <div className="mt-8 flex w-full max-w-sm flex-col gap-3 mx-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:mx-0 md:justify-start">
                <Link
                  href="/contact"
                  className="label bg-orange px-8 py-4 text-center text-lg text-white transition-colors hover:bg-orange-hot"
                >
                  Get a free quote
                </Link>
                <a
                  href={telHref(site.phone)}
                  className="label hidden border border-white/80 px-8 py-4 text-center text-lg text-white transition-colors hover:border-white hover:bg-white/10 md:inline-flex md:items-center"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="hero-type label absolute bottom-24 left-1/2 z-20 -translate-x-1/2 text-white md:bottom-8"
            style={reduce ? undefined : { opacity: hintOpacity }}
          >
            {hint}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
