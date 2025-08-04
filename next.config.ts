import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NODE_BASEPATH,
  Rewrites: "",
  assetPrefix: process.env.NODE_BASEPATH,
  Redirects: "",
  Headers: "",
  appDir: true,  // 启用App Router
  generateBuildId: async () => {
    return '894905469';
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV,
  },
  // 路由
  // exportPathMap: async function (
  // ) {
  //   return {
  //   }
  // },
};

export default nextConfig;
