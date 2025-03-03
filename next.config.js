/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  basePath: "/Portfolio", // Replace with your GitHub repo name
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  experimental: {},
};

module.exports = nextConfig;
