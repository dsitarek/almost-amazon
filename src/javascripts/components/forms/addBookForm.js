import selectAuthor from './selectAuthor';
import clearDom from '../../helpers/data/clearDom';

const addBookForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
        <label for="title">Book Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
      </div>
      <div class="form-group">
        <label for="notes">Price</label>
        <input type="text" class="form-control" id="notes" placeholder="Notes" value="${obj.notes || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" <button type="submit"  id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="btn btn-primary">${obj.firebaseKey ? 'Update' : 'Submit Book'}</button>
    </form>`;

  selectAuthor(`${obj.author_id || ''}`);
};

export default addBookForm;
