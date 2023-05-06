const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-create-react-app', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin'
  },
  webpackFinal: async config => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
  docs: {
    autodocs: true
  }
};