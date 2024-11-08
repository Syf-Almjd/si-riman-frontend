const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages({
  images: {
    distDir: 'dist', // Custom directory for build output
    disableStaticImages: true,
    domains: ['images.unsplash.com'],
  }
});