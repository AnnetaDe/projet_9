document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentLi = btn.closest('li');
      const hoverContainer = parentLi.querySelector('.hover-container');
      const faqIcon = btn.querySelector('.faq-icon');

      hoverContainer.classList.toggle('active');

      if (hoverContainer.classList.contains('active')) {
        faqIcon.style.transform = 'rotate(180deg)';
      } else {
        faqIcon.style.transform = 'rotate(0deg)';
      }
    });
  });
});

