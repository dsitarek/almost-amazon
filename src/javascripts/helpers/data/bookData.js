import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (bookId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${bookId}.json`)
    .then(() => {
      getBooks().then(resolve);
    }).catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then((booksArray) => resolve(booksArray));
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
    .then(() => getBooks().then(resolve))
    .catch(reject);
});

// SEARCH BOOKS
// FILTER ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const authorBooks = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSearchedBooks = (search) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="title "&equalTo="${search}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getBooks, createBook, deleteBook, getOneBook, booksOnSale, updateBook, authorBooks, getSearchedBooks
};
