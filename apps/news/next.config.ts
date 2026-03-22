import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@ggclube/ui", "@ggclube/brand", "@ggclube/seo", "@ggclube/analytics"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
