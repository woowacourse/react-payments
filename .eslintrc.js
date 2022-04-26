module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'class-methods-use-this': [0],
    'no-alert': 'warn',
    'no-console': 'warn',
  },
};
