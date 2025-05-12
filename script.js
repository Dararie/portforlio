document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize Typed.js
    new Typed('.typed-text', {
        strings: ['Web Developer', 'Designer', 'Creator'],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
    });

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 1rem';
        } else {
            navbar.style.padding = '1rem';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
