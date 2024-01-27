/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Imgur
        hostname: 'i.imgur.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
