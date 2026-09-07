import js from '@eslint/js'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginImport from 'eslint-plugin-import-x'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', '.wrangler/**']
  },
  jsxA11y.flatConfigs.recommended,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      'import-x': eslintPluginImport
    },
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: ['type', 'builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'never'
        }
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: '*', prev: 'import' },
        { blankLine: 'any', next: 'import', prev: 'import' },
        { blankLine: 'always', next: 'export', prev: '*' },
        { blankLine: 'any', next: 'export', prev: 'export' }
      ],
      'no-console': 'warn',
      'astro/no-set-html-directive': 'error',
      'astro/no-unsafe-inline-scripts': 'error',
      'astro/no-unused-css-selector': 'warn',
      'astro/prefer-class-list-directive': 'warn',
      'astro/prefer-object-class-list': 'warn',
      'astro/prefer-split-class-list': 'warn',
      'astro/sort-attributes': 'warn'
    }
  }
]
