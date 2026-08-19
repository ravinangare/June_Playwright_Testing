import { test, expect, request } from '@playwright/test';

const API_Account_URL = 'https://demoqa.com/Account/v1';
const API_BookStore_URL = 'https://demoqa.com/BookStore/v1';

let registeredUserName = '';
let registeredUserId = '';
let token = '';
let isbn = '';
let newIsbn = '';
test.describe.serial('Book Store API flow', () => {
  test('Register New User', async ({ request }) => {
    const response = await request.post(`${API_Account_URL}/User`, {
      data: {
        userName: `vikram${Date.now()}`,
        password: 'Admin@123'
      }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('userID');
    expect(responseBody).toHaveProperty('username');
    expect(responseBody).toHaveProperty('books');

    registeredUserName = responseBody.username;
    registeredUserId = responseBody.userID;

    console.log('Registered username:', registeredUserName);
    console.log(responseBody)
  });

  test('Generate Authentication Token', async ({ request }) => {
    expect(registeredUserName).not.toBe('');

    const response = await request.post(`${API_Account_URL}/GenerateToken`, {
      data: {
        userName: registeredUserName,
        password: 'Admin@123'
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    expect(responseBody).toHaveProperty('expires');
    expect(responseBody).toHaveProperty('status');
    expect(responseBody).toHaveProperty('result');
    token = responseBody.token;
    console.log(responseBody);
  });

  test('Is user Authorized',async({request})=>{
       const response = await request.post(`${API_Account_URL}/Authorized`,{
            data:{
                 userName: registeredUserName,
                 password: 'Admin@123'
            }
        })
         expect(response.status()).toBe(200);

         const responseBody = await response.json();
         console.log(responseBody)
  })

  // test('Delete user Account',async({request})=>{
  //   expect(registeredUserId).not.toBe('');
  //   expect(token).not.toBe('');
  //     const response =  await request.delete(`${API_Account_URL}/User/${registeredUserId}`,{
  //        headers:{
  //           'Authorization': `Bearer ${token}`
  //        }  
  //       })
  //       expect(response.status()).toBe(204);
  // })

  test('Get All Books',async({request})=>{
   const response = await request.get(`${API_BookStore_URL}/Books`)

   expect(response.status()).toBe(200)
   const respnoseBody = await response.json();
   expect(respnoseBody).toHaveProperty('books');
   expect(Array.isArray(respnoseBody.books)).toBeTruthy();
   expect(respnoseBody.books.length).toBe(8);

   const book = respnoseBody.books[0];
   const book1 = respnoseBody.books[1];
   expect(book).toHaveProperty('isbn')
   expect(book).toHaveProperty('title')
   expect(book).toHaveProperty('subTitle')
   expect(book).toHaveProperty('author')
   expect(book).toHaveProperty('publish_date')
   expect(book).toHaveProperty('publisher')
   expect(book).toHaveProperty('pages')
   expect(book).toHaveProperty('description')
   expect(book).toHaveProperty('website')

   const pages = book.pages;
   isbn = book.isbn;
   newIsbn = book1.isbn;
   expect(pages).toBe(234);
  })

  test('Get Specific Book',async({request})=>{
     expect(isbn).not.toBe('');
    const response = await request.get(`${API_BookStore_URL}/Book?ISBN=${isbn}`)
     expect(response.status()).toBe(200)
     const respnoseBody = await response.json();
    expect(respnoseBody).toHaveProperty('isbn');
    expect(respnoseBody).toHaveProperty('isbn')
    expect(respnoseBody).toHaveProperty('title')
    expect(respnoseBody).toHaveProperty('subTitle')
    expect(respnoseBody).toHaveProperty('author')
    expect(respnoseBody).toHaveProperty('publish_date')
    expect(respnoseBody).toHaveProperty('publisher')
    expect(respnoseBody).toHaveProperty('pages')
    expect(respnoseBody).toHaveProperty('description')
    expect(respnoseBody).toHaveProperty('website')
  })

  test('update book in user collection',async({request})=>{
    expect(isbn).not.toBe('');
    expect(newIsbn).not.toBe('');
    expect(registeredUserId).not.toBe('');
     expect(token).not.toBe('');

     const addBookResponse = await request.post(`${API_BookStore_URL}/Books`,{
       headers:{
          'Authorization': `Bearer ${token}`
        },
        data:{
         userId: registeredUserId,
         collectionOfIsbns: [{ isbn }]
        }
     });
     expect(await addBookResponse.status()).toBe(201);
     console.log(await addBookResponse.json())

    const response = await request.put(`${API_BookStore_URL}/Books/${isbn}`,{
       headers:{
            'Authorization': `Bearer ${token}`
         },
         data:{
         userId: registeredUserId,
         isbn: newIsbn
         }  
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody)
  })
});