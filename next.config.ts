import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.icons8.com" }], // Add your external domains here
  },
};

export default nextConfig;
