import{test,expect} from '@playwright/test'
import { constants } from 'buffer';

test('date picker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const selectDate = page.locator("input#datepicker");

    await selectDate.click()
    // await selectDate.fill("09/03/2024");
    // await page.waitForTimeout(3000);
    // await selectDate.press('Tab');
   // await selectDate.click();

    const date = 16;
    const prevBtn = await page.locator("a.ui-datepicker-prev");
    const NextBtn = await page.locator("a.ui-datepicker-next");

     await prevBtn.click();
     await page.locator(`a[data-date='${date}']`).click();
    await page.waitForTimeout(10000);
})

test('date picker one',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const month = "Jun"
    const year = "2036"
    const date = "15"

    await page.locator("input#txtDate").click()
    await page.locator(".ui-datepicker-month").selectOption(month);
    await page.locator(".ui-datepicker-year").selectOption(year)
    await page.locator(`a[data-date='${date}']`).click()
    await page.waitForTimeout(5000);
    
    await page.locator("#start-date").fill("2026-06-20");
    await page.locator("#end-date").fill("2026-12-30");
    await page.getByRole('button',{name :"Submit"}).first().click();
    await page.waitForTimeout(5000)
})

test('date picker test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
  await page.locator('div').filter({ hasText: /^July$/ }).click();
  await page.getByText('October').click();
  await page.getByText('15').click();

  const date = new Date();

  const monthName = date.toLocaleString('default',{month: 'long'});
  console.log(monthName);
  await console.log(date.getMonth());
  await page.waitForTimeout(5000);

});