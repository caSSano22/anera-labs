/* ==========================================================================
   ANERA LABS — FINANCIAL INFRASTRUCTURE FOR OPEN SOURCE AI
   Interactive Script Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLiveIndexTicker();
  initInsightsFilter();
});

// 1. Live Market Indices Ticker Simulator (anera.markets)
function initLiveIndexTicker() {
  const tdiVal = document.getElementById('valAiraTdi');
  const coiVal = document.getElementById('valAiraCoi');

  if (!tdiVal) return;

  setInterval(() => {
    // Random subtle index fluctuations representing live compute demand
    const currentTdi = parseFloat(tdiVal.textContent.replace('$', ''));
    const currentCoi = parseFloat(coiVal.textContent.replace('$', ''));

    const newTdi = (currentTdi + (Math.random() * 0.04 - 0.02)).toFixed(3);
    const newCoi = (currentCoi + (Math.random() * 0.06 - 0.03)).toFixed(3);

    tdiVal.textContent = '$' + newTdi;
    coiVal.textContent = '$' + newCoi;
  }, 3500);
}

// 2. Insights Tag Filter Engine (insights.html)
function initInsightsFilter() {
  const filterBtns = document.querySelectorAll('.insights-tag-btn');
  const postCards = document.querySelectorAll('.insight-post-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.style.color = 'var(--text-muted)';
        b.style.borderColor = 'var(--stroke)';
      });

      btn.style.color = 'var(--text-white)';
      btn.style.borderColor = 'var(--text-white)';

      const filterCategory = btn.getAttribute('data-category');

      postCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Substack Newsletter Subscription Handler
function handleAneraSubscribe(e) {
  e.preventDefault();
  const input = document.getElementById('aneraSubEmail');
  if (input && input.value) {
    showAneraToast(`✓ Subscribed ${input.value} to Anera Research Insights!`);
    input.value = '';
  }
}

// Global UI Handlers
function toggleMobileMenuAnera() {
  const drawer = document.getElementById('mobileMenuDrawerAnera');
  if (drawer) drawer.classList.toggle('open');
}

function showAneraToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 32px; right: 32px; z-index: 1000;
    background: #121212; color: #ffffff; border: 1px solid #333;
    padding: 14px 24px; border-radius: 9999px; font-family: var(--font-sans);
    font-size: 0.88rem; box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    font-weight: 500;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
