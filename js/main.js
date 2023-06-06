// likeniki
const cartLengthContent = document.querySelector(".cart #cart-length");



// getting cart json and parsing to array likeniki;

let cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];

function getCartLength() {
  cartLengthContent.innerHTML = cartProducts.length;
}

getCartLength();




// like bosganda yigish

function addToCart(id) {
  let product = search_card_products.find((el) => el.id === id);

  let checkProduct = cartProducts.find((pr) => pr.id == id);

  if (checkProduct) {
    cartProducts = cartProducts.filter((product) => product.id !== id);
  } else {
    cartProducts.push(product);
  }

  localStorage.setItem(CART, JSON.stringify(cartProducts));

  getCartLength();
  getpro();
}




