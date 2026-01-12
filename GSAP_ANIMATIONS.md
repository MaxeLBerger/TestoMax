# GSAP Animations Documentation

## Overview
This website uses **GSAP (GreenSock Animation Platform) v3.14.2** for all animations, replacing the previous AOS (Animate On Scroll) library. GSAP provides more control, better performance, and a wider range of animation possibilities.

## Files

### Core GSAP Libraries
- `public/js/lib/gsap.min.js` - GSAP Core library
- `public/js/lib/ScrollTrigger.min.js` - ScrollTrigger plugin for scroll-based animations

### Animation Scripts
- `public/js/animations.js` - Homepage-specific animations
- `public/js/gsap-page-animations.js` - Universal animations for all subpages

### CSS
- `public/css/animations.css` - Animation-related styles and optimizations

## Animation Features

### 1. Hero Section Animations
**File**: `animations.js` and `gsap-page-animations.js`

The hero section uses a GSAP Timeline for coordinated animations:

```javascript
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
  .from(".hero-title", {
    duration: 1,
    y: 100,
    opacity: 0,
    scale: 0.8
  })
  .from(".hero-subtitle", {
    duration: 0.8,
    y: 50,
    opacity: 0
  }, "-=0.5")
  .from(".hero-cta", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    scale: 0.9
  }, "-=0.4");
```

**Effect**: Title, subtitle, and CTA button animate in sequence with overlap

### 2. Navigation Animation
**File**: Both animation files

```javascript
gsap.from(".main-nav", {
  duration: 0.8,
  y: -100,
  opacity: 0,
  ease: "power2.out"
});
```

**Effect**: Navigation slides in from the top on page load

### 3. ScrollTrigger Animations
**File**: Both animation files

ScrollTrigger is used for scroll-based animations:

```javascript
gsap.from(".teaser-item", {
  scrollTrigger: {
    trigger: ".teaser",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  duration: 0.8,
  y: 100,
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  ease: "back.out(1.4)"
});
```

**Effect**: Teaser cards animate in with a stagger effect when scrolling

**ScrollTrigger Parameters**:
- `trigger`: The element that triggers the animation
- `start`: When to start the animation (viewport position)
- `toggleActions`: "onEnter onLeave onEnterBack onLeaveBack"
  - Common: "play none none reverse"

### 4. Stagger Animations
**File**: Both animation files

Stagger creates a cascading effect for multiple elements:

```javascript
stagger: 0.2  // 0.2 second delay between each element
```

Used for:
- Teaser cards (homepage)
- Product cards (homepage)
- List items (all pages)
- FAQ items
- Training blocks

### 5. Hover Animations
**File**: `animations.js`

Interactive hover effects using GSAP:

```javascript
item.addEventListener('mouseenter', () => {
  gsap.to(image, {
    scale: 1.1,
    duration: 0.5,
    ease: "power2.out"
  });
});
```

**Elements with hover effects**:
- Teaser cards
- Product cards
- More links

### 6. Parallax Effects
**File**: Both animation files

Hero backgrounds have parallax scrolling:

```javascript
gsap.to(".hero", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  },
  backgroundPosition: "50% 100%",
  ease: "none"
});
```

**Effect**: Background moves at different speed than content

## Easing Functions

GSAP provides various easing functions:

- `power2.out` - Smooth deceleration
- `power3.out` - Stronger deceleration
- `back.out(1.4)` - Slight overshoot effect
- `elastic.out(1, 0.5)` - Bouncy effect

## Performance Optimizations

### CSS (animations.css)
```css
.hero-title,
.hero-subtitle,
.hero-cta {
  will-change: transform, opacity;
}

.teaser-item,
.product-card {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

**Benefits**:
- `will-change` - Hints to browser for optimization
- `translateZ(0)` - Forces GPU acceleration
- `backface-visibility: hidden` - Prevents flickering

## Adding New Animations

### Basic Fade & Slide
```javascript
gsap.from(".your-element", {
  duration: 0.8,
  y: 50,
  opacity: 0,
  ease: "power2.out"
});
```

### With ScrollTrigger
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
  ease: "power2.out"
});
```

### With Stagger
```javascript
gsap.from(".your-elements", {
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%"
  },
  duration: 0.6,
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: "power2.out"
});
```

## Browser Support

GSAP works in:
- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 (with polyfills for ES6 features if needed)

## Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Documentation](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [GSAP Ease Visualizer](https://greensock.com/ease-visualizer/)

## Troubleshooting

### Animations not working
1. Check browser console for errors
2. Verify GSAP libraries are loaded: `console.log(typeof gsap)`
3. Ensure elements exist before animating them

### ScrollTrigger not triggering
1. Check trigger element selector
2. Verify `start` value (e.g., "top 80%" means when element's top reaches 80% from viewport top)
3. Add markers for debugging: `markers: true`

### Performance issues
1. Reduce number of simultaneous animations
2. Use `will-change` CSS property sparingly
3. Prefer `transform` and `opacity` over position properties
4. Check for memory leaks (kill animations when done)

## Migration from AOS

The previous AOS library has been completely replaced:

**Removed**:
- `<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />`
- `<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>`
- `data-aos="*"` attributes

**Added**:
- GSAP Core and ScrollTrigger libraries
- New animation scripts
- Enhanced CSS for GSAP optimization

**Benefits of GSAP over AOS**:
- More control over timing and easing
- Better performance
- More animation options
- Active development and support
- Smaller bundle size when using only needed features
- Better mobile performance
