import{test,expect} from '@playwright/test'

test('Get By Text Locator',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    const paragraphText = await page.getByText("This paragraph contains some").textContent();
    await expect(paragraphText).toContain("This paragraph contains some important text that you might want to locate.")
    console.log(paragraphText);

    const listItem1 = await page.getByText("List item").nth(0).textContent();;
    expect(listItem1).toContain("List item 1");

     const listItem2 = await page.getByText("List item").nth(1).textContent();;
     expect(listItem2).toContain("List item 2 with link");

    const link = await page.getByText("link",{exact:true}).textContent();
    expect(link).toContain("link");
   // await link.click();

    await page.getByText("Submit Form").click();
   
})