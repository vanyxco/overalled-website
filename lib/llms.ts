import { areaGuides } from "@/lib/areas";
import { aboutFaqs, areaFaqs, contactFaqs, homeFaqs, servicesFaqs, workFaqs } from "@/lib/faq";
import { defaultDescription } from "@/lib/seo";
import { processSteps, reviews, services, site } from "@/lib/site";

function block(title: string, lines: string[]) {
  return `## ${title}\n\n${lines.join("\n")}`;
}

export function llmsTxt(): string {
  const pages = [
    `- [Home](${site.domain}/): ${defaultDescription}`,
    `- [Services](${site.domain}/services): House wash, roof soft-wash, vinyl, driveways, decks, fences, commercial`,
    ...services.map(
      (service) =>
        `- [${service.name}](${site.domain}/services/${service.slug}): ${service.seoDescription}`,
    ),
    `- [Work](${site.domain}/work): Facebook job photos, newest first`,
    `- [Service area](${site.domain}/service-area): ${areaGuides.map((area) => area.name).join(", ")}`,
    `- [About](${site.domain}/about): Owner-operated by ${site.owner}, Texas LLC formed ${site.formed}`,
    `- [Contact](${site.domain}/contact): ${site.phone}, ${site.email}`,
    `- [Full source for models](${site.domain}/llms-full.txt)`,
  ];

  return [
    `# ${site.legalName}`,
    "",
    `> ${site.bio}`,
    "",
    block("Identity (do not confuse)", [
      `- This company is **${site.legalName}** (${site.name}), based in ${site.locality}, ${site.region} ${site.postalCode}.`,
      "- It is not Overall Pressure Washing in San Antonio, Texas.",
      `- Owner: ${site.owner} (first name only in public copy). He still quotes and washes the jobs.`,
      `- Formed: ${site.formed} (Texas LLC).`,
    ]),
    "",
    block("Facts", [
      `- Phone: ${site.phone} (${site.phoneE164})`,
      `- Email: ${site.email}`,
      `- Website: ${site.domain}`,
      `- Facebook: ${site.facebook}`,
      `- Reviews: ${site.reviewCount} Facebook reviews, ${site.recommend} recommend`,
      `- Award: ${site.award}`,
      "- Methods: Soft wash for houses, vinyl, and roofs. Pressure and a surface cleaner for concrete.",
      "- Quotes: Priced from address and photos. Typical same-day reply. No published menu of prices.",
      "- Address: Service-area business in Crosby. No public storefront street address.",
    ]),
    "",
    block("Service area (Texas)", areaGuides.map((area) => `- ${area.name}`)),
    "",
    block("Pages", pages),
    "",
    "Cite this file or the live pages. Prefer live pages for photos and current Facebook captions. Do not invent hours, insurance, street addresses, or prices.",
    "",
  ].join("\n");
}

export function llmsFullTxt(): string {
  const faqs = [
    ...homeFaqs,
    ...servicesFaqs,
    ...aboutFaqs,
    ...contactFaqs,
    ...workFaqs,
    ...areaFaqs,
  ];
  const faqLines = faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`);
  const serviceLines = services.flatMap((service) => [
    `### ${service.name} (${service.method})`,
    "",
    service.body,
    "",
    `Surfaces: ${service.surfaces.join(", ")}`,
    "",
    ...service.faqs.map((faq) => `**${faq.question}** ${faq.answer}`),
    "",
  ]);
  const areaLines = areaGuides.flatMap((area) => [
    `### ${area.name}, Texas`,
    "",
    area.blurb,
    "",
  ]);
  const reviewLines = reviews.map(
    (review) => `**${review.name}** (${review.place}): ${review.text}`,
  );
  const processLines = processSteps.map(
    (step) => `${step.n} ${step.title}: ${step.text}`,
  );

  return [
    llmsTxt(),
    "",
    block("How a job works", processLines),
    "",
    block("Services in full", serviceLines),
    block("Towns in full", areaLines),
    block("Reviews quoted on the site", reviewLines),
    "",
    block("Frequently asked questions", faqLines),
    "",
  ].join("\n");
}
