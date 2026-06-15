// Funcionalidad del Menú Hamburguesa (Móviles)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Cerrar el menú automáticamente al hacer click en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Animación Scroll-Reveal mejorada
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // Aplica un leve retraso secuencial para mejorar la experiencia visual
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { 
  threshold: 0.08, // Se activa un poco antes para mejorar respuesta en móviles
  rootMargin: '0px 0px -20px 0px'
});

reveals.forEach(el => io.observe(el));