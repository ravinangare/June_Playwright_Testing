import{test,expect} from '@playwright/test'

test('Hidden Element Test @sanity',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html")
    const inputbox2 = await page.locator("input#input2").first();
    await expect(inputbox2).toBeHidden();
   // await page.getByText("Toggle Input Box 2").click();
    await expect(inputbox2).toBeVisible({timeout:10000});
    await inputbox2.fill("Utkarshaa Academy");
    await expect(inputbox2).toHaveValue('Utkarshaa Academy')

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

test('AJAX status changes from Ready to loaded @regression', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');

    await expect(page.locator('body')).toContainText('Status: Ready');

    await page.getByRole('button', { name: 'Load AJAX Content' }).click();

    await expect(page.locator('body')).toContainText('Status: AJAX content loaded');
});

test('AJAX content is loaded and visible', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');

    await page.getByRole('button', { name: 'Load AJAX Content' }).click();

    await expect(page.locator('body')).toContainText('AJAX content loaded');
});
test('AJAX content is hidden after loading', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');     

    await page.getByRole('button', { name: 'Load AJAX Content' }).click();

    await expect(page.locator('body')).toContainText('AJAX content loaded');        

    await page.getByRole('button', { name: 'Hide AJAX Content' }).click();

    await expect(page.locator('body')).not.toContainText('AJAX content loaded');
})