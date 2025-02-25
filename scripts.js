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
