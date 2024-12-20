const swiper = new Swiper('.swiperGallery', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});

