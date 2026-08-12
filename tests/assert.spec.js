import{test,expect}from'@playwright/test';
// Assertion - Types of Assertions
// Hard Assertion / Default Assertion - If assertion fails, test will fail and stop executing further steps
// Soft Assertion - If assertion fails, test will fail but will continue executing further steps
test.describe("Login Module",()=>{
 test.describe.configure({
        mode: 'default',
        retries: 2,
        timeout : 90000
    })


test("Assertion Test",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html")
    const inputbox2 = await page.locator("input#input2").first();
    await expect(inputbox2).toBeHidden();
    await page.getByText("Toggle Input Box 2").click();
    await expect.soft(inputbox2).toBeVisible(); // soft assertion - if this fails, test will continue executing further steps
    await inputbox2.fill("Utkarshaa Academy");
    await expect.soft(inputbox2).toHaveValue('Utkarshaa Academy')
    await page.screenshot({
      path: 'screenshots/fullpage.png',
      fullPage:true})
    await expect.soft(page.locator("h3.post-title.entry-title")).toContainText('Hidden Elements')
    await expect(page.locator("h3.post-title.entry-title")).toHaveText('Hidden Elements & AJAX')
    await expect(page.locator("h3.post-title.entry-title")).toHaveAttribute('class','post-title entry-title')
    await expect(page.getByText("Toggle Input Box 2")).toHaveCSS('display','inline-block')
    await expect(page.getByText("Toggle Input Box 2")).toBeEnabled()
    await expect(page.getByText("Toggle Input Box 2")).toBeVisible()
    const checkbox2 = await page.locator("input#checkbox2");
    await expect(checkbox2).toBeHidden();
    await page.getByText("Toggle Checkbox 2").click();
    await expect(checkbox2).not.toBeHidden();
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
    await page.waitForTimeout(5000)
})
})
// most commonly used assertions are:
// toBeVisible()
// toBeHidden() 
// toBeChecked()
// not.toBeChecked()
// toHaveValue()
// not.toBeHidden()
// toContainText() - for text content
// not.toContainText() - for text content
// toHaveTitle() - for page title
// not.toHaveTitle() - for page title
// toHaveURL() - for page URL
// not.toHaveURL() - for page URL
// toHaveAttribute() - for element attribute
// not.toHaveAttribute() - for element attribute
// toHaveClass() - for element class
// not.toHaveClass() - for element class
// toHaveCount() - for element count
// not.toHaveCount() - for element count
// toHaveScreenshot() - for element screenshot
// not.toHaveScreenshot() - for element screenshot
// toHaveText() - for element text
// not.toHaveText() - for element text
// toHaveValue() - for element value    
