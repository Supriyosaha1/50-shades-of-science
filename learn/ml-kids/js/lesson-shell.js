import { ProgressStore } from './progress-store.js';
import { CURRICULUM } from '../content/curriculum.js';

/* -------------------------------------------------------------
   1. Mission Data with Super-Simple Kid Language
------------------------------------------------------------- */
const MISSION_DATA = {
  'w01-m03': {
    worldId: 1,
    missionNum: 3,
    title: 'Fruit Sorting Studio',
    subtitle: 'Can you teach the computer to sort mystery fruits?',
    beats: [
      {
        kicker: 'Beat 1 of 6 · Wonder',
        title: 'Can you see this mystery fruit?',
        story: {
          explorer: "A conveyor belt brings in a strange purple fruit! We don't have a label for it yet. Can a computer guess what it is without a human helping every second?",
          builder: "Look at the purple mystery fruit. How can a computer predict its category when it has never seen this exact fruit before?",
          investigator: "Supervised classification challenge: Can an algorithm generalize from training observations to assign a class label to an unseen test point?"
        },
        hint: "Look at the colors and shapes of fruits already in the baskets!",
        badge: '🤔 Big Question'
      },
      {
        kicker: 'Beat 2 of 6 · Predict',
        title: 'Now you make a guess first!',
        story: {
          explorer: "Before we ask the computer, what does your brain say? Look at the mystery fruit: is it closer to an apple or an orange?",
          builder: "Form a hypothesis: based on size and redness, which fruit family does this purple fruit seem closer to?",
          investigator: "Evaluate prior intuition: Given feature dimensions [size, redness], predict if the majority vote favors Apple (+1) or Orange (-1)."
        },
        hint: "Trust your eyes! Tap what you think it will be.",
        badge: '🎯 Your Turn to Guess'
      },
      {
        kicker: 'Beat 3 of 6 · Human Labeling',
        title: 'You give the labels (Not the machine!)',
        story: {
          explorer: "Can you see the baskets? You put apples in the apple box and oranges in the orange box. You are the teacher giving labels. The computer hasn't learned yet until you tap Train!",
          builder: "You are creating the training dataset. Labeling data is human work; model training is the computer calculating the pattern.",
          investigator: "Ground truth annotation: Constructing the training set D_train = {(x_i, y_i)} before running parameter estimation."
        },
        hint: "Remember: labeling is done by humans. Training is done by the computer!",
        badge: '🏷️ Labeling Time'
      },
      {
        kicker: 'Beat 4 of 6 · Brittle Rule',
        title: 'Look what happens to simple rules!',
        story: {
          explorer: "What if we make a simple rule: 'If it is red, it is an apple!' What happens if an orange is reddish? The rule breaks! Rigid rules get tricked easily.",
          builder: "Single-threshold rules (like 'redness > 0.5') fail when nature has variations. We need more than one clue to make a smart guess.",
          investigator: "Single-axis decision stumps introduce high bias. Real distributions require multi-dimensional decision spaces."
        },
        hint: "Can you think of a red fruit that is not an apple?",
        badge: '⚠️ Rules Can Break'
      },
      {
        kicker: 'Beat 5 of 6 · Learning Machine',
        title: 'The computer checks who is closest!',
        story: {
          explorer: "Can you see the dotted lines? The computer measures distance to the nearest fruits! The closest 3 fruits cast votes. Drag the mystery fruit and watch the votes change!",
          builder: "The computer computes 2D distance for size and redness. The k-nearest neighbors cast votes to predict the class.",
          investigator: "Instance-based k-Nearest Neighbors (kNN) using Euclidean metric d = sqrt(Δsize² + Δredness²). Majority vote determines class."
        },
        hint: "Now you try: drag the purple fruit across the map and see where it flips!",
        badge: '✨ Real ML at Work'
      },
      {
        kicker: 'Beat 6 of 6 · Reflect & Star',
        title: 'You taught the computer!',
        story: {
          explorer: "Awesome job! You saw that computers don't have magical brains—they just compare new things to old examples! More good examples make better guesses.",
          builder: "Key discovery: The prediction depends on which clues you measure and how many neighbors get to vote.",
          investigator: "Model insight: The hyperparameter k and feature scaling directly control the decision boundary and sensitivity to noise."
        },
        hint: "Tap the star button below to save your trophy!",
        badge: '🏆 Mission Complete!'
      }
    ]
  }
};

