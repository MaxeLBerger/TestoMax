/* /js */
/* File: animations.js - GSAP Animations */

// GSAP Animation Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animations - Staggered entrance
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
    
    // Navigation Slide In from top
    gsap.from(".main-nav", {
      duration: 0.8,
      y: -100,
      opacity: 0,
      ease: "power2.out"
    });
    
    // Teaser Cards - Staggered animation with ScrollTrigger
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
    
    // Teaser Image Hover Effect - Enhanced with GSAP
    const teaserItems = document.querySelectorAll('.teaser-item');
    teaserItems.forEach(item => {
      const image = item.querySelector('.teaser-image img');
      
      item.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(item, {
          y: -10,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(item, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
    
    // Newsletter Section - Fade and Slide Up
    gsap.from(".newsletter-box", {
      scrollTrigger: {
        trigger: ".newsletter-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      duration: 1,
      y: 80,
      opacity: 0,
      scale: 0.95,
      ease: "power3.out"
    });
    
    // Products Section - Title and Cards
    gsap.from(".products-section h2", {
      scrollTrigger: {
        trigger: ".products-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power2.out"
    });
    
    gsap.from(".products-section .section-subtitle", {
      scrollTrigger: {
        trigger: ".products-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
      delay: 0.2
    });
    
    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: ".products-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      y: 100,
      opacity: 0,
      scale: 0.9,
      stagger: 0.15,
      ease: "back.out(1.2)"
    });
    
    // Product Card Hover Animations
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const image = card.querySelector('.product-image img');
      const btn = card.querySelector('.product-btn');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(btn, {
          scale: 1.05,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)"
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
        gsap.to(btn, {
          scale: 1,
          duration: 0.3,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });
    
    // Footer Fade In
    gsap.from(".main-footer", {
      scrollTrigger: {
        trigger: ".main-footer",
        start: "top 90%",
        toggleActions: "play none none reverse"
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power2.out"
    });
    
    // Parallax effect for hero background
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
    
    // More Link Button Animations
    const moreLinks = document.querySelectorAll('.more-link');
    moreLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
    
    console.log("GSAP animations initialized successfully!");
    
  } else {
    console.error("GSAP or ScrollTrigger library is not loaded.");
  }
});
