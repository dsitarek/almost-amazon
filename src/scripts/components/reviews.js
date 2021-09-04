import { getReviews } from '../helpers/data/reviewData';

const showreviews = (arrayOfReviews) => {
  document.querySelector('#reviewContainer').innerHTML = '';
  arrayOfReviews.forEach((obj) => {
    document.querySelector('#reviewContainer').innerHTML += `<div class="card review-card" id="review--${obj.firebaseKey}" style="width: 18rem;">
    <div class="card-body">
      <h4>${obj.rating}</h4>
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">${obj.review}</p>
      <h6>Review By: ${obj.displayName}</h6>
    </div>
  </div>`;
  });
};

const renderReviews = async (bookId) => {
  const reviews = await getReviews(bookId);
  showreviews(reviews);
};

export default renderReviews;
