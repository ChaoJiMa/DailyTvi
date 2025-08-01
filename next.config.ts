import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'docs',
  basePath: "",
  Rewrites: "",
  Redirects: "",
  Headers: "",
  generateBuildId: async () => {
    return '894905469';
  },
  env: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  },
  // 路由
  // exportPathMap: async function (
  // ) {
  //   return {
  //   }
  // },
};

export default nextConfig;
