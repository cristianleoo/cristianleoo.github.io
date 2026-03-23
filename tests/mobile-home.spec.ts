import { expect, test } from '@playwright/test';

function isIgnorableConsoleError(message: string) {
  return message.includes('/_next/webpack-hmr');
}

test('homepage loads on mobile without crashing', async ({ page }) => {
  const consoleErrors: string[] = [];

  page.on('pageerror', (error) => {
    consoleErrors.push(error.message);
  });

  page.on('console', (message) => {
    if (message.type() === 'error' && !isIgnorableConsoleError(message.text())) {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(
    page.getByRole('heading', { name: /Cristian Leo/i }),
  ).toBeVisible();

  await expect(
    page.getByRole('link', { name: /View Experiments/i }),
  ).toBeVisible();

  expect(consoleErrors).toEqual([]);
});
