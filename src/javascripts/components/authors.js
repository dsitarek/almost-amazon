// FIXME: STUDENTS show your authors

const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#form-container').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
    <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
    <h6 class="card-title">${item.email}</h6>
    <button type="button" class="btn btn-primary" id="edit-author--${item.firebaseKey}">Edit</button>
    <button type="button" class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete</button>
    <button type="button" class="btn btn-success" id="fav-author--${item.firebaseKey}">Favorite</button>
  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
