"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useEffect, useRef, useState } from "react";
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
        kicker="Serving Texas"
        kickerHref="#service-area"
        kickerClassName="text-orange"
        heading="h1"
        title={
          <>
            <span className="max-md:mb-3 max-md:block">
              <em className="mark-word">Pressure Washing</em>
            </span>
            <br className="max-md:hidden" />
            <span className="md:whitespace-nowrap">that restores what</span>
            <br />
            <span className="md:whitespace-nowrap">
              the <em className="years-word">years</em> left behind.
            </span>
          </>
        }
        body="Soft wash on the house and roof. A surface cleaner on the drive. 100% recommend across 37 reviews."
        hint="Scroll to wash the drive"
        dirtySrc="/hero/dirty.jpg"
        cleanSrc="/hero/clean.jpg"
        dirtyAlt="Stained suburban driveway before washing"
        cleanAlt="The same driveway after a professional wash"
        objectClass="object-cover object-[center_70%]"
        priority
        showTabs
        showMark
      />
      <ActBreak />
      <WashChapter
        id="hero-commercial"
        current="commercial"
        kicker="Commercial pressure washing"
        heading="h2"
        title={
          <>
            Lots, buildings,
            <br />
            and the fleet.
          </>
        }
        body="Dumpster pads, parking lots, brick, storefronts, and the trucks and equipment that keep the day moving — scheduled around your hours."
        hint="Scroll to wash the lot"
        dirtySrc="/hero/bank-dirty.jpg"
        cleanSrc="/hero/bank-clean.jpg"
        dirtyAlt="Neglected commercial bank parking lot before washing"
        cleanAlt="The same bank storefront after a professional wash"
        objectClass="object-cover object-[center_55%]"
        endWords={
          <div className="text-center">
            <p className="label text-orange">{site.recommend} recommend</p>
            <span className="rule mx-auto mt-4" aria-hidden />
            <p className="display mt-6 text-[clamp(2.4rem,7vw,5rem)] text-white">
              Trusted
              <br />
              Experience
            </p>
          </div>
        }
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

function HeroCopy({
  Heading,
  kicker,
  kickerHref,
  kickerClassName,
  title,
  body,
  current,
  showTabs,
}: {
  Heading: "h1" | "h2";
  kicker: string;
  kickerHref?: string;
  kickerClassName: string;
  title: ReactNode;
  body: string;
  current: "residential" | "commercial";
  showTabs: boolean;
}) {
  return (
    <>
      {showTabs ? <ActTabs current={current} /> : null}
      <div className="w-full max-w-3xl">
        <p
          id={Heading === "h1" ? "hero-kicker" : undefined}
          className="label"
        >
          {kickerHref ? (
            <a
              href={kickerHref}
              className={cn(
                kickerClassName,
                "inline-block py-1 underline decoration-current/40 underline-offset-[0.35em] transition-colors hover:text-orange-hot hover:decoration-orange-hot",
              )}
            >
              {kicker}
            </a>
          ) : (
            <span className={kickerClassName}>{kicker}</span>
          )}
        </p>
        <Heading className="display mt-5 text-[clamp(1.7rem,6.8vw,3.75rem)]">
          {title}
        </Heading>
        <p className="hero-glass mx-auto mt-6 max-w-xl px-4 py-4 text-lg leading-relaxed text-white/90 sm:px-5 sm:py-5 md:px-6 md:text-xl">
          {body}
        </p>
      </div>
      <div className="mt-5 mb-20 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:mb-0">
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
    </>
  );
}

