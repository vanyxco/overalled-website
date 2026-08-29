import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/services", "/work", "/about", "/contact"].map(
    (path) => ({
      url: `${site.domain}${path}`,
      lastModified,
    }),
  );
  const serviceRoutes = services.map((service) => ({
    url: `${site.domain}/services/${service.slug}`,
    lastModified,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
