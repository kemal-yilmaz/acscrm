import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Only pick E2E specs from tests/e2e
  testDir: 'tests/e2e',
  testMatch: ['**/*.spec.ts'],
  testIgnore: ['**/*.test.*'],

  use: {
    baseURL: 'http://localhost:3000',
  },
  reporter: 'list',
  retries: 0,
});
