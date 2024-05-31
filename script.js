document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('light-mode');
    });

    const fadeInElements = document.querySelectorAll('section');
    const options = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(section => {
        fadeInOnScroll.observe(section);
    });
});
