import signOut from '../helpers/auth/signOut';
import { showAuthors } from '../components/authors';
import { getAuthors, getFavAuthors } from '../helpers/data/authorData';
import { showBooks } from '../components/books';
import { getBooks, booksOnSale, getCart } from '../helpers/data/bookData';
import { searchBooks } from '../helpers/data/mergedData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then((booksArray) => showBooks(booksArray));
  });
  // FAVORITE AUTHORS
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getFavAuthors().then((authorsArray) => showAuthors(authorsArray));
  });
  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then((booksArray) => showBooks(booksArray));
  });
  // CART
  document.querySelector('#cart-button').addEventListener('click', () => {
    getCart().then((cartItems) => showBooks(cartItems));
  });
  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      searchBooks(searchValue).then(showBooks);
    }
  });

  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((authors) => showAuthors(authors));
    document.querySelector('#form-container').innerHTML = '';
  });
  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
