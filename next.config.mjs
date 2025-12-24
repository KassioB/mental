/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mental', // OBRIGATÓRIO: O nome exato do seu repo
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