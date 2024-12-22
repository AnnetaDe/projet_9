document.addEventListener('DOMContentLoaded', () => {
  let swiper; // Зберігаємо екземпляр Swiper

  function initSwiper() {
    // Якщо ширина менша за 1200px, ініціалізуємо Swiper
    if (window.innerWidth < 1200) {
      if (!swiper) {
        // Перевіряємо, чи Swiper ще не створений
        swiper = new Swiper('.swiperGallery', {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
          initialSlide: 0,
          slideToClickedSlide: true,
          loop: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    } else {
      // Якщо ширина >= 1200px і Swiper існує, зупиняємо його
      if (swiper) {
        swiper.destroy(true, true); // Зупиняємо та очищаємо Swiper
        swiper = null; // Скидаємо змінну

        gallery.style.display = 'grid';
        gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
        gallery.style.gridTemplateRows = 'repeat(2, 1fr)';
      }
    }
  }

  // Ініціалізація при завантаженні сторінки
  initSwiper();

  // Відстеження зміни розміру вікна
  window.addEventListener('resize', initSwiper);
});
