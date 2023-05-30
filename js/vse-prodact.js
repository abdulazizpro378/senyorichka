const dropdown = document.querySelector(".dropdown");
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");


let prodactsPgntn = document.querySelector(".prodacts-paganition");
let homeContent = document.querySelector(".cards");
let searchInput = document.querySelector(".search-prodact");
let active = 1;

console.log(searchInput);

//drobdown

function toggle() {
  dropdown.classList.toggle("d-blok");
}

// drobdown-end

// modal show

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});

// modal show end

// vse prodact start

function getProductCard({ name, img, desc, rating }) {
  return `
    <div class="card">
                <div class="card-top">
                  <img src="${img}" alt="img" />
    
                  <span class="material-symbols-outlined heart" id ="span"> favorite </span>
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
                    <button><a href="#">В корзину</a></button>
                  </div>
                </div>
              </div>
    `;
}




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
