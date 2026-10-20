/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    externalDir: true,
  },
  transpilePackages: ["framer-motion"],
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/contact',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
