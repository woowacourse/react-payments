module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-depth': ['error', 2],
    'arrow-parens': ['error', 'as-needed'],
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'default-case': 'off',
    'default-param-last': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'no-confusing-arrow': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
};
