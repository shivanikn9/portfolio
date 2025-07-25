// Global Variables
let currentPortfolioIndex = 0;
const portfolioData = [
    {
        id: 1,
        title: 'E-Commerce Platform Design',
        image: 'assets/rectangle-1060.png',
        description: 'A modern e-commerce platform with intuitive user interface and seamless shopping experience. Features include product search, filtering, and secure checkout process.',
        figmaLink: 'https://www.figma.com/design/your-project-1',
        liveLink: 'https://your-live-demo-1.com'
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        image: 'assets/rectangle-1061.png',
        description: 'Secure and user-friendly mobile banking application with features like account management, money transfers, and transaction history.',
        figmaLink: 'https://www.figma.com/design/your-project-2',
        liveLink: 'https://your-live-demo-2.com'
    },
    {
        id: 3,
        title: 'Food Delivery Dashboard',
        image: 'assets/rectangle-1062.png',
        description: 'Admin dashboard for food delivery service with real-time order tracking, analytics, and restaurant management features.',
        figmaLink: 'https://www.figma.com/design/your-project-3',
        liveLink: 'https://your-live-demo-3.com'
    },
    {
        id: 4,
        title: 'Healthcare Management System',
        image: 'assets/rectangle-1063.png',
        description: 'Comprehensive healthcare management platform for patients and doctors with appointment scheduling and medical records.',
        figmaLink: 'https://www.figma.com/design/your-project-4',
        liveLink: 'https://your-live-demo-4.com'
    },
    {
        id: 5,
        title: 'Learning Management Platform',
        image: 'assets/rectangle-1064.png',
        description: 'Educational platform with course management, progress tracking, and interactive learning tools for students and educators.',
        figmaLink: 'https://www.figma.com/design/your-project-5',
        liveLink: 'https://your-live-demo-5.com'
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
    handleNavigationScroll();
});

