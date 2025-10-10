// eslint-disable-next-line @typescript-eslint/no-var-requires
const { test, expect } = require('@playwright/test');

test('home page shows dashboard after redirect', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/\/layout-1$/);
  await expect(
    page.getByRole('heading', { name: 'Dashboard', exact: true }),
  ).toBeVisible();
});
