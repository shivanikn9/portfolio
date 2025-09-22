// ========================================
// NAVIGATION FUNCTIONS FOR BUTTONS
// ========================================

// Portfolio page: default to limited view (first 9 items)
if (window && typeof window !== 'undefined') {
  try {
    if (window.location && /portfolio\.html(\?.*)?$/i.test(window.location.pathname)) {
      window.__portfolioLimited = true; // default: show less
    }
  } catch (_) {}
}

function scrollToContact() {
    console.log('🎯 Scrolling to contact section...');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        // Add smooth scroll with offset for navbar
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        console.log('✨ Smooth scroll to contact initiated');
    } else {
        console.warn('Contact section not found, navigating to contact page');
        window.location.href = 'contact.html';
    }
}

function showMoreAbout() {
    window.location.href = 'about.html';
}

function showMorePortfolio() {
    window.location.href = 'portfolio.html';
}

function openContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'block';
    } else {
        // If modal doesn't exist, navigate to contact page
        window.location.href = 'contact.html';
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Initialize button event listeners when DOM is loaded
function initializeButtonListeners() {
    // Get Connected button - using onclick attribute in HTML, no additional listener needed
    console.log('✅ Get Connected button uses onclick="scrollToContact()" from HTML');
    
    // See More About Me button
    const btnSeeMoreAbout = document.getElementById('btn-see-more-about');
    if (btnSeeMoreAbout) {
        btnSeeMoreAbout.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
    
    // See More Projects button
    const btnSeeMoreProjects = document.getElementById('btn-see-more-projects');
    if (btnSeeMoreProjects) {
        btnSeeMoreProjects.addEventListener('click', function() {
            window.location.href = 'portfolio.html';
        });
    }
    
    // Contact button (footer)
    const btnContact = document.getElementById('btn-contact');
    if (btnContact) {
        btnContact.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
    
    console.log('✅ Button event listeners initialized');
}

// ========================================
// SMOOTH ANIMATIONS INITIALIZATION SYSTEM
// ========================================

// SMOOTH PAGE LOAD ANIMATION CONTROLLER
function initializeSmoothAnimations() {
    console.log('🎨 INITIALIZING SMOOTH ANIMATIONS SYSTEM');
    
    // ADD LOADING CLASS TO BODY
    document.body.classList.add('loading-animations');
    
    // ANIMATE ELEMENTS ON LOAD
    const animatedElements = [
        { selector: '.navbar', delay: 200 },
        { selector: '.hero-content', delay: 500 },
        { selector: '.about', delay: 800 },
        { selector: '.portfolio', delay: 1000 },
        { selector: '.services', delay: 1200 },
        { selector: '.footer', delay: 1500 }
    ];
    
    animatedElements.forEach(({ selector, delay }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    });
    
    // INITIALIZE STAGGERED PORTFOLIO ITEMS
    setTimeout(() => {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
        });
    }, 1200);
    
    // INITIALIZE STAGGERED SERVICE CARDS
    setTimeout(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1400);
    
    console.log('✨ SMOOTH ANIMATIONS INITIALIZED');
}

// SMOOTH SCROLL TO SECTION
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// SMOOTH HOVER EFFECTS FOR INTERACTIVE ELEMENTS
function addSmoothHoverEffects() {
    // ENHANCE BUTTON HOVER EFFECTS
    const buttons = document.querySelectorAll('.btn-primary, .filter-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(105, 171, 219, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            }
        });
    });
    
    // ENHANCE CARD HOVER EFFECTS
    const cards = document.querySelectorAll('.portfolio-item, .service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 25px 50px rgba(105, 171, 219, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // ENHANCE LINK HOVER EFFECTS
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.textShadow = '0 5px 15px rgba(105, 171, 219, 0.5)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.textShadow = '';
            }
        });
    });
}

// SMOOTH INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // OBSERVE ELEMENTS FOR SCROLL ANIMATIONS
    const elementsToAnimate = document.querySelectorAll('.portfolio-item, .service-card, .about-content, .contact-form');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// ENHANCED PORTFOLIO FILTERING WITH SMOOTH ANIMATIONS
function addSmoothFilteringEnhancements() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // ADD CLICK ANIMATION
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // TRIGGER FILTERING WITH DELAY FOR SMOOTH EFFECT
            const category = this.getAttribute('data-filter');
            setTimeout(() => {
                filterProjects(category);
            }, 100);
        });
    });
}

// RUN ALL SMOOTH ANIMATION INITIALIZATIONS
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎆 STARTING SMOOTH ANIMATIONS SETUP');
    
    // Initialize button listeners immediately
    initializeButtonListeners();
    
    setTimeout(() => {
        initializeSmoothAnimations();
        addSmoothHoverEffects();
        initializeScrollAnimations();
        addSmoothFilteringEnhancements();
        initializeUltimateFiltering();
    }, 100);
});

