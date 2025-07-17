/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/ecommerce-product-page",
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
