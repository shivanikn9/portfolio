// Base JavaScript - Common Functionality for All Pages

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeBaseEventListeners();
    handleNavigationScroll();
    updateActiveNavLink();
    setupPerformanceOptimizations();
    setupAccessibility();
});

// Initialize Base Event Listeners
function initializeBaseEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html')) {
                // Allow default navigation for .html files
                return;
            }
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburger && navMenu && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Handle Navigation Scroll Effect
function handleNavigationScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(27, 15, 63, 0.95)';
        } else {
            navbar.style.background = 'rgba(27, 15, 63, 0.9)';
        }
    });
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Smooth navigation with animation
function navigateWithAnimation(targetPage) {
    const navLinks = document.querySelectorAll('.nav-link');
    const targetLink = document.querySelector(`[href="${targetPage}"]`);
    const navMenu = document.querySelector('.nav-menu');
    
    if (targetLink && navMenu) {
        // Remove active from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active to target link with animation
        targetLink.classList.add('active');
        
        // Create splash effect
        createSplashEffect(targetLink);
        
        // Add a delay for the animation to be visible
        setTimeout(() => {
            window.location.href = targetPage;
        }, 600);
    }
}

// Create splash effect
function createSplashEffect(targetLink) {
    const splash = document.createElement('div');
    const rect = targetLink.getBoundingClientRect();
    
    splash.style.cssText = `
        position: fixed;
        top: ${rect.bottom - 5}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        height: 4px;
        background: linear-gradient(90deg, #69abdb, #4a90e2);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(105, 171, 219, 0.3);
        z-index: 1001;
        animation: splashEffect 0.6s ease-out forwards;
        pointer-events: none;
    `;
    
    document.body.appendChild(splash);
    
    setTimeout(() => {
        splash.remove();
    }, 600);
}

// Enhanced navigation link handling
document.addEventListener('DOMContentLoaded', function() {
    updateActiveNavLink();
    
    // Add click handlers for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a page navigation (not anchor link)
            if (href.endsWith('.html')) {
                e.preventDefault();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                this.style.textShadow = '0 0 20px rgba(105, 171, 219, 1)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.textShadow = '';
                }, 300);
                
                // Navigate with animation
                navigateWithAnimation(href);
            }
        });
    });
    
    // Enhanced hover effects for navigation
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.textShadow = '0 0 15px rgba(105, 171, 219, 0.6)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = '';
                this.style.textShadow = '';
            }
        });
    });
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization
function setupPerformanceOptimizations() {
    // Optimize scroll events
    const optimizedScrollHandler = debounce(handleNavigationScroll, 10);
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Preload critical images
    const criticalImages = [
        'assets/whatsapp-image-2025-03-09-at-22-32-36-1.png',
        'assets/whatsapp-image-2025-03-09-at-22-32-36-2.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations or heavy processes
        console.log('Page hidden - pausing non-critical processes');
    } else {
        // Resume animations or processes
        console.log('Page visible - resuming processes');
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            // You could set a fallback image here
            // this.src = 'assets/fallback-image.png';
        });
    });
});

// Accessibility improvements
function setupAccessibility() {
    // Add ARIA labels
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
    
    // Announce page changes to screen readers
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const sectionName = entry.target.id || 'main content';
                // This would announce the section change to screen readers
                console.log(`Now viewing: ${sectionName} section`);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
}

// Add CSS animations
const splashStyle = document.createElement('style');
splashStyle.textContent = `
    @keyframes splashEffect {
        0% {
            transform: scaleX(0);
            opacity: 1;
        }
        50% {
            transform: scaleX(1);
            opacity: 1;
        }
        100% {
            transform: scaleX(1.1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(splashStyle);

// Mouse-following gradient effect for Shivani K.N name
function initializeNameGradientEffect() {
    const nameElements = document.querySelectorAll('.name-text, .name-highlight, .about-text strong');
    
    nameElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate percentage position
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            // Apply gradient position based on mouse position
            this.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
        });
        
        element.addEventListener('mouseleave', function() {
            // Reset to center when mouse leaves
            this.style.backgroundPosition = '50% 50%';
        });
    });
}

// Initialize name gradient effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNameGradientEffect();
}); 