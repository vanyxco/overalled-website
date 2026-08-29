"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProofBar() {
  return (
    <section className="border-y border-brass/35 bg-canvas">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4 md:gap-0 md:px-8 md:py-12">
        <Stat value={100} suffix="%" label="Recommend" />
        <Stat value={site.reviewCount} label="Reviews" />
        <Stat value={1000} suffix="+" label="Following on Facebook" />
        <div className="md:border-l md:border-brass/40 md:pl-10">
          <p className="display text-3xl text-navy md:text-4xl">2026</p>
          <p className="label mt-2 leading-relaxed text-mute">
            Cream of the Crop runner-up — Best Power Washing, Crosby–Huffman
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (reduce) {
      setShown(value);
      return;
    }
    if (!inView) {
      setShown(0);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.15,
      ease,
      onUpdate: (latest) => setShown(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <div
      ref={ref}
      aria-label={`${value.toLocaleString("en-US")}${suffix} ${label}`}
      className="md:border-l md:border-brass/40 md:px-10 md:first:border-l-0 md:first:pl-0"
    >
      <p
        aria-hidden
        className="display text-4xl tabular-nums text-navy md:text-5xl"
      >
        {shown.toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="label mt-2 text-mute">{label}</p>
    </div>
  );
}
