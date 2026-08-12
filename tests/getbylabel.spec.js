import{test,expect} from '@playwright/test'

test('Get By Label Locator',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    const EmailAddress = await page.getByLabel("Email Address:");
    await EmailAddress.fill("utkarshaa.academy@gmail.com");

    const password = await page.getByLabel("Password:");
    await password.type("P@ssword@123$")

    const Age = await page.getByLabel("Your Age:");
    await Age.pressSequentially("42",{delay:2000})

    const StandardRedioBtn = await page.getByLabel("Standard");
    await StandardRedioBtn.click();

     await page.waitForTimeout(2000);

    const ExpressRedioBtn = await page.getByLabel("Express");
    await ExpressRedioBtn.click();

   

    await page.goto("https://testautomationpractice.blogspot.com/");
    const male = await page.getByLabel("Male",{exact:true});
    await male.click()

     await page.waitForTimeout(5000);
})