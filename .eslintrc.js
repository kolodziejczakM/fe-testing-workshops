module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'testing-library', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off', //  Starting from the release 17 of React, JSX is automatically transformed without using React.createElement
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'jest/no-identical-title': 'error',
  },
};
