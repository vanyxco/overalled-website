import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Link",
            value:
              "</llms.txt>; rel=\"alternate\"; type=\"text/plain\", </llms-full.txt>; rel=\"alternate\"; type=\"text/plain\"",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
