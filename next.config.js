import withPWA from "./lib/next-pwa-wrapper.cjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Add this line
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.clerk.com", "utfs.io"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/conversations",
        permanent: true,
      },
    ];
  },
};

const PWAWrapper = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default PWAWrapper(nextConfig);