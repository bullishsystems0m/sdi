document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Ajuste para el header fijo
            behavior: 'smooth'
          });
        }
      });
    });

    // Aquí podrías agregar funcionalidad adicional, si lo necesitas.
});