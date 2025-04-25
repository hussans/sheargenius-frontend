import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aaronsblob123.blob.core.windows.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;