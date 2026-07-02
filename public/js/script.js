/* /js */
/* File: script.js */

// DOMContentLoaded stellt sicher, dass das Skript erst läuft, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
  console.log("Website loaded - script.js connected successfully!");
  
  // Newsletter Form Handler (Revenue Generation)
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      // Simulate newsletter signup
      console.log('Newsletter signup:', email);
      
      // Show success message
      alert('Vielen Dank für deine Anmeldung! Du erhältst in Kürze eine Bestätigungs-E-Mail.');
      
      // Reset form
      emailInput.value = '';
      
      // In production, this would send data to a backend API
      // Example: fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
    });
  }
  
  // Product Click Tracking (for affiliate revenue)
  const productButtons = document.querySelectorAll('.product-btn');
  productButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = btn.closest('.product-card').querySelector('h3').textContent;
      console.log('Product clicked:', productName);
      
      // In production, this would track the click and redirect to affiliate link
      alert(`Hinweis: Dies ist eine Demoseite. Das Produkt "${productName}" kann aktuell nicht erworben werden.`);
    });
  });
});
