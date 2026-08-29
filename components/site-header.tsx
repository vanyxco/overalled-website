"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { cn, telHref } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-brass/40 bg-navy/92 text-white backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:h-24 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.jpg"
            alt=""
            width={48}
            height={48}
            className="size-11 rounded-full object-cover ring-1 ring-brass/50 md:size-12"
          />
          <span className="leading-tight">
            <span className="script block text-3xl text-orange-hot md:text-4xl">
              Overalled
            </span>
            <span className="label -mt-0.5 block text-white/90">
              Pressure Washing
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link label text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref(site.phone)}
            className="label text-white/90 hover:text-white"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="label border border-white/80 bg-white px-5 py-3 text-lg text-navy transition-colors hover:border-orange hover:bg-orange hover:text-white"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="label text-lg lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label text-lg text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="label mt-2 bg-orange px-4 py-3.5 text-center text-lg text-white"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
