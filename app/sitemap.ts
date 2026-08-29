import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-29");

  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({
    url: `${site.domain}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/services", 0.9, "monthly"),
    ...services.map((service) =>
      page(`/services/${service.slug}`, 0.8, "monthly"),
    ),
    page("/work", 0.8, "weekly"),
    page("/service-area", 0.8, "monthly"),
    page("/about", 0.6, "yearly"),
    page("/contact", 0.7, "yearly"),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
  ];
}
