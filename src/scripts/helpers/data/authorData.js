import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
import { showAuthors } from '../../components/authors';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});
// DELETE AUTHOR
const deleteAuthor = (authorId, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${authorId}.json`)
    .then(() => {
      getAuthors(uid).then(resolve);
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
    .then(() => getAuthors(updateObj.uid).then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS
// FILTER FAVORITE AUTHORS
const getFavAuthors = (uid) => new Promise((resolve, reject) => {
  getAuthors(uid)
    .then((authors) => {
      const favAuthors = authors.filter((author) => author.favorite);
      resolve(favAuthors);
    })
    .catch(reject);
});

// UPDATE FAVROITE AUTHOR
const favAuthor = (updateObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${updateObj.firebaseKey}.json`, updateObj)
    .then(() => getFavAuthors(updateObj.uid).then(resolve))
    .catch(reject);
});

export {
  getAuthors, createAuthor, getFavAuthors, deleteAuthor, updateAuthor, getOneAuthor, showAuthors, favAuthor
};
