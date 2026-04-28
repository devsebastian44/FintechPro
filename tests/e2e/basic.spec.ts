import { test, expect } from '@playwright/test';

// e2e test that runs in development and CI environments.
test('Fintech Trading Dashboard loads correctly', async ({ page }) => {
  await page.goto('/');

  // Check if main header is present
  const header = page.locator('h1');
  await expect(header).toBeVisible();

  // Validate that the Chart container is loaded (mock)
  const chartContainer = page.locator('.tv-lightweight-charts');
  await expect(chartContainer).toBeVisible();
});
