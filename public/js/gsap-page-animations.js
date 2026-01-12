/* /js */
/* File: gsap-page-animations.js - Universal GSAP Animations for all pages */

// GSAP Animation Initialization for Subpages
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animations - Staggered entrance
    const heroContent = document.querySelector('.hero-content, .subpage-hero .hero-content');
    if (heroContent) {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      const h1 = heroContent.querySelector('h1');
      const p = heroContent.querySelector('p');
      const cta = heroContent.querySelector('.cta-btn');
      
      if (h1) {
        heroTimeline.from(h1, {
          duration: 1,
          y: 100,
          opacity: 0,
          scale: 0.8
        });
      }
      
      if (p) {
        heroTimeline.from(p, {
          duration: 0.8,
          y: 50,
          opacity: 0
        }, "-=0.5");
      }
      
      if (cta) {
        heroTimeline.from(cta, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          scale: 0.9
        }, "-=0.4");
      }
    }
    
    // Navigation Slide In from top
    gsap.from(".main-nav", {
      duration: 0.8,
      y: -100,
      opacity: 0,
      ease: "power2.out"
    });
    
    // Content Sections - Fade and Slide Up
    const contentSections = document.querySelectorAll('.content-section');
    if (contentSections.length > 0) {
      contentSections.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          y: 60,
          opacity: 0,
          ease: "power3.out",
          delay: index * 0.1
        });
      });
    }
    
    // Info Boxes
    const infoBoxes = document.querySelectorAll('.info-box');
    if (infoBoxes.length > 0) {
      infoBoxes.forEach(box => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          x: -50,
          opacity: 0,
          ease: "power2.out"
        });
      });
    }
    
    // Lists Animation
    const lists = document.querySelectorAll('.checklist, .warning-list');
    if (lists.length > 0) {
      lists.forEach(list => {
        const items = list.querySelectorAll('li');
        gsap.from(items, {
          scrollTrigger: {
            trigger: list,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          duration: 0.5,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      });
    }
    
    // Contact Form Animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      gsap.from(contactForm, {
        scrollTrigger: {
          trigger: contactForm,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8,
        x: -60,
        opacity: 0,
        ease: "power3.out"
      });
    }
    
    // Social Links Animation
    const socialLinks = document.querySelector('.social-links');
    if (socialLinks) {
      gsap.from(socialLinks, {
        scrollTrigger: {
          trigger: socialLinks,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8,
        x: 60,
        opacity: 0,
        ease: "power3.out"
      });
    }
    
    // FAQ Items Animation
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
      faqItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          duration: 0.7,
          y: 40,
          opacity: 0,
          ease: "back.out(1.2)",
          delay: index * 0.1
        });
      });
    }
    
    // Training Blocks Animation
    const trainingBlocks = document.querySelectorAll('.training-block');
    if (trainingBlocks.length > 0) {
      trainingBlocks.forEach((block, index) => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out",
          delay: index * 0.15
        });
      });
    }
    
    // Fruit Sections Animation
    const fruitSections = document.querySelectorAll('.fruit-section');
    if (fruitSections.length > 0) {
      fruitSections.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          ease: "power3.out"
        });
      });
    }
    
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
    const hero = document.querySelector('.hero, .subpage-hero');
    if (hero) {
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1
        },
        backgroundPosition: "50% 100%",
        ease: "none"
      });
    }
    
    console.log("GSAP page animations initialized successfully!");
    
  } else {
    console.error("GSAP or ScrollTrigger library is not loaded.");
  }
});
