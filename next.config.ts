import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'build',
  basePath: "",
  Rewrites: "",
  Redirects: "",
  Headers: "",
  generateBuildId: async () => {
    return '894905469';
  },
  env: {
    NODE_ENV: process.env.NEXT_PUBLIC_ENV === 'production' ? 'production' : 'development',
  },
  // 路由
  // exportPathMap: async function (
  // ) {
  //   return {
  //   }
  // },
};

export default nextConfig;
