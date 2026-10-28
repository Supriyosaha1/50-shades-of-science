/**
 * Reader Controller for Minimalist ML Visual Textbook
 * Manages atomic concept rendering, drawer navigation, and clean transitions.
 */

import { CHAPTERS, getConceptInfo } from './concepts-data.js';
import { CHAPTER_1_CONCEPTS } from './concepts/chapter1.js';

// Registry of all implemented concept controllers
const CONCEPTS_REGISTRY = {
  ...CHAPTER_1_CONCEPTS
};

let currentConceptId = '1.1';

export function initReader() {
  // Parse query parameter
  const params = new URLSearchParams(window.location.search);
  const qConcept = params.get('c');
  if (qConcept && (CONCEPTS_REGISTRY[qConcept] || getConceptInfo(qConcept))) {
    currentConceptId = qConcept;
  } else {
    currentConceptId = '1.1';
  }

  setupDrawer();
  renderTOC();
  loadConcept(currentConceptId, false);

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.conceptId) {
      loadConcept(e.state.conceptId, false);
    }
  });
}

function setupDrawer() {
  const overlay = document.getElementById('drawerOverlay');
  const openBtn = document.getElementById('openTocBtn');
  const closeBtn = document.getElementById('closeTocBtn');

  function open() {
    overlay.classList.add('open');
  }

  function close() {
    overlay.classList.remove('open');
  }

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      close();
    }
  });
}

function renderTOC() {
  const drawerBody = document.getElementById('drawerBody');
  if (!drawerBody) return;

  drawerBody.innerHTML = CHAPTERS.map(ch => `
    <div>
      <div class="mlk-drawer-chapter-title">${ch.title}</div>
      ${ch.concepts.map(c => `
        <a href="?c=${c.id}" class="mlk-drawer-item ${c.id === currentConceptId ? 'active' : ''}" data-id="${c.id}">
          ${c.id} · ${c.title}
        </a>
      `).join('')}
    </div>
  `).join('');

  // Attach click handlers to navigate cleanly
  drawerBody.querySelectorAll('.mlk-drawer-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cid = link.getAttribute('data-id');
      loadConcept(cid, true);
      document.getElementById('drawerOverlay').classList.remove('open');
    });
  });
}

