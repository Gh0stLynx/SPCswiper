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

let swiperContainer = document.querySelector(".swiper-container");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let swiperSlide = document.querySelectorAll(".swiper-slide");

window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 768) {
    swiperContainer.classList.remove("swiper-container");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlide.forEach(function (slide) {
      slide.classList.remove("swiper-slide");
    });
  } else {
    swiperContainer.classList.add("swiper-container");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperSlide.forEach(function (slide) {
      slide.classList.add("swiper-slide");
    });
  }
});
