import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { Crumb } from "@/lib/seo";

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="relative overflow-hidden bg-navy pt-32 text-white md:pt-36">
      <div className="grain" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <p className="label text-orange-hot">{eyebrow}</p>
        <span className="rule mt-5" aria-hidden />
        <h1 className="display mt-6 max-w-4xl text-4xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          {lede}
        </p>
      </div>
    </header>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="nav-link label text-orange">
      ← {label}
    </Link>
  );
}
