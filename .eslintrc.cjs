module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    //기본 설정
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression',
      },
    ],
    // 'max-lines-per-function': ['error', 10],
    'max-depth': ['error', 1],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'next',
            group: 'builtin',
          },
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: '@MyDesignSystem/**',
            group: 'internal',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['src/**', '@MyDesignSystem/**'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
