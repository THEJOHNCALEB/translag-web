/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/thejohncaleb",
        permanent: false,
      },
      {
        source: "/deleteaccount",
        destination: "/delete-account",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
