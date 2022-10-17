const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
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