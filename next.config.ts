import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ], // Add your domain here
  },
  reactStrictMode: true, // Enable stricter type checking in development

  /* more config options here */
};

export default nextConfig;
