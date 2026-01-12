# TestoMax - TestoBoosting Website

A clean, modern website for testosterone optimization with integrated revenue generation features and professional GSAP animations.

## Features

- **Professional GSAP Animations**: Powered by GreenSock Animation Platform (GSAP) v3.14.2
  - Smooth hero section animations with staggered timelines
  - ScrollTrigger-based scroll animations
  - Interactive hover effects
  - Parallax background effects
  - Hardware-accelerated performance
- **Clean UI Design**: Modern, responsive layout optimized for all devices
- **High-Quality SVG Graphics**: Professional Full HD vector graphics (1920x1080) for all sections
- **Revenue Generation**:
  - Newsletter signup for email marketing
  - Product recommendations with affiliate tracking
  - E-commerce ready product cards
- **Node.js Server**: Express-based server for production deployment
- **Lightweight**: Optimized SVG icons and images for fast loading

## Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository
```bash
git clone https://github.com/MaxeLBerger/TestoMax.git
cd TestoMax
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
TestoMax/
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   │   ├── style.css      # Main styles
│   │   ├── animations.css # GSAP animation enhancements
│   │   └── responsive.css # Responsive design
│   ├── js/                # JavaScript files
│   │   ├── lib/           # Third-party libraries
│   │   │   ├── gsap.min.js           # GSAP Core
│   │   │   └── ScrollTrigger.min.js  # GSAP ScrollTrigger Plugin
│   │   ├── script.js                 # Main scripts
│   │   ├── animations.js             # Homepage GSAP animations
│   │   └── gsap-page-animations.js   # Universal page animations
│   ├── images/            # Images and graphics
│   │   ├── heroes/        # Hero section SVG backgrounds (1920x1080)
│   │   ├── teasers/       # Teaser card SVG images
│   │   ├── products/      # Product SVG images
│   │   └── icons/         # Icon assets
│   └── *.html             # HTML pages
├── server/                # Server-side logic (optional)
├── server.js              # Express server entry point
├── package.json           # Node.js dependencies (includes GSAP)
└── README.md              # This file
```

## GSAP Animations

This project uses **GSAP (GreenSock Animation Platform)** for all animations, providing:

### Animation Types
- **Hero Sections**: Staggered entrance animations with scale and fade effects
- **Navigation**: Smooth slide-in from top
- **Scroll Animations**: Content sections animate on scroll using ScrollTrigger
- **Card Animations**: Staggered animations for teaser and product cards
- **Hover Effects**: Smooth interactive hover states
- **Parallax**: Background parallax scrolling effects
- **List Items**: Sequential reveal animations

### Performance
- Hardware-accelerated transforms
- Optimized with `will-change` and `backface-visibility`
- GPU-powered rendering
- Smooth 60fps animations

## Revenue Generation Features

### Newsletter Signup
- Located prominently on the homepage
- Email validation and submission tracking
- Ready for integration with email marketing services

### Product Recommendations
- Three featured products with pricing
- Click tracking for affiliate links
- Expandable for full e-commerce integration

## Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server (same as start)

### Adding Products

Edit `index.html` and add more product cards in the `.products-grid` section. Each product should include:
- Product image (SVG placeholder or actual image)
- Product name
- Description
- Price
- "Jetzt kaufen" (Buy Now) button

### Customizing Styles

- Primary color: `#e8501b` (defined in `css/style.css` as `--primary-color`)
- Secondary color: `#111` (defined as `--secondary-color`)
- Update CSS variables in `:root` to customize the theme

### Adding GSAP Animations

GSAP animations are defined in:
- `js/animations.js` - Homepage-specific animations
- `js/gsap-page-animations.js` - Universal animations for all pages

To add new animations:
```javascript
gsap.from(".your-element", {
  scrollTrigger: {
    trigger: ".your-element",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 0.8,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});
```

## Deployment

The site can be deployed to any Node.js hosting platform:

- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Vercel
- Netlify

Make sure to set the `PORT` environment variable if required by your hosting provider.

## License

MIT License - see LICENSE file for details
