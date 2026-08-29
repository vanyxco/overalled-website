import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "GoogleOther",
  "ClaudeBot",
  "Claude-User",
  "Claude-Search",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "FacebookBot",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
  "YouBot",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain.replace(/^https:\/\//, ""),
  };
}
