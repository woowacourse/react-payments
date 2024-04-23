module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-use-before-define': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'max-depth': ['error', 1],
    'max-params': ['error', 2],
    'import/no-unresolved': ['off'],
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
  },
};
