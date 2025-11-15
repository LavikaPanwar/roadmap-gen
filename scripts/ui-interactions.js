// Toggle week content
function toggleWeekContent(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.expand-icon');
    
    content.classList.toggle('expanded');
    icon.classList.toggle('expanded');
}

// Toggle task completion
function toggleTask(checkbox) {
    checkbox.classList.toggle('checked');
    updateProgress();
}

// Update progress based on completed tasks
function updateProgress() {
    const totalTasks = document.querySelectorAll('.task-checkbox').length;
    const completedTasks = document.querySelectorAll('.task-checkbox.checked').length;
    const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = progressPercentage + '%';
    progressText.textContent = progressPercentage + '% Complete';
    
    if (progressPercentage === 100) {
        alert('🎉 Congratulations! You\'ve completed your learning roadmap! You are now ready to take on real-world projects and advance your career!');
    }
}

// Share roadmap
function shareRoadmap() {
    const skill = document.getElementById('metaSkill').textContent;
    const level = document.getElementById('metaLevel').textContent;
    const text = `Check out my ${skill} ${level} learning roadmap on LIAA! 🚀 I'm embarking on an exciting journey to master ${skill}.`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Learning Roadmap - LIAA',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        alert('🔗 Roadmap link copied to clipboard! Share it with your friends and learning community.');
    }
}

// Add hover effect to cards
document.querySelectorAll('.feature-card, .action-card, .skill-card, .founder-card, .resource-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced parallax effect for orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 12;
        const moveX = (x - 0.5) * speed;
        const moveY = (y - 0.5) * speed;
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Add typing effect to hero text
window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 400);
    });
    
    // Add floating animation to skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and skill cards
document.querySelectorAll('.feature-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    scrollObserver.observe(el);
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        showPage('landing');
    }
});
