const CorzinkaLeft = document.querySelector(".corzinka-left");
let CorzinkaIgnor = document.querySelector(".ignor");

function getCartCorzinka({ id, name, img, quantity, name_price }) {
  return `
  <div class="corzinka-cart">
  <div class="cart-header">
    <img src=${img} alt="">

  </div>

  <div class="cart-body">
    <p>Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
    <span>${name}</span>
  </div>
  <div class="cart-footer">
    <button  type="button" onclick="decrease(${id})" class="btn ">
      -
    </button>
    <button type="button"  class="btn ">
      ${quantity}
    </button>
    <button  type="button" onclick="increase(${id})" class="btn ">
      +
    </button>
    <p>${name_price}</p>
  </div>
</div>
    `;
}



// function getTotalPrice() {
//   let totalPrice = 0;
//   carzinkaProducts.forEach((product) => {
//     let string = product.name;
//     let lastNumber = parseFloat(string.match(/\d+\.\d+\s₽$/)[0]);
//     totalPrice += lastNumber;
//   });
//   return totalPrice;
// }



// getTotalPrice();

function getCorzinkaProducts() {
  CorzinkaLeft.innerHTML = "";

  carzinkaProducts.forEach((el) => {
    CorzinkaLeft.innerHTML += getCartCorzinka(el);
  });

  // const totalPrice = getTotalPrice();
  // CorzinkaIgnor.textContent = totalPrice;
}

getCorzinkaProducts();

// increase
function increase(id) {
  carzinkaProducts = carzinkaProducts.map((el) => {
    if (el.id === id) {
      el.quantity++;
    }
    return el;
  });
  localStorage.setItem(CORZINKA, JSON.stringify(carzinkaProducts));
  getCorzinkaProducts();
}

// decrease

function decrease(id) {
  let product = carzinkaProducts.find((el) => el.id === id);
  if (product.quantity === 1) {
    carzinkaProducts = carzinkaProducts.filter((el) => el.id !== id);
  } else {
    carzinkaProducts = carzinkaProducts.map((el) => {
      if (el.id === id) {
        el.quantity--;
      }
      return el;
    });
  }
  localStorage.setItem(CORZINKA, JSON.stringify(carzinkaProducts));
  getCorzinkaProducts();
  getCorzinkaLength();
}
