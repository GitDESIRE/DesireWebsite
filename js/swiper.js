const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  speed: 800,
  spaceBetween: 0,
  initialSlide: 1,
  loop: true,
  lazyLoading: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
})

const slides = Array.from(document.querySelectorAll('.swiper-slide'));
const bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
const slidesCount = slides.length / 3;
const bulletWidth = 100 / slidesCount;
bullets.forEach((bullet) => {
  bullet.style.width = bulletWidth + "%";
})