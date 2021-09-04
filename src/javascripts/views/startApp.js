import { showBooks } from '../components/books';
import logoutButton from '../components/buttons/logoutButton';
import cartButton from '../components/buttons/cartButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { domEvents, domEventsSubmit } from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../helpers/data/bookData';

const startApp = (user) => {
  console.warn(user);
  domBuilder(); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  domEventsSubmit(user); //
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  cartButton();
  navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // Put all books on the DOM
  getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
