module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'jest',
		'react',
		'react-hooks',
		'jsx-a11y',
		'import',
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'prettier',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	env: {
		'jest/globals': true,
	},
	settings: {
		'import/resolver': {
			webpack: {
				extensions: ['.ts', '.tsx'],
			},
		},
		'import/parsers': {'@typescript-eslint/parser': ['.ts', '.tsx']},
		react: {
			version: 'detect',
		},
		jest: {
			version: require('jest/package.json').version,
		},
	},
}
