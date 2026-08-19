# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookStoreAPI.spec.js >> Register New User
- Location: tests\bookStoreAPI.spec.js:7:5

# Error details

```
TypeError: Assignment to constant variable.
```

# Test source

```ts
  1  | import{test,expect, request} from '@playwright/test'
  2  | 
  3  | const API_Account_URL = 'https://demoqa.com/Account/v1';
  4  | 
  5  | const userId = '';
  6  | const userName = '';
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
> 21 |     userId = responseBody.userID;
     |           ^ TypeError: Assignment to constant variable.
  22 |     userName = responseBody.username;
  23 | 
  24 |     console.log(userId)
  25 |     console.log(userName)
  26 | })
```