// Toggle task completion - SIMPLE FIX
function toggleTask(checkbox) {
    checkbox.classList.toggle('checked');
    
    // DIRECT PROGRESS CALCULATION - No function calls
    const allTasks = document.querySelectorAll('.task-checkbox');
    const doneTasks = document.querySelectorAll('.task-checkbox.checked');
    const percent = Math.round((doneTasks.length / allTasks.length) * 100);
    
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressText) progressText.textContent = percent + '% Complete';
    
    // Simple celebration
    if (percent === 100) {
        alert('🎉 Congratulations! You completed the roadmap!');
    }
}
        

// Show completion celebration
function showCompletionCelebration() {
    // Create celebration element
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        ">
            <div style="
                background: rgba(30, 30, 45, 0.95);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                border: 2px solid #6d67e4;
                max-width: 500px;
                margin: 20px;
            ">
                <div style="font-size: 60px; margin-bottom: 20px;">🎉</div>
                <h2 style="color: #6d67e4; margin-bottom: 15px;">Congratulations!</h2>
                <p style="color: white; margin-bottom: 25px; line-height: 1.5;">
                    You've completed your learning roadmap! You are now ready to take on real-world projects and advance your career!
                </p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: linear-gradient(135deg, #6d67e4, #46c3db);
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                ">Continue Learning</button>
            </div>
        </div>
    `;
    document.body.appendChild(celebration);
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
