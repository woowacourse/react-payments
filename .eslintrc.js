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
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
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
    'react/jsx-filename-extension': [0],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
};
