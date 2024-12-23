import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper-topgallery', {
  modules: [Pagination, Keyboard, Mousewheel, Navigation],
  loop: true,

  // allowTouchMove: true,

  navigation: {
    nextEl: '.swiper-button-next-topgallery',
    prevEl: '.swiper-button-prev-topgallery',
  },
  pagination: {
    el: '.swiper-pagination-topgallery',
    type: 'bullets',
    dynamicBullets: true,
    bulletElement: 'button',
    bulletClass: 'swiper-pagination-circle',
    bulletActiveClass: 'swiper-pagination-circle-active',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
    eventsTarget: '.swiper-topgallery',
  },
  mousewheel: {
    enabled: true,
    eventsTarget: '.swiper-topgallery',
  },

  breakpoints: {
    320: {
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      // centredSlides: true,
      // slidesOffsetBefore: 480,
      // slidesOffsetAfter: -480,
    },
    1200: {
      slidesPerGroup: 1,
      slidesPerView: 0.5 + 1 + 0.5,
      centeredSlides: true,
      spaceBetween: 20,
    },
  },
});
