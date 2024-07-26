/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'raw.githubusercontent.com', 
      'giphy.com', 
      'media0.giphy.com'
    ],
  },
};

module.exports = nextConfig;
