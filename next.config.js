/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static export
  basePath: "/Portfolio", // Replace with your GitHub repo name
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  experimental: {
    serverActions: false, // ❌ Disable Server Actions for static export
  },
};

module.exports = nextConfig;
