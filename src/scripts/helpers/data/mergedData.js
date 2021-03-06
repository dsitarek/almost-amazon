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

const deleteAuthorBooks = (authorId, uid) => new Promise((resolve, reject) => {
  authorBooks(authorId).then((authorBookArray) => {
    const deleteBooks = authorBookArray.map((book) => deleteBook(book.firebaseKey, uid));

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId, uid)));
  }).catch(reject);
});

const searchBooks = async (searchTerm, uid) => {
  const bookArray = await getBooks(uid);
  const searchReturn = bookArray.filter((book) => (book.title).toLowerCase().includes(searchTerm));
  return searchReturn;
};

export {
  viewBookDetails, viewAuthorBooks, deleteAuthorBooks, searchBooks
};
