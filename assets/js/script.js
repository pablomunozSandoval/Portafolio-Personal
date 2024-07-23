
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
        contactForm.reset();
    });

    // Smooth scrolling for links with class "scroll"
    document.querySelectorAll('a.scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;

    darkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        const icon = darkModeButton.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            darkModeButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            darkModeButton.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
        }
    });
});

