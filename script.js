// Initialize Lucide Icons
lucide.createIcons();

// --- Theme Toggle ---
const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
const body = document.body;

// Check local storage for theme
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });
});

// --- Scroll Progress Bar ---
const progressBar = document.querySelector('.progress-bar');
const progressBarGlow = document.querySelector('.progress-bar-glow');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    if (progressBar) progressBar.style.width = scrolled + '%';
    if (progressBarGlow) progressBarGlow.style.width = scrolled + '%';
    
    // Header Blur Effect
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(var(--bg-base), 0.85)';
        header.style.backdropFilter = 'blur(16px)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(var(--bg-base), 0.7)';
        header.style.backdropFilter = 'blur(12px)';
        header.style.boxShadow = 'none';
    }
});

// --- Fade Up Animations ---
const fadeElements = document.querySelectorAll('.pipeline-card, .proj-card, .timeline-item, .cert-box, .about-card, .skill-group');

const fadeObserverOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, fadeObserverOptions);

// Initial state for fade elements
fadeElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    fadeObserver.observe(el);
});

// --- Custom Cursor ---
const cursor = document.querySelector('.custom-cursor');
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});
