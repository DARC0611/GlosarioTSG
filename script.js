// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(8px)';
    } else {
        navbar.style.background = 'var(--background)';
        navbar.style.backdropFilter = 'none';
    }
});

// Reading time calculator
document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.article-body');
    if (article) {
        const words = article.textContent.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / 200);

        const meta = document.querySelector('.article-meta');
        const timeElement = document.createElement('span');
        timeElement.className = 'reading-time';
        timeElement.innerHTML = `&nbsp;·&nbsp;${readingTime} min de lectura`;
        meta.appendChild(timeElement);
    }

    // Modal functionality
    const newsCards = document.querySelectorAll('.news-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalId = card.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});