const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
    domains: ['drive.google.com'], // Allow Google Drive domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc/**',
      },
    ],
  },
  // Enable compression
  compress: true,
  // Remove unused CSS
  swcMinify: true,
  // Optimize production build
  productionBrowserSourceMaps: false,
  // Copy static assets to the output directory
  async rewrites() {
    return []
  },
  // Ensure static assets are copied to the output directory
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/,
      type: 'asset/resource',
    })
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig) 