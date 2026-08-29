"use client";

import type { MotionValue } from "motion/react";
import { motion } from "motion/react";

export function WashLance({
  left,
}: {
  left: MotionValue<string> | string;
}) {
  const inner = (
    <>
      <span className="wash-sheet" />
      <span className="wash-line" />
      <span className="pointer-events-none absolute top-[36%] right-full flex origin-right -translate-y-1/2 items-center -rotate-6 md:top-[42%]">
        <WandMark />
        <Spray />
      </span>
    </>
  );

  if (typeof left === "string") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 z-12 h-[48%] md:h-[72%]"
        style={{ left }}
      >
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 z-12 h-[48%] md:h-[72%]"
      style={{ left }}
    >
      {inner}
    </motion.div>
  );
}

function Spray() {
  return (
    <span className="relative -ml-1 h-14 w-9 overflow-visible md:h-16 md:w-11">
      <span className="wash-fan" />
      <span className="wash-mist" />
      {Array.from({ length: 7 }, (_, index) => (
        <span
          key={index}
          className="wash-drop"
          style={{
            animationDelay: `${index * 0.06}s`,
            top: `${6 + (index % 4) * 7}px`,
          }}
        />
      ))}
    </span>
  );
}

function WandMark() {
  return (
    <svg
      viewBox="0 0 248 86"
      className="wash-wand"
      fill="none"
    >
      {/* hose stub */}
      <rect x="4" y="30" width="14" height="10" rx="3" fill="var(--ink)" />
      <rect x="2" y="32" width="6" height="6" rx="3" fill="var(--mute)" />
      {/* pistol grip */}
      <path
        d="M28 48c-1.5 8-4 18-6.5 28.5-1 4.2 2.2 7.5 6.8 7.5h12.2c4.2 0 6.4-3.2 5.6-7.2L42 48"
        fill="var(--navy)"
      />
      <path
        d="M32 50c-1.2 7.5-3.4 17-5.4 26.2-.4 2 1.1 3.4 3.4 3.4h6.2c2.2 0 3.2-1.6 2.8-3.5L41 50"
        fill="var(--navy-2)"
      />
      {/* gun body */}
      <rect x="18" y="24" width="62" height="24" rx="4" fill="var(--navy-2)" />
      <rect x="22" y="21" width="42" height="6" rx="2" fill="var(--navy)" />
      <rect x="26" y="28" width="28" height="3" rx="1" fill="var(--brass)" />
      {/* trigger guard + trigger */}
      <path
        d="M48 48h22c2.4 0 4 1.8 4 4.2v12.3c0 2.2-1.7 3.5-3.6 3.5h-8.2"
        stroke="var(--brass)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M56 47.5c1.5 6.5 3.4 11.5 4.6 14.5h-5.2c-1.4-4-3.6-10.2-5.2-14.5h5.8Z" fill="var(--orange)" />
      {/* coupler */}
      <rect x="78" y="28" width="16" height="16" rx="2" fill="var(--brass)" />
      <rect x="81" y="31" width="10" height="10" rx="1" fill="var(--navy)" />
      {/* lance */}
      <rect x="92" y="32.5" width="132" height="7" rx="1.5" fill="var(--brass)" />
      <rect x="92" y="32.5" width="132" height="2.4" rx="1" fill="var(--orange-hot)" opacity="0.45" />
      <rect x="148" y="31" width="10" height="10" rx="1" fill="var(--brass)" />
      {/* nozzle, kissing the wash line */}
      <path d="M224 30h10l10 5.5v9L234 50h-10z" fill="var(--navy)" />
      <path d="M234 35.5h9.5v9H234z" fill="var(--water)" />
    </svg>
  );
}
