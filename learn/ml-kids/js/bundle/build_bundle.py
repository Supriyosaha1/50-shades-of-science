import os

ch_files = [f'learn/ml-kids/js/concepts/chapter{i}.js' for i in range(1, 12)]

bundle_code = """(function() {
  'use strict';
"""

# Read concepts-data.js
with open('learn/ml-kids/js/concepts-data.js') as f:
    cdata = f.read()

cdata = cdata.replace('export const CHAPTERS', 'const CHAPTERS')
cdata = cdata.replace('export function getConceptInfo', 'function getConceptInfo')
bundle_code += cdata + '\n\n'

# Read all chapters
for i, path in enumerate(ch_files, 1):
    with open(path) as f:
        code = f.read()
    code = code.replace(f'export const CHAPTER_{i}_CONCEPTS', f'const CHAPTER_{i}_CONCEPTS')
    bundle_code += code + '\n\n'

# Combine registry
bundle_code += """
  const ALL_CONCEPTS = {
    ...CHAPTER_1_CONCEPTS,
    ...CHAPTER_2_CONCEPTS,
    ...CHAPTER_3_CONCEPTS,
    ...CHAPTER_4_CONCEPTS,
    ...CHAPTER_5_CONCEPTS,
    ...CHAPTER_6_CONCEPTS,
    ...CHAPTER_7_CONCEPTS,
    ...CHAPTER_8_CONCEPTS,
    ...CHAPTER_9_CONCEPTS,
    ...CHAPTER_10_CONCEPTS,
    ...CHAPTER_11_CONCEPTS
  };
"""

