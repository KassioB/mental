/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mental',
  assetPrefix: '/mental',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;