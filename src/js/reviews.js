let swiper;

function initSwiper() {
  const swiperContainer = document.querySelector('.swiperGallery');
  const listReviews = document.querySelector('.list-reviews');

  if (window.innerWidth < 1200) {
    if (!swiper) {
      swiperContainer.classList.add('swiper-initialized');
      listReviews.classList.add('swiper-wrapper');

      swiper = new Swiper('.swiperGallery', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
      swiperContainer.classList.remove('swiper-initialized');
    }

    listReviews.classList.remove('swiper-wrapper');
    listReviews.style.display = 'flex';
    listReviews.style.flexWrap = 'wrap';
    document.querySelectorAll('.swiper-slide').forEach((slide) => {
      slide.style.width = 'auto';
      slide.style.height = 'auto';
      slide.style.position = 'static';
    });
  }
}

initSwiper();
window.addEventListener('resize', initSwiper);
