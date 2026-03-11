/**
 * script.js - Interactive functionality for the portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Add active toggle if needed
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // --- 3. Scroll Reveal Animation & Progress Bars ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const skillBars = document.querySelectorAll('.progress-bar');

    // Function to check if an element is in viewport
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85; // 85% of screen height

        // Block reveals
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });

        // Progress Bars animation
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < triggerBottom) {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            }
        });
    };

    // Initial check on load
    checkVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkVisibility);

    // --- 4. Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic validation and submission simulation
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            // Simulate network request
            setTimeout(() => {
                btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                btn.classList.remove('btn-primary');
                btn.style.backgroundColor = '#10B981'; // Green color
                btn.style.color = 'white';
                btn.style.borderColor = '#10B981';

                contactForm.reset();

                // Revert button after 3 seconds
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.add('btn-primary');
                    btn.style = ''; // Reset inline styles
                }, 3000);
            }, 1500);
        });
    }
});
