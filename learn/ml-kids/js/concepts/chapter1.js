/**
 * Chapter 1: What Is Machine Learning?
 * Minimalist, elegant, visually satisfying implementations of Concepts 1.1, 1.2, 1.3, and 1.4.
 */

export const CHAPTER_1_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 1.1: How Do We Learn?
  ------------------------------------------------------------- */
  '1.1': {
    kicker: 'Chapter 1 · Concept 1.1',
    title: 'How Do We Learn?',
    question: 'How do you know an apple is an apple when you see one?',
    questionDesc: 'Think about when you were very young. Nobody handed you a 50-page mathematical handbook about apples. You simply saw examples of apples, and your brain stored them. But how does that memory allow you to recognize a brand-new fruit you have never seen before?',
    visHint: 'Click a fruit to see how your brain checks its clues:',

    renderVis(container) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 0; min-height: 280px; gap: 1.5rem;">
          
          <!-- Clean pill selector -->
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn active" id="c11-btn-0" onclick="window.c11SelectFruit(0)">🍎 Red Apple</button>
            <button class="mlk-control-btn" id="c11-btn-1" onclick="window.c11SelectFruit(1)">🍏 Green Apple</button>
            <button class="mlk-control-btn" id="c11-btn-2" onclick="window.c11SelectFruit(2)">🍊 Orange</button>
          </div>

          <!-- Stage: Uncluttered, Pure Whiteboard -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 2.5rem; flex-wrap: wrap; width: 100%; max-width: 540px;">
            
            <!-- Left: The Visual Fruit -->
            <div style="text-align: center; min-width: 140px;">
              <div id="c11-emoji" style="font-size: 4.5rem; line-height: 1; transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);">🍎</div>
              <div id="c11-name" style="font-weight: 700; color: #0f172a; font-size: 1.05rem; margin-top: 0.5rem;">Red Apple</div>
              <div id="c11-clues" style="font-size: 0.82rem; color: #64748b; margin-top: 0.25rem;">Round · Smooth skin · Red</div>
            </div>

            <!-- Right: Brain's Deduction -->
            <div style="flex: 1; min-width: 220px; background: #fafbfd; border-radius: 12px; padding: 1.25rem; border: 1px solid #eef2f6;">
              <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.4rem;">Brain Memory Match</div>
              <div id="c11-match-detail" style="font-size: 0.92rem; color: #334155; line-height: 1.55;">
                Matches your stored Apple memories (round shape + smooth skin).
              </div>
              <div style="margin-top: 0.85rem; padding-top: 0.75rem; border-top: 1px solid #eef2f6; font-size: 0.95rem; font-weight: 700; color: #059669;" id="c11-verdict">
                Brain says: "It's an Apple! 🍎"
              </div>
            </div>

          </div>

        </div>
      `;

      const fruitsData = [
        { emoji: '🍎', name: 'Red Apple', clues: 'Round · Smooth skin · Red', matchText: 'Matches stored Apple memories (round shape + smooth skin + red color).', verdict: 'Brain says: "It\'s an Apple! 🍎"', color: '#059669' },
        { emoji: '🍏', name: 'Green Apple', clues: 'Round · Smooth skin · Green', matchText: 'Even though color is green, the round shape and smooth skin match your Apple memories!', verdict: 'Brain says: "It\'s still an Apple! 🍏"', color: '#059669' },
        { emoji: '🍊', name: 'Orange', clues: 'Round · Bumpy peel · Orange', matchText: 'The bumpy pores and citrus scent match your stored Citrus memories.', verdict: 'Brain says: "It\'s an Orange! 🍊"', color: '#d97706' }
      ];

      window.c11SelectFruit = function(idx) {
        for (let i = 0; i < 3; i++) {
          const btn = document.getElementById(`c11-btn-${i}`);
          if (btn) btn.classList.toggle('active', i === idx);
        }
        const f = fruitsData[idx];
        const emojiEl = document.getElementById('c11-emoji');
        if (emojiEl) {
          emojiEl.textContent = f.emoji;
          emojiEl.style.transform = 'scale(1.15)';
          setTimeout(() => { emojiEl.style.transform = 'scale(1)'; }, 180);
        }
        const nameEl = document.getElementById('c11-name');
        if (nameEl) nameEl.textContent = f.name;
        const cluesEl = document.getElementById('c11-clues');
        if (cluesEl) cluesEl.textContent = f.clues;
        const matchEl = document.getElementById('c11-match-detail');
        if (matchEl) matchEl.textContent = f.matchText;
        const verdEl = document.getElementById('c11-verdict');
        if (verdEl) {
          verdEl.textContent = f.verdict;
          verdEl.style.color = f.color;
        }
      };
    },

    renderControls(container) {
      container.innerHTML = ``;
    },

    observation: 'Can you see what happens when you click on the Green Apple 🍏? Look closely! Even though the color is green, your brain did NOT get tricked into calling it an orange. Now change it—click the Orange 🍊 above! Notice how your brain instantly switches memories because of the bumpy peel and citrus shape.',
    mechanism: 'Why does your brain do this? Your brain stores previous examples (a personal memory dataset). When a new fruit appears, your eyes measure multiple clues together: color, size, shape, and skin texture. No two apples are ever 100% identical, so your brain learns the flexible pattern rather than memorizing a single rigid picture!',
    takeaway: 'We learn to recognize new things by comparing multiple clues with memories of examples we have seen before.'
  },

  /* -------------------------------------------------------------
     Concept 1.2: Can a Computer Learn?
  ------------------------------------------------------------- */
  '1.2': {
    kicker: 'Chapter 1 · Concept 1.2',
    title: 'Can a Computer Learn?',
    question: 'How can a machine without eyes or feelings recognize an object?',
    questionDesc: 'A computer chip has no eyes and no feelings—it only stores numbers (0s and 1s). How can a machine ever tell an apple from an orange? The secret: sensors turn visual clues into numbers, and math finds the pattern!',
    visHint: 'Move the sliders below to change the fruit and watch the computer calculate:',

    renderVis(container) {
      container.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 2.5rem; flex-wrap: wrap; padding: 1.5rem 0; min-height: 280px;">
          
          <!-- Visual Fruit -->
          <div style="text-align: center; min-width: 140px;">
            <svg id="c12-fruit-svg" width="130" height="130" viewBox="0 0 100 100" style="display: block; margin: 0 auto;">
              <circle id="c12-shape" cx="50" cy="50" r="38" fill="#dc2626" style="transition: fill 0.15s ease, r 0.15s ease;" />
              <path d="M50 12 Q56 2 64 6" stroke="#15803d" stroke-width="3" fill="none" />
            </svg>
            <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.5rem; font-family: monospace;">
              Redness: <span id="c12-num-red" style="font-weight: 700; color: #dc2626;">85%</span> · Roundness: <span id="c12-num-round" style="font-weight: 700; color: #2563eb;">90%</span>
            </div>
          </div>

          <!-- Computer Probability Readout (Clean, Light, Minimalist) -->
          <div style="flex: 1; min-width: 220px; max-width: 280px; background: #fafbfd; border: 1px solid #eef2f6; border-radius: 12px; padding: 1.25rem;">
            <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 0.75rem;">Computer Calculation</div>
            
            <!-- Apple progress bar -->
            <div style="margin-bottom: 0.65rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; color: #334155; margin-bottom: 3px;">
                <span>🍎 Apple Match</span>
                <span id="c12-prob-apple">87%</span>
              </div>
              <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                <div id="c12-bar-apple" style="width: 87%; height: 100%; background: #059669; border-radius: 3px; transition: width 0.15s ease;"></div>
              </div>
            </div>

            <!-- Orange progress bar -->
            <div style="margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 600; color: #334155; margin-bottom: 3px;">
                <span>🍊 Orange Match</span>
                <span id="c12-prob-orange">13%</span>
              </div>
              <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                <div id="c12-bar-orange" style="width: 13%; height: 100%; background: #d97706; border-radius: 3px; transition: width 0.15s ease;"></div>
              </div>
            </div>

            <div style="padding-top: 0.75rem; border-top: 1px solid #eef2f6; font-size: 0.95rem; font-weight: 700;" id="c12-pred-text">
              Prediction: <span style="color: #059669;">Apple 🍏</span>
            </div>
          </div>

        </div>
      `;

      window.c12Update = function() {
        const redInput = document.getElementById('c12-slider-red');
        const roundInput = document.getElementById('c12-slider-round');
        if (!redInput || !roundInput) return;

        const red = parseInt(redInput.value, 10);
        const round = parseInt(roundInput.value, 10);

        const rEl = document.getElementById('c12-num-red');
        const roEl = document.getElementById('c12-num-round');
        if (rEl) rEl.textContent = `${red}%`;
        if (roEl) roEl.textContent = `${round}%`;

        const shape = document.getElementById('c12-shape');
        if (shape) {
          const gVal = Math.round(180 * (1 - red / 100));
          shape.setAttribute('fill', `rgb(220, ${gVal}, 40)`);
          shape.setAttribute('r', 25 + (round / 100) * 15);
        }

        let appleProb = Math.min(98, Math.max(2, Math.round((red * 0.7) + (round * 0.3))));
        let orangeProb = 100 - appleProb;

        const paEl = document.getElementById('c12-prob-apple');
        const poEl = document.getElementById('c12-prob-orange');
        const baEl = document.getElementById('c12-bar-apple');
        const boEl = document.getElementById('c12-bar-orange');
        const pred = document.getElementById('c12-pred-text');

        if (paEl) paEl.textContent = `${appleProb}%`;
        if (poEl) poEl.textContent = `${orangeProb}%`;
        if (baEl) baEl.style.width = `${appleProb}%`;
        if (boEl) boEl.style.width = `${orangeProb}%`;

        if (pred) {
          if (appleProb >= 50) {
            pred.innerHTML = `Prediction: <span style="color: #059669;">Apple 🍏</span>`;
          } else {
            pred.innerHTML = `Prediction: <span style="color: #d97706;">Orange 🍊</span>`;
          }
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Redness:</span>
          <input id="c12-slider-red" type="range" min="10" max="95" value="85" oninput="window.c12Update()">
        </div>
        <div class="mlk-slider-group">
          <span>Roundness:</span>
          <input id="c12-slider-round" type="range" min="30" max="95" value="90" oninput="window.c12Update()">
        </div>
      `;
    },

    observation: 'Can you see the numbers on the screen: Redness 85% and Roundness 90%? Now change it! Drag the Redness slider down to 20%. Look what happens: the probability bar smoothly slides across from Apple (green) to Orange (yellow)! Notice that the computer doesn\'t have magical feelings—it just compares your numbers to the numbers of oranges it stored earlier.',
    mechanism: 'Why does this happen? Inside a computer chip, there are only electrical switches that store numbers (0s and 1s). Sensors and cameras convert real objects into lists of numbers (called vectors). If your numbers land in the apple zone on the number map, the computer outputs Apple! Machine learning is simply using numbers to represent the real world.',
    takeaway: 'Computers do not think like humans; they convert clues into numbers and calculate which group of examples has the closest mathematical pattern.'
  },

  /* -------------------------------------------------------------
     Concept 1.3: Rules vs Learning from Examples
  ------------------------------------------------------------- */
  '1.3': {
    kicker: 'Chapter 1 · Concept 1.3',
    title: 'Rules vs Learning from Examples',
    question: 'Why can\'t programmers just write rules for everything?',
    questionDesc: 'In traditional programming, humans write strict IF-rules: "IF red THEN apple". But what happens when nature surprises the rule with a green apple or a blood orange?',
    visHint: 'Try the surprise cases to see why rigid rules fail:',

    renderVis(container) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 0; min-height: 280px; gap: 1.5rem;">
          
          <!-- Test buttons -->
          <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn active" id="c13-btn-0" onclick="window.c13RunTest(0)">🍎 Red Apple</button>
            <button class="mlk-control-btn" id="c13-btn-1" onclick="window.c13RunTest(1)">🍏 Green Apple</button>
            <button class="mlk-control-btn" id="c13-btn-2" onclick="window.c13RunTest(2)">🩸 Blood Orange</button>
          </div>

          <!-- Side by Side Showdown -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; max-width: 520px;">
            
            <!-- Traditional Rule Card -->
            <div style="background: #fafbfd; border: 1px solid #eef2f6; border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 0.4rem;">Traditional IF-Rule</div>
              <div style="font-family: monospace; font-size: 0.78rem; color: #475569; margin-bottom: 0.75rem; background: #ffffff; padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid #e2e8f0;">
                IF red → Apple<br>ELSE → Orange
              </div>
              <div id="c13-rule-pred" style="font-size: 1rem; font-weight: 700; color: #059669;">Apple ✅</div>
              <div id="c13-rule-why" style="font-size: 0.78rem; color: #64748b; margin-top: 3px;">Color is red, so rule works.</div>
            </div>

            <!-- Machine Learning Card -->
            <div style="background: #fafbfd; border: 1px solid #eef2f6; border-radius: 12px; padding: 1.25rem;">
              <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: #2563eb; margin-bottom: 0.4rem;">Machine Learning</div>
              <div style="font-size: 0.78rem; color: #475569; margin-bottom: 0.75rem; background: #ffffff; padding: 0.4rem 0.6rem; border-radius: 6px; border: 1px solid #e2e8f0;">
                Weighs color + shape + skin together
              </div>
              <div id="c13-ml-pred" style="font-size: 1rem; font-weight: 700; color: #059669;">Apple ✅</div>
              <div id="c13-ml-why" style="font-size: 0.78rem; color: #64748b; margin-top: 3px;">Shape & skin matched apple.</div>
            </div>

          </div>

          <!-- Bottom Debrief -->
          <div id="c13-summary" style="font-size: 0.88rem; color: #334155; text-align: center; max-width: 480px; line-height: 1.45;">
            Normal Red Apple: Both the simple rule and machine learning succeed.
          </div>

        </div>
      `;

      const testItems = [
        {
          rulePred: 'Apple ✅', ruleColor: '#059669', ruleWhy: 'Color is red, so rule works.',
          mlPred: 'Apple ✅', mlColor: '#059669', mlWhy: 'Shape, skin & color all match.',
          summary: 'Normal Red Apple: Both systems get it right.'
        },
        {
          rulePred: 'Orange ❌ (FAIL!)', ruleColor: '#dc2626', ruleWhy: 'Because it is green, the rule blindly outputs Orange!',
          mlPred: 'Apple ✅ (SUCCESS!)', mlColor: '#059669', mlWhy: 'Recognizes the round shape and smooth wax peel.',
          summary: 'Rule Failure: A rigid rule cannot handle a green apple because nature has exceptions!'
        },
        {
          rulePred: 'Apple ❌ (FAIL!)', ruleColor: '#dc2626', ruleWhy: 'Because it has red skin, the rule is fooled!',
          mlPred: 'Orange ✅ (SUCCESS!)', mlColor: '#059669', mlWhy: 'Recognizes the bumpy citrus pores and thick peel.',
          summary: 'Rule Failure: A blood orange fools the single rule completely!'
        }
      ];

      window.c13RunTest = function(idx) {
        for (let i = 0; i < 3; i++) {
          const btn = document.getElementById(`c13-btn-${i}`);
          if (btn) btn.classList.toggle('active', i === idx);
        }
        const item = testItems[idx];
        const rp = document.getElementById('c13-rule-pred');
        const rw = document.getElementById('c13-rule-why');
        const mp = document.getElementById('c13-ml-pred');
        const mw = document.getElementById('c13-ml-why');
        const sum = document.getElementById('c13-summary');

        if (rp) { rp.textContent = item.rulePred; rp.style.color = item.ruleColor; }
        if (rw) rw.textContent = item.ruleWhy;
        if (mp) { mp.textContent = item.mlPred; mp.style.color = item.mlColor; }
        if (mw) mw.textContent = item.mlWhy;
        if (sum) sum.textContent = item.summary;
      };
    },

    renderControls(container) {
      container.innerHTML = ``;
    },

    observation: 'Can you see what happened when you clicked "Green Apple"? Look at System A: it shouted "Orange ❌"! Now change it—click the Red Blood Orange 🩸🍊 above! Look at System A again: it got completely fooled into shouting "Apple ❌" just because the skin was red! But notice System B (Machine Learning): it got BOTH right because it balanced shape, peel texture, and size together.',
    mechanism: 'Why did the rule fail? In traditional programming, a human programmer writes: "IF fruit is Red THEN Apple, ELSE Orange". But nature is full of surprises! A green apple isn\'t red, and a blood orange is dark red. To cover every surprise in nature, you\'d have to write 50,000 messy rules! Machine learning solves this by finding the flexible pattern from examples instead of rigid IF-rules.',
    takeaway: 'Handmade rules break the moment nature shows an exception; machine learning models adapt because they weigh multiple clues learned from examples.'
  },

  /* -------------------------------------------------------------
     Concept 1.4: What Is Machine Learning?
  ------------------------------------------------------------- */
  '1.4': {
    kicker: 'Chapter 1 · Concept 1.4',
    title: 'What Is Machine Learning?',
    question: 'How do all these pieces fit together into one big picture?',
    questionDesc: 'Now that we understand examples, numbers, and flexible patterns, we can see the three big pillars of Machine Learning: Data, Training, and Prediction.',
    visHint: 'Click any step below to see what happens:',

    renderVis(container) {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1.5rem 0; min-height: 280px; gap: 1.5rem;">
          
          <!-- 3 Steps -->
          <div style="display: flex; gap: 0.75rem; align-items: stretch; justify-content: center; width: 100%; max-width: 540px; flex-wrap: wrap;">
            
            <div id="c14-step-1" onclick="window.c14SelectStep(1)" style="flex: 1; min-width: 150px; background: #ffffff; border: 1px solid #2563eb; border-radius: 12px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 1.8rem;">📦</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #0f172a; margin-top: 0.25rem;">1. Data</div>
              <div style="font-size: 0.75rem; color: #64748b; margin-top: 2px;">Collect examples</div>
            </div>

            <div id="c14-step-2" onclick="window.c14SelectStep(2)" style="flex: 1; min-width: 150px; background: #fafbfd; border: 1px solid #eef2f6; border-radius: 12px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 1.8rem;">⚙️</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #0f172a; margin-top: 0.25rem;">2. Training</div>
              <div style="font-size: 0.75rem; color: #64748b; margin-top: 2px;">Find the pattern</div>
            </div>

            <div id="c14-step-3" onclick="window.c14SelectStep(3)" style="flex: 1; min-width: 150px; background: #fafbfd; border: 1px solid #eef2f6; border-radius: 12px; padding: 1rem; text-align: center; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 1.8rem;">🎯</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #0f172a; margin-top: 0.25rem;">3. Prediction</div>
              <div style="font-size: 0.75rem; color: #64748b; margin-top: 2px;">Recognize new items</div>
            </div>

          </div>

          <!-- Step explanation callout -->
          <div id="c14-detail" style="background: #fafbfd; border: 1px solid #eef2f6; border-radius: 10px; padding: 1rem 1.25rem; max-width: 520px; text-align: center; font-size: 0.9rem; color: #334155; line-height: 1.5;">
            <strong>Step 1: Data</strong> — We give the computer hundreds of real examples (photos of apples and oranges labeled with their names).
          </div>

        </div>
      `;

      const stepDetails = {
        1: '<strong>Step 1: Data</strong> — We give the computer hundreds of real examples (photos of apples and oranges labeled with their names).',
        2: '<strong>Step 2: Training</strong> — An algorithm measures the numbers (color, roundness, size) and finds the boundary line that separates them.',
        3: '<strong>Step 3: Prediction</strong> — A brand-new, unseen fruit arrives. The trained computer checks its numbers and predicts what it is in a millisecond!'
      };

      window.c14SelectStep = function(step) {
        for (let i = 1; i <= 3; i++) {
          const el = document.getElementById(`c14-step-${i}`);
          if (el) {
            if (i === step) {
              el.style.background = '#ffffff';
              el.style.borderColor = '#2563eb';
              el.style.transform = 'translateY(-2px)';
            } else {
              el.style.background = '#fafbfd';
              el.style.borderColor = '#eef2f6';
              el.style.transform = 'none';
            }
          }
        }
        const det = document.getElementById('c14-detail');
        if (det) det.innerHTML = stepDetails[step];
      };
    },

    renderControls(container) {
      container.innerHTML = ``;
    },

    observation: 'Can you see the three big pillars on the screen? Pillar 1 is Data, Pillar 2 is the Learning Brain, and Pillar 3 is the Final Prediction. Now change it! Click "Step Through the Pipeline" below. Look at how the energy flows: first we collect examples, then the computer adjusts its dials, and finally it makes predictions on brand-new items!',
    mechanism: 'Why do we split this into 3 steps? Because training and testing must always be kept separate! If a student saw the exact exam questions the night before, their 100% score wouldn\'t prove they are smart—they just memorized the test. Machine learning trains in Pillar 2, and then proves its genuine intelligence in Pillar 3 on brand-new examples.',
    takeaway: 'Machine Learning means creating computer programs that learn patterns from examples to solve new problems on their own.'
  }
};
