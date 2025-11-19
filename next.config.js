/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This enables AVIF support (faster than WebP)
    formats: ['image/avif', 'image/webp'],
  },
  // No rewrites needed since we've removed all dropdown sections
};

module.exports = nextConfig;