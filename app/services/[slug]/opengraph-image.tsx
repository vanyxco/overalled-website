import { notFound } from "next/navigation";
import { ogSize, photoOgImage } from "@/lib/og-photo";
import { services } from "@/lib/site";

export const alt =
  "Overalled Pressure Washing service in Crosby, Huffman, and Lake Houston";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return photoOgImage({
    photoPath: service.hero,
    kicker: `Overalled · ${service.method}`,
    title: service.name,
  });
}
