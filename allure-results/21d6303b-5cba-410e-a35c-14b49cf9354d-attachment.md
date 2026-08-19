# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookStoreAPI.spec.js >> Book Store API flow >> update book in user collection
- Location: tests\bookStoreAPI.spec.js:123:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  36  | 
  37  |     const response = await request.post(`${API_Account_URL}/GenerateToken`, {
  38  |       data: {
  39  |         userName: registeredUserName,
  40  |         password: 'Admin@123'
  41  |       }
  42  |     });
  43  | 
  44  |     expect(response.status()).toBe(200);
  45  | 
  46  |     const responseBody = await response.json();
  47  |     expect(responseBody).toHaveProperty('token');
  48  |     expect(responseBody).toHaveProperty('expires');
  49  |     expect(responseBody).toHaveProperty('status');
  50  |     expect(responseBody).toHaveProperty('result');
  51  |     token = responseBody.token;
  52  |     console.log(responseBody);
  53  |   });
  54  | 
  55  |   test('Is user Authorized',async({request})=>{
  56  |        const response = await request.post(`${API_Account_URL}/Authorized`,{
  57  |             data:{
  58  |                  userName: registeredUserName,
  59  |                  password: 'Admin@123'
  60  |             }
  61  |         })
  62  |          expect(response.status()).toBe(200);
  63  | 
  64  |          const responseBody = await response.json();
  65  |          console.log(responseBody)
  66  |   })
  67  | 
  68  |   // test('Delete user Account',async({request})=>{
  69  |   //   expect(registeredUserId).not.toBe('');
  70  |   //   expect(token).not.toBe('');
  71  |   //     const response =  await request.delete(`${API_Account_URL}/User/${registeredUserId}`,{
  72  |   //        headers:{
  73  |   //           'Authorization': `Bearer ${token}`
  74  |   //        }  
  75  |   //       })
  76  |   //       expect(response.status()).toBe(204);
  77  |   // })
  78  | 
  79  |   test('Get All Books',async({request})=>{
  80  |    const response = await request.get(`${API_BookStore_URL}/Books`)
  81  | 
  82  |    expect(response.status()).toBe(200)
  83  |    const respnoseBody = await response.json();
  84  |    expect(respnoseBody).toHaveProperty('books');
  85  |    expect(Array.isArray(respnoseBody.books)).toBeTruthy();
  86  |    expect(respnoseBody.books.length).toBe(8);
  87  | 
  88  |    const book = respnoseBody.books[0];
  89  |    const book1 = respnoseBody.books[1];
  90  |    expect(book).toHaveProperty('isbn')
  91  |    expect(book).toHaveProperty('title')
  92  |    expect(book).toHaveProperty('subTitle')
  93  |    expect(book).toHaveProperty('author')
  94  |    expect(book).toHaveProperty('publish_date')
  95  |    expect(book).toHaveProperty('publisher')
  96  |    expect(book).toHaveProperty('pages')
  97  |    expect(book).toHaveProperty('description')
  98  |    expect(book).toHaveProperty('website')
  99  | 
  100 |    const pages = book.pages;
  101 |    isbn = book.isbn;
  102 |    newIsbn = book1.isbn;
  103 |    expect(pages).toBe(234);
  104 |   })
  105 | 
  106 |   test('Get Specific Book',async({request})=>{
  107 |      expect(isbn).not.toBe('');
  108 |     const response = await request.get(`${API_BookStore_URL}/Book?ISBN=${isbn}`)
  109 |      expect(response.status()).toBe(200)
  110 |      const respnoseBody = await response.json();
  111 |     expect(respnoseBody).toHaveProperty('isbn');
  112 |     expect(respnoseBody).toHaveProperty('isbn')
  113 |     expect(respnoseBody).toHaveProperty('title')
  114 |     expect(respnoseBody).toHaveProperty('subTitle')
  115 |     expect(respnoseBody).toHaveProperty('author')
  116 |     expect(respnoseBody).toHaveProperty('publish_date')
  117 |     expect(respnoseBody).toHaveProperty('publisher')
  118 |     expect(respnoseBody).toHaveProperty('pages')
  119 |     expect(respnoseBody).toHaveProperty('description')
  120 |     expect(respnoseBody).toHaveProperty('website')
  121 |   })
  122 | 
  123 |   test('update book in user collection',async({request})=>{
  124 |     expect(isbn).not.toBe('');
  125 |     expect(newIsbn).not.toBe('');
  126 |     expect(registeredUserId).not.toBe('');
  127 |     const response = await request.put(`${API_BookStore_URL}/Books/${isbn}`,{
  128 |        headers:{
  129 |             'Authorization': `Bearer ${token}`
  130 |          },
  131 |          data:{
  132 |           userId: `${registeredUserId}`,
  133 |           isbn: `${newIsbn}`
  134 |          }  
  135 |     })
> 136 |     expect(response.status()).toBe(200);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  137 |     const responseBody = await response.json();
  138 |     console.log(responseBody)
  139 |   })
  140 | });
```