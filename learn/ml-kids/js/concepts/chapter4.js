/**
 * Chapter 4: Prediction and Regression
 * Deep, rich visual interactive implementations of Concepts 4.1 to 4.6.
 * Explains regression concepts using simple, kid-friendly language (Classes 5-10).
 */

export const CHAPTER_4_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 4.1: What Is Prediction?
  ------------------------------------------------------------- */
  '4.1': {
    kicker: 'Chapter 4 · Concept 4.1',
    title: 'What Is Prediction?',
    question: 'Can a computer guess an exact number instead of a category?',
    questionDesc: 'In the last chapter, we asked the computer to pick a group name: "Apple or Orange?", "Cat or Dog?". But what if we need to guess a number that changes smoothly — like tomorrow\'s temperature, how tall you will grow next year, or how many ice cream cones a shop will sell today?',
    visHint: '👆 Drag the Temperature slider below. Watch how hotter weather attracts more people to the ice cream cart!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1rem; flex: 1; align-items: center;">
            
            <!-- Visual Ice Cream Truck & Weather Scene -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center; position: relative;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Real Life Situation</span>
              
              <div style="height: 140px; display: flex; align-items: center; justify-content: space-around; margin: 0.5rem 0;">
                <!-- Weather Sun/Cloud -->
                <div style="text-align: center;">
                  <div id="c41-sun-icon" style="font-size: 3.2rem; transition: transform 0.2s ease;">☀️</div>
                  <strong id="c41-temp-badge" style="display: inline-block; background: #fee2e2; color: #dc2626; padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.85rem; font-weight: 800;">30°C Hot</strong>
                </div>

                <!-- Ice cream cart & line of kids -->
                <div style="text-align: center;">
                  <div style="font-size: 2.8rem;">🍦 🚚</div>
                  <div id="c41-crowd" style="font-size: 1.2rem; letter-spacing: 2px;">🏃‍♂️ 🏃‍♀️ 🚶‍♂️ 🏃‍♀️</div>
                  <span id="c41-crowd-label" style="font-size: 0.75rem; color: #64748b; font-weight: 600;">Crowd: Big line waiting!</span>
                </div>
              </div>

              <div style="font-size: 0.8rem; color: #64748b; line-height: 1.3;">
                Input Clue: <strong>Outside Temperature</strong>
              </div>
            </div>

            <!-- Prediction Machine Output Box -->
            <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase;">Computer\'s Prediction</span>
              
              <div style="margin: 0.75rem 0;">
                <div style="font-size: 0.85rem; color: #94a3b8;">Predicted Ice Creams Needed:</div>
                <div id="c41-pred-number" style="font-size: 2.8rem; font-weight: 800; color: #4ade80; line-height: 1.1; margin: 0.35rem 0;">120</div>
                <span style="font-size: 0.9rem; font-weight: 700; color: #cbd5e1;">Cones to prepare today</span>
              </div>

              <div id="c41-pred-advice" style="background: rgba(255,255,255,0.08); border-radius: 8px; padding: 0.5rem; font-size: 0.78rem; color: #93c5fd;">
                Warm day! Stock up on chocolate and vanilla scoops.
              </div>
            </div>

          </div>

          <!-- Live Formula / Explanation Bar -->
          <div id="c41-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Can you see? When temperature goes up, the expected number of customers smoothly increases!
          </div>

        </div>
      `;

      window.c41UpdateTemp = function(tempVal) {
        const temp = parseInt(tempVal, 10);
        const sun = document.getElementById('c41-sun-icon');
        const badge = document.getElementById('c41-temp-badge');
        const crowd = document.getElementById('c41-crowd');
        const crowdLbl = document.getElementById('c41-crowd-label');
        const num = document.getElementById('c41-pred-number');
        const adv = document.getElementById('c41-pred-advice');

        // Linear formula: base 15 cones + 3.5 per deg C
        const cones = Math.round(15 + (temp - 10) * 4.2);
        num.textContent = cones;

        if (temp >= 32) {
          sun.textContent = '☀️🔥';
          badge.textContent = `${temp}°C Very Hot!`;
          badge.style.background = '#fee2e2';
          badge.style.color = '#dc2626';
          crowd.textContent = '🏃‍♂️ 🏃‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃 🚶‍♀️';
          crowdLbl.textContent = 'Crowd: Huge queue around the corner!';
          adv.textContent = 'Blazing heat! Everyone wants cold ice cream to cool down.';
        } else if (temp >= 22) {
          sun.textContent = '☀️';
          badge.textContent = `${temp}°C Warm`;
          badge.style.background = '#fef3c7';
          badge.style.color = '#b45309';
          crowd.textContent = '🏃‍♂️ 🏃‍♀️ 🚶‍♂️';
          crowdLbl.textContent = 'Crowd: Steady flow of happy customers.';
          adv.textContent = 'Pleasant sunny day. A healthy steady flow of sales.';
        } else {
          sun.textContent = '⛅';
          badge.textContent = `${temp}°C Chilly`;
          badge.style.background = '#e0f2fe';
          badge.style.color = '#0369a1';
          crowd.textContent = '🚶‍♂️';
          crowdLbl.textContent = 'Crowd: Only 1 person wearing a sweater!';
          adv.textContent = 'Too cool outside! People prefer hot cocoa or warm tea today.';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Outside Temperature:</span>
          <input type="range" min="14" max="38" value="30" oninput="window.c41UpdateTemp(this.value)">
        </div>
      `;
    },

    observation: 'Can you see what happened when you dragged the slider? At 14°C, only 32 cones were predicted. But at 38°C, the prediction climbed all the way to 133 cones! Notice that this is NOT a yes-or-no question. The answer is a continuous number that slides up and down on a scale.',
    mechanism: 'In Machine Learning, estimating a specific number rather than picking a label is called Regression. The computer looks at past days: "On days when it was 30°C, we sold around 100 cones; on 20°C days, we sold around 60 cones." From those past clues, it builds a mathematical relationship that can calculate a prediction for any temperature.',
    takeaway: 'Prediction in Machine Learning means guessing an unknown number by looking at past trends.'
  },

  /* -------------------------------------------------------------
     Concept 4.2: Finding a Pattern
  ------------------------------------------------------------- */
  '4.2': {
    kicker: 'Chapter 4 · Concept 4.2',
    title: 'Finding a Pattern',
    question: 'How do scattered dots show an upward or downward trend?',
    questionDesc: 'Imagine you interview 6 students at your school. You ask each student: "How many hours did you study for the science test, and what mark did you get?". When we draw each student as a dot on a graph, do the dots scatter randomly like spilled popcorn, or do they march together in a clear direction?',
    visHint: '👆 Click "Add Another Student Dot" or toggle "Reveal Trend Arrow" to see the upward pattern emerge!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c42-svg" viewBox="0 0 500 240" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Grid lines -->
              <line x1="60" y1="30" x2="60" y2="200" stroke="#94a3b8" stroke-width="2" />
              <line x1="60" y1="200" x2="470" y2="200" stroke="#94a3b8" stroke-width="2" />

              <text x="470" y="225" font-size="11" text-anchor="end" fill="#475569" font-weight="700">Hours Studied →</text>
              <text x="50" y="25" font-size="11" text-anchor="end" fill="#475569" font-weight="700">Exam Mark ↑</text>

              <!-- Axis numbers -->
              <text x="60" y="215" font-size="10" fill="#94a3b8">0h</text>
              <text x="140" y="215" font-size="10" fill="#94a3b8">2h</text>
              <text x="220" y="215" font-size="10" fill="#94a3b8">4h</text>
              <text x="300" y="215" font-size="10" fill="#94a3b8">6h</text>
              <text x="380" y="215" font-size="10" fill="#94a3b8">8h</text>

              <!-- Points container -->
              <g id="c42-points">
                <circle cx="100" cy="175" r="7" fill="#2563eb" />
                <circle cx="150" cy="155" r="7" fill="#2563eb" />
                <circle cx="210" cy="135" r="7" fill="#2563eb" />
                <circle cx="270" cy="110" r="7" fill="#2563eb" />
                <circle cx="340" cy="85" r="7" fill="#2563eb" />
                <circle cx="410" cy="55" r="7" fill="#2563eb" />
              </g>

              <!-- Trend Arrow -->
              <g id="c42-trend-group" opacity="0" style="transition: opacity 0.3s ease;">
                <line x1="80" y1="185" x2="430" y2="45" stroke="#059669" stroke-width="4" stroke-dasharray="6 4" />
                <polygon points="440,40 422,42 432,55" fill="#059669" />
                <text x="280" y="80" font-size="12" fill="#059669" font-weight="800">Clear Upward Trend! ↗</text>
              </g>
            </svg>
          </div>

          <!-- Dynamic Status Card -->
          <div id="c42-status" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 600; color: #334155; margin-top: 0.4rem;">
            6 students plotted. Look at the direction the dots are moving from left to right.
          </div>

        </div>
      `;

      let extraCount = 0;
      const extraStudents = [
        { h: 3, m: 72, cx: 180, cy: 142 },
        { h: 5.5, m: 83, cx: 310, cy: 98 },
        { h: 7.2, m: 94, cx: 390, cy: 65 }
      ];

      window.c42AddPoint = function() {
        if (extraCount >= extraStudents.length) {
          alert('You added all extra students! Can you see how they all follow the upward line?');
          return;
        }
        const s = extraStudents[extraCount++];
        const g = document.getElementById('c42-points');
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', s.cx);
        circle.setAttribute('cy', s.cy);
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', '#d97706');
        g.appendChild(circle);

        document.getElementById('c42-status').innerHTML = `
          Added student ${extraCount + 6}: Studied <strong>${s.h} hours</strong>, scored <strong>${s.m} marks</strong>! (Orange dot fits the trend!)
        `;
      };

      window.c42ToggleTrend = function() {
        const tg = document.getElementById('c42-trend-group');
        const st = document.getElementById('c42-status');
        const isHidden = tg.getAttribute('opacity') === '0';
        tg.setAttribute('opacity', isHidden ? '1' : '0');
        if (isHidden) {
          st.innerHTML = '<strong style="color: #059669;">Look at the green arrow!</strong> As study hours go UP, test marks also go UP. This is a positive relationship!';
        } else {
          st.textContent = 'Arrow hidden. Can you see the upward tilt with your own eyes?';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c42ToggleTrend()">📈 Toggle Trend Arrow</button>
        <button class="mlk-control-btn" onclick="window.c42AddPoint()">➕ Add Another Student Dot</button>
      `;
    },

    observation: 'Look at the dots. They do not sit on a perfect razor-sharp wire — some students study 4 hours and get 75, while another gets 70. Real life always has small differences! But look at the overall direction: as you move right (more study hours), the dots march steadily upward.',
    mechanism: 'When two measurements move in the same direction, scientists call this a Correlation. A computer calculates whether points tend to rise or fall together. Instead of memorizing every student separately, the computer looks for the general "highway" that runs through the middle of the crowd.',
    takeaway: 'Scattered data points often show an overall direction or trend that guides our predictions.'
  },

  /* -------------------------------------------------------------
     Concept 4.3: Making Predictions with a Line
  ------------------------------------------------------------- */
  '4.3': {
    kicker: 'Chapter 4 · Concept 4.3',
    title: 'Making Predictions with a Line',
    question: 'How do we use a line as a magic ruler to guess any number?',
    questionDesc: 'Suppose a new student says: "I studied for exactly 5 hours. What mark am I likely to get?". We don\'t have a student in our past list who studied exactly 5 hours! But because we drew a line through the data, the line acts like a magic ruler.',
    visHint: '👆 Move the Study Hours slider below. Watch the red dashed laser trace UP to the line, then turn RIGHT to give you the answer!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c43-svg" viewBox="0 0 500 240" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Axes -->
              <line x1="60" y1="30" x2="60" y2="200" stroke="#94a3b8" stroke-width="2" />
              <line x1="60" y1="200" x2="470" y2="200" stroke="#94a3b8" stroke-width="2" />

              <text x="470" y="225" font-size="11" text-anchor="end" fill="#475569" font-weight="700">Study Hours →</text>
              <text x="50" y="25" font-size="11" text-anchor="end" fill="#475569" font-weight="700">Mark ↑</text>

              <!-- Prediction Trend Line -->
              <line x1="60" y1="185" x2="460" y2="45" stroke="#2563eb" stroke-width="3.5" />

              <!-- Crosshair guides: from bottom axis to line, then to left axis -->
              <line id="c43-guide-v" x1="260" y1="200" x2="260" y2="115" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3" />
              <line id="c43-guide-h" x1="60" y1="115" x2="260" y2="115" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3" />

              <!-- Intersecting Dot -->
              <circle id="c43-dot" cx="260" cy="115" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
              
              <!-- Indicator on left axis -->
              <circle id="c43-left-dot" cx="60" cy="115" r="5" fill="#dc2626" />
            </svg>
          </div>

          <!-- Dynamic Readout -->
          <div style="display: flex; justify-content: space-around; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.65rem; font-size: 0.9rem; font-weight: 700; margin-top: 0.4rem;">
            <div>Study Time: <span id="c43-hours-read" style="color: #2563eb;">5.0 Hours</span></div>
            <div>Step 1: Go up to line ⬆️</div>
            <div>Step 2: Look left ⬅️</div>
            <div>Predicted Score: <span id="c43-score-read" style="color: #dc2626;">75 Marks</span></div>
          </div>

        </div>
      `;

      window.c43UpdateHours = function(val) {
        const hours = parseFloat(val);
        // Map 0h -> x=60, 8h -> x=460
        const xSvg = 60 + (hours / 8) * 400;
        // Line formula in SVG: at x=60, y=185; at x=460, y=45
        const ySvg = 185 - (hours / 8) * 140;

        document.getElementById('c43-guide-v').setAttribute('x1', xSvg);
        document.getElementById('c43-guide-v').setAttribute('x2', xSvg);
        document.getElementById('c43-guide-v').setAttribute('y2', ySvg);

        document.getElementById('c43-guide-h').setAttribute('y1', ySvg);
        document.getElementById('c43-guide-h').setAttribute('y2', ySvg);
        document.getElementById('c43-guide-h').setAttribute('x2', xSvg);

        document.getElementById('c43-dot').setAttribute('cx', xSvg);
        document.getElementById('c43-dot').setAttribute('cy', ySvg);
        document.getElementById('c43-left-dot').setAttribute('cy', ySvg);

        // Real score mapping: 40 marks at 0h, 95 marks at 8h
        const score = Math.round(40 + (hours / 8) * 55);

        document.getElementById('c43-hours-read').textContent = `${hours.toFixed(1)} Hours`;
        document.getElementById('c43-score-read').textContent = `${score} Marks`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Choose Student Study Hours:</span>
          <input type="range" min="0.5" max="7.5" step="0.5" value="5.0" oninput="window.c43UpdateHours(this.value)">
        </div>
      `;
    },

    observation: 'Can you see how easy it is to find the answer? 1) Start at 5 hours on the bottom. 2) Follow the dashed red laser straight up until it hits the blue line. 3) Turn 90 degrees left and read the mark on the wall: 75 marks! Any number you feed into the line immediately produces an estimated score.',
    mechanism: 'A line is a simple mathematical function: y = (slope × x) + intercept. The computer does not need to guess; it simply multiplies your study hours by the slope number and adds the base starting score. This takes less than one microsecond for a processor to compute!',
    takeaway: 'To predict with a line, find your input on the bottom, go up to the line, and read across.'
  },

  /* -------------------------------------------------------------
     Concept 4.4: Changing the Line
  ------------------------------------------------------------- */
  '4.4': {
    kicker: 'Chapter 4 · Concept 4.4',
    title: 'Changing the Line',
    question: 'How do two simple dials let a computer steer any straight line?',
    questionDesc: 'How does a computer actually move a line around on the screen? It turns out any straight line in the entire universe can be steered using just TWO simple dials: 1) The Tilt (how steep it climbs) and 2) The Starting Height (where it touches the left wall).',
    visHint: '👆 Turn the Tilt dial and the Starting Height dial below. Watch how the line rotates and slides!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c44-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Target points -->
              <circle cx="100" cy="170" r="7" fill="#94a3b8" />
              <circle cx="180" cy="140" r="7" fill="#94a3b8" />
              <circle cx="280" cy="105" r="7" fill="#94a3b8" />
              <circle cx="380" cy="70" r="7" fill="#94a3b8" />

              <!-- Wall on left -->
              <line x1="50" y1="20" x2="50" y2="200" stroke="#cbd5e1" stroke-width="2" />
              <line x1="50" y1="200" x2="470" y2="200" stroke="#cbd5e1" stroke-width="2" />

              <!-- The steering line -->
              <line id="c44-line" x1="50" y1="160" x2="450" y2="80" stroke="#2563eb" stroke-width="3.5" />

              <!-- Starting point badge (intercept) -->
              <circle id="c44-intercept-dot" cx="50" cy="160" r="6" fill="#dc2626" />
              <text id="c44-intercept-txt" x="55" y="155" font-size="10" fill="#dc2626" font-weight="700">Start: 160</text>
            </svg>
          </div>

          <!-- Dynamic Status -->
          <div style="display: flex; justify-content: space-around; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem; font-size: 0.85rem; font-weight: 700;">
            <div>Dial 1 (Tilt / Slope): <span id="c44-tilt-val" style="color: #2563eb;">Medium Upward</span></div>
            <div>Dial 2 (Starting Height / Intercept): <span id="c44-height-val" style="color: #dc2626;">Middle</span></div>
          </div>

        </div>
      `;

      let tilt = 0.2;
      let startY = 170;

      window.c44UpdateLine = function() {
        tilt = parseFloat(document.getElementById('c44-tilt-slider').value);
        startY = parseInt(document.getElementById('c44-height-slider').value, 10);

        // y2 = startY - (400 * tilt)
        const y2 = startY - (400 * tilt);

        const line = document.getElementById('c44-line');
        line.setAttribute('y1', startY);
        line.setAttribute('y2', y2);

        const dot = document.getElementById('c44-intercept-dot');
        dot.setAttribute('cy', startY);

        const txt = document.getElementById('c44-intercept-txt');
        txt.setAttribute('y', startY - 6);
        txt.textContent = `Start Height: ${200 - startY}`;

        const tiltLbl = document.getElementById('c44-tilt-val');
        if (tilt > 0.28) tiltLbl.textContent = 'Very Steep ↗';
        else if (tilt > 0.12) tiltLbl.textContent = 'Gentle Slope ↗';
        else if (tilt === 0) tiltLbl.textContent = 'Flat Horizontal ➔';
        else tiltLbl.textContent = 'Sloping Downwards ↘';

        document.getElementById('c44-height-val').textContent = `${200 - startY} px`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Dial 1 (Tilt / Slope):</span>
          <input id="c44-tilt-slider" type="range" min="-0.15" max="0.38" step="0.02" value="0.22" oninput="window.c44UpdateLine()">
        </div>
        <div class="mlk-slider-group">
          <span>Dial 2 (Starting Height / Intercept):</span>
          <input id="c44-height-slider" type="range" min="110" max="190" value="180" oninput="window.c44UpdateLine()">
        </div>
      `;
    },

    observation: 'Notice what each dial controls! Dial 1 rotates the line like a seesaw around the starting point. Dial 2 slides the entire line straight up and down like an elevator. By adjusting just these two dials, you can make the line slice through almost any cloud of points!',
    mechanism: 'Mathematicians write the equation of a line as: y = m·x + c. Here, "m" is the tilt (slope) and "c" is the starting height (y-intercept). When a machine learning algorithm learns a regression model, all it is doing is finding the best numbers for m and c!',
    takeaway: 'Every straight line is steered by just two numbers: its tilt (slope) and its starting height (intercept).'
  },

  /* -------------------------------------------------------------
     Concept 4.5: Good vs Bad Predictions
  ------------------------------------------------------------- */
  '4.5': {
    kicker: 'Chapter 4 · Concept 4.5',
    title: 'Good vs Bad Predictions',
    question: 'How can you measure whether a line is doing a good or terrible job?',
    questionDesc: 'If two students draw different lines through the same dots, who has the better line? We don\'t just take a wild guess. We take out tiny rulers and measure the distance from every dot to the line! These distance gaps are called Residual Mistakes.',
    visHint: '👆 Click "Compare Good Line vs Bad Line" to see the mistake rulers shrink and stretch!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c45-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Container for residual dashed ruler lines -->
              <g id="c45-rulers"></g>

              <!-- Prediction line -->
              <line id="c45-line" x1="50" y1="180" x2="450" y2="50" stroke="#2563eb" stroke-width="3" />

              <!-- Fixed student dots -->
              <circle cx="110" cy="155" r="7" fill="#0f172a" />
              <circle cx="190" cy="130" r="7" fill="#0f172a" />
              <circle cx="280" cy="95" r="7" fill="#0f172a" />
              <circle cx="370" cy="75" r="7" fill="#0f172a" />
              <circle cx="430" cy="50" r="7" fill="#0f172a" />
            </svg>
          </div>

          <!-- Total Mistake Meter Bar -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; padding: 0.75rem 1rem; margin-top: 0.4rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.35rem;">
              <span>Total Distance Mistake:</span>
              <span id="c45-error-score" style="color: #059669;">Tiny Mistake: 18 px</span>
            </div>
            <div style="height: 12px; background: #e2e8f0; border-radius: 999px; overflow: hidden;">
              <div id="c45-error-bar" style="width: 15%; height: 100%; background: #059669; border-radius: 999px; transition: width 0.3s ease, background 0.3s ease;"></div>
            </div>
            <div id="c45-verdict" style="font-size: 0.8rem; color: #059669; font-weight: 700; margin-top: 0.35rem; text-align: center;">
              ✅ Excellent line! It passes right through the middle of the crowd.
            </div>
          </div>

        </div>
      `;

      const pts = [
        { x: 110, y: 155 },
        { x: 190, y: 130 },
        { x: 280, y: 95 },
        { x: 370, y: 75 },
        { x: 430, y: 50 }
      ];

      window.c45SetMode = function(mode) {
        const line = document.getElementById('c45-line');
        const rulers = document.getElementById('c45-rulers');
        const score = document.getElementById('c45-error-score');
        const bar = document.getElementById('c45-error-bar');
        const verdict = document.getElementById('c45-verdict');

        let y1, y2;
        if (mode === 'good') {
          y1 = 175; y2 = 55;
          score.textContent = 'Tiny Mistake: 18 px (Very close to all dots!)';
          score.style.color = '#059669';
          bar.style.width = '16%';
          bar.style.background = '#059669';
          verdict.innerHTML = '✅ <strong>Great Fit!</strong> The dashed ruler lines are very short and green.';
          verdict.style.color = '#059669';
        } else if (mode === 'terrible') {
          y1 = 60; y2 = 190; // Sloping the wrong way!
          score.textContent = 'Huge Mistake: 190 px (Way off the dots!)';
          score.style.color = '#dc2626';
          bar.style.width = '95%';
          bar.style.background = '#dc2626';
          verdict.innerHTML = '❌ <strong>Terrible Fit!</strong> The line slopes in the opposite direction. Rulers are long and red!';
          verdict.style.color = '#dc2626';
        } else {
          // Flat horizontal line
          y1 = 110; y2 = 110;
          score.textContent = 'Medium Mistake: 85 px (Too lazy, ignores study hours)';
          score.style.color = '#d97706';
          bar.style.width = '55%';
          bar.style.background = '#d97706';
          verdict.innerHTML = '⚠️ <strong>Mediocre Fit!</strong> A flat line guesses everyone gets 70 marks, ignoring study time completely.';
          verdict.style.color = '#d97706';
        }

        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);

        // Draw rulers
        rulers.innerHTML = pts.map(p => {
          const lineY = y1 + ((p.x - 50) / 400) * (y2 - y1);
          const color = mode === 'good' ? '#059669' : (mode === 'terrible' ? '#dc2626' : '#d97706');
          return `
            <line x1="${p.x}" y1="${p.y}" x2="${p.x}" y2="${lineY}" stroke="${color}" stroke-width="2.5" stroke-dasharray="3 3" />
            <circle cx="${p.x}" cy="${lineY}" r="3" fill="${color}" />
          `;
        }).join('');
      };

      window.c45SetMode('good');
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn success" onclick="window.c45SetMode('good')">✅ Test Great Line</button>
        <button class="mlk-control-btn warning" onclick="window.c45SetMode('flat')">⚠️ Test Flat Line</button>
        <button class="mlk-control-btn danger" onclick="window.c45SetMode('terrible')">❌ Test Terrible Line</button>
      `;
    },

    observation: 'Look at the vertical dashed lines between the dots and the blue line. When the line is tilted the wrong way (red), the rulers stretch really long because the guesses are far from reality. When the line runs right down the center (green), every ruler shrinks to a tiny sliver!',
    mechanism: 'Each vertical ruler line is called a Residual Error: (Actual Value - Predicted Value). To find the total mistake, the computer measures all these ruler lengths. The line with the smallest total ruler length is crowned the winner!',
    takeaway: 'A good prediction line makes the distance to all the data points as small as possible.'
  },

  /* -------------------------------------------------------------
     Concept 4.6: Linear Regression
  ------------------------------------------------------------- */
  '4.6': {
    kicker: 'Chapter 4 · Concept 4.6',
    title: 'Linear Regression',
    question: 'What is the official scientific name for finding this best-fitting line?',
    questionDesc: 'In the previous lessons, you adjusted the line using sliders or buttons. But humans get tired! A computer can calculate the absolute, mathematically perfect line automatically using a famous algorithm called Linear Regression.',
    visHint: '👆 Move the line with the manual slider, then click "⚡ Run Linear Regression" to watch math snap the line to perfection!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c46-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Data dots -->
              <circle cx="80" cy="180" r="7" fill="#2563eb" />
              <circle cx="140" cy="150" r="7" fill="#2563eb" />
              <circle cx="210" cy="135" r="7" fill="#2563eb" />
              <circle cx="290" cy="100" r="7" fill="#2563eb" />
              <circle cx="360" cy="85" r="7" fill="#2563eb" />
              <circle cx="430" cy="45" r="7" fill="#2563eb" />

              <!-- Line -->
              <line id="c46-line" x1="50" y1="160" x2="450" y2="100" stroke="#7c3aed" stroke-width="3.5" style="transition: all 0.4s ease;" />
            </svg>
          </div>

          <!-- Algorithm Output Banner -->
          <div id="c46-banner" style="background: #f5f3ff; border: 2px solid #ddd6fe; border-radius: 10px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.75rem; font-weight: 800; color: #7c3aed; text-transform: uppercase;">Algorithm Result</div>
            <strong id="c46-formula" style="font-size: 1.1rem; color: #4c1d95; display: block; margin: 0.25rem 0;">Current Guess: y = 0.15x + 35</strong>
            <span id="c46-msg" style="font-size: 0.82rem; color: #6b21a8;">Drag the slider to test your hand, or let math solve it instantly.</span>
          </div>

        </div>
      `;

      window.c46ManualTilt = function(val) {
        const t = parseFloat(val);
        const y1 = 175;
        const y2 = y1 - (400 * t);
        const line = document.getElementById('c46-line');
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#7c3aed');

        document.getElementById('c46-formula').textContent = `Your Manual Guess: y = ${t.toFixed(2)}x + 40`;
        document.getElementById('c46-msg').textContent = 'Can you get it as close as a computer? Try clicking the button below!';
      };

      window.c46SolveOptimal = function() {
        const line = document.getElementById('c46-line');
        // Optimal slope is ~0.33
        const y1 = 185;
        const y2 = 45;
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#059669');

        const banner = document.getElementById('c46-banner');
        banner.style.background = '#ecfdf5';
        banner.style.borderColor = '#a7f3d0';

        document.getElementById('c46-formula').textContent = '⚡ Optimal Fit Found: y = 0.35x + 38';
        document.getElementById('c46-msg').innerHTML = '<strong style="color: #065f46;">Mathematical perfection!</strong> The algorithm calculated the exact slope in 0.001 seconds using the Least Squares method.';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Manual Tilt Guess:</span>
          <input type="range" min="0.05" max="0.55" step="0.02" value="0.18" oninput="window.c46ManualTilt(this.value)">
        </div>
        <button class="mlk-control-btn success" onclick="window.c46SolveOptimal()">⚡ Run Linear Regression (Auto-Solve)</button>
      `;
    },

    observation: 'When you clicked "Run Linear Regression", the purple line snapped into the green position in the blink of an eye! Notice how it centers itself with equal distance to the points above and below it. Zero human guesswork needed.',
    mechanism: 'Linear Regression uses a formula called "Ordinary Least Squares". It calculates the exact tilt and starting height that minimizes the sum of all squared error rulers. Because it has an exact mathematical formula, the computer solves it instantly!',
    takeaway: 'Linear Regression is the mathematical formula that calculates the single best-fitting line through data.'
  }
};
