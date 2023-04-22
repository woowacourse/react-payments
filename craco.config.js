const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Constant': path.resolve(__dirname, 'src/constant'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Domains': path.resolve(__dirname, 'src/domains'),
    },
  },
};
