import { getOneAuthor, deleteAuthor } from './authorData';
import {
  getOneBook, authorBooks, deleteBook, getBooks
} from './bookData';

const viewBookDetails = (firebaseKey) => (async () => {
  const book = await getOneBook(firebaseKey);
  const author = await getOneAuthor(book.author_id);
  return ({ author, ...book });
})().catch(console.warn);

const viewAuthorBooks = (firebaseKey) => (async () => {
  const authorBookFilter = await authorBooks(firebaseKey);
  const authorBookList = authorBookFilter.map((object) => object.title);
  return authorBookList;
})().catch(console.warn);

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  authorBooks(authorId).then((authorBookArray) => {
    const deleteBooks = authorBookArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

const searchBooks = async () => {
  const searchTerm = document.querySelector('#search').value;
  const bookArray = await getBooks();
  const searchReturn = bookArray.filter((book) => (book.title).toLowerCase().includes(searchTerm));
  return searchReturn;
};

export {
  viewBookDetails, viewAuthorBooks, deleteAuthorBooks, searchBooks
};
