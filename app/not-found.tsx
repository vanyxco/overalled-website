import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Overalled Pressure Washing" },
  description:
    "That page is not on OveralledPressureWashing.com. Use the links below for services, work, or a free quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-28 md:px-8 md:py-36">
        <p className="label text-orange">404</p>
        <span className="rule mt-5" aria-hidden />
        <h1 className="display mt-6 text-4xl text-navy md:text-6xl">
          That page is not here.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-mute">
          The link may be old. These are the pages that are.
        </p>
        <ul className="mt-10 space-y-3">
          <li>
            <Link href="/" className="nav-link text-navy">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link text-navy">
              Services
            </Link>
          </li>
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="nav-link text-navy"
              >
                {service.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/work" className="nav-link text-navy">
              Work
            </Link>
          </li>
          <li>
            <Link href="/service-area" className="nav-link text-navy">
              Service area
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link text-navy">
              Request a quote
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
