// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['placeholder.com'],
//     },
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//       });
//       return config;
//     },
//   }
  


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['placeholder.com'], // Allows loading images from placeholder.com
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'], // Enables handling SVG files as React components
      });
      return config; // Ensure we return the modified config
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://champion-backend-elf5.onrender.com/api/:path*', // Proxy to Backend
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  