/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    // General
    'no-unused-vars': 'off',

    // React
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Next.js
    '@next/next/no-img-element': 'off',

    // A11y
    'jsx-a11y/anchor-is-valid': 'error',

    // Imports
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],

    // Tailwind / Metronic
    'tailwindcss/no-custom-classname': 'off',
  },
  ignorePatterns: ['.next/**', 'node_modules/**', 'prisma/**'],
};

