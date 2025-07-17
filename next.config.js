/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/ecommerce-product-page" : "",
  assetPrefix: isGithubPages ? "/ecommerce-product-page" : "",
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