// ALSO RUN ON WINDOW LOAD FOR SAFETY
window.addEventListener('load', function() {
    setTimeout(() => {
        initializeSmoothAnimations();
        document.body.classList.remove('loading-animations');
    }, 200);
});
const portfolioData = [
    // WEB PROJECTS
    {
        id: 1,
        title: 'Plant Website',
        image: 'assets/rectangle-1060.png',
        description: 'Beautiful and responsive plant website design with modern UI/UX.',
        figmaLink: 'https://www.figma.com/proto/ubvAyMcCP5hETHs9PkXn7l/Plant-Website?node-id=3-2&t=tSMQldEvUOK7YgMe-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/ubvAyMcCP5hETHs9PkXn7l/Plant-Website?node-id=3-2&t=tSMQldEvUOK7YgMe-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 2,
        title: 'Flower Website',
        image: 'assets/rectangle-1061.png',
        description: 'Elegant flower website design with beautiful floral elements.',
        figmaLink: 'https://www.figma.com/proto/JzM4SSgj5vQtRFJtvF8RJq/Flower?node-id=55-81&t=kjGbO9Fr0Yn0zOZ5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/JzM4SSgj5vQtRFJtvF8RJq/Flower?node-id=55-81&t=kjGbO9Fr0Yn0zOZ5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 3,
        title: 'Interior Design Website',
        image: 'assets/rectangle-1062.png',
        description: 'Modern interior design website showcasing creative home solutions.',
        figmaLink: 'https://www.figma.com/proto/isLMxgMVFrAsT4SQTNg2Ec/Interior?node-id=1-2&t=lMVTRLVqeHuCZLbJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/isLMxgMVFrAsT4SQTNg2Ec/Interior?node-id=1-2&t=lMVTRLVqeHuCZLbJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 4,
        title: 'Wedding Event Planner',
        image: 'assets/rectangle-1063.png',
        description: 'Comprehensive wedding event planning website with booking system.',
        figmaLink: 'https://www.figma.com/proto/HLYwgzLRUfZmn7TLHrvh9a/Wedding-event-Planner-by-shivani?node-id=40-2&t=4gUbqPwiFm2xuMV8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=40%3A2',
        liveLink: 'https://www.figma.com/proto/HLYwgzLRUfZmn7TLHrvh9a/Wedding-event-Planner-by-shivani?node-id=40-2&t=4gUbqPwiFm2xuMV8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=40%3A2'
    },
    {
        id: 5,
        title: 'Hotel Website',
        image: 'assets/rectangle-1064.png',
        description: 'Luxury hotel website design with booking and amenities showcase.',
        figmaLink: 'https://www.figma.com/proto/OmLlrQWVFBlUIhdp6nR9k7/Hotel-Website?node-id=1-2&t=Q6JWmrMpcweDQBHv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/OmLlrQWVFBlUIhdp6nR9k7/Hotel-Website?node-id=1-2&t=Q6JWmrMpcweDQBHv-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 6,
        title: 'Swaragh Website',
        image: 'assets/rectangle-1060.png',
        description: 'Cultural website design with traditional elements and modern approach.',
        figmaLink: 'https://www.figma.com/proto/oRetScSjuH4xbItzVUiny2/Swaragh?node-id=2-2&t=fki9yFio6BagMIEX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/oRetScSjuH4xbItzVUiny2/Swaragh?node-id=2-2&t=fki9yFio6BagMIEX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 7,
        title: 'SPOCLEARN Platform',
        image: 'assets/rectangle-1061.png',
        description: 'Educational learning platform with interactive course design.',
        figmaLink: 'https://www.figma.com/proto/rM8nSToGCmcZFT786xlXqM/SPOCLEARN?node-id=1-2&t=TPExvPvY9QSnPQ2w-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/rM8nSToGCmcZFT786xlXqM/SPOCLEARN?node-id=1-2&t=TPExvPvY9QSnPQ2w-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 8,
        title: 'Pet Care Website',
        image: 'assets/rectangle-1062.png',
        description: 'Comprehensive pet care website with veterinary services.',
        figmaLink: 'https://www.figma.com/design/Eu4Nc6Hv5jCq7Rl3vi6uam/Pet-Care?t=wVNHmVwB3G46vYRL-1',
        liveLink: 'https://www.figma.com/design/Eu4Nc6Hv5jCq7Rl3vi6uam/Pet-Care?t=wVNHmVwB3G46vYRL-1'
    },
    {
        id: 9,
        title: 'Bento Design',
        image: 'assets/rectangle-1063.png',
        description: 'Modern bento grid design with clean layout and typography.',
        figmaLink: 'https://www.figma.com/proto/or4PmCvrQEsO2S79oSYg9u/Bento-Design?node-id=1-2&t=Z80eSOU6gjkfjUME-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/or4PmCvrQEsO2S79oSYg9u/Bento-Design?node-id=1-2&t=Z80eSOU6gjkfjUME-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 10,
        title: 'Smoothie Website',
        image: 'assets/rectangle-1064.png',
        description: 'Fresh and vibrant smoothie website with product showcase.',
        figmaLink: 'https://www.figma.com/proto/7F4EW8pPYagBuaEHyu5Pq5/Smoothie?node-id=1-2&t=wEMqIcZu4SpmGmWt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/7F4EW8pPYagBuaEHyu5Pq5/Smoothie?node-id=1-2&t=wEMqIcZu4SpmGmWt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 11,
        title: 'Freelancing Platform',
        image: 'assets/rectangle-1060.png',
        description: 'Professional freelancing platform design with job marketplace.',
        figmaLink: 'https://www.figma.com/design/fLqrfDy8cjuoOQdaAhrcEE/Freelancing?node-id=0-1&t=BG2yFsywi7Bvopsh-1',
        liveLink: 'https://www.figma.com/design/fLqrfDy8cjuoOQdaAhrcEE/Freelancing?node-id=0-1&t=BG2yFsywi7Bvopsh-1'
    },
    // MOBILE APP PROJECTS
    {
        id: 12,
        title: 'Self Nurture App',
        image: 'assets/rectangle-1061.png',
        description: 'Self-care and wellness mobile app with mindfulness features.',
        figmaLink: 'https://www.figma.com/proto/wnvnbsGk6vmub6oDJgwIfo/self-nurture?node-id=492-52&t=YnbAvPFnuanysMgt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=418%3A2&show-proto-sidebar=1',
        liveLink: 'https://www.figma.com/proto/wnvnbsGk6vmub6oDJgwIfo/self-nurture?node-id=492-52&t=YnbAvPFnuanysMgt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=418%3A2&show-proto-sidebar=1'
    },
    {
        id: 13,
        title: 'Art Gallery App',
        image: 'assets/rectangle-1062.png',
        description: 'Digital art gallery mobile app with virtual exhibitions.',
        figmaLink: 'https://www.figma.com/proto/kP0Lwq0r0wFSoVGzNbUlup/Art-Gallery?node-id=1-2&t=iaAwETaNeoV7hGQK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/kP0Lwq0r0wFSoVGzNbUlup/Art-Gallery?node-id=1-2&t=iaAwETaNeoV7hGQK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 14,
        title: 'Valentine App',
        image: 'assets/rectangle-1063.png',
        description: 'Romantic valentine mobile app with dating and gift features.',
        figmaLink: 'https://www.figma.com/proto/jKCElEb2HkC40lkVb8RL0X/valentine?node-id=21-3&t=I3FNu74ukDLNlNaK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7',
        liveLink: 'https://www.figma.com/proto/jKCElEb2HkC40lkVb8RL0X/valentine?node-id=21-3&t=I3FNu74ukDLNlNaK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7'
    },
    {
        id: 15,
        title: 'Art Gallery Pro',
        image: 'assets/rectangle-1064.png',
        description: 'Advanced art gallery mobile app with curator features.',
        figmaLink: 'https://www.figma.com/proto/MIOX1IXWmdYMVDYM07syyn/art-gallery?node-id=58-13&t=uiS5dRk9N8aBlwYw-1&scaling=scale-down&content-scaling=fixed&page-id=58%3A12',
        liveLink: 'https://www.figma.com/proto/MIOX1IXWmdYMVDYM07syyn/art-gallery?node-id=58-13&t=uiS5dRk9N8aBlwYw-1&scaling=scale-down&content-scaling=fixed&page-id=58%3A12'
    },
    {
        id: 16,
        title: 'Login Screens',
        image: 'assets/rectangle-1060.png',
        description: 'Collection of modern login and authentication screen designs.',
        figmaLink: 'https://www.figma.com/proto/wpNC07o8ZFrjbosUmPaBux/login-screens?node-id=1-3&p=f&t=TaTaVrNxo17ru5Mj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/wpNC07o8ZFrjbosUmPaBux/login-screens?node-id=1-3&p=f&t=TaTaVrNxo17ru5Mj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 17,
        title: 'Fish App',
        image: 'assets/rectangle-1061.png',
        description: 'Aquarium and fish care mobile app with species identification.',
        figmaLink: 'https://www.figma.com/proto/cQu9480QGcedcj0VbpCji5/Fish?node-id=1-2&t=cTvjA0uvIUuroJxc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/cQu9480QGcedcj0VbpCji5/Fish?node-id=1-2&t=cTvjA0uvIUuroJxc-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
    },
    // ANIMATION PROJECTS
    {
        id: 18,
        title: 'Hover Animation',
        image: 'assets/rectangle-1062.png',
        description: 'Interactive hover effects and micro-animations for web interfaces.',
        figmaLink: 'https://www.figma.com/proto/DEbnAKHpHruEqGcMxmSTcb/Hover-Animation?node-id=1-2&t=m5t5Q7FNmw32fFGD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        liveLink: 'https://www.figma.com/proto/DEbnAKHpHruEqGcMxmSTcb/Hover-Animation?node-id=1-2&t=m5t5Q7FNmw32fFGD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    },
    {
        id: 19,
        title: 'Scroll Animation',
        image: 'assets/rectangle-1063.png',
        description: 'Smooth scroll-triggered animations and transitions.',
        figmaLink: 'https://www.figma.com/proto/wYWx7zMcJieh6whNIPlQDq/Scroll-animation?node-id=1-2&t=2UF2LlFYyirMz4by-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        liveLink: 'https://www.figma.com/proto/wYWx7zMcJieh6whNIPlQDq/Scroll-animation?node-id=1-2&t=2UF2LlFYyirMz4by-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    },
    {
        id: 20,
        title: '3D Carousel Slider',
        image: 'assets/rectangle-1064.png',
        description: '3D carousel component with smooth rotation animations.',
        figmaLink: 'https://www.figma.com/proto/RUIshAbrljZLPQS2tjW9m7/3D-carousel-Slider?node-id=1-2&t=MZZaI2iZFgXS1CdF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        liveLink: 'https://www.figma.com/proto/RUIshAbrljZLPQS2tjW9m7/3D-carousel-Slider?node-id=1-2&t=MZZaI2iZFgXS1CdF-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    },
    {
        id: 21,
        title: '3D Carousel',
        image: 'assets/rectangle-1060.png',
        description: 'Advanced 3D carousel with perspective and depth effects.',
        figmaLink: 'https://www.figma.com/proto/V01MtVsiqUNt1N7LOeM4Dv/3D-carousel?node-id=1-2&t=5wLlhISB52vvctkL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        liveLink: 'https://www.figma.com/proto/V01MtVsiqUNt1N7LOeM4Dv/3D-carousel?node-id=1-2&t=5wLlhISB52vvctkL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    },
    {
        id: 22,
        title: 'Spin Animation',
        image: 'assets/rectangle-1061.png',
        description: 'Creative spinning animations and loading effects.',
        figmaLink: 'https://www.figma.com/proto/dXeciR6Tc99656gAATz1bv/Spin-animation?node-id=1-2&t=SeLQOcwRhldKgw64-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/dXeciR6Tc99656gAATz1bv/Spin-animation?node-id=1-2&t=SeLQOcwRhldKgw64-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 23,
        title: 'Interactive Animation',
        image: 'assets/rectangle-1062.png',
        description: 'Interactive UI animations with user engagement.',
        figmaLink: 'https://www.figma.com/proto/ZL60cimKgjmFNwUC7aUUie/Untitled?node-id=1-2&t=RD29Q8ibAnuhvDyp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        liveLink: 'https://www.figma.com/proto/ZL60cimKgjmFNwUC7aUUie/Untitled?node-id=1-2&t=RD29Q8ibAnuhvDyp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
    },
    {
        id: 24,
        title: 'On Click On Drag',
        image: 'assets/rectangle-1063.png',
        description: 'Click and drag interaction animations for better UX.',
        figmaLink: 'https://www.figma.com/proto/nZNzFxYBwUBVhqnoTjaSOr/On-Click-On-Drag?node-id=9-52&t=Gs0UHjITbBcGtCg9-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A52',
        liveLink: 'https://www.figma.com/proto/nZNzFxYBwUBVhqnoTjaSOr/On-Click-On-Drag?node-id=9-52&t=Gs0UHjITbBcGtCg9-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=9%3A52'
    },
    {
        id: 25,
        title: 'Horizontal Scroll',
        image: 'assets/rectangle-1064.png',
        description: 'Smooth horizontal scrolling animations and layouts.',
        figmaLink: 'https://www.figma.com/proto/rZPo6Cp13dWmEYjgyqHXqt/Horizontal-scroll?node-id=2-2&t=AvpDJ4t9eHI9R8WY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2',
        liveLink: 'https://www.figma.com/proto/rZPo6Cp13dWmEYjgyqHXqt/Horizontal-scroll?node-id=2-2&t=AvpDJ4t9eHI9R8WY-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2'
    },
    {
        id: 26,
        title: 'Creative Animation',
        image: 'assets/rectangle-1060.png',
        description: 'Creative and experimental animation concepts.',
        figmaLink: 'https://www.figma.com/proto/81GUCouzvSianYakXOv771/Untitled?node-id=1-2&t=sftM2FM3Ot9Wv1ui-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        liveLink: 'https://www.figma.com/proto/81GUCouzvSianYakXOv771/Untitled?node-id=1-2&t=sftM2FM3Ot9Wv1ui-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2'
    }
];

// DOM Content Loaded - Enhanced with Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
    handleNavigationScroll();
    updateActiveNavLink();
    initializeSkillCards();
    optimizePerformance();
    addSmoothScrolling();
    initializeIntersectionObserver();
    initializePortfolio(); // Initialize portfolio filtering
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Enhanced Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    }

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html')) {
                // Close mobile menu if open before navigation
                if (navMenu && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.style.overflow = 'auto';
                }
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
                body.style.overflow = 'auto';
            }
        });
    });

    // Filter buttons - ensure they navigate properly
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Filter button clicked:', button.textContent, button.href);
            const href = button.getAttribute('href');
            if (href && href.endsWith('.html')) {
                console.log('Navigating to:', href);
                // Allow default navigation for filter buttons
                return;
            }
        });
    });

    // Modal close events
    window.addEventListener('click', (e) => {
        const portfolioModal = document.getElementById('portfolioModal');
        const contactModal = document.getElementById('contactModal');
        
        if (portfolioModal && e.target === portfolioModal) {
            closeModal();
        }
        if (contactModal && e.target === contactModal) {
            closeContactModal();
        }
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        const portfolioModal = document.getElementById('portfolioModal');
        const contactModal = document.getElementById('contactModal');
        
        if (e.key === 'Escape') {
            if (portfolioModal && portfolioModal.style.display === 'block') {
                closeModal();
            }
            if (contactModal && contactModal.style.display === 'block') {
                closeContactModal();
            }
        }
        
        if (portfolioModal && portfolioModal.style.display === 'block') {
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
// scrollToContact function is defined at the top of the file

// About Section Functions
function showMoreAbout() {
    console.log('🎯 Navigating to About page...');
    
    // Add button click animation before navigation
    const seeMoreBtn = document.querySelector('button[onclick="showMoreAbout()"]');
    
    if (seeMoreBtn) {
        // Visual feedback on click
        seeMoreBtn.style.transform = 'scale(0.95)';
        seeMoreBtn.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            seeMoreBtn.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Navigate to about page with slight delay for animation
    setTimeout(() => {
        window.location.href = 'about.html';
    }, 300);
    
    console.log('✨ Navigation to about page initiated');
}


// Portfolio Functions
// Portfolio functionality - Direct links only (performance optimized)
function openPortfolioItem(index, event) {
    // This function is now deprecated since we use direct links
    // Keeping for backward compatibility with other pages
    console.log('Direct link access - no modal needed');
    return true; // Allow default link behavior
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
        window.open(project.figmaLink, '_blank');
    };
    
    liveLink.onclick = (e) => {
        e.preventDefault();
        window.open(project.liveLink, '_blank');
    };
}



// Test function to verify JavaScript is working
function testFunction() {
    alert('JavaScript is working!');
    console.log('Test function called');
}

// Portfolio Filtering Function - Now uses the enhanced version above

// Toggle Portfolio Items Show More/Less Function
function showMorePortfolio() {
    const button = document.querySelector('.portfolio-page .portfolio-button .btn-primary');
    if (!button) return;

    // Toggle limited mode flag
    const currentlyLimited = !!window.__portfolioLimited;
    window.__portfolioLimited = !currentlyLimited;

    // Update button label
    button.textContent = window.__portfolioLimited ? 'Show More' : 'Show Less';

    // Re-apply current category filter with new limit mode
    let active = document.querySelector('.filter-btn.active');
    const category = active ? active.getAttribute('data-filter') : 'all';
    try {
        filterProjects(category);
    } catch (e) {
        console.warn('filterProjects not ready yet, retrying shortly...', e);
        setTimeout(() => filterProjects(category), 50);
    }

    // Click feedback
    button.style.transform = 'scale(0.95)';
    button.style.transition = 'transform 0.2s ease';
    setTimeout(() => { button.style.transform = 'scale(1)'; }, 180);
}

// Initialize Portfolio Page - Hide items beyond first 9
function initializePortfolioPage() {
    // Only run this on portfolio page
    if (!/portfolio\.html(\?.*)?$/i.test(window.location.pathname)) return;

    // Set limited mode by default
    window.__portfolioLimited = true;

    const button = document.querySelector('.portfolio-page .portfolio-button .btn-primary');
    if (button) {
        button.textContent = 'Show More';
        // Attach click handler (CSP-safe)
        button._seeMoreBound && button.removeEventListener('click', button._seeMoreBound);
        button._seeMoreBound = function(e) {
            e.preventDefault();
            showMorePortfolio();
        };
        button.addEventListener('click', button._seeMoreBound);
    }

    // Apply current filter with limited mode
    let active = document.querySelector('.filter-btn.active');
    const category = active ? active.getAttribute('data-filter') : 'all';
    setTimeout(() => {
        filterProjects(category);
    }, 0);

    console.log('🎨 Portfolio page initialized - limited mode (first 9)');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolioPage();
});

// Also run on window load for safety
window.addEventListener('load', function() {
    initializePortfolioPage();
});

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
    
    // Show message that contact form is not currently accepting messages
    const messageContainer = document.createElement('div');
    messageContainer.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1b0f3f 0%, #2a1565 100%);
            border: 2px solid #69abdb;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            z-index: 10000;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            max-width: 500px;
            width: 90%;
        ">
            <div style="
                background: linear-gradient(135deg, #69abdb, #4a90e2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 20px;
            ">⚠️ Notice</div>
            <p style="
                color: white;
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 30px;
            ">Thank you for your interest! Currently, the contact form is not accepting messages. This is a portfolio demonstration site.</p>
            <p style="
                color: rgba(255, 255, 255, 0.8);
                font-size: 14px;
                margin-bottom: 25px;
            ">For actual inquiries, please connect through social media or professional networks.</p>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: linear-gradient(135deg, #69abdb, #4a90e2);
                border: none;
                border-radius: 12px;
                color: white;
                padding: 12px 30px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(105, 171, 219, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">Understood</button>
        </div>
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 9999;
        " onclick="this.parentElement.remove()"></div>
    `;
    
    document.body.appendChild(messageContainer);
    
    // Add animation
    setTimeout(() => {
        messageContainer.style.animation = 'fadeIn 0.3s ease forwards';
    }, 10);
    
    // Auto remove after 8 seconds
    setTimeout(() => {
        if (messageContainer.parentElement) {
            messageContainer.remove();
        }
    }, 8000);
    
    // Reset form after showing message
    setTimeout(() => {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.reset();
        }
    }, 1000);
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

// Performance Optimization Functions
function optimizePerformance() {
    // Lazy load images
    lazyLoadImages();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Add performance monitoring
    monitorPerformance();
    
    // Optimize animations for performance
    optimizeAnimations();
}

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });
    
    images.forEach(img => imageObserver.observe(img));
}

function preloadCriticalResources() {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = 'styles.css';
    document.head.appendChild(criticalCSS);
    
    // Preload important images
    const importantImages = [
        'assets/fi323asset-11600-1.png',
        'assets/whatsapp-image-2025-03-09-at-22-32-36-2.png'
    ];
    
    importantImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

function monitorPerformance() {
    // Monitor First Contentful Paint
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                console.log(`${entry.name}: ${entry.startTime}ms`);
            });
        });
        observer.observe({entryTypes: ['paint', 'largest-contentful-paint']});
    }
}

function optimizeAnimations() {
    // Use requestAnimationFrame for smooth animations
    let ticking = false;
    
    function updateAnimations() {
        // Batch DOM reads and writes
        const scrollY = window.pageYOffset;
        
        // Update parallax effects
        updateParallaxElements(scrollY);
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

function updateParallaxElements(scrollY) {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Enhanced Smooth Scrolling
function addSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Enhanced Intersection Observer for Animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('portfolio-item') || 
                    entry.target.classList.contains('service-card')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatableElements = document.querySelectorAll(
        '.portfolio-item, .service-card, .about-content, .hero-content, section'
    );
    animatableElements.forEach(el => observer.observe(el));
}

// SIMPLE PORTFOLIO INITIALIZATION - RUNS IMMEDIATELY
function initializePortfolio() {
    console.log('🎆 INITIALIZING PORTFOLIO...');
    
    // Show all items initially
    const allItems = document.querySelectorAll('.portfolio-item');
    allItems.forEach((item, index) => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        item.classList.add('filtered-in');
        item.classList.remove('filtered-out');
        console.log(`🎆 Initialized item ${index + 1}`);
    });
    
    // Set "All Projects" button as active
    const allButtons = document.querySelectorAll('.filter-btn');
    allButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === 'all') {
            btn.classList.add('active');
            console.log('🎆 Set "All Projects" as active');
        }
    });
    
    console.log('🎆 Portfolio initialization complete!');
}

// Test function to verify filtering works - CALL FROM CONSOLE
function testFiltering() {
    console.log('🧪 TESTING: Starting filter test');
    
    // Test all categories
    const categories = ['all', 'web', 'mobile', 'animation'];
    
    categories.forEach((category, index) => {
        setTimeout(() => {
            console.log(`🧪 TESTING: Testing category: ${category}`);
            filterProjects(category);
        }, index * 2000); // 2 second delay between tests
    });
}

// ULTIMATE INITIALIZATION - ENSURE FILTER BUTTONS WORK IMMEDIATELY
function initializeUltimateFiltering() {
    console.log('🚀 INITIALIZING ULTIMATE FILTERING SYSTEM');
    
    // WAIT FOR DOM TO BE FULLY READY
    setTimeout(() => {
        // RESET ALL BUTTONS TO DEFAULT STATE
        const allButtons = document.querySelectorAll('.filter-btn, button.filter-btn, [data-filter]');
        console.log('🎆 Initializing', allButtons.length, 'filter buttons');
        
        allButtons.forEach(btn => {
            // REMOVE ANY EXISTING EVENT LISTENERS
            btn.onclick = null;
            
            // ADD OUR BULLETPROOF EVENT LISTENER
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const category = this.getAttribute('data-filter');
                console.log('🔍 BUTTON CLICKED:', category);
                
                // CALL OUR BULLETPROOF FILTER FUNCTION
                filterProjects(category);
                
                return false;
            });
            
            // ALSO SET ONCLICK AS BACKUP
            const category = btn.getAttribute('data-filter');
            btn.setAttribute('onclick', `window.filterProjects('${category}'); return false;`);
        });
        
        // INITIALIZE WITH 'ALL' PROJECTS SHOWING
        filterProjects('all');
        
        console.log('✅ ULTIMATE FILTERING SYSTEM INITIALIZED');
        
    }, 100);
}

// ENSURE INITIALIZATION RUNS MULTIPLE TIMES FOR SAFETY
document.addEventListener('DOMContentLoaded', initializeUltimateFiltering);
window.addEventListener('load', initializeUltimateFiltering);

// ALSO RUN IMMEDIATELY IF DOM IS ALREADY READY
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeUltimateFiltering);
} else {
    initializeUltimateFiltering();
}

// Make functions globally available for debugging and HTML onclick events
window.filterProjects = filterProjects;
window.initializeUltimateFiltering = initializeUltimateFiltering;
window.showMorePortfolio = showMorePortfolio;
window.openPortfolioItem = openPortfolioItem;
window.openContactForm = openContactForm;
window.closeContactModal = closeContactModal;
window.submitContactForm = submitContactForm;

// ULTIMATE SMOOTH FILTERING FUNCTION WITH ADVANCED ANIMATIONS
function filterProjects(category) {
    console.log('🎬 SMOOTH FILTERING STARTED FOR:', category, 'limited:', !!window.__portfolioLimited);
    
    // STEP 1: ANIMATE BUTTON STATE CHANGES WITH SMOOTH TRANSITIONS
    const allButtons = document.querySelectorAll('.filter-btn, button.filter-btn, [data-filter]');
    console.log('🎯 Found filter buttons:', allButtons.length);
    
    allButtons.forEach((btn, index) => {
        const btnCategory = btn.getAttribute('data-filter');
        console.log(`🔘 Processing Button ${index + 1}: ${btnCategory}`);
        
        // SMOOTH BUTTON RESET
        btn.classList.remove('active');
        btn.style.removeProperty('animation');
        
        // APPLY SMOOTH TRANSITION TO INACTIVE STATE
        btn.style.setProperty('transition', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 'important');
        btn.style.setProperty('background', 'rgba(255, 255, 255, 0.08)', 'important');
        btn.style.setProperty('background-color', 'rgba(255, 255, 255, 0.08)', 'important');
        btn.style.setProperty('background-image', 'none', 'important');
        btn.style.setProperty('border-color', 'rgba(105, 171, 219, 0.2)', 'important');
        btn.style.setProperty('color', 'rgba(255, 255, 255, 0.9)', 'important');
        btn.style.setProperty('transform', 'translateY(0) scale(1)', 'important');
        btn.style.setProperty('box-shadow', 'none', 'important');
        
        // ACTIVATE MATCHING BUTTON WITH SMOOTH ANIMATION
        if (btnCategory === category) {
            console.log('✨ SMOOTHLY ACTIVATING BUTTON:', btnCategory);
            
            setTimeout(() => {
                btn.classList.add('active');
                
                // SMOOTH ACTIVE STATE TRANSITION
                btn.style.setProperty('background', 'linear-gradient(135deg, #69abdb 0%, #8c52ff 100%)', 'important');
                btn.style.setProperty('background-color', '#69abdb', 'important');
                btn.style.setProperty('background-image', 'linear-gradient(135deg, #69abdb 0%, #8c52ff 100%)', 'important');
                btn.style.setProperty('border-color', '#69abdb', 'important');
                btn.style.setProperty('color', '#fff', 'important');
                btn.style.setProperty('box-shadow', '0 12px 25px rgba(105, 171, 219, 0.5)', 'important');
                btn.style.setProperty('transform', 'translateY(-6px) scale(1.08)', 'important');
                btn.style.setProperty('font-weight', '600', 'important');
                
                // ADD PULSE ANIMATION
                btn.style.setProperty('animation', 'activeButtonPulse 0.6s ease-out', 'important');
                
                console.log('🎊 BUTTON ACTIVATED WITH SMOOTH ANIMATION:', {
                    background: btn.style.background,
                    transform: btn.style.transform,
                    classes: btn.className
                });
            }, 50);
        }
    });
    
    // STEP 2: SMOOTH PORTFOLIO ITEM FILTERING WITH STAGGERED ANIMATIONS
    const allItems = document.querySelectorAll('.portfolio-item, [data-category]');
    console.log('🎭 Found portfolio items:', allItems.length);
    
    let showDelay = 0;
    let hideDelay = 0;
    let shownCount = 0;

    allItems.forEach((item, index) => {
        const itemCategory = item.getAttribute('data-category');
        const matches = category === 'all' || itemCategory === category;
        const shouldLimit = !!window.__portfolioLimited;
        const allowShow = matches && (!shouldLimit || (shouldLimit && shownCount < 9));
        
        if (allowShow) {
            // SMOOTH SHOW ANIMATION WITH STAGGERED TIMING
            setTimeout(() => {
                item.style.setProperty('display', 'block', 'important');
                item.style.setProperty('visibility', 'visible', 'important');
                item.style.setProperty('pointer-events', 'auto', 'important');
                
                item.classList.remove('filtered-out');
                item.classList.add('filtered-in');
                
                // TRIGGER SMOOTH ENTRY ANIMATION
                item.style.setProperty('opacity', '1', 'important');
                item.style.setProperty('transform', 'translateY(0) scale(1) rotateX(0deg)', 'important');
                item.style.setProperty('filter', 'blur(0px) brightness(1)', 'important');
                item.style.setProperty('transition', 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 'important');
                
                // Force browser to apply the animation
                item.offsetHeight;
                
            }, showDelay);
            
            showDelay += 100; // Stagger by 100ms
            shownCount++;
        } else {
            // SMOOTH HIDE ANIMATION WITH STAGGERED TIMING
            setTimeout(() => {
                item.classList.add('filtered-out');
                item.classList.remove('filtered-in');
                
                // TRIGGER SMOOTH EXIT ANIMATION
                item.style.setProperty('opacity', '0', 'important');
                item.style.setProperty('transform', 'translateY(50px) scale(0.7) rotateX(-15deg)', 'important');
                item.style.setProperty('filter', 'blur(8px) brightness(0.5)', 'important');
                item.style.setProperty('transition', 'all 0.6s cubic-bezier(0.55, 0.06, 0.68, 0.19)', 'important');
                item.style.setProperty('pointer-events', 'none', 'important');
                
                // COMPLETE HIDE AFTER ANIMATION
                setTimeout(() => {
                    if (item.classList.contains('filtered-out')) {
                        item.style.setProperty('display', 'none', 'important');
                        item.style.setProperty('visibility', 'hidden', 'important');
                    }
                }, 600);
                
            }, hideDelay);
            
            hideDelay += 80; // Stagger by 80ms
        }
    });
    
    console.log('🎬 SMOOTH FILTERING COMPLETED FOR:', category);
    
    // FORCE BROWSER REDRAW FOR SMOOTH ANIMATIONS
    document.body.offsetHeight;
    
    return true;
}

// Enhanced navigation with Blue Color Scheme
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

// Smooth navigation with blue animation
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

// Splash animation
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
    
    // Add trail effect on mouse move
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create trail effect
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: 4px;
                height: 4px;
                background: rgba(105, 171, 219, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 8;
                animation: trailEffect 0.5s ease-out forwards;
            `;
            
            this.appendChild(trail);
            
            setTimeout(() => {
                trail.remove();
            }, 500);
        });
    }
});

