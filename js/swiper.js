const slides = document.querySelectorAll('.swiper-slide');
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 800,
  spaceBetween: 0,
  initialSlide: 1,
  lazyLoading: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // renderBullet: function (index, className) {

    // }
  },
})