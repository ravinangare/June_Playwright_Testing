import{test,expect} from '@playwright/test'

test("Filter Test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // specific text
   // await page.locator(".widget-content li a").filter({hasText: 'PlaywrightPractice'}).click();
   // partial text
  //  await page.locator(".widget-content li a").filter({hasText: 'PlaywrightPrac'}).click();
    // Exact match
  
   const BookName = await page.locator("table[name='BookTable']").filter({has: page.locator("//th[text()='BookName']")})
    await expect(BookName).toBeVisible();

    //  const BookName1 = await page.locator("table[name='BookTable']").filter({hasNot: page.locator("//th[text()='ID']")})
    // await expect(BookName1).not.toBeVisible();
    // await page.waitForTimeout(5000);

    await page.locator("button[name='start']").filter({visible:true}).click();
    await page.waitForTimeout(5000);
    const colors = await page.locator(".form-control#colors option").filter({hasNotText: 'Yellow'}).allTextContents();
    console.log(colors);

    await page.locator(".widget-content li a").filter({hasText: /^PlaywrightPractice$/}).click();

 
    // await page.goto("https://www.amazon.in")
    // await page.locator("#twotabsearchtextbox")
    // for(const color of colors){
    //     console.log(color)
    // }
    await page.waitForTimeout(5000)
})