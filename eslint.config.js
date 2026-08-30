import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**']
  },
  jsxA11y.flatConfigs.recommended,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
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
