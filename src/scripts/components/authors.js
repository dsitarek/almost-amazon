// FIXME: STUDENTS show your authors
import clearDom from '../helpers/data/clearDom';

const showAuthors = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  // CREATE A BUTTON TO ADD BOOKS
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
    <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
    <h6 class="card-title">${item.email}</h6>
    <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
            <i id="edit-author-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-author--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
            <i id="fav-author--${item.firebaseKey}" class="btn btn-success fas">Favorite</i>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

const renderAuthorBookList = (bookList) => {
  let authorBookString = '';
  bookList.forEach((bookTitle) => { authorBookString += `<li>${bookTitle}</li>`; });
  document.getElementById('bookList').innerHTML = authorBookString;
};

export { showAuthors, emptyAuthors, renderAuthorBookList };
