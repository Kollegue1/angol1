// ========== IMAGE PRELOADING ========== //
const preloadImages = () => {
  const images = [
    "https://i.imgur.com/JxQZ3fE.png",  // Sentinel AI Core
    "https://i.imgur.com/L4vVQh7.jpg",  // Aletheia Creation
    "https://i.imgur.com/9YpWnFk.jpg",  // Corruption Spread
    "https://i.imgur.com/5tQbWqL.jpg",  // Resistance
    "https://i.imgur.com/X5v6QFD.gif"   // Animated Background
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
    console.log(`Preloading: ${src}`);
  });
};

// ========== SCROLL ANIMATIONS ========== //
const animateOnScroll = () => {
  const boxes = document.querySelectorAll('.fade-in');
  const triggerOffset = window.innerHeight * 0.85;

  const checkVisibility = () => {
    boxes.forEach((box, index) => {
      const boxTop = box.getBoundingClientRect().top;
      
      if (boxTop < triggerOffset) {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
        box.style.transitionDelay = `${index * 0.15}s`;
      }
    });
  };

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
};

// ========== TERMINAL TYPEWRITER EFFECT ========== //
const animateTerminal = () => {
  const terminal = document.querySelector('.terminal-content');
  if (!terminal) return;

  const lines = terminal.querySelectorAll('p');
  let delay = 0;

  lines.forEach(line => {
    const text = line.textContent;
    line.textContent = '';
    line.style.visibility = 'visible';

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        line.textContent += text[i];
        // Scroll terminal to bottom
        terminal.parentElement.scrollTop = terminal.parentElement.scrollHeight;
      }, delay + (i * 30));
    }
    delay += text.length * 30 + 500; // Add pause between lines
  });
};

// ========== BUTTON EFFECTS ========== //
const setupButton = () => {
  const button = document.querySelector('.join-button');
  if (!button) return;

  button.addEventListener('click', () => {
    // Visual feedback
    button.textContent = "DOWNLOADING...";
    button.style.backgroundColor = "rgba(0, 150, 255, 0.4)";
    
    // Simulate download process
    setTimeout(() => {
      alert("⚠️ ACCESS GRANTED\n\n> Resistance Manual Downloaded\n> Decryption Key: S3nt1n3L_2049\n\nKeep this secure.");
      button.textContent = "⬇️ DOWNLOAD COMPLETE ⬇️";
    }, 1500);
  });

  // Hover effect
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = "0 0 20px rgba(0, 200, 255, 0.6)";
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = "none";
  });
};

// ========== GLITCH EFFECTS ========== //
const addGlitchEffects = () => {
  const glitchElements = document.querySelectorAll('.glitch-text');
  
  glitchElements.forEach(el => {
    el.addEventListener('mouseover', () => {
      el.style.animation = "glitch 0.5s infinite";
    });
    
    el.addEventListener('mouseout', () => {
      el.style.animation = "none";
    });
  });
};

// ========== INITIALIZE EVERYTHING ========== //
document.addEventListener('DOMContentLoaded', () => {
  preloadImages();
  animateOnScroll();
  setTimeout(animateTerminal, 1000); // Delay terminal animation
  setupButton();
  addGlitchEffects();
  
  // Force check visibility after images load
  window.addEventListener('load', () => {
    const event = new Event('scroll');
    window.dispatchEvent(event);
  });
});
