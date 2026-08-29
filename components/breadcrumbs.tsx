import Link from "next/link";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.path}-${item.name}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden className="text-brass">
                  /
                </span>
              ) : null}
              {last ? (
                <span aria-current="page" className="label text-white/90">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="nav-link label text-white/85 hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
