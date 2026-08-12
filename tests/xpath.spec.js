import{test,expect} from '@playwright/test'

test("Xpath Locator Test",async({page})=>{
    
    // xpath - xml(extensible markup language) path 
    await page.goto("https://testautomationpractice.blogspot.com/")
    // locate element using attribute
    await page.locator("//input[@placeholder='Enter Name']").fill("Ravi Nangare");  // xpath - Relative Xpath
//            input[placeholder='Enter Name']  ---- css selector
    // locate element using text
    await page.locator("//button[text()='START']").click();
    await page.waitForTimeout(1000)
    await page.locator("//button[text()='STOP']").click();
    // contains text
     await page.waitForTimeout(1000)
    await page.locator("//button[contains(text(),'STA')]").click()
    // contains with attribute
    await page.locator("//input[contains(@placeholder,'EMail')]").fill("ravi.nangare@gmail.com")
    // starts with attribute
    await page.locator("//input[starts-with(@placeholder,'Enter P')]").fill("9423111564")
    // multiple attribute using and
    await page.locator("//input[@type='text' and @id='phone']").clear();
    // multiple attribute using OR
    await page.locator("//input[@type='text1' or @id='phone']").fill("8830158607")
    // parent to child
    await page.locator("//div[@class='form-group']//textarea").fill("Ambegaon Bk")
    // child to parent
    await page.locator("//label[text()='Male']/parent::div").click()
    // preceding sibling 
    await page.locator("//label[text()='Female']/preceding-sibling::input").click()
    // following-sibling
    await page.locator("//input[@id='female']/following-sibling::label").click()
    await page.locator("//input[@type='checkbox']/following-sibling::label[@for='saturday']").click()
    // ancestor
    await page.locator("//label[text()='Saturday']/ancestor::div[@class='form-group']/label").isVisible()
    expect(await page.locator("//label[text()='Saturday']/ancestor::div[@class='form-group']/label")).toBeVisible();

    // descendant
    await page.locator("//div[@class='content']/descendant::label[@for='days']").isVisible();
    console.log(await page.locator("//div[@class='content']/descendant::label[@for='days']").textContent())
    
    // index
    await page.locator("(//div[@class='content']/descendant::label)[9]").click();

    // last
    console.log(await page.locator("(//div[@class='content']/descendant::label)[last()]").textContent());

    // Normalize space
    await page.getByText("PlaywrightPractice").click()
    console.log(await page.locator("//h3[normalize-space()='PlaywrightPractice']").textContent());
    await page.waitForTimeout(5000)

})