/* -------------------------------------------------------------
   2. Deterministic kNN Engine Data & Math
------------------------------------------------------------- */
const TRAINING_DATA = [
  { id: 'a1', label: 'apple',  symbol: '●', size: 0.30, redness: 0.85, name: 'Tiny Ruby' },
  { id: 'a2', label: 'apple',  symbol: '●', size: 0.45, redness: 0.90, name: 'Crisp Red' },
  { id: 'a3', label: 'apple',  symbol: '●', size: 0.55, redness: 0.70, name: 'Sweet Rose' },
  { id: 'o1', label: 'orange', symbol: '◆', size: 0.75, redness: 0.20, name: 'Big Tangerine' },
  { id: 'o2', label: 'orange', symbol: '◆', size: 0.85, redness: 0.30, name: 'Sunburst' },
  { id: 'o3', label: 'orange', symbol: '◆', size: 0.65, redness: 0.15, name: 'Golden Drop' }
];

let state = {
  worldId: 1,
  missionId: 'w01-m03',
  currentBeat: 0,
  currentLevel: 'explorer',
  k: 3,
  queryPoint: { size: 0.48, redness: 0.62 },
  isDragging: false
};

function calculateKNN(query, data, k) {
  const withDists = data.map(item => {
    const ds = item.size - query.size;
    const dr = item.redness - query.redness;
    return { ...item, dist: Math.sqrt(ds * ds + dr * dr) };
  });

  withDists.sort((a, b) => a.dist - b.dist);
  const neighbors = withDists.slice(0, k);

  let apples = 0;
  let oranges = 0;
  neighbors.forEach(n => {
    if (n.label === 'apple') apples++;
    else oranges++;
  });

  return {
    neighbors,
    apples,
    oranges,
    prediction: apples >= oranges ? 'apple' : 'orange'
  };
}

/* -------------------------------------------------------------
   3. SVG Plot Rendering
------------------------------------------------------------- */
function toSvg(size, redness) {
  const x = 50 + size * (470 - 50);
  const y = 240 - redness * (240 - 20);
  return { x, y };
}

function fromSvg(svgX, svgY) {
  const size = Math.max(0.05, Math.min(0.95, (svgX - 50) / (470 - 50)));
  const redness = Math.max(0.05, Math.min(0.95, (240 - svgY) / (240 - 20)));
  return { size, redness };
}

