import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('shoes');
  await page.getByRole('link', { name: 'shoes for men in Men\'s' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page1 = await page1Promise;
//  await page1.getByRole('link', { name: 'Visit brand store' }).click();
  await expect(page.getByRole('link', { name: 'Flipkart', exact: true })).toBeVisible();
  await expect(page.locator('#container')).toContainText('Electronics');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page2 = await page2Promise;
  await expect(page2.locator('._1psv1zeb9._1psv1ze0._7dzyg24v._1psv1zek9 > div > ._1psv1zeb9._1psv1ze0._1o6mltljo > ._1psv1zeb9._1psv1ze0._1psv1ze29').first()).toBeVisible();
});