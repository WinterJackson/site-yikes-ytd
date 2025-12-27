import { initAccordion, initSliders, initSmoothScroll, setCopyrightYear } from './scripts/ui.js';

// --- Mobile Navigation ---
function initMobileMenu() {
  const big_wrapper = document.querySelector(".big-wrapper");
  const hamburger_menu = document.querySelector(".hamburger-menu");

  if (hamburger_menu && big_wrapper) {
      hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
      });
  }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    setCopyrightYear();
    initSliders();
    initSmoothScroll();
    initAccordion();
});
