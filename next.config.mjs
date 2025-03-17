/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignora errores de ESLint al construir
      },
      runtime: 'edge',
};

export default nextConfig;
