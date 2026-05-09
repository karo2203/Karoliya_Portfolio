import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: any, { dev }: { dev: boolean }) => {
    // Helps when disk space is low / filesystem is constrained (e.g. OneDrive),
    // since webpack's persistent cache writes large pack files.
    if (dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
