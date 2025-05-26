// Enhanced script with additional effects
const boxes = document.querySelectorAll('.fade-in');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
      // Add sequential delay for staggered appearance
      box.style.transitionDelay = `${index * 0.2}s`;
    }
  });
}

// Add typing effect to terminal
function initTerminal() {
  const terminal = document.querySelector('.terminal-box');
  if (terminal) {
    terminal.classList.add('show');
  }
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', function() {
  checkVisibility();
  setTimeout(initTerminal, 1000);
});

// Button effect
const joinButton = document.querySelector('.join-button');
if (joinButton) {
  joinButton.addEventListener('click', function() {
    alert('ACCESS REQUEST SENT TO SENTINEL\nAwaiting response...');
  });
}
