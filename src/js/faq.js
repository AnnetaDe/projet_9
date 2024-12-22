document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-btn");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentLi = btn.closest("li");
      const hoverContainer = parentLi.querySelector(".hover-container");

      document.querySelectorAll(".hover-container.active").forEach((container) => {
        if (container !== hoverContainer) {
          container.classList.remove("active");
        }
      });

      hoverContainer.classList.toggle("active");
    });
  });
});
