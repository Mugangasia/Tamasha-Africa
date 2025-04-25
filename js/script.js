// Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Scroll Header
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = dot.dataset.index;
        
        // Hide all testimonials
        testimonials.forEach(testimonial => {
          testimonial.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        
        // Show selected testimonial and activate dot
        testimonials[index].classList.add('active');
        dot.classList.add('active');
      });
    });
    
    // Auto-rotate testimonials
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
      // Hide all testimonials
      testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });
      
      // Remove active class from all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
      
      // Increment index
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      
      // Show next testimonial and activate dot
      testimonials[currentTestimonial].classList.add('active');
      dots[currentTestimonial].classList.add('active');
    }
    
    // Set interval for auto-rotation
    setInterval(rotateTestimonials, 5000);
    
    // Booking Modal
    const bookNowBtn = document.getElementById('book-now-btn');
    const heroBookBtn = document.getElementById('hero-book-btn');
    const ctaBookBtn = document.getElementById('cta-book-btn');
    const sidebarBookBtn = document.getElementById('sidebar-book-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    
    // Open modal from multiple buttons
    [bookNowBtn, heroBookBtn, ctaBookBtn, sidebarBookBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          bookingModal.style.display = 'block';
          document.body.style.overflow = 'hidden';
        });
      }
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
      bookingModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Form submission
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      
      if (!name || !email) {
        alert('Please fill out all required fields.');
        return;
      }
      
      // Here you would normally send the data to a server
      alert('Thank you for your booking request! We will contact you soon to finalize the details.');
      
      // Reset form and close modal
      bookingForm.reset();
      bookingModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Quiz Modal
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizModal = document.getElementById('close-quiz-modal');
    const nextQuestionBtn = document.getElementById('next-question');
    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const resultContent = document.getElementById('result-content');
    const exploreMatchBtn = document.getElementById('explore-match');
    
    // Open quiz modal
    startQuizBtn.addEventListener('click', (e) => {
      e.preventDefault();
      quizModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
    
    // Close quiz modal
    closeQuizModal.addEventListener('click', () => {
      quizModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Close quiz modal when clicking outside
    window.addEventListener('click', (e) => {
      if (e.target === quizModal) {
        quizModal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Simple quiz logic
    nextQuestionBtn.addEventListener('click', () => {
      const selectedExperience = document.querySelector('input[name="experience"]:checked');
      
      if (!selectedExperience) {
        alert('Please select an option to continue.');
        return;
      }
      
      // Display results based on selection
      let result;
      
      switch (selectedExperience.value) {
        case 'music':
          result = {
            culture: 'Yoruba',
            description: 'The Yoruba culture of West Africa is renowned for its rich musical traditions, particularly its complex drumming patterns that communicate and tell stories.',
            image: '/api/placeholder/200/200'
          };
          break;
        case 'dance':
          result = {
            culture: 'Maasai',
            description: 'The Maasai are famous for their distinctive jumping dance (Adumu), where warriors demonstrate strength and endurance through impressive vertical leaps.',
            image: '/api/placeholder/200/200'
          };
          break;
        case 'craft':
          result = {
            culture: 'Ashanti',
            description: 'The Ashanti people of Ghana are master craftspeople, particularly known for their intricate kente cloth weaving and gold smithing traditions.',
            image: '/api/placeholder/200/200'
          };
          break;
        case 'storytelling':
          result = {
            culture: 'Kikuyu',
            description: 'The Kikuyu people have a rich tradition of oral storytelling that preserves history, transmits values, and entertains through generations.',
            image: '/api/placeholder/200/200'
          };
          break;
        case 'comprehensive':
          result = {
            culture: 'Zulu',
            description: 'Zulu culture offers a holistic experience with distinctive music, powerful dance, intricate beadwork, and a rich warrior tradition and history.',
            image: '/api/placeholder/200/200'
          };
          break;
      }
      
      // Generate result HTML
      resultContent.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
          <img src="${result.image}" alt="${result.culture}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-right: 1.5rem;">
          <h3 style="color: var(--primary); font-size: 1.8rem;">${result.culture}</h3>
        </div>
        <p>${result.description}</p>
      `;
      
      // Hide quiz, show results
      quizContainer.style.display = 'none';
      quizResults.style.display = 'block';
    });
    
    // Culture page navigation
    const cultureLinks = document.querySelectorAll('.culture-link');
    const maasaiPage = document.getElementById('maasai-page');
    const mainContent = document.querySelectorAll('section:not(#maasai-page), .footer');
    
    cultureLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // This is simplified - in a real site you'd fetch or load different culture pages
    if (link.closest('.culture-card') && link.closest('.culture-card').querySelector('.culture-title').textContent === 'Maasai') {
      // Hide main content sections
      mainContent.forEach(section => {
        section.style.display = 'none';
      });
      
      // Show Maasai page
      maasaiPage.style.display = 'block';
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  });
});

// Back to home functionality
const goBackLinks = document.querySelectorAll('.back-to-home');

goBackLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Hide culture pages
    maasaiPage.style.display = 'none';
    
    // Show main content
    mainContent.forEach(section => {
      section.style.display = '';
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
  });
});

// Map point tooltips
const mapPoints = document.querySelectorAll('.map-point');
const mapTooltip = document.getElementById('map-tooltip');

mapPoints.forEach(point => {
  point.addEventListener('mouseenter', () => {
    const culture = point.dataset.culture;
    const tooltipTitle = mapTooltip.querySelector('.map-tooltip-title');
    const tooltipDesc = mapTooltip.querySelector('.map-tooltip-desc');
    
    // Set tooltip content based on culture
    tooltipTitle.textContent = culture;
    
    // Set description based on culture
    switch(culture) {
      case 'Maasai':
        tooltipDesc.textContent = 'Nomadic warriors known for vibrant dress and jumping dances';
        break;
      case 'Yoruba':
        tooltipDesc.textContent = 'West African culture with rich drumming and artistic traditions';
        break;
      case 'Zulu':
        tooltipDesc.textContent = 'Powerful warriors with distinctive shield designs and dances';
        break;
      case 'Kikuyu':
        tooltipDesc.textContent = 'Kenya\'s largest ethnic group with vibrant agricultural traditions';
        break;
      case 'Ashanti':
        tooltipDesc.textContent = 'Known for kente cloth and traditional governance systems';
        break;
      default:
        tooltipDesc.textContent = 'Discover this African culture';
    }
    
    // Position tooltip near the point
    const pointRect = point.getBoundingClientRect();
    const mapRect = document.getElementById('africa-map').getBoundingClientRect();
    
    mapTooltip.style.display = 'block';
    mapTooltip.style.left = (pointRect.left - mapRect.left + 20) + 'px';
    mapTooltip.style.top = (pointRect.top - mapRect.top - 70) + 'px';
  });
  
  point.addEventListener('mouseleave', () => {
    // Hide tooltip with small delay to prevent flickering
    setTimeout(() => {
      mapTooltip.style.display = 'none';
    }, 300);
  });
  
  // Click to navigate to culture page
  point.addEventListener('click', () => {
    const culture = point.dataset.culture;
    
    // For now, only Maasai page is implemented
    if (culture === 'Maasai') {
      // Hide main content sections
      mainContent.forEach(section => {
        section.style.display = 'none';
      });
      
      // Show Maasai page
      maasaiPage.style.display = 'block';
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  });
});

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('animate-active');
    }
  });
}

// Initial call and event listener for scroll animation
animateOnScroll();
window.addEventListener('scroll', animateOnScroll);

// Initialize any necessary components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Additional initialization if needed
  console.log('Tamasha Africa website loaded successfully!');

  // Get all elements with class 'nav-link' that point to home
  const homeLinks = document.querySelectorAll('.nav-link[href="index.html"]');
  
  homeLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default link behavior
          
          // Check if we're already on the homepage
          if (window.location.pathname.includes('index.html') || 
              window.location.pathname.endsWith('/')) {
              // If on homepage, just scroll to top
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
          } else {
              // If not on homepage, redirect to homepage
              window.location.href = 'index.html';
          }
      });
  });
});
