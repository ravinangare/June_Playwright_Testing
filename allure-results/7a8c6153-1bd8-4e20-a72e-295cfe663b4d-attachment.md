# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookStoreAPI.spec.js >> Book Store API flow >> update book in user collection
- Location: tests\bookStoreAPI.spec.js:120:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""
```

# Test source

```ts
  21  |     const responseBody = await response.json();
  22  |     expect(responseBody).toHaveProperty('userID');
  23  |     expect(responseBody).toHaveProperty('username');
  24  |     expect(responseBody).toHaveProperty('books');
  25  | 
  26  |     registeredUserName = responseBody.username;
  27  |     registeredUserId = responseBody.userID;
  28  | 
  29  |     console.log('Registered username:', registeredUserName);
  30  |     console.log(responseBody)
  31  |   });
  32  | 
  33  |   test('Generate Authentication Token', async ({ request }) => {
  34  |     expect(registeredUserName).not.toBe('');
  35  | 
  36  |     const response = await request.post(`${API_Account_URL}/GenerateToken`, {
  37  |       data: {
  38  |         userName: registeredUserName,
  39  |         password: 'Admin@123'
  40  |       }
  41  |     });
  42  | 
  43  |     expect(response.status()).toBe(200);
  44  | 
  45  |     const responseBody = await response.json();
  46  |     expect(responseBody).toHaveProperty('token');
  47  |     expect(responseBody).toHaveProperty('expires');
  48  |     expect(responseBody).toHaveProperty('status');
  49  |     expect(responseBody).toHaveProperty('result');
  50  |     token = responseBody.token;
  51  |     console.log(responseBody);
  52  |   });
  53  | 
  54  |   test('Is user Authorized',async({request})=>{
  55  |        const response = await request.post(`${API_Account_URL}/Authorized`,{
  56  |             data:{
  57  |                  userName: registeredUserName,
  58  |                  password: 'Admin@123'
  59  |             }
  60  |         })
  61  |          expect(response.status()).toBe(200);
  62  | 
  63  |          const responseBody = await response.json();
  64  |          console.log(responseBody)
  65  |   })
  66  | 
  67  |   // test('Delete user Account',async({request})=>{
  68  |   //   expect(registeredUserId).not.toBe('');
  69  |   //   expect(token).not.toBe('');
  70  |   //     const response =  await request.delete(`${API_Account_URL}/User/${registeredUserId}`,{
  71  |   //        headers:{
  72  |   //           'Authorization': `Bearer ${token}`
  73  |   //        }  
  74  |   //       })
  75  |   //       expect(response.status()).toBe(204);
  76  |   // })
  77  | 
  78  |   test('Get All Books',async({request})=>{
  79  |    const response = await request.get(`${API_BookStore_URL}/Books`)
  80  | 
  81  |    expect(response.status()).toBe(200)
  82  |    const respnoseBody = await response.json();
  83  |    expect(respnoseBody).toHaveProperty('books');
  84  |    expect(Array.isArray(respnoseBody.books)).toBeTruthy();
  85  |    expect(respnoseBody.books.length).toBe(8);
  86  | 
  87  |    const book = respnoseBody.books[0];
  88  |    expect(book).toHaveProperty('isbn')
  89  |    expect(book).toHaveProperty('title')
  90  |    expect(book).toHaveProperty('subTitle')
  91  |    expect(book).toHaveProperty('author')
  92  |    expect(book).toHaveProperty('publish_date')
  93  |    expect(book).toHaveProperty('publisher')
  94  |    expect(book).toHaveProperty('pages')
  95  |    expect(book).toHaveProperty('description')
  96  |    expect(book).toHaveProperty('website')
  97  | 
  98  |    const pages = book.pages;
  99  |    isbn = book.isbn;
  100 |    expect(pages).toBe(234);
  101 |   })
  102 | 
  103 |   test('Get Specific Book',async({request})=>{
  104 |      expect(isbn).not.toBe('');
  105 |     const response = await request.get(`${API_BookStore_URL}/Book?ISBN=${isbn}`)
  106 |      expect(response.status()).toBe(200)
  107 |      const respnoseBody = await response.json();
  108 |     expect(respnoseBody).toHaveProperty('isbn');
  109 |     expect(respnoseBody).toHaveProperty('isbn')
  110 |     expect(respnoseBody).toHaveProperty('title')
  111 |     expect(respnoseBody).toHaveProperty('subTitle')
  112 |     expect(respnoseBody).toHaveProperty('author')
  113 |     expect(respnoseBody).toHaveProperty('publish_date')
  114 |     expect(respnoseBody).toHaveProperty('publisher')
  115 |     expect(respnoseBody).toHaveProperty('pages')
  116 |     expect(respnoseBody).toHaveProperty('description')
  117 |     expect(respnoseBody).toHaveProperty('website')
  118 |   })
  119 | 
  120 |   test('update book in user collection',async({request})=>{
> 121 |     expect(isbn).not.toBe('');
      |                      ^ Error: expect(received).not.toBe(expected) // Object.is equality
  122 |     expect(registeredUserId).not.toBe('');
  123 |     const response = await request.put(`${API_BookStore_URL}/Books/${isbn}`,{
  124 |        headers:{
  125 |             'Authorization': `Bearer ${token}`
  126 |          },
  127 |          data:{
  128 |           userId: `${registeredUserId}`,
  129 |           isbn: "9781449331818"
  130 |          }  
  131 |     })
  132 |     expect(response.status()).toBe(200);
  133 |     const responseBody = await response.json();
  134 |     console.log(responseBody)
  135 |   })
  136 | });
```