function ActBreak() {
  return (
    <section
      aria-label="From residential to commercial"
      className="relative flex min-h-dvh items-center bg-navy text-white"
    >
      <div className="grain" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
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
            Homes, storefronts, lots, and fleets across Lake Houston. Soft wash
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
  kickerHref,
  kickerClassName = "text-water",
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
  showTabs = false,
  showMark = false,
  endWords,
}: {
  id: string;
  current: "residential" | "commercial";
  kicker: string;
  kickerHref?: string;
  kickerClassName?: string;
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
  showTabs?: boolean;
  showMark?: boolean;
  endWords?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reducePref = useReducedMotion();
  const [alive, setAlive] = useState(false);
  const [phone, setPhone] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    // "end 100%" is the same mapping as "end end", but Motion 13 would
    // otherwise drive this with a CSS view-timeline `contain` range. That
    // range reverses on a section taller than the viewport, so copy faded
    // out and then came back mid-scroll.
    offset: ["start start", "end 100%"],
  });

  useEffect(() => {
    setAlive(true);
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setPhone(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  // First paint matches the server. Motion values, reduced-motion, and
  // matchMedia are client-only and were hydrating a different tree.
  const reduce = Boolean(alive && reducePref);
  const live = alive && !reducePref;
  const startMask =
    "linear-gradient(90deg, #000 0%, #000 calc(21% - 6vw), transparent calc(21% + 8vw))";
  const startLance = "calc(21% + 10px)";
  const copyClass =
    "relative z-20 flex h-full flex-col items-center justify-start px-5 pt-28 text-center text-white md:justify-center md:pt-0";

  const clipRight = useTransform(
    scrollYProgress,
    [0.04, 0.82, 1],
    phone ? [48, 0, 0] : [79, 0, 0],
  );
  const washMask = useTransform(clipRight, (value) => {
    const edge = 100 - value;
    return `linear-gradient(90deg, #000 0%, #000 calc(${edge}% - 6vw), transparent calc(${edge}% + 8vw))`;
  });
  const lineLeft = useTransform(
    clipRight,
    (value) => `calc(${100 - value}% + 10px)`,
  );
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
    <section ref={ref} id={id} className="relative h-[180vh] bg-navy md:h-[240vh]">
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
          {live ? (
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
          ) : (
            <div
              className="absolute inset-0"
              style={{
                maskImage: reduce
                  ? "linear-gradient(90deg, #000 0%, #000 calc(55% - 6vw), transparent calc(55% + 8vw))"
                  : startMask,
                WebkitMaskImage: reduce
                  ? "linear-gradient(90deg, #000 0%, #000 calc(55% - 6vw), transparent calc(55% + 8vw))"
                  : startMask,
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
            </div>
          )}

          {live ? (
            <WashLance left={lineLeft} />
          ) : (
            <WashLance left={reduce ? "calc(55% + 10px)" : startLance} />
          )}

          <div className="grain z-10" />

          {live && showMark ? (
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
                className="logo-hero h-auto w-[min(52vw,28rem)] md:w-[min(72vw,28rem)]"
              />
            </motion.div>
          ) : null}

          {live && endWords ? (
            <motion.div
              className="pointer-events-none absolute inset-0 z-15 flex items-center justify-center px-5"
              style={{ opacity: markOpacity }}
              aria-hidden
            >
              <div className="logo-hero">{endWords}</div>
            </motion.div>
          ) : null}

          {live ? (
            <motion.div
              className={copyClass}
              style={{ opacity: copyOpacity, y: copyY }}
            >
              <HeroCopy
                Heading={Heading}
                kicker={kicker}
                kickerHref={kickerHref}
                kickerClassName={kickerClassName}
                title={title}
                body={body}
                current={current}
                showTabs={showTabs}
              />
            </motion.div>
          ) : (
            <div className={copyClass}>
              <HeroCopy
                Heading={Heading}
                kicker={kicker}
                kickerHref={kickerHref}
                kickerClassName={kickerClassName}
                title={title}
                body={body}
                current={current}
                showTabs={showTabs}
              />
            </div>
          )}

          {live ? (
            <motion.p
              className="hero-glass label absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 px-4 py-2 text-white md:block"
              style={{ opacity: hintOpacity }}
            >
              {hint}
            </motion.p>
          ) : (
            <p className="hero-glass label absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 px-4 py-2 text-white md:block">
              {hint}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
