// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                // Scroll to element
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    function checkScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Form submission handling
    const waitlistForm = document.querySelector('.waitlist-form');
    
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // In a real application, you would send this to your server
                console.log('Email submitted:', email);
                
                // Show success message
                alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                
                // Clear input
                emailInput.value = '';
            }
        });
    }
    
    // Theme controls for iPhone (hidden but functional)
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const zoomCheckbox = document.getElementById('zoom');
    
    if (themeRadios.length) {
        themeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    const phone = document.querySelector('.phone');
                    if (phone) {
                        phone.style.setProperty('--c-h', this.id === 'random' ? Math.floor(Math.random() * 360) : 
                            this.id === 'deep-purple' ? '284' : 
                            this.id === 'gold' ? '22.5' : 
                            this.id === 'space-black' ? '215' : '254');
                    }
                }
            });
        });
    }
    
    if (zoomCheckbox) {
        zoomCheckbox.addEventListener('change', function() {
            const scene = document.querySelector('.scene');
            if (scene) {
                scene.style.transform = this.checked ? 'scale3d(1.5,1.5,1)' : 'scale3d(1,1,1)';
            }
        });
    }
    
    // Auto play phone video with error handling
    const phoneVideo = document.querySelector('.phone-video');
    if (phoneVideo) {
        phoneVideo.play().catch(error => {
            console.log('Video autoplay failed:', error);
            // Fallback: show play button or handle as needed
        });
    }
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
});