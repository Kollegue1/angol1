// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // Scroll animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => observer.observe(el));

  // Button effect
  const joinBtn = document.querySelector('.join-btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', function() {
      this.textContent = "TRANSMITTING...";
      setTimeout(() => {
        this.innerHTML = '<span>ACCESS GRANTED ✓</span>';
        alert("Welcome to the resistance. Stand by for further instructions.");
      }, 1500);
    });
  }


    // Add this inside your existing DOMContentLoaded listener
  function initAIMap() {
  const mapElement = document.getElementById('aiMap');
  if (!mapElement) return; // Exit if no map element found

  // Wait for element to be fully rendered
  setTimeout(() => {
    const canvas = document.createElement('canvas');
    canvas.width = mapElement.offsetWidth;
    canvas.height = 400; // Fixed height for GitHub Pages
    mapElement.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Rest of your canvas animation code...
    const colors = {
      sentinel: 'rgba(0, 255, 255, 0.7)',
      nemesis: 'rgba(255, 0, 0, 0.7)',
      conflict: 'rgba(180, 0, 255, 0.7)'
    };

    const territories = [];
    for (let i = 0; i < 50; i++) {
      territories.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 5 + Math.random() * 10,
        team: Math.random() > 0.5 ? 'sentinel' : 'nemesis',
        growth: 0.1 + Math.random() * 0.3
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      territories.forEach(t => {
        t.radius += t.growth;
        if (Math.random() > 0.98) {
          t.team = ['sentinel', 'nemesis', 'conflict'][Math.floor(Math.random() * 3)];
        }
        
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[t.team];
        ctx.fill();
        
        if (t.radius > 100) {
          t.radius = 5;
          t.x = Math.random() * canvas.width;
          t.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      canvas.width = mapElement.offsetWidth;
    });
  }, 500); // Small delay to ensure DOM is ready
}
});

