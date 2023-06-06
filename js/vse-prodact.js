
let prodactsPgntn = document.querySelector(".prodacts-paganition");
let homeContent = document.querySelector(".cards");
let searchInput = document.querySelector(".search-prodact");
let active = 1;

// vse prodact start

function getProductCard({ name, img, desc, rating, id }) {
  return `
    <div class="card">
                <div class="card-top">
                  <img src="${img}" alt="img" />
                  <img  onclick="addToCart(${id})" src='./images/${
                    cartProducts.find((product) => product.id === id)
                      ? "yurak-qizil"
                      : "yurak-bosh"
                  }.png' id="span" alt="${name}">
                </div>
                <div class="card-bottom">
                  <div class="price-pay">
                    <div class="price">
                      <p class="first-price price-2">${name}</p>
                    </div>
                  </div>
    
                  <div class="card-info">
                    <p>
                      ${desc}
                    </p>
                  </div>
    
                  <div class="card-star">
                  ${"★".repeat(rating) + "☆".repeat(5 - rating)}
                  </div>
    
                  <div class="card-btn">
                    <button  onclick="addToCorzinka(${id})" ><a href="#">В корзину</a></button>
                  </div>
                </div>
              </div>
    `;
}

// paganation and search...

function getPagnation() {
  let Itemarry = [];
  let paganitionitems = "";

  for (let i = 1; i <= Math.ceil(search_card_products.length / 8); i++) {
    Itemarry.push(i);
  }

  Itemarry.forEach((el) => {
    paganitionitems += ` <li class="page-item ${
      el === active ? "active" : ""
    }" onClick ={getpage(${el})} ><span class="page-link" >${el}</span></li>`;
  });

  prodactsPgntn.innerHTML = `
    ${
      active >= 1
        ? ` <ul class="pagination">
      <li class="page-item" onclick ={getpage("-")}>
      <span class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </span>
    </li>`
        : ""
    }
   ${paganitionitems}
    ${
      active < Itemarry.length
        ? `
    <li class="page-item"  onclick ={getpage("+")}>
    <span class="page-link" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </span>
  </li>`
        : ""
    }
  </ul>    
    `;
}

getPagnation();

// let serch = search_card_products.slice(0, 8);

function getpro(data = search_card_products) {
  homeContent.innerHTML = "";
  let index = active - 1;
  data.slice(index * 8, index * 8 + 8).forEach((el) => {
    homeContent.innerHTML += getProductCard(el);
  });
}

getpro();

// yuqoridagi mapinig

searchInput.addEventListener("input", function () {
  let searcProdauct = search_card_products.filter(
    (el) =>
      el.name.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()) ||
      el.desc.toLowerCase().includes(this.value.toLowerCase())
  );
  getpro(searcProdauct);
});

// paganationni davomi

function getpage(page) {
  if (page == "+") {
    active++;
  } else if (page == "-") {
    active--;
  } else {
    active = page;
  }
  getpro();
  getPagnation();
}
