/* ============================================
   CHRISTABEL ISRAEL - MASTER JAVASCRIPT
   ============================================ */

(function() {
    'use strict';

    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    function toggleMobileNav() {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.toggle('open');
            const toggleBtn = document.querySelector('.mobile-toggle');
            if (toggleBtn) {
                const icon = toggleBtn.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            }
        }
    }
    window.toggleMobileNav = toggleMobileNav;

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        const navLinks = document.getElementById('navLinks');
        const toggleBtn = document.querySelector('.mobile-toggle');
        if (navLinks && navLinks.classList.contains('open')) {
            const isNavClick = navLinks.contains(e.target);
            const isToggleClick = toggleBtn ? toggleBtn.contains(e.target) : false;
            if (!isNavClick && !isToggleClick) {
                navLinks.classList.remove('open');
                if (toggleBtn) {
                    const icon = toggleBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            }
        }
    });

    // Close mobile nav on link click
    document.querySelectorAll('#navLinks a').forEach(function(link) {
        link.addEventListener('click', function() {
            const navLinks = document.getElementById('navLinks');
            const toggleBtn = document.querySelector('.mobile-toggle');
            if (navLinks) {
                navLinks.classList.remove('open');
                if (toggleBtn) {
                    const icon = toggleBtn.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            }
        });
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');
    if (header) {
        let lastScrollY = 0;
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollY = scrollY;
        });
        window.addEventListener('scroll', function() {
            if (window.scrollY === 0) {
                header.style.transform = 'translateY(0)';
            }
        });
    }

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin" style="margin-left:0.5rem;"></i>';
            btn.disabled = true;

            // Simulate sending
            setTimeout(function() {
                const successDiv = document.getElementById('formSuccess');
                if (successDiv) {
                    successDiv.classList.add('show');
                    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                contactForm.querySelectorAll('input, textarea').forEach(function(input) {
                    input.value = '';
                });
                btn.innerHTML = '✅ Sent!';
                btn.style.background = '#2ecc71';
                btn.style.color = '#fff';

                setTimeout(function() {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    if (successDiv) {
                        successDiv.classList.remove('show');
                    }
                }, 5000);
            }, 2000);
        });
    }

    // ============================================
    // SUBSCRIBE BUTTON
    // ============================================
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = prompt('Please enter your email address to subscribe:');
            if (email && email.includes('@') && email.includes('.')) {
                alert('✅ Thank you for subscribing! Check your email for the free ebook.');
            } else if (email) {
                alert('❌ Please enter a valid email address.');
            }
        });
    }

    // ============================================
    // CALENDLY BUTTON
    // ============================================
    const calendlyBtn = document.getElementById('calendlyBtn');
    if (calendlyBtn) {
        calendlyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const calendlyLink = 'https://calendly.com/your-username';
            window.open(calendlyLink, '_blank');
        });
    }

    // ============================================
    // FADE-IN ANIMATION ON SCROLL
    // ============================================
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.service-card, .portfolio-item, .pricing-card, .service-pricing-card, .about-values .value, .process-step').forEach(function(el) {
            observer.observe(el);
        });
    }

    // ============================================
    // CONSOLE BRANDING
    // ============================================
    console.log('%c Christabel Israel Agency ', 'background: #c9a84c; color: #0a1628; font-size: 18px; font-weight: bold; padding: 8px 16px; border-radius: 4px;');
    console.log('%c Social Media Management for Authors', 'color: #8a9bb5; font-size: 13px;');

})();