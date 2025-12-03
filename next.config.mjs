/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // REMOVA a condição e coloque o texto direto
  basePath: '/mental', 

  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;