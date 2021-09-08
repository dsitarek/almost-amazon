import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (bookId, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${bookId}.json`)
    .then(() => {
      getBooks(uid).then(resolve);
    }).catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks(bookObj.uid).then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

// GET ONE BOOK
const getOneBook = (key) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${key}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

// UPDATE BOOK
const updateBook = (updateObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getBooks(updateObj.uid).then(resolve))
    .catch(reject);
});

// SEARCH BOOKS
// FILTER ON SALE
const booksOnSale = (uid) => new Promise((resolve, reject) => {
  getBooks(uid)
    .then((userBooks) => {
      const onSaleBooks = userBooks.filter((book) => book.sale);
      resolve(onSaleBooks);
    })
    .catch(reject);
});

const authorBooks = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSearchedBooks = (search) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="title"&equalTo="${search}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getCart = (uid) => new Promise((resolve, reject) => {
  getBooks(uid)
    .then((userBooks) => {
      const onSaleBooks = userBooks.filter((book) => book.inCart);
      resolve(onSaleBooks);
    })
    .catch((error) => reject(error));
});

export {
  getBooks, createBook, deleteBook, getOneBook, booksOnSale, updateBook, authorBooks, getSearchedBooks, getCart
};
