import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  async redirects() {
    return [
      // Force non-www canonical domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.firstmotorsbsr.com" }],
        destination: "https://firstmotorsbsr.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
