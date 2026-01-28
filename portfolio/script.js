// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// Smooth scrolling, animations, and form handling
// ============================================

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ============================================
// CONTACT FORM VALIDATION AND HANDLING
// ============================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById('form-email').value.trim();
        const message = document.getElementById('form-message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, show success message
        // In a real implementation, this would send the data to a server
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ============================================
// RESUME DOWNLOAD TRACKING (OPTIONAL)
// ============================================
const downloadBtn = document.getElementById('download-resume-btn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
        console.log('Resume downloaded');
        // You can add analytics tracking here if needed
    });
}

// ============================================
// CERTIFICATE VIEWING
// ============================================
function openCertificate(certificatePath) {
    window.open(certificatePath, '_blank', 'width=1000,height=700');
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce scroll events for better performance
let scrollTimeout;
const optimizedScrollHandler = () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
};

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close any modals or overlays in the future
    if (e.key === 'Escape') {
        // Future implementation for modals
    }
});

// Focus management for form inputs
const formInputs = document.querySelectorAll('.form-input, .form-textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        this.parentElement.classList.remove('focused');
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c Portfolio Website Loaded Successfully ', 'background: #000; color: #fff; padding: 10px; font-size: 14px;');
console.log('%c Built with HTML, CSS, and JavaScript ', 'background: #fff; color: #000; padding: 5px; font-size: 12px;');
