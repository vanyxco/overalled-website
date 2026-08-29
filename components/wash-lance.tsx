"use client";

import type { MotionValue } from "motion/react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";

type Particle = {
  top: string;
  delay: string;
  duration: string;
  width: number;
  height: number;
  drift: number;
};

type ParticleStyle = CSSProperties & { "--drift": string };

/** Clustered at the nozzle, a few splash-backs along the wet edge. */
const PARTICLES: Particle[] = [
  { top: "69%", delay: "0s", duration: "0.36s", width: 6, height: 2, drift: 8 },
  { top: "70.5%", delay: "0.08s", duration: "0.4s", width: 4, height: 3, drift: 12 },
  { top: "72%", delay: "0.16s", duration: "0.32s", width: 8, height: 2, drift: 6 },
  { top: "73.5%", delay: "0.05s", duration: "0.38s", width: 5, height: 2, drift: 14 },
  { top: "75%", delay: "0.22s", duration: "0.34s", width: 3, height: 3, drift: 18 },
  { top: "67.5%", delay: "0.12s", duration: "0.44s", width: 3, height: 2, drift: 20 },
  { top: "76.5%", delay: "0.28s", duration: "0.42s", width: 4, height: 2, drift: 16 },
  { top: "65%", delay: "0.34s", duration: "0.5s", width: 2, height: 2, drift: 24 },
  { top: "79%", delay: "0.18s", duration: "0.48s", width: 2, height: 3, drift: 22 },
  { top: "62%", delay: "0.4s", duration: "0.58s", width: 2, height: 2, drift: 28 },
  { top: "82%", delay: "0.1s", duration: "0.54s", width: 2, height: 2, drift: 26 },
  { top: "85%", delay: "0.46s", duration: "0.66s", width: 1, height: 2, drift: 32 },
  { top: "88%", delay: "0.26s", duration: "0.62s", width: 2, height: 1, drift: 30 },
];

export function WashLance({
  left,
}: {
  left: MotionValue<string> | string;
}) {
  const inner = (
    <>
      <span className="wash-glow" />
      <span className="wash-jet" />
      <span className="wash-stream" />
      <span className="pointer-events-none absolute inset-y-0 left-0 w-32 overflow-visible">
        {PARTICLES.map((particle, index) => (
          <span
            key={`${particle.top}-${index}`}
            className="wash-particle"
            style={
              {
                top: particle.top,
                width: particle.width,
                height: particle.height,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                "--drift": `${particle.drift}px`,
              } satisfies ParticleStyle
            }
          />
        ))}
      </span>
      <span className="pointer-events-none absolute top-[72%] right-[calc(100%+2.25rem)] flex origin-right -translate-y-1/2 items-center -rotate-12">
        <WandMark />
        <span className="wash-bloom" />
      </span>
    </>
  );

  if (typeof left === "string") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 z-30 h-full"
        style={{ left }}
      >
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 z-30 h-full"
      style={{ left }}
    >
      {inner}
    </motion.div>
  );
}

function WandMark() {
  return (
    <svg
      viewBox="0 0 248 86"
      className="wash-wand"
      fill="none"
    >
      <rect x="4" y="30" width="14" height="10" rx="3" fill="var(--ink)" />
      <rect x="2" y="32" width="6" height="6" rx="3" fill="var(--mute)" />
      <path
        d="M28 48c-1.5 8-4 18-6.5 28.5-1 4.2 2.2 7.5 6.8 7.5h12.2c4.2 0 6.4-3.2 5.6-7.2L42 48"
        fill="var(--navy)"
      />
      <path
        d="M32 50c-1.2 7.5-3.4 17-5.4 26.2-.4 2 1.1 3.4 3.4 3.4h6.2c2.2 0 3.2-1.6 2.8-3.5L41 50"
        fill="var(--navy-2)"
      />
      <rect x="18" y="24" width="62" height="24" rx="4" fill="var(--navy-2)" />
      <rect x="22" y="21" width="42" height="6" rx="2" fill="var(--navy)" />
      <rect x="26" y="28" width="28" height="3" rx="1" fill="var(--brass)" />
      <path
        d="M48 48h22c2.4 0 4 1.8 4 4.2v12.3c0 2.2-1.7 3.5-3.6 3.5h-8.2"
        stroke="var(--brass)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M56 47.5c1.5 6.5 3.4 11.5 4.6 14.5h-5.2c-1.4-4-3.6-10.2-5.2-14.5h5.8Z" fill="var(--orange)" />
      <rect x="78" y="28" width="16" height="16" rx="2" fill="var(--brass)" />
      <rect x="81" y="31" width="10" height="10" rx="1" fill="var(--navy)" />
      <rect x="92" y="32.5" width="132" height="7" rx="1.5" fill="var(--brass)" />
      <rect x="92" y="32.5" width="132" height="2.4" rx="1" fill="var(--orange-hot)" opacity="0.45" />
      <rect x="148" y="31" width="10" height="10" rx="1" fill="var(--brass)" />
      <path d="M224 30h10l10 5.5v9L234 50h-10z" fill="var(--navy)" />
      <path d="M234 35.5h9.5v9H234z" fill="white" opacity="0.9" />
    </svg>
  );
}
