// Wait for the DOM to be fully loaded
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
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Live data metrics animation
    function animateMetrics() {
        const zayaData = document.getElementById('zaya-data');
        const bootstrapData = document.getElementById('bootstrap-data');
        const zayaData2 = document.getElementById('zaya-data-2');
        const bootstrapData2 = document.getElementById('bootstrap-data-2');
        
        if (zayaData && bootstrapData && zayaData2 && bootstrapData2) {
            let zayaValue = 124.32;
            let bootstrapValue = 0.0034;
            
            setInterval(() => {
                // Random but realistic data changes
                zayaValue += (Math.random() * 0.5);
                bootstrapValue += (Math.random() * 0.0001);
                
                zayaData.textContent = zayaValue.toFixed(2) + ' MB';
                bootstrapData.textContent = bootstrapValue.toFixed(4) + ' MB';
                zayaData2.textContent = zayaValue.toFixed(2) + ' MB';
                bootstrapData2.textContent = bootstrapValue.toFixed(4) + ' MB';
            }, 2000);
        }
    }
    
    // Start the metrics animation
    animateMetrics();

    // Theme switching functionality (for the iPhone 16 mockups)
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    themeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // This will change the theme via CSS
            console.log('Theme changed to: ' + this.id);
        });
    });

    // Form submission handling
    const waitlistForm = document.querySelector('.waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would typically send the data to a server
                alert('Thank you for joining our waitlist! We\'ll be in touch soon.');
                emailInput.value = '';
            }
        });
    }

    // Parallax effect for the hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const parallaxSpeed = 0.5;
            hero.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
        }
    });

    // Initialize the iPhone 16 animations
    function initPhoneAnimations() {
        const notchContainers = document.querySelectorAll('.notch-container');
        
        notchContainers.forEach(container => {
            container.addEventListener('click', function() {
                const bar = this.querySelector('.duration');
                if (bar) {
                    bar.style.transform = 'scale3d(0,1,1)';
                    setTimeout(() => {
                        bar.style.transform = 'scale3d(1,1,1)';
                    }, 100);
                }
            });
            
            // Simulate periodic activity
            setInterval(() => {
                const bar = this.querySelector('.duration');
                if (bar && Math.random() > 0.7) {
                    bar.style.transform = 'scale3d(' + Math.random() + ',1,1)';
                }
            }, 3000);
        });
    }
    
    // Start the phone animations
    initPhoneAnimations();
});