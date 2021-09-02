const cartButton = () => {
  const domString = `<button id="cart" class="btn btn-success ml-2">
        <img src="src/styles/img/cart.png">
      </button>`;
  document.querySelector('#cart-button').innerHTML = domString;
};

export default cartButton;
