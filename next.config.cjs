/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'stats.wateraday.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
