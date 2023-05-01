const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  jest: {
    configure: {
      moduleNameMapper: {
        '^\\@Domains/(.*)$': '<rootDir>/src/domains/$1',
        '^\\@Constants/(.*)$': '<rootDir>/src/constants/$1',
        '^\\@Hooks/(.*)$': '<rootDir>/src/hooks/$1',
        '^\\@Contexts/(.*)$': '<rootDir>/src/contexts/$1',
      },
    },
  },
};
