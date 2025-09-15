/**
 * Simplified Animation System for Header Only
 * Performance optimized version without splash effects
 * Author: Shivani K.N Portfolio System
 */

// Global variables for header animations only
let isInitialized = false;

// Initialize Header-Only Animation System
function initializeGlobalAnimations() {
    if (isInitialized) return;
    
    // Add minimal styles for header animations only
    addHeaderOnlyStyles();
    
    // Initialize only header text effects
    initializeHeaderTextEffect();
    
    isInitialized = true;
    console.log('🎨 Header Animation System Initialized');
}

// Add minimal styles for header animations only
function addHeaderOnlyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Header Text Gradient Only */
        .header-text-gradient {
            background: linear-gradient(135deg, 
                #69abdb 0%, 
                #4a90e2 25%, 
                #8c52ff 50%, 
                #ff6b6b 75%, 
                #69abdb 100%
            );
            background-size: 400% 400%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: header-gradient-shift 6s ease-in-out infinite;
        }
        
        @keyframes header-gradient-shift {
            0% { background-position: 0% 50%; }
            25% { background-position: 100% 25%; }
            50% { background-position: 50% 100%; }
            75% { background-position: 25% 0%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
}

// Simple header text gradient effect only
function initializeHeaderTextEffect() {
    const headerSelectors = [
        '.navbar .logo', '.nav-link', 'nav h1', 'nav h2', 'nav .title'
    ];
    
    headerSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Add simple gradient class for header only
            element.classList.add('header-text-gradient');
        });
    });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGlobalAnimations);
} else {
    initializeGlobalAnimations();
}

// Export for manual initialization
window.GlobalAnimations = {
    init: initializeGlobalAnimations
};

console.log('✨ Header-Only Animation System Loaded - Performance Optimized!');