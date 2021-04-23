module.exports = {
  extends: ['react-app', 'prettier'],
  rules: {
    'max-depth': ['error', 2],
    'import/no-anonymous-default-export': 'off',
  },
  plugins: ['jsx-a11y'],
};
