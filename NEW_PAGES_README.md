# New Pages Added to Portfolio

## Overview
Two new pages have been added to Shivani K.N's portfolio website, maintaining the same UI/UX design as the main portfolio.

## Pages Created

### 1. Projects Page (`projects.html`)
**Purpose:** A dedicated page showcasing all design projects with filtering capabilities

**Features:**
- **Category Filters:** 
  - All Projects
  - Web Design
  - Mobile Apps
  - Animations
- **Project Grid:** Displays all projects with thumbnails and descriptions
- **Responsive Design:** Mobile-friendly layout
- **Interactive Elements:** 
  - Hover zoom effects on project images
  - Active filter button highlighting
  - Smooth transitions
- **Special Link:** Self Nurture App links to the case study page

**Projects Included:**
- **Web Design (8 projects):**
  - Plant Website
  - Flower Website
  - Interior Design
  - Wedding Planner
  - Hotel Website
  - Swaragh
  - SPOCLEARN
  - Pet Care

- **Mobile Apps (2 projects):**
  - Self Nurture App (links to case study)
  - Art Gallery App

- **Animations (1 project):**
  - Hover Animation

### 2. Case Study Page (`case-study.html`)
**Purpose:** Comprehensive case study for the Self Nurture mental health app

**Sections Included:**
1. **Project Overview**
   - Introduction to Self Nurture
   - App purpose and mission
   - Holistic approach description

2. **Problem Statement**
   - Mental health barriers
   - Accessibility issues
   - Lack of personalized care

3. **Solution Statement**
   - Holistic approach
   - Inclusivity features
   - Personalized recommendations

4. **Research**
   - Scope of work
   - Research objectives
   - Research questions
   - Interview questions

5. **Empathy Mapping**
   - What users Say
   - What users Do
   - What users Feel
   - What users Think

6. **User Flow**
   - Complete app navigation flow

7. **User Persona**
   - Aisha Kapoor (27, Marketing Executive)
   - User story
   - Current feelings
   - Goals
   - Pain points

8. **Style Guide**
   - **Color Palette:**
     - Primary: #054E16 (Dark Green)
     - Secondary: #FEFBE5 (Light Cream)
     - Tertiary: #4E6C50 (Medium Green)
     - Dark: #493628 (Brown)
   
   - **Typography:**
     - Alegreya SC (Headings)
     - Alegreya Sans (Body text)
     - Font sizes: 30px, 24px, 20px, 16px, 12px

**Design Features:**
- Custom color scheme matching the Self Nurture brand
- Beautiful gradient backgrounds
- Empathy mapping grid layout
- Persona cards with detailed information
- Color swatches with hex codes
- Typography samples with live examples
- Responsive design for all devices

## Navigation Updates

### Main Portfolio (`index.html`)
- Updated navbar to link to `projects.html` instead of just the projects section
- All other navigation remains the same (Home, About, Resume, Contact)

### Projects Page (`projects.html`)
- Navbar links back to main portfolio sections
- Projects link points to itself
- Case study accessible via Self Nurture App project card

### Case Study Page (`case-study.html`)
- Navbar maintains consistency with main portfolio
- Back button to return to projects page
- "Thank You" section with another back button

## Design Consistency

All pages maintain the same UI/UX as the main portfolio:
- Same color scheme (#ffbd39 yellow accent on black background)
- Same fonts (Poppins)
- Same navbar styling
- Same button styles
- Same animations and transitions
- Same responsive breakpoints

## Special Features

### Projects Page
- **Filter Animation:** Smooth fade in/out when switching categories
- **Active State:** Yellow filled button for active filter
- **Hover Effects:** Image zoom on hover
- **Mobile Optimization:** Smaller buttons and adjusted spacing on mobile

### Case Study Page
- **Brand Colors:** Uses Self Nurture's green color palette
- **Custom Fonts:** Alegreya SC and Alegreya Sans from Google Fonts
- **Gradient Backgrounds:** Subtle green gradients for visual interest
- **Grid Layouts:** Empathy mapping uses 2-column grid (1-column on mobile)
- **Color Swatches:** Interactive color palette display
- **Typography Showcase:** Live font samples with different weights and sizes

## File Structure
```
resume/
├── index.html (updated navbar)
├── projects.html (new)
├── case-study.html (new)
├── css/
│   └── style.css
├── images/
│   ├── rectangle-1060.png
│   ├── rectangle-1061.png
│   ├── rectangle-1062.png
│   ├── rectangle-1063.png
│   └── rectangle-1064.png
└── js/
    └── (existing JS files)
```

## How to Use

1. **View Projects:** Click "Projects" in the navbar from any page
2. **Filter Projects:** Use category buttons to filter by type
3. **View Case Study:** Click on "Self Nurture App" project card
4. **Navigate Back:** Use back buttons or navbar to return

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints
- Desktop: 992px and above
- Tablet: 768px - 991px
- Mobile: Below 768px

## Notes
- All external links open in new tabs
- Internal navigation uses same-page links or relative paths
- Images use existing portfolio thumbnails
- No additional dependencies required
- All JavaScript is inline for simplicity
