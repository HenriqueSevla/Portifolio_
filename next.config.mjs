/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { typedRoutes: true },
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'images.unsplash.com' },
        { protocol: 'https', hostname: 'picsum.photos' }
      ]
    }
  }
  export default nextConfig
  