// Initialize Event Listeners
function initializeEventListeners() {
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

    // Modal close events
    window.addEventListener('click', (e) => {
        const portfolioModal = document.getElementById('portfolioModal');
        const contactModal = document.getElementById('contactModal');
        
        if (e.target === portfolioModal) {
            closeModal();
        }
        if (e.target === contactModal) {
            closeContactModal();
        }
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        const portfolioModal = document.getElementById('portfolioModal');
        const contactModal = document.getElementById('contactModal');
        
        if (e.key === 'Escape') {
            if (portfolioModal.style.display === 'block') {
                closeModal();
            }
            if (contactModal.style.display === 'block') {
                closeContactModal();
            }
        }
        
        if (portfolioModal.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                prevPortfolioItem();
            } else if (e.key === 'ArrowRight') {
                nextPortfolioItem();
            }
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Service cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-in-left');
        }, index * 200);
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

// Navigation Functions
function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// About Section Functions
function showMoreAbout() {
    // Create and show more about modal or expand content
    const aboutText = document.querySelector('.about-text');
    const moreInfo = `
        <br><br>
        I have 3+ years of experience in designing digital products for web and mobile platforms. 
        My expertise includes user research, wireframing, prototyping, and creating design systems 
        that ensure consistency across all touchpoints.<br><br>
        
        I'm passionate about creating accessible designs that work for everyone, regardless of their 
        abilities or the devices they use. I believe that good design should be invisible – it should 
        work so well that users don't have to think about it.<br><br>
        
        When I'm not designing, you can find me exploring new design trends, reading about psychology 
        and human behavior, or working on personal creative projects.
    `;
    
    if (!aboutText.innerHTML.includes('3+ years of experience')) {
        aboutText.innerHTML += moreInfo;
        
        // Change button text
        const button = event.target;
        button.textContent = 'Show Less';
        button.onclick = showLessAbout;
    }
}

function showLessAbout() {
    const aboutText = document.querySelector('.about-text');
    const originalText = `
        My name is Shivani K.N.<br>
        A passionate UI/UX designer who loves<br>
        crafting intuitive, user-centered digital<br>
        experiences. With a keen eye for design<br>
        and a problem-solving mindset.<br>
        I specialize in turning complex ideas into<br>
        simple, beautiful, and functional interfaces.
    `;
    
    aboutText.innerHTML = originalText;
    
    // Change button text back
    const button = event.target;
    button.textContent = 'See More About Me';
    button.onclick = showMoreAbout;
}

// Portfolio Functions
function openPortfolioItem(index, event) {
    if (event) {
        event.preventDefault();
    }
    
    currentPortfolioIndex = index - 1; // Convert to 0-based index
    const project = portfolioData[currentPortfolioIndex];
    
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const portfolioTitle = document.getElementById('portfolioTitle');
    const portfolioDescription = document.getElementById('portfolioDescription');
    const figmaLink = document.getElementById('figmaLink');
    const liveLink = document.getElementById('liveLink');
    
    // Update modal content
    modalImage.src = project.image;
    modalImage.alt = project.title;
    portfolioTitle.textContent = project.title;
    portfolioDescription.textContent = project.description;
    
    // Update links - you can customize these URLs
    figmaLink.href = project.figmaLink;
    liveLink.href = project.liveLink;
    
    // Add click handlers for external links
    figmaLink.onclick = (e) => {
        e.preventDefault();
        // In a real application, these would open actual Figma links
        alert(`Opening Figma project: ${project.title}\nURL: ${project.figmaLink}\n\nReplace this alert with actual Figma links in the portfolioData array.`);
    };
    
    liveLink.onclick = (e) => {
        e.preventDefault();
        // In a real application, these would open actual live demos
        alert(`Opening live demo: ${project.title}\nURL: ${project.liveLink}\n\nReplace this alert with actual demo links in the portfolioData array.`);
    };
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('fade-in');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
    modal.querySelector('.modal-content').classList.remove('fade-in');
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

function prevPortfolioItem() {
    currentPortfolioIndex = currentPortfolioIndex > 0 ? currentPortfolioIndex - 1 : portfolioData.length - 1;
    updateModalContent();
}

function nextPortfolioItem() {
    currentPortfolioIndex = currentPortfolioIndex < portfolioData.length - 1 ? currentPortfolioIndex + 1 : 0;
    updateModalContent();
}

function updateModalContent() {
    const project = portfolioData[currentPortfolioIndex];
    const modalImage = document.getElementById('modalImage');
    const portfolioTitle = document.getElementById('portfolioTitle');
    const portfolioDescription = document.getElementById('portfolioDescription');
    const figmaLink = document.getElementById('figmaLink');
    const liveLink = document.getElementById('liveLink');
    
    modalImage.src = project.image;
    modalImage.alt = project.title;
    portfolioTitle.textContent = project.title;
    portfolioDescription.textContent = project.description;
    
    figmaLink.href = project.figmaLink;
    liveLink.href = project.liveLink;
    
    // Update click handlers
    figmaLink.onclick = (e) => {
        e.preventDefault();
        alert(`Opening Figma project: ${project.title}\nURL: ${project.figmaLink}\n\nReplace this alert with actual Figma links in the portfolioData array.`);
    };
    
    liveLink.onclick = (e) => {
        e.preventDefault();
        alert(`Opening live demo: ${project.title}\nURL: ${project.liveLink}\n\nReplace this alert with actual demo links in the portfolioData array.`);
    };
}

function showMorePortfolio() {
    // Create additional portfolio items or redirect to portfolio page
    alert('This would typically lead to a dedicated portfolio page with more projects. For this demo, you can view all current portfolio items by clicking on them individually.');
}

// Contact Functions
function openContactForm() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add animation
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('fade-in');
    }, 10);
    
    // Focus on first input
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 200);
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'none';
    modal.querySelector('.modal-content').classList.remove('fade-in');
    document.body.style.overflow = 'auto'; // Restore background scrolling
    
    // Reset form
    document.getElementById('contactForm').reset();
}

function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Basic form validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        closeContactModal();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted with data:', data);
}

// Social Media Functions
function openSocial(platform) {
    const socialLinks = {
        linkedin: 'https://linkedin.com/in/shivani-kn',
        behance: 'https://behance.net/shivanikn',
        dribbble: 'https://dribbble.com/shivanikn'
    };
    
    const url = socialLinks[platform];
    if (url) {
        // In a real application, these would be actual social media links
        alert(`This would open ${platform.charAt(0).toUpperCase() + platform.slice(1)} profile. Link: ${url}`);
        // window.open(url, '_blank');
    }
}

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

// Smooth scrolling for older browsers
function smoothScrollTo(element) {
    const targetPosition = element.offsetTop - 80; // Account for fixed navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
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

// Initialize performance optimizations when page loads
document.addEventListener('DOMContentLoaded', setupPerformanceOptimizations);

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
    // Add keyboard navigation for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    portfolioItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPortfolioItem(index + 1);
            }
        });
    });
    
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

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', setupAccessibility);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToContact,
        openPortfolioItem,
        closeModal,
        openContactForm,
        submitContactForm,
        openSocial
    };
}