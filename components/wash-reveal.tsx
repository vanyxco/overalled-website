"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function WashReveal({
  children,
  className,
  delay = 0,
  fill = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  fill?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducePref = useReducedMotion();
  const [alive, setAlive] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.12, margin: "0px 0px -8% 0px" });
  const reduce = Boolean(alive && reducePref);
  const progress = useMotionValue(0);
  const clipPath = useTransform(
    progress,
    (value) => `inset(0 ${(1 - value) * 100}% 0 0)`,
  );
  const lineLeft = useTransform(progress, (value) => `${value * 100}%`);
  const lineOpacity = useTransform(progress, [0, 0.05, 0.88, 1], [0, 1, 1, 0]);

  useEffect(() => {
    setAlive(true);
  }, []);

  useEffect(() => {
    if (reduce) {
      progress.set(1);
      return;
    }
    if (!inView) return;
    const controls = animate(progress, 1, {
      type: "tween",
      duration: 0.85,
      delay,
      ease,
    });
    return () => controls.stop();
  }, [delay, inView, progress, reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden bg-canvas",
        fill ? "absolute inset-0" : "relative",
        className,
      )}
    >
      {reduce ? (
        children
      ) : (
        <>
          <motion.div className="absolute inset-0" style={{ clipPath }}>
            {children}
          </motion.div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-0 z-10 h-full w-px"
            style={{ left: lineLeft, opacity: lineOpacity }}
          >
            <span className="absolute inset-y-0 -left-px w-0.5 bg-linear-to-b from-transparent via-water to-transparent shadow-[0_0_14px_rgba(77,184,212,0.9)]" />
          </motion.div>
        </>
      )}
    </div>
  );
}
