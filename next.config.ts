import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lionsclubs.org',
      },
    ],
    // Enable image optimization for Netlify
    unoptimized: false,
  },
  // Ensure output is compatible with Netlify
  output: 'standalone',
};

export default nextConfig;


