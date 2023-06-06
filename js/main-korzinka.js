const corzinkaLength = document.querySelector(".korzinka #cart-length");

// getting cart json and parsing to array likeniki;

let CorzinkaProductsJson = localStorage.getItem(CORZINKA);
let carzinkaProducts = JSON.parse(CorzinkaProductsJson) || [];

function getCorzinkaLength() {
  corzinkaLength.innerHTML = carzinkaProducts.length;

 
}

getCorzinkaLength();

function addToCorzinka(id) {
  let product = search_card_products.find((el) => el.id === id);

  let check = carzinkaProducts.find((el) => el.id === id);

  if (check) {
    product.quantity++;
    carzinkaProducts = carzinkaProducts.map((el) => {
      return el.id === id ? product : el;
    });
  } else {
    product.quantity = 1;
    carzinkaProducts.push(product);
  }

  localStorage.setItem(CORZINKA, JSON.stringify(carzinkaProducts));

  getCorzinkaLength();

}
