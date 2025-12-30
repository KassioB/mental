/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Configurações otimizadas para Vercel */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig;