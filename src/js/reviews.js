// document.addEventListener('DOMContentLoaded', () => {
//   let swiper;

//   function initSwiper() {
//     if (window.innerWidth < 1200) {
//       if (!swiper) {
//         swiper = new Swiper('.swiperGallery', {
//           slidesPerView: 1,
//           spaceBetween: 10,
//           centeredSlides: true,
//           initialSlide: 1,
//           slideToClickedSlide: true,
//           loop: false,
//           navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           },
//         });
//       }
//     } else {
//       if (swiper) {
//         swiper.destroy(true, true);
//         swiper = null;
//       }
//     }
//   }

//   initSwiper();

//   window.addEventListener('resize', initSwiper);
// });

document.addEventListener('DOMContentLoaded', () => {
  let swiper;

  function initReviewsLayout() {
    const swiperGallery = document.querySelector('.swiperGallery');
    const reviewsGrid = document.querySelector('.reviews-grid');

    if (window.innerWidth >= 1200) {
      // Вимкнути Swiper
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
      swiperGallery.style.display = 'none';
      reviewsGrid.style.display = 'grid';
    } else {
      // Увімкнути Swiper
      reviewsGrid.style.display = 'none';
      swiperGallery.style.display = 'block';
      if (!swiper) {
        swiper = new Swiper('.swiperGallery', {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true,
          initialSlide: 1,
          slideToClickedSlide: true,
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    }
  }

  initReviewsLayout();
  window.addEventListener('resize', initReviewsLayout);
});