function renderPlot() {
  const svg = document.getElementById('lessonSvg');
  if (!svg) return;

  const result = calculateKNN(state.queryPoint, TRAINING_DATA, state.k);

  // Render training points
  const pointsG = document.getElementById('pointsGroup');
  pointsG.innerHTML = '';

  TRAINING_DATA.forEach(pt => {
    const coords = toSvg(pt.size, pt.redness);
    const isNeighbor = result.neighbors.some(n => n.id === pt.id);
    const color = pt.label === 'apple' ? '#059669' : '#d97706';

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    if (isNeighbor) {
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('cx', coords.x);
      ring.setAttribute('cy', coords.y);
      ring.setAttribute('r', '15');
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', color);
      ring.setAttribute('stroke-width', '2.5');
      ring.setAttribute('stroke-dasharray', '3 2');
      g.appendChild(ring);
    }

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('cx', coords.x);
    dot.setAttribute('cy', coords.y);
    dot.setAttribute('r', '8');
    dot.setAttribute('fill', color);
    g.appendChild(dot);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', coords.x);
    label.setAttribute('y', coords.y + 20);
    label.setAttribute('font-size', '11');
    label.setAttribute('font-weight', '600');
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('fill', '#475569');
    label.textContent = pt.label === 'apple' ? '● Apple' : '◆ Orange';
    g.appendChild(label);

    pointsG.appendChild(g);
  });

  // Render connectors to k nearest
  const connG = document.getElementById('connectorsGroup');
  connG.innerHTML = '';
  const qCoords = toSvg(state.queryPoint.size, state.queryPoint.redness);

  result.neighbors.forEach(n => {
    const nCoords = toSvg(n.size, n.redness);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', qCoords.x);
    line.setAttribute('y1', qCoords.y);
    line.setAttribute('x2', nCoords.x);
    line.setAttribute('y2', nCoords.y);
    line.setAttribute('stroke', '#7c3aed');
    line.setAttribute('stroke-width', '2');
    line.setAttribute('stroke-dasharray', '4 3');
    line.setAttribute('opacity', '0.7');
    connG.appendChild(line);
  });

  // Move mystery point
  const qCircle = document.getElementById('mysteryCircle');
  qCircle.setAttribute('cx', qCoords.x);
  qCircle.setAttribute('cy', qCoords.y);

  const qCenter = document.getElementById('mysteryCenter');
  qCenter.setAttribute('cx', qCoords.x);
  qCenter.setAttribute('cy', qCoords.y);

  const qText = document.getElementById('mysteryText');
  qText.setAttribute('x', qCoords.x);
  qText.setAttribute('y', qCoords.y - 18);

  // Update tallies
  document.getElementById('appleVotes').textContent = result.apples;
  document.getElementById('orangeVotes').textContent = result.oranges;

  const predEl = document.getElementById('predictionBadge');
  if (result.prediction === 'apple') {
    predEl.textContent = '● Apple';
    predEl.style.background = '#ecfdf5';
    predEl.style.color = '#065f46';
  } else {
    predEl.textContent = '◆ Orange';
    predEl.style.background = '#fef3c7';
    predEl.style.color = '#92400e';
  }

  // Update explanation metrics
  const metricNote = document.getElementById('metricsNote');
  if (state.currentLevel === 'explorer') {
    metricNote.textContent = `Can you see? ${result.apples} apples and ${result.oranges} oranges are closest!`;
  } else if (state.currentLevel === 'builder') {
    metricNote.textContent = `2D Features: Size = ${state.queryPoint.size.toFixed(2)}, Redness = ${state.queryPoint.redness.toFixed(2)}. Votes: ${result.apples} to ${result.oranges}.`;
  } else {
    const minDist = result.neighbors[0].dist.toFixed(3);
    metricNote.textContent = `Query vector x = [${state.queryPoint.size.toFixed(2)}, ${state.queryPoint.redness.toFixed(2)}]. Min distance = ${minDist}. Class: ${result.prediction}.`;
  }
}

/* -------------------------------------------------------------
   4. UI Update & Beat Switching
------------------------------------------------------------- */
function updateUI() {
  const mission = MISSION_DATA[state.missionId] || MISSION_DATA['w01-m03'];
  const beat = mission.beats[state.currentBeat];

  // Update Breadcrumb & Header
  document.getElementById('missionTitle').textContent = `Mission ${mission.missionNum}: ${mission.title}`;
  document.getElementById('missionSubtitle').textContent = mission.subtitle;

  // Update Beat Nav Bar
  const beatSteps = document.querySelectorAll('.mlk-beat-step');
  beatSteps.forEach((el, i) => {
    el.classList.toggle('active', i === state.currentBeat);
  });

  // Update Story Panel
  document.getElementById('panelKicker').textContent = beat.kicker;
  document.getElementById('panelTitle').textContent = beat.title;
  document.getElementById('panelStory').textContent = beat.story[state.currentLevel];
  document.getElementById('panelHint').textContent = `💡 Friendly Tip: ${beat.hint}`;
  document.getElementById('panelBadge').textContent = beat.badge;

  // Update Level Buttons
  document.querySelectorAll('.mlk-level-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-level') === state.currentLevel);
  });

  // Star Counter
  document.getElementById('starCount').textContent = ProgressStore.get().stars;

  // Render SVG plot
  renderPlot();
}

