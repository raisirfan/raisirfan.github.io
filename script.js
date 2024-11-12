document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeInObserver.unobserve(entry.target);
            }
        });
    });

    fadeInElements.forEach((el) => fadeInObserver.observe(el));
});
