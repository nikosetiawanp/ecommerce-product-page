/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ecommerce-product-page",
  assetPrefix: "/ecommerce-product-page/",
  reactStrictMode: true,

  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};

module.exports = nextConfig;
