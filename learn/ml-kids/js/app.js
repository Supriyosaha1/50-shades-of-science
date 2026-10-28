import { ProgressStore } from './progress-store.js';
import { CURRICULUM } from '../content/curriculum.js';

function renderHub() {
  const currentLevel = ProgressStore.getLevel();
  const currentProgress = ProgressStore.get();

  // Update star counter
  const starCountEl = document.getElementById('starCount');
  if (starCountEl) starCountEl.textContent = currentProgress.stars;

  // Update active level buttons
  document.querySelectorAll('.mlk-level-btn').forEach(btn => {
    const level = btn.getAttribute('data-level');
    btn.classList.toggle('active', level === currentLevel);
  });

  // Render World Grid
  const gridEl = document.getElementById('worldGrid');
  if (!gridEl) return;

  gridEl.innerHTML = CURRICULUM.worlds.map(world => {
    const isWorld1 = world.id === 1;
    return `
      <article class="mlk-world-card ${isWorld1 ? 'active-world' : ''}" aria-label="${world.title}">
        <div class="mlk-world-header">
          <div class="mlk-world-icon" aria-hidden="true">${world.icon}</div>
          <div class="mlk-world-info">
            <h3>${world.title}</h3>
            <p class="mlk-world-question">${world.simpleQuestion}</p>
          </div>
        </div>

        <ul class="mlk-mission-list" role="list">
          ${world.missions.map(m => {
            const completed = ProgressStore.isCompleted(m.id);
            const isPilot = m.isPilot;
            const href = m.unlocked ? `lesson.html?world=${world.id}&mission=${m.number}` : '#';
            const statusClass = completed ? 'completed' : (!m.unlocked ? 'locked' : '');

            return `
              <li>
                <a href="${href}" class="mlk-mission-item ${statusClass}" ${!m.unlocked ? 'aria-disabled="true"' : ''}>
                  <div>
                    <span>${completed ? '✅ ' : (m.unlocked ? '▶ ' : '🔒 ')}</span>
                    <span>${m.number}. ${m.title}</span>
                  </div>
                  <div>
                    ${isPilot ? '<span class="mlk-mission-badge featured">Star Pilot ⭐</span>' : ''}
                    <span class="mlk-mission-badge">${m.estimatedMinutes} min</span>
                  </div>
                </a>
              </li>
            `;
          }).join('')}
        </ul>
      </article>
    `;
  }).join('');
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', () => {
  renderHub();

  // Level button click handlers
  document.querySelectorAll('.mlk-level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const level = btn.getAttribute('data-level');
      ProgressStore.setLevel(level);
      renderHub();
    });
  });

  // Reset button
  const resetBtn = document.getElementById('resetProgressBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Start fresh? This will reset your local stars and badges.')) {
        ProgressStore.reset();
        renderHub();
      }
    });
  }

  // Listen to cross-tab or custom progress updates
  window.addEventListener('mlk-progress-updated', () => {
    renderHub();
  });
});