# Controller logic
bundle_code += """
  let currentConceptId = '1.1';
  let currentZoom = 1.0;

  const GRAPH_CONCEPTS = new Set([
    '2.3', '2.5',
    '3.2', '3.3', '3.4', '3.6',
    '4.1', '4.2', '4.3', '4.4', '4.5', '4.6',
    '5.1', '5.2', '5.3', '5.4', '5.5', '5.6',
    '6.3', '6.4', '6.5',
    '7.1', '7.2', '7.3', '7.4',
    '8.3', '8.4',
    '9.1', '9.2', '9.3', '9.4', '9.5', '9.6',
    '10.3', '11.2'
  ]);

  const CONCEPT_ICONS = {
    '1.1': '🍎', '1.2': '🤖', '1.3': '⚖️', '1.4': '🔄',
    '2.1': '📊', '2.2': '🐕', '2.3': '📐', '2.4': '🏷️', '2.5': '🗺️',
    '3.1': '🗂️', '3.2': '📏', '3.3': '🧭', '3.4': '📍', '3.5': '🗳️', '3.6': '🗺️',
    '4.1': '🍦', '4.2': '📈', '4.3': '📐', '4.4': '🔄', '4.5': '📏', '4.6': '⚡',
    '5.1': '🐕', '5.2': '⚖️', '5.3': '🗼', '5.4': '🦶', '5.5': '🥣', '5.6': '🎯',
    '6.1': '📖', '6.2': '🧠', '6.3': '🔒', '6.4': '🐍', '6.5': '⚖️',
    '7.1': '✨', '7.2': '🧺', '7.3': '🧲', '7.4': '🕵️',
    '8.1': '❓', '8.2': '🌳', '8.3': '🍉', '8.4': '🍋',
    '9.1': '🏏', '9.2': '⚡', '9.3': '🛑', '9.4': '🧠', '9.5': '🐱', '9.6': '⬅️',
    '10.1': '🚴', '10.2': '🍖', '10.3': '🚀',
    '11.1': '🎙️', '11.2': '🐅', '11.3': '🍎', '11.4': '⚖️', '11.5': '🎓'
  };

  function initReader() {
    let qConcept = null;
    try {
      const params = new URLSearchParams(window.location.search);
      qConcept = params.get('c');
      if (!qConcept && window.location.hash) {
        qConcept = window.location.hash.replace('#', '');
      }
    } catch(e) {}

    if (qConcept && (ALL_CONCEPTS[qConcept] || getConceptInfo(qConcept))) {
      currentConceptId = qConcept;
    } else {
      currentConceptId = '1.1';
    }

    setupDrawer();
    setupZoomControls();
    renderTOC();
    loadConcept(currentConceptId, false);

    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.conceptId) {
        loadConcept(e.state.conceptId, false);
      }
    });
  }

  window.switchLabMode = function(mode) {
    const labBtn = document.getElementById('modeLabBtn');
    const animBtn = document.getElementById('modeAnimBtn');
    const labView = document.getElementById('labView');
    const animView = document.getElementById('animView');
    const videoPlayer = document.getElementById('manimVideoPlayer');
    const visZoomTools = document.getElementById('visZoomTools');

    if (mode === 'anim') {
      if (labBtn) { labBtn.classList.remove('active'); labBtn.setAttribute('aria-selected', 'false'); }
      if (animBtn) { animBtn.classList.add('active'); animBtn.setAttribute('aria-selected', 'true'); }
      if (labView) labView.style.display = 'none';
      if (animView) animView.style.display = 'block';
      if (visZoomTools) visZoomTools.style.display = 'none';
      if (videoPlayer) {
        videoPlayer.play().catch(() => {});
      }
    } else {
      if (animBtn) { animBtn.classList.remove('active'); animBtn.setAttribute('aria-selected', 'false'); }
      if (labBtn) { labBtn.classList.add('active'); labBtn.setAttribute('aria-selected', 'true'); }
      if (animView) animView.style.display = 'none';
      if (labView) labView.style.display = 'block';
      if (videoPlayer) videoPlayer.pause();
      if (visZoomTools) {
        visZoomTools.style.display = GRAPH_CONCEPTS.has(currentConceptId) ? 'inline-flex' : 'none';
      }
    }
  };

  function setupZoomControls() {
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');

    if (zoomInBtn) {
      zoomInBtn.onclick = () => {
        currentZoom = Math.min(2.5, +(currentZoom + 0.25).toFixed(2));
        applyZoom();
      };
    }
    if (zoomOutBtn) {
      zoomOutBtn.onclick = () => {
        currentZoom = Math.max(0.6, +(currentZoom - 0.25).toFixed(2));
        applyZoom();
      };
    }
    if (zoomResetBtn) {
      zoomResetBtn.onclick = () => {
        currentZoom = 1.0;
        applyZoom();
      };
    }
  }

  function applyZoom() {
    const visCanvas = document.getElementById('visCanvas');
    if (!visCanvas) return;
    const target = visCanvas.firstElementChild || visCanvas;
    target.style.transform = `scale(${currentZoom})`;
    target.style.transformOrigin = 'center center';
    target.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';

    const ind = document.getElementById('zoomIndicator');
    if (ind) {
      ind.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  function setupDrawer() {
    const overlay = document.getElementById('drawerOverlay');
    const openBtn = document.getElementById('openTocBtn');
    const closeBtn = document.getElementById('closeTocBtn');

    function open() { if (overlay) overlay.classList.add('open'); }
    function close() { if (overlay) overlay.classList.remove('open'); }

    if (openBtn) openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('open')) {
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

    drawerBody.querySelectorAll('.mlk-drawer-item').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cid = link.getAttribute('data-id');
        loadConcept(cid, true);
        const overlay = document.getElementById('drawerOverlay');
        if (overlay) overlay.classList.remove('open');
      });
    });
  }

  function loadConcept(conceptId, pushState = true) {
    currentConceptId = conceptId;

    if (pushState) {
      try {
        history.pushState({ conceptId }, '', `?c=${conceptId}`);
      } catch (e) {
        window.location.hash = conceptId;
      }
    }

    document.querySelectorAll('.mlk-drawer-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-id') === conceptId);
    });

    const info = getConceptInfo(conceptId);
    const controller = ALL_CONCEPTS[conceptId];

    const headerTitle = document.getElementById('headerTitle');
    if (headerTitle && info) {
      headerTitle.textContent = `${info.chapter.title.split(':')[0]} · Concept ${conceptId}`;
    }

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

      if (visCanvas) {
        visCanvas.innerHTML = '';
        controller.renderVis(visCanvas);
      }
      if (controlsBar) {
        controlsBar.innerHTML = '';
        controller.renderControls(controlsBar);
      }

      if (observation) {
        observation.innerHTML = controller.observation || controller.explanationAfter || 'Look at how the visual shifts as you interact with the sliders and buttons.';
      }
      if (mechanism) {
        mechanism.innerHTML = controller.mechanism || 'The computer converts your inputs into numbers, runs them through the mathematical rule, and updates the prediction immediately.';
      }
      if (takeawayText) {
        takeawayText.textContent = controller.takeaway || (info ? info.concept.title : '');
      }
    } else if (info) {
      if (kicker) kicker.textContent = `${info.chapter.title.split(':')[0]} · Concept ${conceptId}`;
      if (title) title.textContent = info.concept.title;
      if (question) question.textContent = `Coming soon: ${info.concept.desc}`;
      if (questionDesc) questionDesc.textContent = info.concept.desc;
      if (visHint) visHint.textContent = '💡 Scaffold preview';
      if (visCanvas) {
        visCanvas.innerHTML = `
          <div style="height: 100%; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 0.95rem;">
            Visualization for Concept ${conceptId} (${info.concept.title})
          </div>
        `;
      }
      if (controlsBar) controlsBar.innerHTML = `<span style="font-size: 0.85rem; color: #64748b;">Ready to be implemented.</span>`;
      if (observation) observation.innerHTML = `What will you learn? ${info.concept.desc}.`;
      if (mechanism) mechanism.innerHTML = 'This concept is being rendered into an interactive laboratory.';
      if (takeawayText) takeawayText.textContent = info.concept.title;
    }

    const prevBtn = document.getElementById('navPrevBtn');
    const nextBtn = document.getElementById('navNextBtn');

    if (info && info.prev && prevBtn) {
      prevBtn.style.visibility = 'visible';
      prevBtn.href = `?c=${info.prev.id}`;
      prevBtn.innerHTML = `← Previous: ${info.prev.id}`;
      prevBtn.onclick = (e) => {
        e.preventDefault();
        loadConcept(info.prev.id, true);
      };
    } else if (prevBtn) {
      prevBtn.style.visibility = 'hidden';
    }

    if (info && info.next && nextBtn) {
      nextBtn.style.visibility = 'visible';
      nextBtn.href = `?c=${info.next.id}`;
      nextBtn.innerHTML = `Next: ${info.next.title} →`;
      nextBtn.onclick = (e) => {
        e.preventDefault();
        loadConcept(info.next.id, true);
      };
    } else if (nextBtn) {
      nextBtn.style.visibility = 'hidden';
    }

    // Header Progress indicator (e.g. 01 / 54)
    const headerProgress = document.getElementById('headerProgress');
    if (headerProgress) {
      const allIds = [];
      CHAPTERS.forEach(ch => ch.concepts.forEach(c => allIds.push(c.id)));
      const idx = allIds.indexOf(conceptId) + 1;
      headerProgress.textContent = `${String(idx || 1).padStart(2, '0')} / ${allIds.length || 54}`;
    }

    // Reset zoom level on concept load & show ONLY on graph/coordinate concepts
    currentZoom = 1.0;
    applyZoom();
    const visZoomTools = document.getElementById('visZoomTools');
    if (visZoomTools) {
      visZoomTools.style.display = GRAPH_CONCEPTS.has(conceptId) ? 'inline-flex' : 'none';
    }

    // Update Video Player for Current Chapter
    const chNum = conceptId.split('.')[0];
    const videoSource = document.getElementById('manimVideoSource');
    const videoPlayer = document.getElementById('manimVideoPlayer');
    const animCaption = document.getElementById('animCaption');
    if (videoSource && videoPlayer) {
      const targetSrc = `media/videos/chapter${chNum}.mp4`;
      if (videoSource.getAttribute('src') !== targetSrc) {
        videoSource.setAttribute('src', targetSrc);
        videoPlayer.load();
      }
      if (animCaption && info) {
        animCaption.textContent = `🎬 Chapter ${chNum} Master Animation: ${info.chapter.title.split(':')[1] || info.chapter.title}`;
      }
    }

    // Update Right-Side Vertical Hook Rail
    const sideCard = document.getElementById('sideNextCard');
    const sideId = document.getElementById('sideNextId');
    const sideTitle = document.getElementById('sideNextTitle');
    const sideIcon = document.getElementById('sideNextIcon');

    // Update Bottom Up-Next Card
    const bottomCard = document.getElementById('bottomNextCard');
    const bottomId = document.getElementById('bottomNextId');
    const bottomTitle = document.getElementById('bottomNextTitle');
    const bottomDesc = document.getElementById('bottomNextDesc');
    const bottomIcon = document.getElementById('bottomNextIcon');
    const bottomBtn = document.getElementById('bottomNextBtn');

    if (info && info.next) {
      const nextCtrl = ALL_CONCEPTS[info.next.id];
      const nextIcon = CONCEPT_ICONS[info.next.id] || '💡';

      if (sideId) sideId.textContent = `Concept ${info.next.id}`;
      if (sideTitle) sideTitle.textContent = info.next.title;
      if (sideIcon) sideIcon.textContent = nextIcon;
      if (sideCard) {
        sideCard.style.display = 'flex';
        sideCard.onclick = () => loadConcept(info.next.id, true);
      }

      if (bottomId) bottomId.textContent = `Concept ${info.next.id}`;
      if (bottomTitle) bottomTitle.textContent = info.next.title;
      if (bottomDesc) {
        bottomDesc.textContent = nextCtrl ? nextCtrl.question : (info.next.desc || 'Continue to the next hands-on experiment!');
      }
      if (bottomIcon) bottomIcon.textContent = nextIcon;
      if (bottomBtn) {
        bottomBtn.textContent = `Continue to Concept ${info.next.id} →`;
        bottomBtn.onclick = (e) => {
          e.preventDefault();
          loadConcept(info.next.id, true);
        };
      }
      if (bottomCard) {
        bottomCard.style.display = 'flex';
      }
    } else {
      if (sideId) sideId.textContent = 'Completed!';
      if (sideTitle) sideTitle.textContent = 'Mastered 🎓';
      if (sideIcon) sideIcon.textContent = '🏆';
      if (sideCard) {
        sideCard.style.display = 'flex';
        sideCard.onclick = () => loadConcept('1.1', true);
      }

      if (bottomId) bottomId.textContent = 'Completed!';
      if (bottomTitle) bottomTitle.textContent = 'All 11 Chapters Completed! 🎓';
      if (bottomDesc) bottomDesc.textContent = 'You have mastered the foundational concepts of Machine Learning!';
      if (bottomIcon) bottomIcon.textContent = '🏆';
      if (bottomBtn) {
        bottomBtn.textContent = 'Start Over from Chapter 1 ↺';
        bottomBtn.onclick = (e) => {
          e.preventDefault();
          loadConcept('1.1', true);
        };
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReader);
  } else {
    initReader();
  }

})();
"""

with open('learn/ml-kids/js/bundle/reader.bundle.js', 'w') as out:
    out.write(bundle_code)

print('reader.bundle.js built successfully!')

