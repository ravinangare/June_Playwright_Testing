
// import { test, expect } from '@playwright/test';
// import { Readcsv } from '../utils/csvReader';

// let testData = [];

// test.beforeAll(async () => {
//     testData = await Readcsv('../testdata/usertest.csv');
// });


// test.beforeEach(async ({ page }) => {
//  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// })

// test('Login test with data from CSV file', async ({ page }) => {
//     for (const data of testData) {  
//           await page.getByRole('textbox', { name: 'Username' }).click();
//           console.log(data.username);
//           await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
//           await page.getByRole('textbox', { name: 'Password' }).click();
//           console.log(data.password);
//           await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
//           await page.getByRole('button', { name: 'Login' }).click();
//         }
//     });
     