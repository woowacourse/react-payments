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
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // main - component, hooks, contexts, pages
              ['^(@|(component))(.*|$)'],
              ['^(@|hooks)(.*|$)'],
              ['^(@|contexts)(.*|$)'],
              ['^(@|pages)(.*|$)'],
              // side - utils, context, constants
              ['^(@|(assets|constants|utils))(.*|$)'],
              // style
              ['^(@|(styled-components|GlobalStyle))(/.*|$)'],
            ],
          },
        ],
      },
    },
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'max-depth': ['error', 2],
  },
};
