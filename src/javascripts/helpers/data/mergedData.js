import { getOneAuthor } from './authorData';
import { getOneBook } from './bookData';

const viewBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getOneBook(firebaseKey)
    .then((bookObject) => {
      getOneAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const viewAuthorDetails = (firebaseKey) => (async () => {
//     const getauthor = await getOneAuthor(firebaseKey);
//     const

// })

// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getOneBook(firebaseKey);
//   const author = await getOneAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

export default viewBookDetails;
