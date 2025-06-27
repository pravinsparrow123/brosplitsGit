/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // enables static export
  basePath: isProd ? '/brosplitsGit' : '', // set basePath only in production
  trailingSlash: true,
};

export default nextConfig;
