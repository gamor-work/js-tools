module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // 'no-console': 'error',
    'no-debugger': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-non-null-assertion': 'off',
    'no-explicit-any': 'off',
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-extra-semi': 'error',
  },
}
