import{test,expect} from '@playwright/test'
test('Get By Alt Text',async({page})=>{
    await page.goto("https://playwright.dev/")
    const playwrightLogo = await page.getByAltText("Playwright logo").first();
    await expect(playwrightLogo).toBeVisible();
    
    await page.goto("https://utkarshaaacademy.com/");
    const logo = await page.getByAltText('Software DEVELOPMENT Testing').nth(1);
    expect(await logo).toBeVisible();
})

test('Get By Alt Text Locator',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/");
    const logo = await page.getByAltText('Software DEVELOPMENT Testing').nth(1);
    expect(await logo).toBeVisible();
})