export function loadConcept(conceptId, pushState = true) {
  currentConceptId = conceptId;

  if (pushState) {
    history.pushState({ conceptId }, '', `?c=${conceptId}`);
  }

  // Highlight active TOC item
  document.querySelectorAll('.mlk-drawer-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-id') === conceptId);
  });

  const info = getConceptInfo(conceptId);
  const controller = CONCEPTS_REGISTRY[conceptId];

  // Update Top Bar
  const headerTitle = document.getElementById('headerTitle');
  if (headerTitle && info) {
    headerTitle.textContent = `${info.chapter.title.split(':')[0]} · Concept ${conceptId}`;
  }

  // Update Main Elements
  const kicker = document.getElementById('conceptKicker');
  const title = document.getElementById('conceptTitle');
  const question = document.getElementById('conceptQuestion');
  const questionDesc = document.getElementById('conceptQuestionDesc');
  const visHint = document.getElementById('visHint');
  const visCanvas = document.getElementById('visCanvas');
  const controlsBar = document.getElementById('controlsBar');
  const observation = document.getElementById('conceptObservation');
  const mechanism = document.getElementById('conceptMechanism');
  const takeawayText = document.getElementById('conceptTakeawayText');

  if (controller) {
    if (kicker) kicker.textContent = controller.kicker || `Concept ${conceptId}`;
    if (title) title.textContent = controller.title || (info ? info.concept.title : '');
    if (question) question.textContent = controller.question || '';
    if (questionDesc) questionDesc.innerHTML = controller.questionDesc || controller.explanationBefore || '';
    if (visHint) visHint.innerHTML = controller.visHint || '💡 Try the controls below';

    // Clear previous visuals and event handlers
    if (visCanvas) {
      visCanvas.innerHTML = '';
      controller.renderVis(visCanvas);
    }
    if (controlsBar) {
      controlsBar.innerHTML = '';
      controller.renderControls(controlsBar);
    }

    if (observation) {
      observation.innerHTML = controller.observation || controller.explanationAfter || 'Notice what changes on screen as you interact with the controls.';
    }
    if (mechanism) {
      mechanism.innerHTML = controller.mechanism || 'The computer takes your input values, evaluates them using mathematical steps or rules, and instantly recalculates the output.';
    }
    if (takeawayText) {
      takeawayText.textContent = controller.takeaway || (info ? info.concept.title : '');
    }
  } else if (info) {
    // Scaffold preview for upcoming chapters
    if (kicker) kicker.textContent = `${info.chapter.title.split(':')[0]} · Concept ${conceptId}`;
    if (title) title.textContent = info.concept.title;
    if (question) question.textContent = `Coming soon in the next step: ${info.concept.desc}`;
    if (questionDesc) questionDesc.textContent = info.concept.desc;
    if (visHint) visHint.textContent = '💡 Scaffold preview';
    if (visCanvas) {
      visCanvas.innerHTML = `
        <div style="height: 100%; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.95rem;">
          Visualization for Concept ${conceptId} (${info.concept.title})
        </div>
      `;
    }
    if (controlsBar) controlsBar.innerHTML = `<span style="font-size: 0.85rem; color: #64748b;">Ready to be implemented next.</span>`;
    if (observation) observation.innerHTML = `What will you learn? ${info.concept.desc}.`;
    if (mechanism) mechanism.innerHTML = 'This concept is being rendered into an interactive laboratory.';
    if (takeawayText) takeawayText.textContent = info.concept.title;
  }

  // Navigation Links
  const prevBtn = document.getElementById('navPrevBtn');
  const nextBtn = document.getElementById('navNextBtn');

  if (info && info.prev) {
    prevBtn.style.visibility = 'visible';
    prevBtn.href = `?c=${info.prev.id}`;
    prevBtn.innerHTML = `← Previous: ${info.prev.id}`;
    prevBtn.onclick = (e) => {
      e.preventDefault();
      loadConcept(info.prev.id, true);
    };
  } else {
    prevBtn.style.visibility = 'hidden';
  }

  if (info && info.next) {
    nextBtn.style.visibility = 'visible';
    nextBtn.href = `?c=${info.next.id}`;
    nextBtn.innerHTML = `Next Concept: ${info.next.id} →`;
    nextBtn.onclick = (e) => {
      e.preventDefault();
      loadConcept(info.next.id, true);
    };
  } else {
    nextBtn.style.visibility = 'hidden';
  }

  // Reset zoom on concept load
  currentZoom = 1.0;
  applyZoom();

  // Update Right-Side Visual Hook Rail
  const sideId = document.getElementById('sideNextId');
  const sideTitle = document.getElementById('sideNextTitle');
  const sideTeaser = document.getElementById('sideNextTeaser');
  const sideIcon = document.getElementById('sideNextIcon');
  const sideBtn = document.getElementById('sideNextBtn');

  if (info && info.next) {
    const nextCtrl = CONCEPTS_REGISTRY[info.next.id];
    if (sideId) sideId.textContent = `Concept ${info.next.id}`;
    if (sideTitle) sideTitle.textContent = info.next.title;
    if (sideTeaser) {
      sideTeaser.textContent = nextCtrl ? nextCtrl.question : (info.next.desc || 'Continue to the next hands-on experiment!');
    }
    if (sideIcon) {
      sideIcon.textContent = CONCEPT_ICONS[info.next.id] || '💡';
    }
    if (sideBtn) {
      sideBtn.style.display = 'flex';
      sideBtn.textContent = `Preview Concept ${info.next.id} →`;
      sideBtn.onclick = (e) => {
        e.preventDefault();
        loadConcept(info.next.id, true);
      };
    }
  } else {
    if (sideId) sideId.textContent = 'Completed!';
    if (sideTitle) sideTitle.textContent = 'Course Completed 🎓';
    if (sideTeaser) sideTeaser.textContent = 'You have mastered all 11 chapters of the Machine Learning Visual Textbook!';
    if (sideIcon) sideIcon.textContent = '🏆';
    if (sideBtn) {
      sideBtn.style.display = 'flex';
      sideBtn.textContent = 'Start from Chapter 1 ↺';
      sideBtn.onclick = (e) => {
        e.preventDefault();
        loadConcept('1.1', true);
      };
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', initReader);

