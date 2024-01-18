/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:3000", "e7.pngegg.com", "images.saatchiart.com"],
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
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    localeDetection: false,
  },
};

module.exports = nextConfig;
