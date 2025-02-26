document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    document.querySelectorAll('.dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            this.innerHTML = content.style.display === 'block' ? '▼ Course Highlights' : '▶ Course Highlights';
        });
    });

    // Skill pill hover effect
    document.querySelectorAll('.skill-pill').forEach(pill => {
        pill.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        pill.addEventListener('mouseout', function() {
            this.style.transform = 'none';
            this.style.boxShadow = 'none';
        });
    });

    // Certification verify links
    document.querySelectorAll('.verify-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open(this.href, '_blank');
        });
    });

    // Timeline animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Dynamic background colors
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.documentElement.style.setProperty('--primary', `hsl(${x*60 + 180}, 30%, 50%)`);
        document.documentElement.style.setProperty('--secondary', `hsl(${y*60 + 240}, 30%, 50%)`);
    });
});
// Preloader Animation
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const progressCircle = document.querySelector('.progress-circle__fill');
    const progressPercent = document.querySelector('.progress-percent');
    const preloaderText = document.querySelector('.preloader__text');
    
    let progress = 0;
    const circumference = 339.292; // 2πr (2 * 3.1416 * 54)
    
    // Simulate loading progress
    const loadInterval = setInterval(() => {
        progress += Math.random() * 3;
        if(progress >= 100) {
            progress = 100;
            clearInterval(loadInterval);
            
            // Transition to welcome message
            preloaderText.style.opacity = 0;
            setTimeout(() => {
                preloaderText.textContent = 'welcome';
                preloaderText.style.opacity = 1;
            }, 500);
            
            // Hide preloader
            setTimeout(() => {
                preloader.style.opacity = 0;
                setTimeout(() => {
                    preloader.remove();
                    
                    // Lazy load images
                    document.querySelectorAll('.lazy-img').forEach(img => {
                        img.src = img.dataset.src;
                        img.onload = () => img.classList.add('loaded');
                    });
                }, 1000);
            }, 1500);
        }
        
        // Update progress
        const offset = circumference - (progress / 100 * circumference);
        progressCircle.style.strokeDashoffset = offset;
        progressPercent.textContent = `${Math.floor(progress)}%`;
    }, 50);
});