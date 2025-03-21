
/**
 * Utility to handle scroll reveal animations
 */
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Trigger once on load
  revealOnScroll();
};

/**
 * Utility for parallax effects
 */
export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const moveParallax = (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    parallaxElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      const speed = parseFloat(htmlElement.getAttribute('data-speed') || '0.1');
      
      const offsetX = (window.innerWidth / 2 - x) * speed;
      const offsetY = (window.innerHeight / 2 - y) * speed;
      
      htmlElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  };
  
  document.addEventListener('mousemove', moveParallax);
};

/**
 * Initialize all animations
 */
export const initAnimations = () => {
  initScrollReveal();
  initParallax();
};
