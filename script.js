// ───────── DOM READY ─────────
document.addEventListener('DOMContentLoaded', () => {

  /* Fade‑in on scroll */
  const fadeEls = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
  }, { threshold: 0.1 });
  fadeEls.forEach(el => io.observe(el));

  /* Join button */
  const joinBtn = document.querySelector('.join-btn');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      joinBtn.textContent = 'TRANSMITTING…';
      setTimeout(() => {
        joinBtn.innerHTML = '<span>ACCESS GRANTED ✓</span>';
        alert('Welcome to the resistance. Stand by for further instructions.');
      }, 1500);
    });
  }

  /* Live Map */
  initAIMap();
});

/* ───────── LIVE MAP FUNCTION ───────── */
function initAIMap() {
  const mapEl = document.getElementById('aiMap');
  if (!mapEl) return;

  // Canvas setup
  const canvas = document.createElement('canvas');
  mapEl.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  /* Handle Hi‑DPI & resize */
  function resizeCanvas() {
    const boxW = mapEl.clientWidth;
    const boxH = mapEl.clientHeight;
    if (!boxW || !boxH) return;        // wait until layout resolved
    const ratio = window.devicePixelRatio || 1;

    canvas.width  = boxW * ratio;
    canvas.height = boxH * ratio;
    canvas.style.width  = `${boxW}px`;
    canvas.style.height = `${boxH}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0); // reset & scale

    buildTerritories();                // regenerate dots for new size
  }

  /* Territory model */
  const colors = {
    sentinel : 'rgba(0,255,255,0.7)',
    nemesis  : 'rgba(255,0,0,0.7)',
    conflict : 'rgba(180,0,255,0.7)'
  };
  let territories = [];

  function buildTerritories() {
    territories = [];
    const max = 50;
    for (let i = 0; i < max; i++) {
      territories.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 5 + Math.random() * 10,
        team: Math.random() > 0.5 ? 'sentinel' : 'nemesis',
        g: 0.1 + Math.random() * 0.3
      });
    }
  }

  /* Animation loop */
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    territories.forEach(t => {
      t.r += t.g;

      if (Math.random() > 0.98) {
        t.team = ['sentinel', 'nemesis', 'conflict'][Math.floor(Math.random() * 3)];
      }

      ctx.beginPath();
      ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
      ctx.fillStyle = colors[t.team];
      ctx.fill();

      if (t.r > 100) {
        t.r = 5;
        t.x = Math.random() * canvas.width;
        t.y = Math.random() * canvas.height;
      }
    });

    requestAnimationFrame(animate);
  }

  /* Kick‑off sequence */
  resizeCanvas();           // initial size
  animate();                // start drawing

  // Re‑resize on layout changes
  window.addEventListener('resize', resizeCanvas);
}
