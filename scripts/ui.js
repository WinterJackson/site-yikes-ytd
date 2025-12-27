
/**
 * UI Interactions for Yikes YTD Site
 */

// --- Copyright Year ---
export function setCopyrightYear() {
  const spanYear = document.querySelector('#currentYear');
  if (spanYear) {
    const currentYear = new Date();
    spanYear.innerText = currentYear.getFullYear();
  }
}

// --- Image Sliders ---
export function initSliders() {
    // Single Video Slider
    initSlider('.feature-picsv img', 3000);
    // Playlist Video Slider
    initSlider('.feature-picsp img', 3000);
}

function initSlider(selector, interval) {
    const slides = document.querySelectorAll(selector);
    if (slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Ensure first slide is visible initially
    slides[0].style.display = 'block';

    setInterval(() => {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].style.display = 'block';
    }, interval);
}


// --- Smooth Scrolling ---
export function initSmoothScroll() {
    // Map of Button Selectors to Section IDs
    const links = {
        ".features-btn": "features",
        ".download-btn": "download-app",
        ".try-btn": "download-app",
        ".contribution-btn": "contributions",
        ".contact-btn": "contact"
    };

    for (const [btnSelector, sectionId] of Object.entries(links)) {
        const btn = document.querySelector(btnSelector);
        const section = document.getElementById(sectionId);
        
        if (btn && section) {
            btn.addEventListener("click", (e) => {
                // Prevent default anchor behavior if needed (though href is sometimes useful)
                // e.preventDefault(); 
                section.scrollIntoView({ behavior: "smooth" });
            });
        }
    }
}


// --- Accordion ---
export function initAccordion() {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
          const item = button.parentNode;
          const content = item.querySelector('.accordion-content');
          const isActive = item.classList.contains('active');
  
          // Close all accordion items
          document.querySelectorAll('.accordion-item').forEach(itm => {
            itm.classList.remove('active');
            const cnt = itm.querySelector('.accordion-content');
            if(cnt) cnt.style.maxHeight = '0';
          });
  
          // Toggle active class and show/hide content
          if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
}


