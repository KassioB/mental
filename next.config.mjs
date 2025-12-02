/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Substitua 'mental' pelo nome do seu repositório
  basePath: process.env.NODE_ENV === 'production' ? '/mental' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mental/' : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
