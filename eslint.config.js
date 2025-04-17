import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      import: eslintPluginImport,
      'react-hooks': eslintPluginReactHooks,
      storybook: eslintPluginStorybook,
      'react-refresh': eslintPluginReactRefresh,
      '@typescript-eslint': eslintPluginTypeScript,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'sibling'],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '@/*', group: 'internal' },
            { pattern: './*', group: 'sibling' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  },
];
