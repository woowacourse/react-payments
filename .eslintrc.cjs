module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'airbnb-base',
		'airbnb-typescript/base',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
	rules: {
		'max-depth': ['error', 2],
		'max-params': ['error', 2],
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/no-unresolved': 'off',
		'no-param-reassign': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-unused-vars': 'warn',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				'd.ts': 'never',
				'': 'never',
			},
		],
	},
	setting: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/parser': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
				moduleDirectory: ['node_modules', '@types'],
			},
			typescript: {},
		},
	},
};
