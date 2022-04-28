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
    'plugin:storybook/recommended',
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
      {
        namedComponents: 'arrow-function',
      },
    ],
    'class-methods-use-this': [0],
    'no-alert': 'off',
    'no-console': 'warn',
    'react/jsx-props-no-spreading': [0],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', 'stories/**'],
      },
    ],
    'react/prop-types': [0],
    'jsx-a11y/label-has-associated-control': ['off'],
  },
};
