document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu-drop');
  const openMenuBtn = document.querySelector(' .menu-button-open');
  const closeMenuBtn = document.querySelector('.menu-button-close ');
  const body = document.body;

  openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    body.classList.add('no-scroll');
  });

  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  });

  const menuLinks = document.querySelectorAll('.mobile-menu-list-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  });
});
