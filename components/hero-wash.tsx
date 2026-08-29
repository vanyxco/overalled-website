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
import { cn, telHref } from "@/lib/utils";

export function HeroWash() {
  return (
    <div>
      <WashChapter
        id="hero-residential"
        current="residential"
        kicker="Crosby, Huffman & Lake Houston"
        heading="h1"
        title={
          <>
            <span className="whitespace-nowrap">Pressure washing</span>
            <br />
            <span className="whitespace-nowrap">that restores what</span>
            <br />
            <span className="whitespace-nowrap">
              the{" "}
              <em className="script text-[1.15em] text-orange-hot">
                years
              </em>{" "}
              left behind.
            </span>
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
        id="hero-commercial"
        current="commercial"
        kicker="Commercial pressure washing"
        heading="h2"
        title={
          <>
            First impressions get{" "}
            <em className="script text-[1.15em] text-orange-hot">
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

function ActTabs({
  current,
}: {
  current: "residential" | "commercial";
}) {
  return (
    <nav aria-label="Hero chapter" className="mb-3 flex flex-nowrap items-center justify-center gap-2">
      <a
        href="#hero-residential"
        aria-current={current === "residential" ? "true" : undefined}
        className={cn(
          "hero-glass label px-3.5 py-2 transition-colors",
          current === "residential"
            ? "text-white"
            : "text-white/70 hover:text-white",
        )}
      >
        Residential
      </a>
      <a
        href="#hero-commercial"
        aria-current={current === "commercial" ? "true" : undefined}
        className={cn(
          "hero-glass label px-3.5 py-2 transition-colors",
          current === "commercial"
            ? "text-white"
            : "text-white/70 hover:text-white",
        )}
      >
        Commercial
      </a>
    </nav>
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
        <p className="label text-water md:col-span-3">
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
  id,
  current,
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
  id: string;
  current: "residential" | "commercial";
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
    // "end 100%" is the same mapping as "end end", but Motion 13 would
    // otherwise drive this with a CSS view-timeline `contain` range. That
    // range reverses on a section taller than the viewport, so copy faded
    // out and then came back mid-scroll.
    offset: ["start start", "end 100%"],
  });

  const clipRight = useTransform(
    scrollYProgress,
    [0.04, 0.82, 1],
    [79, 0, 0],
  );
  const washMask = useTransform(clipRight, (value) => {
    const edge = 100 - value;
    return `linear-gradient(90deg, #000 0%, #000 calc(${edge}% - 36px), transparent calc(${edge}% + 10px))`;
  });
  const lineLeft = useTransform(clipRight, (value) => `${100 - value}%`);
  const copyOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.62, 1],
    [1, 1, 0, 0],
  );
  const markOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.62, 1],
    [0, 1, 1],
  );
  const copyY = useTransform(scrollYProgress, [0, 0.62, 1], [0, -28, -28]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12, 1], [1, 0, 0]);

  return (
    <section ref={ref} id={id} className="relative h-[240vh] bg-navy">
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
            <div
              className="absolute inset-0"
              style={{
                maskImage:
                  "linear-gradient(90deg, #000 0%, #000 calc(55% - 36px), transparent calc(55% + 10px))",
                WebkitMaskImage:
                  "linear-gradient(90deg, #000 0%, #000 calc(55% - 36px), transparent calc(55% + 10px))",
              }}
            >
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
            <motion.div
              className="absolute inset-0"
              style={{
                maskImage: washMask,
                WebkitMaskImage: washMask,
              }}
            >
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

          <div className="grain z-10" />

          {reduce ? null : (
            <motion.div
              className="pointer-events-none absolute inset-0 z-15 flex items-center justify-center"
              style={{ opacity: markOpacity }}
              aria-hidden
            >
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={448}
                height={448}
                className="logo-hero h-auto w-[min(72vw,28rem)]"
              />
            </motion.div>
          )}

          <motion.div
            className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center text-white"
            style={reduce ? undefined : { opacity: copyOpacity, y: copyY }}
          >
            <ActTabs current={current} />
            <div className="hero-glass w-full max-w-3xl px-5 py-6 md:px-10 md:py-9">
              <p
                id={Heading === "h1" ? "hero-kicker" : undefined}
                className="label text-water"
              >
                {kicker}
              </p>
              <Heading className="display mt-5 text-[clamp(1.7rem,6.8vw,3.75rem)]">
                {title}
              </Heading>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
                {body}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8">
              <Link
                href="/contact"
                className="btn label bg-blue px-8 py-4 text-lg text-white transition-colors hover:bg-navy-2"
              >
                Get a free quote
              </Link>
              <a
                href={telHref(site.phone)}
                className="btn label hidden border border-white/80 bg-navy/45 px-8 py-4 text-lg text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-navy/60 md:inline-flex"
              >
                Call {site.phone}
              </a>
            </div>
          </motion.div>

          <motion.p
            className="hero-glass label absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 px-4 py-2 text-white md:block"
            style={reduce ? undefined : { opacity: hintOpacity }}
          >
            {hint}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
