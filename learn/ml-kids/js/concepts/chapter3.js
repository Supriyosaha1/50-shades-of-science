/**
 * Chapter 3: Classification
 * Concepts 3.1 to 3.6 — Deep visual, mathematical, and interactive implementations.
 */

export const CHAPTER_3_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 3.1: What Is Classification?
  ------------------------------------------------------------- */
  '3.1': {
    kicker: 'Chapter 3 · Concept 3.1',
    title: 'What Is Classification?',
    question: 'How do you organize your belongings into categories?',
    questionDesc: 'When you pack your school backpack, you put notebooks in one pocket, snacks in another, and pencils in a pencil case. You are classifying! In machine learning, classification is the task of looking at an object\'s clues and deciding which group or category it belongs to.',
    visHint: '👆 Tap the items in the sorting dock to send them to the correct basket!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Test items dock -->
          <div style="display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn" onclick="window.c31Pick(0)">🍎 Apple</button>
            <button class="mlk-control-btn" onclick="window.c31Pick(1)">🥦 Broccoli</button>
            <button class="mlk-control-btn" onclick="window.c31Pick(2)">🍌 Banana</button>
            <button class="mlk-control-btn" onclick="window.c31Pick(3)">🥕 Carrot</button>
            <button class="mlk-control-btn" onclick="window.c31Pick(4)">🍓 Strawberry</button>
          </div>

          <!-- Baskets -->
          <div style="display: flex; justify-content: space-around; align-items: center; flex: 1; margin: 1rem 0;">
            
            <div id="c31-basket-fruit" style="background: #ecfdf5; border: 2px dashed #059669; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #065f46; text-transform: uppercase;">Class A</span>
              <div style="font-size: 2.2rem; margin: 0.35rem 0;">🧺 🍎</div>
              <strong style="color: #065f46; font-size: 1rem;">Fruits</strong>
              <div id="c31-fruit-count" style="font-size: 0.75rem; color: #059669; margin-top: 0.25rem;">0 sorted</div>
            </div>

            <!-- Current Item -->
            <div style="text-align: center; max-width: 150px;">
              <span style="font-size: 0.72rem; font-weight: 700; color: #64748b; text-transform: uppercase;">Active Item</span>
              <div id="c31-active-emoji" style="font-size: 3.5rem; margin: 0.25rem 0;">🍎</div>
              <strong id="c31-active-name" style="color: #0f172a; font-size: 0.95rem;">Apple</strong>
            </div>

            <div id="c31-basket-veg" style="background: #fef3c7; border: 2px dashed #d97706; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #92400e; text-transform: uppercase;">Class B</span>
              <div style="font-size: 2.2rem; margin: 0.35rem 0;">🧺 🥦</div>
              <strong style="color: #92400e; font-size: 1rem;">Vegetables</strong>
              <div id="c31-veg-count" style="font-size: 0.75rem; color: #d97706; margin-top: 0.25rem;">0 sorted</div>
            </div>

          </div>

          <div id="c31-feedback" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.85rem; font-weight: 700; color: #1e40af; text-align: center;">
            Classification task: Tap an item above, then click which bucket it belongs in!
          </div>

        </div>
      `;

      const items = [
        { name: 'Apple', emoji: '🍎', type: 'fruit' },
        { name: 'Broccoli', emoji: '🥦', type: 'veg' },
        { name: 'Banana', emoji: '🍌', type: 'fruit' },
        { name: 'Carrot', emoji: '🥕', type: 'veg' },
        { name: 'Strawberry', emoji: '🍓', type: 'fruit' }
      ];
      let currentItem = items[0];
      let fCount = 0, vCount = 0;

      window.c31Pick = function(idx) {
        currentItem = items[idx];
        document.getElementById('c31-active-emoji').textContent = currentItem.emoji;
        document.getElementById('c31-active-name').textContent = currentItem.name;
        document.getElementById('c31-feedback').textContent = `Classify ${currentItem.name}: Is it a Fruit or Vegetable?`;
      };

      window.c31Sort = function(choice) {
        const fb = document.getElementById('c31-feedback');
        if (choice === currentItem.type) {
          fb.textContent = `Correct! ${currentItem.name} successfully classified as ${choice.toUpperCase()}! 🎯`;
          fb.style.color = '#059669';
          if (choice === 'fruit') fCount++; else vCount++;
          document.getElementById('c31-fruit-count').textContent = `${fCount} sorted`;
          document.getElementById('c31-veg-count').textContent = `${vCount} sorted`;
        } else {
          fb.textContent = `Incorrect! ${currentItem.name} is a ${currentItem.type}, not a ${choice}!`;
          fb.style.color = '#dc2626';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c31Sort('fruit')">Put in Fruits 🍎</button>
        <button class="mlk-control-btn primary" onclick="window.c31Sort('veg')">Put in Vegetables 🥦</button>
      `;
    },

    observation: 'Can you see the items in the card above? Now change it—click "Put in Fruits 🍎" or "Put in Vegetables 🥦"! Look what happens: each item gets sorted into exactly one bucket. Classification is all about choosing the single correct category for an item!',
    mechanism: 'Why is this called Classification? When an AI sorts emails into "Spam" or "Inbox", or photos into "Cat" or "Dog", it makes a discrete choice. If there are 2 choices, it is Binary Classification; if there are many choices, it is Multiclass Classification.',
    takeaway: 'Classification is the process of assigning an example into one of several distinct categories.'
  },

  /* -------------------------------------------------------------
     Concept 3.2: How Can a Computer Classify?
  ------------------------------------------------------------- */
  '3.2': {
    kicker: 'Chapter 3 · Concept 3.2',
    title: 'How Can a Computer Classify?',
    question: 'How can a machine separate two groups on a 2D map?',
    questionDesc: 'A computer cannot physically pick up an apple and drop it in a basket. Instead, it plots the examples on a coordinate plane and searches for a dividing line (or boundary) that puts all the Blue dots on one side and all the Orange dots on the other.',
    visHint: '👆 Move the slider below to drag the green boundary and watch the mistake counter drop to 0!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c32-svg" viewBox="0 0 420 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Blue Team (Apples) -->
              <circle cx="70" cy="80" r="7" fill="#2563eb" /><circle cx="100" cy="50" r="7" fill="#2563eb" />
              <circle cx="120" cy="90" r="7" fill="#2563eb" /><circle cx="85" cy="120" r="7" fill="#2563eb" />
              <circle cx="140" cy="70" r="7" fill="#2563eb" /><circle cx="110" cy="140" r="7" fill="#2563eb" />

              <!-- Orange Team (Oranges) -->
              <circle cx="280" cy="130" r="7" fill="#d97706" /><circle cx="310" cy="90" r="7" fill="#d97706" />
              <circle cx="330" cy="150" r="7" fill="#d97706" /><circle cx="290" cy="70" r="7" fill="#d97706" />
              <circle cx="350" cy="110" r="7" fill="#d97706" /><circle cx="270" cy="160" r="7" fill="#d97706" />

              <!-- Movable Boundary Line -->
              <line id="c32-boundary-line" x1="200" y1="10" x2="200" y2="200" stroke="#059669" stroke-width="3.5" />

              <text x="70" y="25" font-size="11" font-weight="700" fill="#2563eb">Blue Zone (Predicted Class 1)</text>
              <text x="350" y="25" font-size="11" font-weight="700" text-anchor="end" fill="#d97706">Orange Zone (Predicted Class 2)</text>
            </svg>
          </div>

          <!-- Real-time Mistake Readout -->
          <div id="c32-readout" style="margin-top: 0.5rem; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 0.55rem 1rem; font-size: 0.875rem; font-weight: 700; color: #065f46; text-align: center;">
            Current Boundary: Position = 200px. Misclassifications = 0 (Perfect Separation!) 🎯
          </div>

        </div>
      `;

      window.c32UpdateLine = function(val) {
        const xPos = parseInt(val, 10);
        const line = document.getElementById('c32-boundary-line');
        const rd = document.getElementById('c32-readout');

        line.setAttribute('x1', xPos);
        line.setAttribute('x2', xPos);

        // Count how many blue dots are to the right of line (> xPos)
        // Blue dots are at: 70, 100, 120, 85, 140, 110 (Max blue is 140)
        // Orange dots are at: 280, 310, 330, 290, 350, 270 (Min orange is 270)
        let blueMistakes = 0;
        if (xPos < 140) blueMistakes += 1;
        if (xPos < 120) blueMistakes += 1;
        if (xPos < 100) blueMistakes += 2;

        let orangeMistakes = 0;
        if (xPos > 270) orangeMistakes += 1;
        if (xPos > 280) orangeMistakes += 1;
        if (xPos > 310) orangeMistakes += 2;

        const totalMistakes = blueMistakes + orangeMistakes;

        if (totalMistakes === 0) {
          rd.textContent = `Position = ${xPos}px. Misclassifications: 0. Perfect separating boundary! 🎯`;
          rd.style.background = '#ecfdf5';
          rd.style.borderColor = '#a7f3d0';
          rd.style.color = '#065f46';
        } else {
          rd.textContent = `Position = ${xPos}px. Misclassifications: ${totalMistakes} dots on the wrong side! ❌`;
          rd.style.background = '#fef2f2';
          rd.style.borderColor = '#fca5a5';
          rd.style.color = '#991b1b';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Move Dividing Line:</span>
          <input type="range" min="100" max="320" value="200" oninput="window.c32UpdateLine(this.value)">
        </div>
      `;
    },

    observation: 'Can you see the vertical dashed line slicing between the blue dots and orange dots? Now change it—drag the boundary slider all the way to 100px! Look what happens: the mistake counter screams "Mistakes: 3 ❌"! Now slide it back to 200px right in the empty white corridor: the mistakes vanish to 0! That is how computers classify.',
    mechanism: 'Why does a line work? A line divides a 2D map into two territories: everything on the left is Team Blue, and everything on the right is Team Orange. An AI algorithm searches for the line that gives the widest empty safety margin between the two groups.',
    takeaway: 'Computers classify by calculating mathematical boundaries that partition the feature space into category zones.'
  },

  /* -------------------------------------------------------------
     Concept 3.3: Distance Between Examples
  ------------------------------------------------------------- */
  '3.3': {
    kicker: 'Chapter 3 · Concept 3.3',
    title: 'Distance Between Examples',
    question: 'How does a computer measure how similar two examples are?',
    questionDesc: 'If two fruits have almost identical size, identical weight, and identical color, their points on a graph will sit right next to each other. We calculate their similarity by measuring the straight-line distance between their coordinates using the Pythagorean theorem.',
    visHint: '👆 Move the slider to shift the purple query point and watch the exact distance triangle calculate in real time!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c33-svg" viewBox="0 0 420 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              
              <!-- Reference Point A: Apple (80, 110) -->
              <circle cx="80" cy="110" r="10" fill="#059669" />
              <text x="80" y="135" font-size="11" font-weight="800" text-anchor="middle" fill="#059669">Apple A (80, 110)</text>

              <!-- Reference Point B: Orange (340, 110) -->
              <circle cx="340" cy="110" r="10" fill="#d97706" />
              <text x="340" y="135" font-size="11" font-weight="800" text-anchor="middle" fill="#d97706">Orange B (340, 110)</text>

              <!-- Distance measurement lines -->
              <line id="c33-line-a" x1="160" y1="90" x2="80" y2="110" stroke="#059669" stroke-width="2.5" stroke-dasharray="4 3" />
              <line id="c33-line-b" x1="160" y1="90" x2="340" y2="110" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4 3" />

              <!-- Movable Query Dot -->
              <circle id="c33-dot" cx="160" cy="90" r="9" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
              <text id="c33-dot-txt" x="160" y="75" font-size="11" font-weight="800" text-anchor="middle" fill="#7c3aed">? You (160, 90)</text>
            </svg>
          </div>

          <!-- Real-time Mathematical Readout -->
          <div style="display: flex; gap: 1rem; justify-content: space-between; margin-top: 0.5rem;">
            <div style="flex: 1; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 0.5rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 700; color: #065f46; text-transform: uppercase;">Distance to Apple A</span>
              <div id="c33-calc-a" style="font-size: 1.15rem; font-weight: 800; color: #059669;">82.5 units</div>
            </div>

            <div style="flex: 1; background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; padding: 0.5rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 700; color: #92400e; text-transform: uppercase;">Distance to Orange B</span>
              <div id="c33-calc-b" style="font-size: 1.15rem; font-weight: 800; color: #d97706;">181.1 units</div>
            </div>
          </div>

        </div>
      `;

      window.c33Shift = function(val) {
        const qx = parseInt(val, 10);
        const qy = 90;

        const dot = document.getElementById('c33-dot');
        const txt = document.getElementById('c33-dot-txt');
        const la = document.getElementById('c33-line-a');
        const lb = document.getElementById('c33-line-b');

        dot.setAttribute('cx', qx);
        txt.setAttribute('x', qx);
        txt.textContent = `? You (${qx}, 90)`;

        la.setAttribute('x1', qx);
        lb.setAttribute('x1', qx);

        // Genuine Euclidean distance d = sqrt(dx^2 + dy^2)
        const da = Math.sqrt((qx - 80)**2 + (qy - 110)**2).toFixed(1);
        const db = Math.sqrt((qx - 340)**2 + (qy - 110)**2).toFixed(1);

        document.getElementById('c33-calc-a').textContent = `${da} units`;
        document.getElementById('c33-calc-b').textContent = `${db} units`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Shift Query Position:</span>
          <input type="range" min="90" max="330" value="160" oninput="window.c33Shift(this.value)">
        </div>
      `;
    },

    observation: 'Can you see the purple query point sitting between Apple A (green) and Orange B (orange)? Now change it—drag the slider to the right past 220! Look what happens: the ruler lines recalculate, and the distance to Orange B suddenly shrinks to only 45 units! The purple point is now closer to Orange B.',
    mechanism: 'Why does distance mean similarity? If two points have almost the same numbers, they sit right next to each other on the map. The computer uses the Pythagorean theorem (straight-line Euclidean distance). Whichever known dot is closest wins the vote!',
    takeaway: 'Euclidean distance measures the geometric similarity between two examples in feature space.'
  },

  /* -------------------------------------------------------------
     Concept 3.4: Nearest Neighbor
  ------------------------------------------------------------- */
  '3.4': {
    kicker: 'Chapter 3 · Concept 3.4',
    title: 'Nearest Neighbor',
    question: 'How does the Nearest Neighbor algorithm work?',
    questionDesc: 'The 1-Nearest Neighbor (1-NN) algorithm is the most intuitive algorithm in computer science: calculate the distance to every single training point, find the one closest neighbor, and copy its label!',
    visHint: '👆 Move the slider to move the query point across the field and watch the closest connector jump!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c34-svg" viewBox="0 0 420 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Apple training points -->
              <circle cx="70" cy="60" r="7" fill="#059669" /><text x="70" y="80" font-size="9" text-anchor="middle" fill="#059669">Apple 1</text>
              <circle cx="120" cy="140" r="7" fill="#059669" /><text x="120" y="160" font-size="9" text-anchor="middle" fill="#059669">Apple 2</text>
              <circle cx="150" cy="70" r="7" fill="#059669" /><text x="150" y="90" font-size="9" text-anchor="middle" fill="#059669">Apple 3</text>

              <!-- Orange training points -->
              <circle cx="270" cy="150" r="7" fill="#d97706" /><text x="270" y="170" font-size="9" text-anchor="middle" fill="#d97706">Orange 1</text>
              <circle cx="320" cy="80" r="7" fill="#d97706" /><text x="320" y="100" font-size="9" text-anchor="middle" fill="#d97706">Orange 2</text>
              <circle cx="350" cy="160" r="7" fill="#d97706" /><text x="350" y="180" font-size="9" text-anchor="middle" fill="#d97706">Orange 3</text>

              <!-- Active Nearest Connector Line -->
              <line id="c34-active-line" x1="160" y1="100" x2="150" y2="70" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="4 3" />

              <!-- Query point -->
              <circle id="c34-q-dot" cx="160" cy="100" r="9" fill="#059669" stroke="#7c3aed" stroke-width="2" />
              <text id="c34-q-txt" x="160" y="88" font-size="10" font-weight="800" text-anchor="middle" fill="#7c3aed">? Query</text>
            </svg>
          </div>

          <div id="c34-status-box" style="margin-top: 0.5rem; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 0.55rem 1rem; font-size: 0.875rem; font-weight: 700; color: #065f46; text-align: center;">
            Closest training neighbor: Apple 3 (Distance = 31.6 units). Prediction = Apple 🍏!
          </div>

        </div>
      `;

      const pts = [
        { name: 'Apple 1', x: 70, y: 60, label: 'Apple', color: '#059669' },
        { name: 'Apple 2', x: 120, y: 140, label: 'Apple', color: '#059669' },
        { name: 'Apple 3', x: 150, y: 70, label: 'Apple', color: '#059669' },
        { name: 'Orange 1', x: 270, y: 150, label: 'Orange', color: '#d97706' },
        { name: 'Orange 2', x: 320, y: 80, label: 'Orange', color: '#d97706' },
        { name: 'Orange 3', x: 350, y: 160, label: 'Orange', color: '#d97706' }
      ];

      window.c34Update = function(val) {
        const qx = parseInt(val, 10);
        const qy = 100;

        let minDist = Infinity;
        let closest = pts[0];

        pts.forEach(p => {
          const d = Math.sqrt((p.x - qx)**2 + (p.y - qy)**2);
          if (d < minDist) {
            minDist = d;
            closest = p;
          }
        });

        const line = document.getElementById('c34-active-line');
        line.setAttribute('x1', qx);
        line.setAttribute('y1', qy);
        line.setAttribute('x2', closest.x);
        line.setAttribute('y2', closest.y);

        const dot = document.getElementById('c34-q-dot');
        dot.setAttribute('cx', qx);
        dot.setAttribute('fill', closest.color);

        const txt = document.getElementById('c34-q-txt');
        txt.setAttribute('x', qx);

        const sb = document.getElementById('c34-status-box');
        sb.textContent = `Closest neighbor: ${closest.name} (Distance = ${minDist.toFixed(1)} units). Prediction = ${closest.label}!`;
        sb.style.color = closest.color;
        sb.style.background = closest.label === 'Apple' ? '#ecfdf5' : '#fef3c7';
        sb.style.borderColor = closest.label === 'Apple' ? '#a7f3d0' : '#fde68a';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Move Query Point:</span>
          <input type="range" min="80" max="340" value="160" oninput="window.c34Update(this.value)">
        </div>
      `;
    },

    observation: 'Can you see the purple dashed laser connecting the query point to Apple 3? Now change it—slide the query point all the way to 300 on the right! Look what happens: the laser line instantly snaps over to Orange 2! The computer copies the label of whichever neighbor is closest.',
    mechanism: 'How does 1-NN work? 1-Nearest Neighbor doesn\'t memorize complicated equations. It literally holds all training examples in memory. When a new mystery fruit arrives, it holds up a digital ruler to every stored fruit and picks the single closest neighbor!',
    takeaway: 'Nearest Neighbor classifies a new point by copying the label of the closest training example.'
  },

  /* -------------------------------------------------------------
     Concept 3.5: What Happens with More Neighbors?
  ------------------------------------------------------------- */
  '3.5': {
    kicker: 'Chapter 3 · Concept 3.5',
    title: 'What Happens with More Neighbors?',
    question: 'What if one neighbor is noisy or unusual?',
    questionDesc: 'What if an orange accidentally fell into the apple basket? If you only ask 1 neighbor, that one accidental orange fools you! But if you ask 3 or 5 neighbors, the true group outvotes the mistake.',
    visHint: '👆 Switch between k = 1 and k = 3 to see how majority voting fixes the mistake!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c35-svg" viewBox="0 0 420 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <g id="c35-connectors"></g>

              <!-- Apples -->
              <circle cx="140" cy="85" r="7" fill="#059669" />
              <circle cx="150" cy="135" r="7" fill="#059669" />
              <circle cx="110" cy="110" r="7" fill="#059669" />

              <!-- One stray rogue orange in apple territory! -->
              <circle cx="185" cy="105" r="8" fill="#d97706" stroke="#dc2626" stroke-width="2" />
              <text x="185" y="125" font-size="9" text-anchor="middle" font-weight="700" fill="#dc2626">Rogue Orange!</text>

              <!-- Oranges -->
              <circle cx="310" cy="70" r="7" fill="#d97706" />
              <circle cx="330" cy="120" r="7" fill="#d97706" />

              <!-- Query Point at (175, 110) -->
              <circle cx="175" cy="110" r="9" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
              <text x="175" y="96" font-size="10" font-weight="800" text-anchor="middle" fill="#7c3aed">? Query</text>
            </svg>
          </div>

          <!-- Live Voting Result -->
          <div id="c35-vote-box" style="margin-top: 0.5rem; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.875rem; font-weight: 700; color: #1e40af; text-align: center;">
            Testing k = 3 Neighbors: 2 Apples vote against 1 Orange. Apples win by majority vote! 🍎
          </div>

        </div>
      `;

      window.c35SetK = function(k) {
        const conn = document.getElementById('c35-connectors');
        const box = document.getElementById('c35-vote-box');
        conn.innerHTML = '';

        if (k === 1) {
          conn.innerHTML = `<line x1="175" y1="110" x2="185" y2="105" stroke="#dc2626" stroke-width="3" />`;
          box.textContent = 'k = 1: The single closest dot is the rogue orange (dist: 11 px). Prediction = ORANGE! ❌ (Fooled by noise!)';
          box.style.background = '#fef2f2';
          box.style.borderColor = '#fca5a5';
          box.style.color = '#991b1b';
        } else {
          conn.innerHTML = `
            <line x1="175" y1="110" x2="185" y2="105" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3 3" />
            <line x1="175" y1="110" x2="140" y2="85" stroke="#059669" stroke-width="2.5" />
            <line x1="175" y1="110" x2="150" y2="135" stroke="#059669" stroke-width="2.5" />
          `;
          box.textContent = 'k = 3: Two apples (dist: 43px, 35px) and one orange (dist: 11px) vote. Apples win 2 to 1! ✅ (Resistant to noise!)';
          box.style.background = '#ecfdf5';
          box.style.borderColor = '#a7f3d0';
          box.style.color = '#065f46';
        }
      };

      window.c35SetK(3);
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn" onclick="window.c35SetK(1)">Test k = 1 Neighbor (Fooled by Rogue!)</button>
        <button class="mlk-control-btn primary" onclick="window.c35SetK(3)">Test k = 3 Neighbors (Majority Vote Wins!)</button>
      `;
    },

    observation: 'Can you see the rogue orange sitting alone inside the apple crowd? Look at k = 1: the computer was fooled by that single stray dot into guessing Orange ❌! Now change it—click "k = 3 Neighbors (Majority Vote)"! Look what happened: the 2 nearby apples outvoted the single rogue orange 2-to-1, and the prediction flipped to Apple ✅!',
    mechanism: 'Why does voting help? Real life has noisy exceptions (like a stray orange dropped in the apple bin). If you only ask 1 neighbor, that one fluke fools you! By asking k = 3 or k = 5 neighbors to take a vote, the true community always outvotes the noisy exception!',
    takeaway: 'Asking more neighbors to vote prevents single noisy outliers from ruining the prediction.'
  },

  /* -------------------------------------------------------------
     Concept 3.6: Decision Boundaries
  ------------------------------------------------------------- */
  '3.6': {
    kicker: 'Chapter 3 · Concept 3.6',
    title: 'Decision Boundaries',
    question: 'What is a decision boundary?',
    questionDesc: 'If you test every single pixel on the screen and color it green where the model predicts Apple, and orange where it predicts Orange, you see colored territories. The line dividing them is the decision boundary.',
    visHint: '👆 Drag the boundary control to see how the model\'s territories change!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c36-svg" viewBox="0 0 420 210" style="width: 100%; height: 100%; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Colored Background Zones -->
              <rect id="c36-z1" x="0" y="0" width="210" height="210" fill="#ecfdf5" />
              <rect id="c36-z2" x="210" y="0" width="210" height="210" fill="#fef3c7" />

              <!-- Boundary line -->
              <line id="c36-line" x1="210" y1="0" x2="210" y2="210" stroke="#059669" stroke-width="3" stroke-dasharray="6 4" />

              <text x="105" y="30" font-size="12" font-weight="800" text-anchor="middle" fill="#059669">Apple Territory (Predicted Class 1)</text>
              <text x="315" y="30" font-size="12" font-weight="800" text-anchor="middle" fill="#d97706">Orange Territory (Predicted Class 2)</text>

              <!-- Points -->
              <circle cx="80" cy="110" r="7" fill="#059669" /><circle cx="120" cy="150" r="7" fill="#059669" />
              <circle cx="310" cy="90" r="7" fill="#d97706" /><circle cx="340" cy="140" r="7" fill="#d97706" />
            </svg>
          </div>

          <div id="c36-status" style="margin-top: 0.5rem; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.55rem 1rem; font-size: 0.85rem; font-weight: 700; color: #1e40af; text-align: center;">
            The dashed line is the exact boundary where the computer flips its guess from Apple to Orange.
          </div>

        </div>
      `;

      window.c36Shift = function(pos) {
        const p = parseInt(pos, 10);
        document.getElementById('c36-z1').setAttribute('width', p);
        document.getElementById('c36-z2').setAttribute('x', p);
        document.getElementById('c36-z2').setAttribute('width', 420 - p);
        document.getElementById('c36-line').setAttribute('x1', p);
        document.getElementById('c36-line').setAttribute('x2', p);
        document.getElementById('c36-status').textContent = `Boundary shifted to x = ${p}px. Any dot landing left of this line is classified as Apple!`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Boundary Location:</span>
          <input type="range" min="130" max="290" value="210" oninput="window.c36Shift(this.value)">
        </div>
      `;
    },

    observation: 'Can you see the screen split into two colored territories? Green on the left is Apple territory, and orange on the right is Orange territory. Now change it—drag the boundary slider! Notice how the dashed dividing line moves. Any new fruit that lands on the green side becomes an Apple, and anything on the orange side becomes an Orange!',
    mechanism: 'What is a Decision Boundary? If you test every single pixel on the map and color it by the model\'s guess, the boundary is the dividing fence between the territories. A good model draws this fence cleanly in the empty space between groups.',
    takeaway: 'A decision boundary partitions the world into distinct category regions where the model makes its choice.'
  }
};
