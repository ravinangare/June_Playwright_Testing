//import{test,expect} from '@playwright/test'

const {test,expect} = require ('@playwright/test')

test('First Test',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/");
    await expect(page).toHaveTitle('Software Testing');
    const logo = await page.locator("//img[@alt='Software DEVELOPMENT Testing']").last();
    expect(logo).toBeVisible();
    await logo.isVisible();
})