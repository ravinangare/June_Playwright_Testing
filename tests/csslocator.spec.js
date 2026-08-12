// CSS Locator.
// 1. Tag Name
import { test, expect } from '@playwright/test';
// 1. Tag Name
test("CSS Locator Test using TagName",async({page})=>{
    await  page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input').nth(1).fill("admin");
    await page.locator('input').nth(2).fill("admin123");
    await page.locator('button').click();
// 2. Locate by ID
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#name").fill("admin")

// 3. Locate by class
    await page.locator('.form-control').nth(1).fill("admin@gmail.com");

// 4. locate by other attribute
    await page.locator("input[placeholder='Enter Phone']").fill("9423111564")    

    await page.waitForTimeout(2000)
// 5. Combine Multiple Attributes    
    await page.locator("input[type='text'][placeholder='Enter Phone']").clear();
    await page.locator(".form-control#phone").fill("8830158607")

// 6. parent-child (>)
    await page.locator("div.form-group>textarea").fill("At post Lokhandi Sawargaon");   

// descendent selector
    await page.locator("div.post-body.entry-content input#male").click();    

// Direct Sibling (+)
    await page.locator("input + label[for='female']").click();   
    
// General Sibling (~)
    await page.locator("input ~ label[for='sunday']").check();  
    await page.locator("select#colors>option ~ option[value='blue']").click()  
    await page.locator("option[value='red'] ~ option[value='yellow']").click()
// First child
    await page.locator("#colors>option:first-child").click();  
// Last child      
    await page.locator("#colors>option:last-child").click(); 
// Nth child    
    await page.locator("#colors>option:nth-child(2)").click(); 

// starts with attribute(^=)
    await page.locator("[id^='mon']").check();
// Ends with attribute ($=) 
    await page.locator("[id$='rday']").check();
// contains Attribute (*=)
    await page.locator("[id*='dnes']").check();

    await page.waitForTimeout(5000);
})
