/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Ignora errores de ESLint al construir
      },
      async headers() {
        return [
          {
            source: '/favicon.ico',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000',
              },
            ],
          },
        ]
      }
};

export default nextConfig;
