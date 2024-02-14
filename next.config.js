/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other routes as needed
    };
  },
};

module.exports = nextConfig;
