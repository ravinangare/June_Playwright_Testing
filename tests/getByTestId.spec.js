import{test,expect} from '@playwright/test'
import { prependOnceListener } from 'process';

test("Get By Data Test Id Test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const userProfileCard = await page.getByTestId("user-profile-card");
    await expect(userProfileCard).toBeVisible();
    const profileName = await page.getByTestId("profile-name").textContent();
    await expect(profileName).toEqual("John Doe")
})