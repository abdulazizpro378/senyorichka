const dropdown = document.querySelector(".dropdown");
const open_btn = document.querySelector(".open-modal");
const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modal_content = document.querySelector(".modal-content");


let homeContent1 = document.querySelector(".home-content1");

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

function getProductCard1({ img, name }) {
  return `
    <div class="home-card">
      <div class="card-body">
        <img src="${img}" alt="" />
      </div>
      <div class="card-footer">
        <p class='p'>${name}</p>

      </div>
   </div>
    `;
}



massiv34.forEach((el) => {
  homeContent1.innerHTML += getProductCard1(el);
});
