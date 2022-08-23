$(function() {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 8, 
  autoplay: {
    delay: 5000,
  },       
});