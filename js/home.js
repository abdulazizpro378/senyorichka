const dropdown = document.querySelector(".dropdown");
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");


let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let iframe = document.querySelector(".iframe-box");

let card = document.querySelector(".cards");
let catd_noviy = document.querySelector(".noviy");
let magazin = document.querySelector(".magazin");
let hero_card = document.querySelector(".hero");
let status_card = document.querySelector(".status_row");

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

// map start

btn2.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn1.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn3.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.9420216292137!2d71.78567611546045!3d40.38797757936857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sen!2s!4v1679488781708!5m2!1sen!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
});

btn4.addEventListener("click", function () {
  this.classList.add("active");
  iframe.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.942021629222!2d71.78567611535485!3d40.387977579368396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sru!2s!4v1679867120305!5m2!1sru!2s"width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn2.classList.remove("active");
});

// map-end

// aksiya start

function getCard({ img, name, name_price, desc, rating, pr }) {
  return `
  <div class="card">
              <div class="card-top">
                <img src="${img}" alt="img" />
                <span class="sale">-${pr}%</span>
                <span class="material-symbols-outlined heart" id ="span"> favorite </span>
              </div>
              <div class="card-bottom">
                <div class="price-pay">
                  <div class="price">
                    <p class="first-price">${name}</p>
                    <p class="second-price">${name_price}</p>
                  </div>
  
                  <div class="pay">
                    <p class="with-card">С картой</p>
                    <p class="simple">Обычная</p>
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

search_card_products.sort((a, b) => a.id - b.id);

search_card_products
  .filter((el) => el.discount != 0)
  .slice(-4)
  .forEach((el) => {
    card.innerHTML += getCard(el);
  });

// aksiya end

// noviy start
function getNoviy({ name, img, desc, rating }) {
  return `
  <div class="card">
              <div class="card-top">
                <img src="${img}" alt="img" />
  
                <span class="material-symbols-outlined heart " id ="span"> favorite </span>
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

search_card_products
  .filter((el) => el.id != -1)
  .slice(0, 4)
  .forEach((el) => {
    catd_noviy.innerHTML += getNoviy(el);
  });

// noviy end

// Наши магазины start

function getMagazin({ name, img, desc, rating }) {
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

search_card_products
  .filter((el) => el.id != -1)
  .slice(0, 4)
  .forEach((el) => {
    magazin.innerHTML += getMagazin(el);
  });

// hero

function getHero({ desc, name_price, img }) {
  return `
  <div class="hero_card and1">
              <div class="hero_card_content">
                <h4>${desc}</h4>
                <p>${name_price}</p>
              </div>
            <img src="${img}" alt="">
    </div>  
  `;
}

massiv2
  .filter((el) => el.id != -1)
  .forEach((el) => {
    hero_card.innerHTML += getHero(el);
  });

// hero end

// status start

function getStatus({ img, name_price, desc }) {
  return `
    <div class="status_card">
    <img src="${img}" alt="res">
    <h3>${name_price}</h3>
    <p class="line-clamp">${desc}</p>
      <button class="btn">Подробнее</button>
  </div>
    `;
}

massiv33
  .filter((el) => el.id != -1)
  .forEach((el) => {
    status_card.innerHTML += getStatus(el);
  });
