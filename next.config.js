/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    reactStrictMode: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    domains: ["d38b8me95wjkbc.cloudfront.net"],
  },
};

module.exports = nextConfig;
