import{test,expect} from '@playwright/test'

test("Handle Shadow Dom Element",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    const textbox = await page.locator("input[type='text']").last();
    await textbox.fill("Utkarshaa Academy");
    await page.locator("input[type='checkbox']").last().check();
    
    await page.waitForTimeout(5000);
})