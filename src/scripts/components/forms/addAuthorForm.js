import clearDom from '../../helpers/data/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-book-form" class="mb-4">
      <h6 id="requiredError></h6>
        <div class="form-group">
          <label for="first_name">Author First Name <span class="required-text">*</span></label>
          <input type="text" class="form-control" id="first_name" aria-describedby="bookTitle" placeholder="Enter Author First Name" value="${obj.first_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="last_name">Author Last Name <span class="required-text">*</span></label>
          <input type="url" class="form-control" id="last_name" placeholder="Author Last Name" value="${obj.last_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="quote">Author Quote <span class="required-text">*</span></label>
          <input type="url" class="form-control" id="quote" placeholder="Quote" value="${obj.quote || ''}" required>
        </div>
        <div class="form-group">
          <label for="email">Email <span class="required-text">*</span></label>
          <input type="email" class="form-control" id="email" placeholder="Email" value="${obj.email || ''}" required>
        </div>
        <div class="form-group">
          <label for="notes">Notes</label>
          <input type="text" class="form-control" id="notes" placeholder="Notes" value="${obj.notes || ''}" required>
        </div>
        <div class="form-group">
          <label for="image">Image URL <span class="required-text">*</span></label>
          <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-author-btn--${obj.firebaseKey}` : 'submit-author-btn'}" class="btn btn-primary">${obj.firebaseKey ? 'Update' : 'Submit Author'}</button>
      </form>`;
};

export default addAuthorForm;
