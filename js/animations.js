/* /js */
/* File: animations.js */

// Initialisiert die AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,     // Animationsdauer in ms
      easing: 'ease-in-out',
      once: true         // Animation nur beim ersten Scrollen abspielen
    });
  } else {
    console.error("AOS library is not loaded.");
  }
});
