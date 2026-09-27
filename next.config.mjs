/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  async redirects() {
    return [
      // 1. Force non-www canonical domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.firstmotorsbsr.com" }],
        destination: "https://firstmotorsbsr.com/:path*",
        permanent: true,
      },
      // 2. Permanent 301 consolidation: /used-cars -> /buy
      {
        source: "/used-cars",
        destination: "/buy",
        permanent: true,
      },
      // 3. Permanent 301 consolidation: /used-cars/:slug -> /car/:slug
      {
        source: "/used-cars/:slug*",
        destination: "/car/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
