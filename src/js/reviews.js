document.addEventListener('DOMContentLoaded', () => {
  let swiper;

  function initReviewsLayout() {
    const swiperGallery = document.querySelector('.swiperGallery');
    const reviewsGrid = document.querySelector('.reviews-grid');

    if (window.innerWidth >= 1200) {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }

      swiperGallery.style.display = 'none';
      reviewsGrid.style.display = 'grid';
    } else {
      reviewsGrid.style.display = 'none';
      swiperGallery.style.display = 'block';

      if (!swiper) {
        swiper = new Swiper('.swiperGallery', {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
          initialSlide: 1,
          slideToClickedSlide: true,

          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          mousewheel: {
            enabled: true,
            EventTarget: '.swiperGallery',
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
            eventsTarget: '.swiperGallery',
          },
        });
      }
    }
  }

  initReviewsLayout();
  window.addEventListener('resize', initReviewsLayout);
});
