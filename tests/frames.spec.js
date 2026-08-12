import{test,expect} from '@playwright/test'

test('Handling Frames',async({page})=>{
    await page.goto("https://utkarshaaacademy.com/video")
    const frame1 = await page.frameLocator("iframe[data-aid='VIDEO_VIDEO_RENDERED0']").first();
    await frame1.locator("//button[@aria-label='Play video']").click();
    await page.waitForTimeout(5000);
    const frame2 = await page.frameLocator("iframe[data-aid='VIDEO_VIDEO_RENDERED1']").first();
    await frame2.locator("//button[@aria-label='Play video']").click();

    await page.getByText("Corporate Training").first().click();
    await page.waitForTimeout(5000);
})

test('Nested Frame',async({page})=>{
    await page.goto("https://www.dezlearn.com/nested-iframes-example/");
    const parentFrame = await page.frameLocator("#parent_iframe");
    const childFrame = await parentFrame.frameLocator("#iframe1");
    await childFrame.getByText("Click Here").click();
    await page.waitForTimeout(5000)
})