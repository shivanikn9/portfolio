# Shivani K.N Portfolio Website - HTML/CSS/JS Version

This is a fully responsive portfolio website built with pure HTML, CSS, and JavaScript. It showcases Shivani's UI/UX design work and skills.

## Features

✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Interactive Portfolio Gallery** - Click on portfolio items to view details
✅ **Smooth Scrolling Navigation** - Easy navigation between sections
✅ **Contact Form Modal** - Professional contact form with validation
✅ **Mobile-Friendly Menu** - Hamburger menu for mobile devices
✅ **Portfolio Links** - Each portfolio item can link to Figma projects or live demos
✅ **Text Overflow Fixed** - All text automatically adjusts to screen size
✅ **Professional Animations** - Smooth hover effects and transitions

## File Structure

```
html/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
├── assets/             # Images and assets folder
└── README.md          # This file
```

## Setup Instructions

1. **Copy Assets**: Copy all images from `client/public/figmaAssets/` to the `html/assets/` folder
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **No Server Required**: This is a static website that works without any server

## Customization Guide

### Adding New Portfolio Projects

Edit the `portfolioData` array in `script.js`:

```javascript
const portfolioData = [
    {
        id: 1,
        title: 'Your Project Title',
        image: 'assets/your-image.png',
        description: 'Project description...',
        figmaLink: 'https://www.figma.com/design/your-actual-figma-link',
        liveLink: 'https://your-live-demo.com'
    }
    // Add more projects...
];
```

### Updating Contact Information

In `index.html`, find the contact section and update:
- Phone number
- Email address
- Social media links

### Customizing Colors

Main colors are defined in `styles.css`:
- Primary Blue: `#69abdb`
- Dark Background: `#1b0f3f`
- Gradient: `rgba(36,95,138,1)` to `rgba(26,60,101,1)`

### Adding New Navigation Items

1. Add new navigation link in `index.html`:
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

2. Create corresponding section with matching ID:
```html
<section id="new-section">
    <!-- Your content -->
</section>
```

## Mobile Responsiveness

The website is optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers

## Features Breakdown

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Professional introduction
- Call-to-action button
- Responsive profile image

### About Section
- Expandable "About Me" content
- Services showcase with hover effects
- Responsive layout

### Portfolio Section
- Interactive image gallery
- Modal with project details
- Figma and live demo links
- Navigation between projects

### Contact Section
- Professional contact form
- Form validation
- Modal popup
- Contact information display

## Performance Features

- Optimized images
- Smooth animations
- Lazy loading ready
- Minimal JavaScript
- Clean CSS structure

## SEO Ready

- Semantic HTML structure
- Meta descriptions
- Alt tags for images
- Proper heading hierarchy

## Deployment

This website can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files to your hosting provider.

---

**Note**: Remember to replace the placeholder Figma and demo links in `script.js` with your actual project URLs.