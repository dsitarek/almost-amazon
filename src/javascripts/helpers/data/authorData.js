import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { showAuthors } from '../../components/authors';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${authorId}.json`)
    .then(() => {
      getAuthors().then(resolve);
    }).catch((error) => reject(error));
});
// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

// GET ONE AUTHOR
const getOneAuthor = (key) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${key}.json`)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});
// UPDATE AUTHOR
const updateAuthor = (updateObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS
// FILTER FAVORITE AUTHORS
const getFavAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// UPDATE FAVROITE AUTHOR
const favAuthor = (updateObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getFavAuthors().then(resolve))
    .catch(reject);
});

export {
  getAuthors, createAuthor, getFavAuthors, deleteAuthor, updateAuthor, getOneAuthor, showAuthors, favAuthor
};
