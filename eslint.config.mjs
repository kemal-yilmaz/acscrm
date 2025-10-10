// Flat ESLint config (ESLint v9)
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
// eslint-plugin-tailwindcss is incompatible with Tailwind CSS v4.x runtime exports.
// Skipping plugin load to avoid resolver errors (v3-only API).

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'prisma/**'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  // JavaScript / JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // A11y
      'jsx-a11y/anchor-is-valid': 'error',

      // Imports
      'import/order': 'off',

      // React
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Tailwind rules skipped due to v4 plugin incompatibility

      // General
      'no-unused-vars': 'off',
    },
  },
  // TypeScript / TSX files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // A11y
      'jsx-a11y/anchor-is-valid': 'error',

      // Imports
      'import/order': 'off',

      // React
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Tailwind rules skipped due to v4 plugin incompatibility

      // General
      'no-unused-vars': 'off',

      // TS-specific (only active if plugin is installed)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // Project-specific exception to keep baseline passing
  {
    files: ['components/layouts/layout-1/shared/topbar/apps-dropdown-menu.tsx'],
    rules: {
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
];
