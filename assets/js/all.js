"use strict";

// $(function() {
//   console.log('Hello Bootstrap5');
// });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 15
    },
    1200: {
      slidesPerView: 10,
      spaceBetween: 10
    }
  }
});
var studentSwiper = new Swiper(".studentSwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true
});
var classSwiper = new Swiper(".classSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10
    }
  }
}); // const swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   effect: "fade",
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   controller: {
//     inverse: true,
//   },
// });
//# sourceMappingURL=all.js.map
