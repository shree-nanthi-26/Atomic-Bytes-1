document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Header Background
    const header = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });

    // Intersection observer for entrance animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                // Optional: Replay animation if needed
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.solution-card, .industry-card, .approach-step, .stat-item, .section-title, .feature-item, .check-item');
    
    animateElements.forEach(el => {
        // el.style.opacity = 0;
        // el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Form submission handling
    const contactForms = document.querySelectorAll('.cta-form, .cfr-form-fields');
    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Sent successfully! <i class="fa-solid fa-check"></i>';
            submitBtn.style.backgroundColor = '#22c55e';
            submitBtn.style.color = 'white';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                form.reset();
            }, 3000);
        });
    });

    // Dropdown hover handling for mobile
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                // Logic for showing dropdown on mobile (omitted for this quick demo)
            }
        });
    }
});
