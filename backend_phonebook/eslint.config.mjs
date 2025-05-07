import js from '@eslint/js'
import globals from 'globals'
import stylisticJs from '@stylistic/eslint-plugin-js'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      // Aquí está el cambio clave:
      // "@stylistic/js" en lugar de "@stylistic"
      '@stylistic/js': stylisticJs,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Estas reglas ya están correctamente prefijadas
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
      // ... otras reglas
      'no-unused-vars': ['error', { argsIgnorePattern: '^(result|res)$' }],

      // Reglas sin prefijo
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
])
