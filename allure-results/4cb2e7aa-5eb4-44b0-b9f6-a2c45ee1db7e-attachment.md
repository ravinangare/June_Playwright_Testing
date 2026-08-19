# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookStoreAPI.spec.js >> Generate Authentication Token
- Location: tests\bookStoreAPI.spec.js:28:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1  | import{test,expect, request} from '@playwright/test'
  2  | 
  3  | const API_Account_URL = 'https://demoqa.com/Account/v1';
  4  | 
  5  | let userId = '';
  6  | let userName = '';
  7  | test('Register New User',async({request}) =>{
  8  |    const response = await request.post(`${API_Account_URL}/User`,{
  9  |         data: {
  10 |                 userName: `vikram${Date.now()}`,
  11 |                 password: "Admin@123"
  12 |             }
  13 |     })
  14 | 
  15 |     expect(response.status()).toBe(201)
  16 |     const responseBody = await response.json();
  17 |     expect(responseBody).toHaveProperty('userID')
  18 |     expect(responseBody).toHaveProperty('username')
  19 |     expect(responseBody).toHaveProperty('books')
  20 |     
  21 |     userId = responseBody.userID;
  22 |     userName = responseBody.username;
  23 | 
  24 |     console.log(userId)
  25 |     console.log(userName)
  26 | })
  27 | 
  28 | test('Generate Authentication Token',async({request})=>{
  29 |     const response = await request.post(`${API_Account_URL}/GenerateToken`,{
  30 |         data:{
  31 |                 userName: `${userName}`,
  32 |                 password: "Admin@123"
  33 |         }
  34 |     })
> 35 |     expect(response.status()).toBe(200)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  36 |     const responseBody = await response.json();
  37 | 
  38 |     expect(responseBody).toHaveProperty('token')
  39 |     expect(responseBody).toHaveProperty('expires')
  40 |     expect(responseBody).toHaveProperty('status')
  41 |     expect(responseBody).toHaveProperty('result')
  42 | 
  43 |     console.log(responseBody)
  44 | 
  45 | })
```