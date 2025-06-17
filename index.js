// Animation triggers
document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counting
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        const delay = parseFloat(item.getAttribute('data-delay')) || 0;
        item.style.animationDelay = `${delay}s`;
        
        const numberElement = item.querySelector('.stat-number');
        const target = parseInt(numberElement.getAttribute('data-count'));
        const duration = 2000;
        const startTime = Date.now() + (delay * 1000);
        
        const animateCount = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            
            if (elapsed < 0) {
                requestAnimationFrame(animateCount);
                return;
            }
            
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            numberElement.textContent = value;
            
            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };
        
        setTimeout(animateCount, delay * 1000);
    });
    
    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic');
    magneticButtons.forEach(button => {
        const strength = parseInt(button.getAttribute('data-strength')) || 20;
        const radius = parseInt(button.getAttribute('data-radius')) || 80;
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width/2;
            const y = e.clientY - rect.top - rect.height/2;
            const distance = Math.sqrt(x*x + y*y);
            
            if (distance < radius) {
                const transformX = x * (strength / 100);
                const transformY = y * (strength / 100);
                button.style.transform = `translate(${transformX}px, ${transformY}px)`;
            } else {
                button.style.transform = 'translate(0, 0)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
    
    // Animate tech icons with delays
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        const delay = getComputedStyle(icon).getPropertyValue('--delay') || '0s';
        icon.style.animationDelay = delay;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    

    // Mobile menu toggle
menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Portfolio filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Download resume button
    const downloadResume = document.getElementById('download-resume');
    downloadResume.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with actual resume download logic
        alert('Downloading resume...');
        // Example: window.location.href = 'path/to/resume.pdf';
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image, .about-text, .skill-category, .portfolio-item, .service-card, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.about-image, .about-text, .skill-category, .portfolio-item, .service-card, .contact-info, .contact-form');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize circular progress bars
    const circularProgressBars = document.querySelectorAll('.circular-progress');
    circularProgressBars.forEach(progress => {
        const percent = parseInt(progress.getAttribute('data-percent'));
        const circleFill = progress.querySelector('.circle-fill');
        const circleText = progress.querySelector('.circle-text');
        
        // Calculate the circumference
        const radius = circleFill.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        // Set the stroke dasharray and offset
        circleFill.style.strokeDasharray = circumference;
        circleFill.style.strokeDashoffset = circumference - (percent / 100) * circumference;
        
        // Update the text
        circleText.textContent = `${percent}%`;
    });
});
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create submit button animation
        const submitBtn = document.querySelector('.submit-btn');
        motion(submitBtn, {
            scale: [1, 0.95, 1],
            transition: { duration: 0.3 }
        });
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll show a success message
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been sent. I'll contact you soon at ${email}.`);
            contactForm.reset();
            
            // Add success animation
            motion(submitBtn, {
                backgroundColor: ['#6c63ff', '#4CAF50'],
                color: ['#fff', '#fff'],
                transition: { duration: 0.5 }
            });
            
            setTimeout(() => {
                motion(submitBtn, {
                    backgroundColor: ['#4CAF50', '#6c63ff'],
                    transition: { duration: 0.5 }
                });
            }, 2000);
        }, 1000);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Active section detection
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initialize active link on page load
    updateActiveNavLink();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Download resume button
    // Alternative with timeout for better UX
    const downloadResume = document.getElementById('download-resume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'resume/meet_cv2.pdf';
                link.download = 'Meet_Patel_Resume.pdf'; // Custom filename for download
                link.target = '_blank'; // Open in new tab if download fails
                link.style.display = 'none'; // Hide the link element
                
                // Important: Add these attributes to force download
                link.setAttribute('download', '');
                link.setAttribute('type', 'application/pdf');
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Restore button text
                this.innerHTML = originalText;
                
                // Show download notification
                showDownloadNotification();
            }, 500);
        });
    }
    
    function showDownloadNotification() {
        const notification = document.createElement('div');
        notification.className = 'download-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Resume downloaded successfully!</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2500);
    }
});
// Animation initialization with delays
document.addEventListener('DOMContentLoaded', function() {
    // Animate text elements with delays
    const animateElements = document.querySelectorAll('.animate-text');
    
    animateElements.forEach(el => {
        const delay = el.getAttribute('data-delay') || '0s';
        el.style.animationDelay = delay;
    });
    
    // Animate buttons with delays
    const animateButtons = document.querySelectorAll('.animate-btn');
    
    animateButtons.forEach((btn, index) => {
        const delay = btn.getAttribute('data-delay') || `${0.6 + index * 0.2}s`;
        btn.style.animationDelay = delay;
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            motion(this, {
                scale: 1.05,
                transition: { duration: 0.3 }
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            motion(this, {
                scale: 1,
                transition: { duration: 0.3 }
            });
        });
    });
    
    // Floating elements animation
    const floatingCircles = document.querySelectorAll('.floating-circle');
    floatingCircles.forEach(circle => {
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        circle.style.animationDuration = `${duration}s`;
        circle.style.animationDelay = `${delay}s`;
    });
});


 document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnContent = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = new FormData(this);
        
        // Submit to Web3Forms
        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show success message
                document.getElementById('result').innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        ${data.message || 'Thank you! Your message has been sent.'}
                    </div>
                `;
                document.getElementById('result').classList.remove('hidden');
                this.reset();
            } else {
                // Show error message
                document.getElementById('result').innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-circle"></i>
                        ${data.message || 'There was an error sending your message. Please try again.'}
                    </div>
                `;
                document.getElementById('result').classList.remove('hidden');
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    There was an error sending your message. Please try again.
                </div>
            `;
            document.getElementById('result').classList.remove('hidden');
        })
        .finally(() => {
            // Restore button state
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
            
            // Scroll to result message
            document.getElementById('result').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        });
    });