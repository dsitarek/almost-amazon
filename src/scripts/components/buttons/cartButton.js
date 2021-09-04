import cart from '../../../styles/img/cart.png';

const cartButton = () => {
  const domString = `<button id="cart" class="btn btn-success ml-2">
        <img src=${cart}>
      </button>`;
  document.querySelector('#cart-button').innerHTML = domString;
};

export default cartButton;
