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
import { site } from "@/lib/site";
import { telHref } from "@/lib/utils";

export function HeroWash() {
  return (
    <div>
      <WashChapter
        act="01 / House"
        kicker="Your home's greatest partner"
        heading="h1"
        title={
          <>
            Restore what the{" "}
            <em className="script text-[1.15em] not-italic text-orange-hot">
              years
            </em>{" "}
            left behind.
          </>
        }
        body="Soft-wash the house. Surface-clean the concrete. Rocky shows up overalled — and Lake Houston curb appeal looks years younger."
        hint="Scroll to wash the drive"
        dirtySrc="/hero/dirty.png"
        cleanSrc="/hero/clean.png"
        dirtyAlt="Stained suburban driveway before washing"
        cleanAlt="The same driveway after a professional wash"
        objectClass="object-cover object-[center_70%]"
        priority
      />
      <ActBreak />
      <WashChapter
        act="02 / Storefront"
        kicker="Commercial, too"
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
        body="Banks, shops, parking approaches — early, fast, and looking like the business behind them is run tight. Same crew. Different curb."
        hint="Scroll to wash the lot"
        dirtySrc="/hero/bank-dirty.png"
        cleanSrc="/hero/bank-clean.png"
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
          After the house
        </p>
        <div className="md:col-span-9">
          <span className="rule mb-6" aria-hidden />
          <p className="display text-4xl sm:text-5xl md:text-6xl">
            Same wand.
            <br />
            Different curb.
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            Homes get the years washed off. So do the lots people park in on
            Monday. Rocky already does both — the next scroll is the bank.
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

  const clipRight = useTransform(scrollYProgress, [0.04, 0.82], [68, 0]);
  const clipPath = useTransform(clipRight, (value) => `inset(0 ${value}% 0 0)`);
  const lineLeft = useTransform(clipRight, (value) => `${100 - value}%`);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.42, 0.68], [1, 1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.68], [0, -28]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

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

          {!reduce ? (
            <motion.div
              aria-hidden
              className="absolute top-0 z-10 h-full w-px"
              style={{ left: lineLeft }}
            >
              <span className="absolute inset-y-0 -left-0.5 w-1.25 bg-linear-to-b from-white via-water to-white shadow-[0_0_24px_rgba(77,184,212,0.95)]" />
              <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_white]" />
            </motion.div>
          ) : null}

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/75 via-navy/25 to-navy/40" />
          <div className="grain" />

          <p className="label absolute top-28 left-5 z-20 text-white/85 md:top-32 md:left-8">
            {act}
          </p>

          <motion.div
            className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center text-white"
            style={reduce ? undefined : { opacity: copyOpacity, y: copyY }}
          >
            <p className="label text-orange-hot">{kicker}</p>
            <Heading className="display mt-5 max-w-5xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              {title}
            </Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
              {body}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="label bg-orange px-8 py-4 text-lg text-white transition-colors hover:bg-orange-hot"
              >
                Get a free quote
              </Link>
              <a
                href={telHref(site.phone)}
                className="label border border-white/50 px-8 py-4 text-lg text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Call {site.phone}
              </a>
            </div>
          </motion.div>

          <motion.p
            className="label absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/85"
            style={reduce ? undefined : { opacity: hintOpacity }}
          >
            {hint}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