// Trail animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailEffect {
        0% {
            transform: scale(1);
            opacity: 0.6;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(trailStyle);

// Interactive Skill Cards with Mouse and Gyroscope Support
function initializeSkillCards() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length === 0) return;
    
    // Mouse tracking for desktop
    skillItems.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('click', handleCardClick);
    });
    
    // Gyroscope support for mobile
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleGyroscope);
    }
    
    // Touch support for mobile
    skillItems.forEach(card => {
        card.addEventListener('touchstart', handleTouchStart);
        card.addEventListener('touchmove', handleTouchMove);
        card.addEventListener('touchend', handleTouchEnd);
    });
}

function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `
        translateY(-8px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(1.02)
    `;
    
    // Add glow effect based on mouse position
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    
    card.style.background = `
        linear-gradient(135deg, 
            rgba(105, 171, 219, 0.15) 0%, 
            rgba(69, 123, 157, 0.2) 100%
        ),
        radial-gradient(circle at ${glowX}% ${glowY}%, 
            rgba(105, 171, 219, 0.3) 0%, 
            transparent 50%
        )
    `;
}

function handleMouseEnter(e) {
    const card = e.currentTarget;
    card.classList.add('mouse-move');
    card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

function handleMouseLeave(e) {
    const card = e.currentTarget;
    card.classList.remove('mouse-move');
    card.style.transform = '';
    card.style.background = '';
    card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
}

function handleCardClick(e) {
    const card = e.currentTarget;
    
    // Add click animation
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    // Add ripple effect
    createRippleEffect(e, card);
}

function createRippleEffect(e, card) {
    const ripple = document.createElement('div');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(105, 171, 219, 0.4) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Gyroscope support for mobile devices
let gyroActive = false;
function handleGyroscope(e) {
    if (!gyroActive) return;
    
    const skillItems = document.querySelectorAll('.skill-item');
    const beta = e.beta; // X-axis rotation
    const gamma = e.gamma; // Y-axis rotation
    
    skillItems.forEach((card, index) => {
        const delay = index * 0.1;
        const rotateX = (beta - 45) * 0.5;
        const rotateY = gamma * 0.5;
        
        setTimeout(() => {
            card.style.transform = `
                translateY(-4px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                scale(1.01)
            `;
        }, delay * 1000);
    });
}

// Touch support for mobile
let touchStartY = 0;
function handleTouchStart(e) {
    const card = e.currentTarget;
    touchStartY = e.touches[0].clientY;
    card.classList.add('gyro-active');
    gyroActive = true;
}

function handleTouchMove(e) {
    const card = e.currentTarget;
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchStartY;
    
    const rotateX = deltaY * 0.1;
    card.style.transform = `
        translateY(-4px) 
        rotateX(${rotateX}deg) 
        scale(1.02)
    `;
}

function handleTouchEnd(e) {
    const card = e.currentTarget;
    card.classList.remove('gyro-active');
    gyroActive = false;
    
    setTimeout(() => {
        card.style.transform = '';
    }, 300);
}

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize skill cards when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSkillCards();
});

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