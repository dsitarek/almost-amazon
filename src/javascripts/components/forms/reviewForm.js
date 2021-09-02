import clearDom from '../../helpers/data/clearDom';

const addReviewForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
        <form id="submit-book-form" class="mb-4">
          <h3>Book Review for ${obj.title}</h3>
          <div class="form-group">
            <label for="reviewTitle">Review Title</label>
            <input type="text" class="form-control" id="reviewTitle" placeholder="Review Title">
          </div>
          <div>
          <label for="rating">Rating</label>
          <select class="form-select" id="rating" aria-label="Rating">
            <option value="☆">One Star</option>
            <option value="☆☆">Two Stars</option>
            <option value="☆☆☆">Three Stars</option>
            <option value="☆☆☆☆">Four Stars</option>
            <option value="☆☆☆☆☆">Five Stars</option>
          </select>
          </div>
          <div class="form-group">
            <label for="reviewBody">Review</label><br>
            <textarea class="form-control" cols="80" rows="5" id="reviewBody" placeholder="Review" required></textarea>
          </div>
          <button type="submit" id="review-submit--${obj.firebaseKey}" class="btn btn-primary">Submit Review</button>
        </form>`;
};

export default addReviewForm;
