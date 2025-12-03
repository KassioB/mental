/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Define o caminho base APENAS em produção
  basePath: process.env.NODE_ENV === 'production' ? '/mental' : '',

  images: {
    unoptimized: true,
  },
  
  // Remova o assetPrefix para evitar conflitos, o basePath já cuida disso
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;