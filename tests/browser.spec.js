import{test,expect, webkit, chromium, firefox} from '@playwright/test'

test('Multiple context example',async()=>{
    const browser = await firefox.launch();
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();
    await page1.goto("https://playwright.dev/docs/test-fixtures")
    await page2.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)
    await browser.close();
})



test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Jobs', description: 'Search Jobs' }).click();
  await page.getByRole('link', { name: 'Companies', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByText('MOST POPULARRESUME').click();
  await page1.locator('.innerCircle').first().click();
  await page1.getByText('Buy Now').click();
  await page1.waitForTimeout(5000)
});