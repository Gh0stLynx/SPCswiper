const switchButton = document.querySelector(".switch-button");
const logos = document.querySelector(".logos");
const logosLinks = logos.querySelectorAll(".logos__link");

switchButton.addEventListener("click", function () {
  logos.classList.toggle("logos_cut");

  switchButton.textContent = logos.classList.contains("logos_cut")
    ? "Показать все"
    : "Скрыть";

  switchButton.classList.toggle("switch-button_active");
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
