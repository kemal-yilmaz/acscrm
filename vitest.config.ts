import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['node_modules/**', 'tests/e2e/**', '.next/**'],
    coverage: {
      provider: 'v8',
      all: false,
      reporter: ['text', 'html'],
      include: ['app/page.tsx', 'app/api/**'],
      exclude: [
        'tests/e2e/**',
        'e2e/**',
        'playwright.config.ts',
        'app/(layouts)/**',
        '**/*.test.*',
      ],
    },
  },
});
