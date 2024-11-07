let switchButton = document.querySelector(".switch-button");
let logos = document.querySelector(".logos");
let logosLinks = logos.querySelectorAll(".logos__link");

let isShown = false;

switchButton.addEventListener("click", function () {
  isShown = !isShown;

  if (isShown) {
    logos.style.maxHeight = "400px";
    switchButton.textContent = "Скрыть";
  } else {
    logos.style.maxHeight = "180px";
    switchButton.textContent = "Показать все";
  }
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
