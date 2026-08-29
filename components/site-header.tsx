"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { cn, telHref } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [approachInView, setApproachInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setApproachInView(false);
      return;
    }
    const section = document.getElementById("difference");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setApproachInView(entry.isIntersecting);
      },
      { threshold: 0.28 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
        scrolled || open
          ? "border-b border-blue/40 bg-navy/92 text-white backdrop-blur-md"
          : "border-b border-transparent bg-linear-to-b from-navy/80 via-navy/40 to-transparent text-white",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:h-24 md:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <span className="sr-only">Overalled Pressure Washing</span>
          <Image
            src="/brand/logo-wide.png"
            alt=""
            width={410}
            height={136}
            priority
            className="h-11 w-auto max-w-[200px] object-contain md:h-14 md:max-w-[260px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isCurrent(item.href, pathname, approachInView)
                  ? "page"
                  : undefined
              }
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
            className="btn label bg-blue px-5 py-3 text-lg text-white transition-colors hover:bg-navy-2"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="label min-h-11 min-w-11 text-lg lg:hidden"
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
                aria-current={
                  isCurrent(item.href, pathname, approachInView)
                    ? "page"
                    : undefined
                }
                className="nav-link label w-fit text-lg text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn label mt-2 bg-blue px-4 py-3.5 text-center text-lg text-white"
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

function isCurrent(href: string, pathname: string, approachInView: boolean) {
  if (href === "/#difference") return pathname === "/" && approachInView;
  if (href === "/services") {
    return pathname === "/services" || pathname.startsWith("/services/");
  }
  return pathname === href;
}
