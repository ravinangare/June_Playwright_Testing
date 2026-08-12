import{test,expect} from '@playwright/test'
import fs from 'fs'
// const {test,expect} = require('@playwright/test')
// const fs = require('fs')

test('Single File upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.setInputFiles("#singleFileInput","./node_modules/data/info.txt")
    await page.getByText("Upload Single File").click();
    expect (await page.locator("#singleFileStatus")).toContainText("info.txt");
    await page.waitForTimeout(5000)
})

test('Multiple File upload',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.setInputFiles("#multipleFilesInput",["./node_modules/data/info.txt","./node_modules/data/user.txt","C:/Users/GR0002TU/Downloads/JavaScript_Variables.pdf"])/
    await page.getByText("Upload Multiple Files").click();
    expect (await page.locator("#multipleFilesStatus")).toContainText("info.txt, Size: 19 bytes, Type: text/plain user.txt");
    await page.waitForTimeout(5000)
})
test('Download Files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');
    await page.getByRole('textbox', { name: 'Enter Text:' }).click();
    await page.getByRole('textbox', { name: 'Enter Text:' }).fill('utkarshaa academy pune');
    await page.getByRole('button', { name: 'Generate and Download Text' }).click();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', { name: 'Download Text File' }).click();
    const download = await downloadPromise;
    await download.saveAs('downloads/info1.txt')
    expect(fs.existsSync('downloads/info1.txt')).toBeTruthy()
})