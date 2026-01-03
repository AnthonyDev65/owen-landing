document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  let lastScrollPosition = 0;
  let isHeaderVisible = true;
  let ticking = false;
  const scrollThreshold = 10;
  
  // Añadir transición al header
  if (header) {
    header.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  }
  
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = currentScrollPosition > lastScrollPosition;
        
        if (Math.abs(currentScrollPosition - lastScrollPosition) > scrollThreshold) {
          if (isScrollingDown && isHeaderVisible && currentScrollPosition > 100) {
            // Ocultar header
            header.style.transform = 'translateY(-100%)';
            header.style.opacity = '0';
            isHeaderVisible = false;
          } else if (!isScrollingDown && !isHeaderVisible) {
            // Mostrar header
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
            isHeaderVisible = true;
          }
        }
        
        lastScrollPosition = currentScrollPosition;
        ticking = false;
      });
      
      ticking = true;
    }
  }
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Asegurar que el header esté visible
          header.style.transform = 'translateY(0)';
          header.style.opacity = '1';
          isHeaderVisible = true;
          
          // Scroll suave al elemento
          const headerHeight = header.offsetHeight;
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  window.addEventListener('scroll', handleScroll);
});