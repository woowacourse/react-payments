const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: true,
  },

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Components/*': path.resolve(__dirname, '../src/components'),
      '@Constants/*': path.resolve(__dirname, '../src/constants'),
      '@Hooks/*': path.resolve(__dirname, '../src/hooks'),
      '@Pages/*': path.resolve(__dirname, '../src/pages'),
      '@Utils/*': path.resolve(__dirname, '../src/utils'),
      '@Types/*': path.resolve(__dirname, '../src/types'),
      '@Domains/*': path.resolve(__dirname, '../src/domains'),
      '@Asset/*': path.resolve(__dirname, '../src/assets'),
      '@Styles/*': path.resolve(__dirname, '../src/styles'),
      '@Contexts/*': path.resolve(__dirname, '../src/contexts'),
      '@Animations/*': path.resolve(__dirname, '../src/animations'),
    };

    return config;
  },
};
