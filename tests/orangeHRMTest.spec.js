import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  const locator = page.getByRole('heading', { name: 'Dashboard' });
  await locator.isVisible();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Dashboard');
  await page.getByRole('listitem').filter({ hasText: 'EJBED EJBED' }).locator('i').click();
  await expect(page.getByRole('listitem').filter({ hasText: 'EJBED EJBED' }).locator('i')).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'EJBED EJBED' }).locator('i').click();
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Time' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recruitment' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'My Info' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Performance' })).toBeVisible();
});