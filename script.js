// Fade-in effect on scroll
const boxes = document.querySelectorAll('.fade-in');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.9;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
