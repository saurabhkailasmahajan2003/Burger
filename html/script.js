document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                btn.classList.add('visible');
                observer.unobserve(btn);
            }
        });
    });

    observer.observe(btn);
});