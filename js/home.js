
var btnToggle = document.getElementById("toggle");
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

function toggle() {
  dropdown.classList.toggle("d-blok");
}

btnToggle.addEventListener("click", toggle);


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