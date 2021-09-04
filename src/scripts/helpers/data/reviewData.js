import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { viewBookDetails } from './mergedData';

const dbUrl = firebaseConfig.databaseURL;

const getReviews = (bookId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/reviews.json?orderBy="book_id"&equalTo="${bookId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createReview = (reviewObj, bookId) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/reviews.json`, reviewObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/reviews/${response.data.name}.json`, body)
        .then(() => {
          viewBookDetails(bookId).then((book) => resolve(book));
        });
    }).catch((error) => reject(error));
});

export { createReview, getReviews };
