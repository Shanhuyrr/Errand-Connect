import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Errand-Connect',
  assetPrefix: '/Errand-Connect/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
