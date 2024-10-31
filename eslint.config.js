import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',

        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'error',
        'vue/valid-v-for': 'error', 
        'vue/require-v-for-key': 'error',
        'vue/attribute-hyphenation': 'warn',

        'no-console': 'warn',
        'no-debugger': 'warn',
        'prefer-const': 'warn',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-multi-spaces': 'error',
        'camelcase': 'warn',
      },
  }
)