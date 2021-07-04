module.exports = {
  extends: ['react-app', 'prettier'],
  rules: {
    'max-depth': ['error', 2],
    'import/no-anonymous-default-export': 'off',
  },
  plugins: ['jsx-a11y', 'simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
