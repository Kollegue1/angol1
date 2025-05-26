// Scroll animation
document.addEventListener('DOMContentLoaded', () => {
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
    joinBtn.addEventListener('click', () => {
      joinBtn.textContent = "TRANSMITTING...";
      setTimeout(() => {
        joinBtn.innerHTML = '<span>ACCESS GRANTED ✓</span>';
        alert("Welcome to the resistance. Stand by for further instructions.");
      }, 1500);
    });
  }
});
