document.addEventListener('DOMContentLoaded', () => {
  // Hero Search Bar Submission
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const dest = document.getElementById('hero-destination').value;
      const pick = document.getElementById('hero-pickup').value;
      const date = document.getElementById('hero-date').value;
      const veh = document.getElementById('hero-vehicle').value;
      
      const text = `Hello Shree Radhe Tour & Travels!\n\nI want to book a ride:\n\n*Pickup Point:* ${pick || 'Not specified'}\n*Destination:* ${dest || 'Not specified'}\n*Date:* ${date || 'Not specified'}\n*Vehicle:* ${veh || 'Not specified'}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/917018260186?text=${encodedText}`;
      
      const originalText = searchBtn.textContent;
      searchBtn.textContent = 'Opening WhatsApp...';
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        searchBtn.textContent = originalText;
        document.getElementById('hero-destination').value = '';
        document.getElementById('hero-pickup').value = '';
        document.getElementById('hero-date').value = '';
        document.getElementById('hero-vehicle').value = '';
      }, 500);
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navLinks) navLinks.classList.remove('active');
  }));

  // Booking Form Submission
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const destination = document.getElementById('destination').value;
      const date = document.getElementById('date').value;
      const message = document.getElementById('message').value;

      // Format WhatsApp message
      const text = `Hello Shree Radhe Tour & Travels!\n\nI have a new booking inquiry:\n\n*Name:* ${name}\n*Email:* ${email}\n*Destination:* ${destination || 'Not specified'}\n*Date:* ${date || 'Not specified'}\n\n*Message:* ${message}`;
      const encodedText = encodeURIComponent(text);
      
      // WhatsApp API URL
      const whatsappUrl = `https://wa.me/917018260186?text=${encodedText}`;

      const btn = bookingForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Opening WhatsApp...';
      
      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        btn.textContent = originalText;
        bookingForm.reset();
      }, 500);
    });
  }
});
