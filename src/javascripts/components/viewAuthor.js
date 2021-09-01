import clearDom from '../helpers/data/clearDom';
import { viewAuthorBooks } from '../helpers/data/mergedData';
import { renderAuthorBookList } from './authors';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <img src=${obj.image} alt=${obj.last_name} style="width: 300px;">
       <div class="mt-5">
         <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
         <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
       </div>
     </div>
     <div class="text-white ms-5 details">
       <h5>${obj.first_name} ${obj.last_name}</h5>
       <p>${obj.description || ''}</p>
       <hr>
       <p>Email: ${obj.email}</p> 
       <div>
       <h6>List of books by author:</h6>
       <ul id="bookList"></ul>  
       </div>
        </div>
      </div>`;

  viewAuthorBooks(obj.firebaseKey).then(renderAuthorBookList);
};

export default viewAuthor;