/* -------------------------------------------------------------
   5. Interactive Pointer Handlers (Touch + Mouse Dragging)
------------------------------------------------------------- */
function initDragHandlers() {
  const svg = document.getElementById('lessonSvg');
  if (!svg) return;

  function onPointerMove(e) {
    if (!state.isDragging) return;
    const rect = svg.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const svgX = ((clientX - rect.left) / rect.width) * 500;
    const svgY = ((clientY - rect.top) / rect.height) * 280;

    state.queryPoint = fromSvg(svgX, svgY);
    renderPlot();
  }

  svg.addEventListener('mousedown', (e) => { state.isDragging = true; onPointerMove(e); });
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', () => { state.isDragging = false; });

  svg.addEventListener('touchstart', (e) => { state.isDragging = true; onPointerMove(e); }, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', () => { state.isDragging = false; });
}

/* -------------------------------------------------------------
   6. Keyboard Accessibility
------------------------------------------------------------- */
function initKeyboardHandlers() {
  window.addEventListener('keydown', (e) => {
    const step = 0.05;
    if (e.key === 'ArrowRight') {
      state.queryPoint.size = Math.min(0.95, state.queryPoint.size + step);
      renderPlot();
    } else if (e.key === 'ArrowLeft') {
      state.queryPoint.size = Math.max(0.05, state.queryPoint.size - step);
      renderPlot();
    } else if (e.key === 'ArrowUp') {
      state.queryPoint.redness = Math.min(0.95, state.queryPoint.redness + step);
      renderPlot();
    } else if (e.key === 'ArrowDown') {
      state.queryPoint.redness = Math.max(0.05, state.queryPoint.redness - step);
      renderPlot();
    }
  });
}

/* -------------------------------------------------------------
   7. Page Initialization
------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Parse params
  const params = new URLSearchParams(window.location.search);
  const w = params.get('world') || '1';
  const m = params.get('mission') || '3';
  state.missionId = `w0${w}-m0${m}`;

  // Read saved level
  state.currentLevel = ProgressStore.getLevel();

  // Beat buttons
  document.querySelectorAll('.mlk-beat-step').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      state.currentBeat = index;
      updateUI();
    });
  });

  // Prev / Next Beat Controls
  document.getElementById('prevBeatBtn').addEventListener('click', () => {
    if (state.currentBeat > 0) {
      state.currentBeat--;
      updateUI();
    }
  });

  document.getElementById('nextBeatBtn').addEventListener('click', () => {
    if (state.currentBeat < 5) {
      state.currentBeat++;
      updateUI();
    } else {
      // Complete mission & award star
      ProgressStore.completeMission(state.missionId);
      alert('🎉 Hooray! You completed this mission and earned a star! ⭐');
      updateUI();
    }
  });

  // Level Switcher
  document.querySelectorAll('.mlk-level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lvl = btn.getAttribute('data-level');
      state.currentLevel = lvl;
      ProgressStore.setLevel(lvl);
      updateUI();
    });
  });

  // k-selector
  const kSelect = document.getElementById('kNeighborSelect');
  if (kSelect) {
    kSelect.addEventListener('change', (e) => {
      state.k = parseInt(e.target.value, 10);
      renderPlot();
    });
  }

  // Reset button
  document.getElementById('resetFruitPosBtn').addEventListener('click', () => {
    state.queryPoint = { size: 0.48, redness: 0.62 };
    renderPlot();
  });

  initDragHandlers();
  initKeyboardHandlers();
  updateUI();
});

