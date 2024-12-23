import Swiper from 'swiper';
import { Pagination, Keyboard, Mousewheel, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Keyboard, Mousewheel, Navigation],
  loop: true,

  // allowTouchMove: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
    bulletClass: 'swiper-pagination-bullet',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    enabled: true,
    eventsTarget: '.swiper',
  },
  normalizeSlideIndex: true,

  breakpoints: {
    320: {
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      centredSlides: true,
      slidesOffsetBefore: 480,
      slidesOffsetAfter: -480,
    },
    1200: {
      spaceBetween: 450,
      slidesOffsetBefore: 240,
      slidesOffsetAfter: 240,
      centredSlides: false,
      slidesPerGroup: 1,
      slidesPerView: 3,
    },
  },
});
