const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  speed: 800,
  lazyLoading: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
  },
})