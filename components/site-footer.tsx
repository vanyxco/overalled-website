import Link from "next/link";
import { areas, nav, site } from "@/lib/site";
import { telHref } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-brass/40 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="script text-5xl text-orange-hot md:text-6xl">Overalled</p>
          <p className="label mt-3 text-white/85">Pressure Washing LLC</p>
          <p className="mt-8 max-w-sm leading-relaxed text-white/85">
            {site.bio}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="label text-water">Visit</p>
          <span className="rule mt-4 bg-water/60" aria-hidden />
          <ul className="mt-6 space-y-3 text-white/90">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-area" className="nav-link hover:text-white">
                Service area
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="label text-water">Contact</p>
          <span className="rule mt-4 bg-water/60" aria-hidden />
          <address className="not-italic">
            <a
              href={telHref(site.phone)}
              className="mt-6 block font-display text-2xl text-white md:text-3xl"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-white/85 hover:text-white"
            >
              {site.email}
            </a>
            <p className="mt-6 text-white/85">
              {site.locality}, {site.region} {site.postalCode}
            </p>
          </address>
          <p className="mt-8 leading-relaxed text-white/80">
            {areas.join(" · ")}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-white/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.award}.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="nav-link hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="nav-link hover:text-white">
              Terms
            </Link>
            <a href="/llms.txt" className="nav-link hover:text-white">
              llms.txt
            </a>
            <a href={site.facebook} className="nav-link hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
