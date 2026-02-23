import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // ✅ For picsum placeholder images (development)
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // ✅ For Sanity CDN images (production)
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;