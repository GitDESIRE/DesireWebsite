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
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
})

const slides = Array.from(document.querySelectorAll('.swiper-slide'));
const bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
console.log(bullets);
const slidesCount = slides.length;
const bulletWidth = 100 / slidesCount;
bullets.forEach((bullet) => {
  bullet.style.width = bulletWidth + "%";
})