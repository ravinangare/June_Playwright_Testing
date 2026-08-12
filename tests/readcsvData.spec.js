// const { test, expect } = require('@playwright/test');
// const {Readcsv} = require('../utils/csvReader');

// const users = Readcsv('../testdata/usertest.csv');

// users.forEach(user => {
//   test(`Read data from csv ${user.username}`,{tag: ['@smoke','@regression']}, async ({ page }) => {
//     console.log(`Username: ${user.username}, Password: ${user.password}`);
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByRole('textbox', { name: 'Username' }).fill(user.username);
//     await page.getByRole('textbox', { name: 'Username' }).press('Tab');
//     await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
//     await page.getByRole('button', { name: 'Login' }).click();
//   });
// });
