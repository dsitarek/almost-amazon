const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div id="modal-body">
    </div> 
  </div>
  </div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
  </div>`;
};

export default domBuilder;
