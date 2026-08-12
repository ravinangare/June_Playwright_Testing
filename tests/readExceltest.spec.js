const {test,expect} = require('@playwright/test');
const { readExcel } = require('../utils/readExcel');

const excelData = readExcel('C:\\Users\\GR0002TU\\OneDrive\\Desktop\\usertestdata.xlsx');

excelData.forEach((data) => {

test(`Read data from json ${data.username}`,{tag: ['@smoke','@regression']}, async ({ page }) => {
    console.log(excelData);
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.waitForTimeout(5000)

  const employess = await page.locator("div[class='oxd-table-cell oxd-padding-cell'][role='cell'] div").filter({hasNot: page.getByText("Admin")})
  const emp_count = await employess.count();
  console.log(emp_count);
  for(let i = 0; i<emp_count;i++){
    console.log(await employess.nth(i).textContent());
  }
  await page.getByRole('cell', { name: 'Admin' }).first().click();
});
})