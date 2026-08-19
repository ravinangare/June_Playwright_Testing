# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookStoreAPI.spec.js >> Book Store API flow >> Get All Books
- Location: tests\bookStoreAPI.spec.js:76:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 235
Received: 234
```

# Test source

```ts
  1  | import { test, expect, request } from '@playwright/test';
  2  | 
  3  | const API_Account_URL = 'https://demoqa.com/Account/v1';
  4  | const API_BookStore_URL = 'https://demoqa.com/BookStore/v1';
  5  | 
  6  | let registeredUserName = '';
  7  | let registeredUserId = '';
  8  | let token = '';
  9  | test.describe.serial('Book Store API flow', () => {
  10 |   test('Register New User', async ({ request }) => {
  11 |     const response = await request.post(`${API_Account_URL}/User`, {
  12 |       data: {
  13 |         userName: `vikram${Date.now()}`,
  14 |         password: 'Admin@123'
  15 |       }
  16 |     });
  17 | 
  18 |     expect(response.status()).toBe(201);
  19 | 
  20 |     const responseBody = await response.json();
  21 |     expect(responseBody).toHaveProperty('userID');
  22 |     expect(responseBody).toHaveProperty('username');
  23 |     expect(responseBody).toHaveProperty('books');
  24 | 
  25 |     registeredUserName = responseBody.username;
  26 |     registeredUserId = responseBody.userID;
  27 | 
  28 |     console.log('Registered username:', registeredUserName);
  29 |   });
  30 | 
  31 |   test('Generate Authentication Token', async ({ request }) => {
  32 |     expect(registeredUserName).not.toBe('');
  33 | 
  34 |     const response = await request.post(`${API_Account_URL}/GenerateToken`, {
  35 |       data: {
  36 |         userName: registeredUserName,
  37 |         password: 'Admin@123'
  38 |       }
  39 |     });
  40 | 
  41 |     expect(response.status()).toBe(200);
  42 | 
  43 |     const responseBody = await response.json();
  44 |     expect(responseBody).toHaveProperty('token');
  45 |     expect(responseBody).toHaveProperty('expires');
  46 |     expect(responseBody).toHaveProperty('status');
  47 |     expect(responseBody).toHaveProperty('result');
  48 |     token = responseBody.token;
  49 |     console.log(responseBody);
  50 |   });
  51 | 
  52 |   test('Is user Authorized',async({request})=>{
  53 |        const response = await request.post(`${API_Account_URL}/Authorized`,{
  54 |             data:{
  55 |                  userName: registeredUserName,
  56 |                  password: 'Admin@123'
  57 |             }
  58 |         })
  59 |          expect(response.status()).toBe(200);
  60 | 
  61 |          const responseBody = await response.json();
  62 |          console.log(responseBody)
  63 |   })
  64 | 
  65 |   // test('Delete user Account',async({request})=>{
  66 |   //   expect(registeredUserId).not.toBe('');
  67 |   //   expect(token).not.toBe('');
  68 |   //     const response =  await request.delete(`${API_Account_URL}/User/${registeredUserId}`,{
  69 |   //        headers:{
  70 |   //           'Authorization': `Bearer ${token}`
  71 |   //        }  
  72 |   //       })
  73 |   //       expect(response.status()).toBe(204);
  74 |   // })
  75 | 
  76 |   test('Get All Books',async({request})=>{
  77 |    const response = await request.get(`${API_BookStore_URL}/Books`)
  78 | 
  79 |    expect(response.status()).toBe(200)
  80 |    const respnoseBody = await response.json();
  81 |    expect(respnoseBody).toHaveProperty('books');
  82 |    expect(Array.isArray(respnoseBody.books)).toBeTruthy();
  83 |    expect(respnoseBody.books.length).toBe(8);
  84 | 
  85 |    const book = respnoseBody.books[0];
  86 |    expect(book).toHaveProperty('isbn')
  87 |    expect(book).toHaveProperty('title')
  88 |    expect(book).toHaveProperty('subTitle')
  89 |    expect(book).toHaveProperty('author')
  90 |    expect(book).toHaveProperty('publish_date')
  91 |    expect(book).toHaveProperty('publisher')
  92 |    expect(book).toHaveProperty('pages')
  93 |    expect(book).toHaveProperty('description')
  94 |    expect(book).toHaveProperty('website')
  95 | 
  96 |    const pages = book.pages;
> 97 |    expect(pages).toBe(235);
     |                  ^ Error: expect(received).toBe(expected) // Object.is equality
  98 |   })
  99 | });
```