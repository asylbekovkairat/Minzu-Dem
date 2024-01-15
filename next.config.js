/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:3000", "e7.pngegg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
