(function() {
  'use strict';
/**
 * Complete Curriculum Metadata: 11 Chapters, 52 Atomic Concepts
 * Clean, simple, minimalist learning path.
 */

const CHAPTERS = [
  {
    id: 1,
    title: 'Chapter 1: What Is Machine Learning?',
    concepts: [
      { id: '1.1', title: 'How Do We Learn?', desc: 'Learning from examples' },
      { id: '1.2', title: 'Can a Computer Learn?', desc: 'Spotting patterns in data' },
      { id: '1.3', title: 'Rules vs Learning from Examples', desc: 'Fixed rules vs flexible patterns' },
      { id: '1.4', title: 'What Is Machine Learning?', desc: 'The simple definition' }
    ]
  },
  {
    id: 2,
    title: 'Chapter 2: Understanding Data',
    concepts: [
      { id: '2.1', title: 'What Is Data?', desc: 'Information we can count and compare' },
      { id: '2.2', title: 'What Is an Example?', desc: 'One single item and its clues' },
      { id: '2.3', title: 'Features', desc: 'How we describe an object' },
      { id: '2.4', title: 'Labels', desc: 'Attaching the right answer' },
      { id: '2.5', title: 'Patterns in Data', desc: 'How dots form groups' }
    ]
  },
  {
    id: 3,
    title: 'Chapter 3: Classification',
    concepts: [
      { id: '3.1', title: 'What Is Classification?', desc: 'Sorting items into categories' },
      { id: '3.2', title: 'How Can a Computer Classify?', desc: 'Separating groups on a map' },
      { id: '3.3', title: 'Distance Between Examples', desc: 'Which item is closer?' },
      { id: '3.4', title: 'Nearest Neighbor', desc: 'The closest example decides' },
      { id: '3.5', title: 'What Happens with More Neighbors?', desc: 'Voting with k neighbors' },
      { id: '3.6', title: 'Decision Boundaries', desc: 'The dividing lines between groups' }
    ]
  },
  {
    id: 4,
    title: 'Chapter 4: Prediction and Regression',
    concepts: [
      { id: '4.1', title: 'What Is Prediction?', desc: 'Estimating a number from patterns' },
      { id: '4.2', title: 'Finding a Pattern', desc: 'Looking for trends in dots' },
      { id: '4.3', title: 'Making Predictions with a Line', desc: 'Using a line to guess values' },
      { id: '4.4', title: 'Changing the Line', desc: 'Tilt and position' },
      { id: '4.5', title: 'Good vs Bad Predictions', desc: 'Measuring distances from the line' },
      { id: '4.6', title: 'Linear Regression', desc: 'The best-fitting line' }
    ]
  },
  {
    id: 5,
    title: 'Chapter 5: Mistakes and Learning',
    concepts: [
      { id: '5.1', title: 'Why Are Predictions Sometimes Wrong?', desc: 'Uncertainty and noisy clues' },
      { id: '5.2', title: 'Measuring Error', desc: 'The gap between guess and reality' },
      { id: '5.3', title: 'Total Error', desc: 'Adding up mistakes' },
      { id: '5.4', title: 'How Can a Model Improve?', desc: 'Nudging to reduce mistakes' },
      { id: '5.5', title: 'Learning Step by Step', desc: 'Optimization intuition' },
      { id: '5.6', title: 'Learning Rate', desc: 'Taking the right step size' }
    ]
  },
  {
    id: 6,
    title: 'Chapter 6: Training and Testing',
    concepts: [
      { id: '6.1', title: 'Learning from Examples', desc: 'Fitting to training data' },
      { id: '6.2', title: 'Why Do We Need New Examples?', desc: 'Memorizing vs understanding' },
      { id: '6.3', title: 'Training Data and Test Data', desc: 'Keeping an untouched exam' },
      { id: '6.4', title: 'Overfitting', desc: 'The overly wiggly curve' },
      { id: '6.5', title: 'Underfitting', desc: 'A line that is too simple' }
    ]
  },
  {
    id: 7,
    title: 'Chapter 7: Learning Without Answers',
    concepts: [
      { id: '7.1', title: 'Finding Groups', desc: 'Unlabeled data' },
      { id: '7.2', title: 'Clustering', desc: 'Grouping similar dots automatically' },
      { id: '7.3', title: 'K-Means Intuition', desc: 'Magnets moving to cluster centers' },
      { id: '7.4', title: 'Clustering vs Classification', desc: 'Known labels vs discovered groups' }
    ]
  },
  {
    id: 8,
    title: 'Chapter 8: Decision Trees',
    concepts: [
      { id: '8.1', title: 'Decisions by Asking Questions', desc: 'Playing 20 Questions' },
      { id: '8.2', title: 'A Tree of Questions', desc: 'Branching splits' },
      { id: '8.3', title: 'Decision Tree Prediction', desc: 'Following paths to an answer' },
      { id: '8.4', title: 'How a Tree Learns', desc: 'Picking useful questions' }
    ]
  },
  {
    id: 9,
    title: 'Chapter 9: Neural Networks',
    concepts: [
      { id: '9.1', title: 'Combining Several Clues', desc: 'Multiple inputs working together' },
      { id: '9.2', title: 'A Simple Artificial Neuron', desc: 'Inputs, sum, and activation' },
      { id: '9.3', title: 'Weights', desc: 'Giving important clues more vote' },
      { id: '9.4', title: 'Connecting Neurons', desc: 'Layers of teamwork' },
      { id: '9.5', title: 'Making a Prediction', desc: 'Flowing from inputs to output' },
      { id: '9.6', title: 'How Neural Networks Learn', desc: 'Adjusting weights gradually' }
    ]
  },
  {
    id: 10,
    title: 'Chapter 10: Learning Through Rewards',
    concepts: [
      { id: '10.1', title: 'Learning by Trying', desc: 'Trial and error' },
      { id: '10.2', title: 'Rewards', desc: 'Good points vs bad penalties' },
      { id: '10.3', title: 'Improving Decisions', desc: 'Learning what works best' }
    ]
  },
  {
    id: 11,
    title: 'Chapter 11: Understanding Real Machine Learning',
    concepts: [
      { id: '11.1', title: 'Where Is Machine Learning Used?', desc: 'Real everyday applications' },
      { id: '11.2', title: 'Can Machines Always Be Correct?', desc: 'Uncertainty in real life' },
      { id: '11.3', title: 'Why Does Data Quality Matter?', desc: 'Good data vs bad data' },
      { id: '11.4', title: 'What Is Bias?', desc: 'Unfairness from missing examples' },
      { id: '11.5', title: 'What ML Can and Cannot Do', desc: 'A realistic summary' }
    ]
  }
];

function getConceptInfo(id) {
  for (const ch of CHAPTERS) {
    const idx = ch.concepts.findIndex(c => c.id === id);
    if (idx !== -1) {
      const allConcepts = CHAPTERS.flatMap(c => c.concepts);
      const globalIdx = allConcepts.findIndex(c => c.id === id);
      const prev = globalIdx > 0 ? allConcepts[globalIdx - 1] : null;
      const next = globalIdx < allConcepts.length - 1 ? allConcepts[globalIdx + 1] : null;

      return {
        chapter: ch,
        concept: ch.concepts[idx],
        prev,
        next
      };
    }
  }
  return null;
}



/**
 * Chapter 1: What Is Machine Learning?
 * Minimalist, elegant, visually satisfying implementations of Concepts 1.1, 1.2, 1.3, and 1.4.
 */

const CHAPTER_1_CONCEPTS = {
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


/**
 * Chapter 2: Understanding Data
 * Concepts 2.1 to 2.5 — Deep, visual, and interactive implementations.
 */

const CHAPTER_2_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 2.1: What Is Data?
  ------------------------------------------------------------- */
  '2.1': {
    kicker: 'Chapter 2 · Concept 2.1',
    title: 'What Is Data?',
    question: 'What do people mean when they use the word "data"?',
    questionDesc: 'You hear the word "data" on the news and in science classes every day. But what is it, really? Data is simply information—like heights, temperatures, colors, or sounds—measured and written down in an organized way so that patterns can be discovered.',
    visHint: '👆 Click the buttons below to highlight different clues in the pet table!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="font-size: 0.85rem; color: #475569; margin-bottom: 0.6rem; text-align: center;">
            Below is a real dataset of 5 neighborhood pets. Each row is one animal; each column is a measured clue:
          </div>
          
          <div style="overflow-x: auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.03);">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem; text-align: left;">
              <thead>
                <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; color: #334155;">
                  <th style="padding: 0.7rem 0.9rem;">Pet Name</th>
                  <th id="c21-th-type" style="padding: 0.7rem 0.9rem;">Pet Type</th>
                  <th id="c21-th-height" style="padding: 0.7rem 0.9rem;">Height (cm)</th>
                  <th id="c21-th-weight" style="padding: 0.7rem 0.9rem;">Weight (kg)</th>
                  <th id="c21-th-ears" style="padding: 0.7rem 0.9rem;">Ear Shape</th>
                </tr>
              </thead>
              <tbody id="c21-tbody">
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 0.65rem 0.9rem; font-weight: 700;">Bruno 🐶</td>
                  <td class="c21-col-type" style="padding: 0.65rem 0.9rem;">Dog</td>
                  <td class="c21-col-h" style="padding: 0.65rem 0.9rem; font-weight: 600;">52</td>
                  <td class="c21-col-w" style="padding: 0.65rem 0.9rem; font-weight: 600;">18</td>
                  <td class="c21-col-e" style="padding: 0.65rem 0.9rem;">Floppy</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 0.65rem 0.9rem; font-weight: 700;">Luna 🐱</td>
                  <td class="c21-col-type" style="padding: 0.65rem 0.9rem;">Cat</td>
                  <td class="c21-col-h" style="padding: 0.65rem 0.9rem; font-weight: 600;">24</td>
                  <td class="c21-col-w" style="padding: 0.65rem 0.9rem; font-weight: 600;">4</td>
                  <td class="c21-col-e" style="padding: 0.65rem 0.9rem;">Pointy</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 0.65rem 0.9rem; font-weight: 700;">Max 🐶</td>
                  <td class="c21-col-type" style="padding: 0.65rem 0.9rem;">Dog</td>
                  <td class="c21-col-h" style="padding: 0.65rem 0.9rem; font-weight: 600;">48</td>
                  <td class="c21-col-w" style="padding: 0.65rem 0.9rem; font-weight: 600;">15</td>
                  <td class="c21-col-e" style="padding: 0.65rem 0.9rem;">Floppy</td>
                </tr>
                <tr style="border-bottom: 1px solid #f1f5f9;">
                  <td style="padding: 0.65rem 0.9rem; font-weight: 700;">Milo 🐱</td>
                  <td class="c21-col-type" style="padding: 0.65rem 0.9rem;">Cat</td>
                  <td class="c21-col-h" style="padding: 0.65rem 0.9rem; font-weight: 600;">26</td>
                  <td class="c21-col-w" style="padding: 0.65rem 0.9rem; font-weight: 600;">5</td>
                  <td class="c21-col-e" style="padding: 0.65rem 0.9rem;">Pointy</td>
                </tr>
                <tr>
                  <td style="padding: 0.65rem 0.9rem; font-weight: 700;">Rocky 🐶</td>
                  <td class="c21-col-type" style="padding: 0.65rem 0.9rem;">Dog</td>
                  <td class="c21-col-h" style="padding: 0.65rem 0.9rem; font-weight: 600;">60</td>
                  <td class="c21-col-w" style="padding: 0.65rem 0.9rem; font-weight: 600;">22</td>
                  <td class="c21-col-e" style="padding: 0.65rem 0.9rem;">Floppy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div id="c21-analysis-box" style="margin-top: 0.75rem; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.875rem; font-weight: 700; color: #1e40af; text-align: center;">
            Click below to highlight how numbers help a computer separate dogs from cats!
          </div>
        </div>
      `;

      window.c21Highlight = function(feature) {
        const box = document.getElementById('c21-analysis-box');
        const hCols = document.querySelectorAll('.c21-col-h');
        const wCols = document.querySelectorAll('.c21-col-w');
        const eCols = document.querySelectorAll('.c21-col-e');

        hCols.forEach(td => td.style.background = 'transparent');
        wCols.forEach(td => td.style.background = 'transparent');
        eCols.forEach(td => td.style.background = 'transparent');

        if (feature === 'height') {
          hCols.forEach(td => td.style.background = '#dbeafe');
          box.textContent = 'Look at the Height column: All dogs are above 45 cm, and all cats are below 30 cm!';
        } else if (feature === 'weight') {
          wCols.forEach(td => td.style.background = '#fef3c7');
          box.textContent = 'Look at the Weight column: Dogs weigh 15–22 kg, while cats weigh only 4–5 kg!';
        } else if (feature === 'ears') {
          eCols.forEach(td => td.style.background = '#dcfce7');
          box.textContent = 'Look at the Ear Shape column: All dogs have floppy ears, and all cats have pointy ears!';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn" onclick="window.c21Highlight('height')">📏 Highlight Height</button>
        <button class="mlk-control-btn" onclick="window.c21Highlight('weight')">⚖️ Highlight Weight</button>
        <button class="mlk-control-btn" onclick="window.c21Highlight('ears')">👂 Highlight Ear Shape</button>
      `;
    },

    observation: 'Can you see the rows and columns in the table above? Now change it—click "Highlight Weight" below! Look what happens: the numbers light up! Dogs weigh 15–22 kg, while cats weigh only 4–5 kg. Now click "Highlight Ear Shape": dogs have floppy ears and cats have pointy ears! Combining the columns makes the difference crystal clear.',
    mechanism: 'Why do we organize information into tables? Inside a computer, rows are individual examples (like pet #1, pet #2) and columns are features (like height and weight). Computers can calculate averages and compare thousands of table rows in a millisecond!',
    takeaway: 'Data is information collected, measured, and organized into rows and columns so a computer can discover relationships.'
  },

  /* -------------------------------------------------------------
     Concept 2.2: What Is an Example?
  ------------------------------------------------------------- */
  '2.2': {
    kicker: 'Chapter 2 · Concept 2.2',
    title: 'What Is an Example?',
    question: 'What is a single "example" in machine learning?',
    questionDesc: 'If you want to train a dog-walking robot, you cannot just tell it: "Dogs exist." You have to show it actual dogs: golden retrievers, poodles, bulldogs, and chihuahuas. Each individual observation in your dataset is called an example or sample.',
    visHint: '👆 Click "Add New Example" to watch your dataset grow one observation at a time!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap;">
            
            <!-- Focus Card: The Single Example -->
            <div id="c22-single-card" style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; width: 220px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Single Example #1</span>
              <div id="c22-avatar" style="font-size: 3rem; margin: 0.35rem 0;">🐕</div>
              <strong id="c22-name" style="font-size: 1rem; color: #0f172a; display: block;">Rusty</strong>
              <div id="c22-attrs" style="font-size: 0.78rem; color: #475569; margin-top: 0.4rem; text-align: left; background: #f8fafc; padding: 0.5rem; border-radius: 6px; line-height: 1.5;">
                • Breed: Golden Retriever<br>
                • Height: 55 cm<br>
                • Weight: 30 kg
              </div>
            </div>

            <!-- Arrow -->
            <div style="font-size: 2rem; color: #94a3b8; align-self: center;">➡️</div>

            <!-- The Growing Collection (Dataset) -->
            <div style="flex: 1; min-width: 260px; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span style="font-size: 0.75rem; font-weight: 800; color: #059669; text-transform: uppercase;">Entire Dataset</span>
                <span id="c22-count" style="font-size: 0.8rem; font-weight: 700; color: #059669; background: #ecfdf5; padding: 0.2rem 0.5rem; border-radius: 9999px;">1 Example</span>
              </div>
              <div id="c22-collection" style="display: flex; gap: 0.5rem; flex-wrap: wrap; min-height: 60px; align-items: center;">
                <div style="background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 1.5rem;" title="Rusty">🐕</div>
              </div>
            </div>

          </div>

          <div id="c22-msg" style="margin-top: 1rem; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; font-size: 0.85rem; font-weight: 700; color: #1e40af; text-align: center;">
            One card = One example. When you collect dozens of examples together, you get a dataset!
          </div>

        </div>
      `;

      const extraExamples = [
        { emoji: '🐩', name: 'Bella', attrs: '• Breed: Poodle<br>• Height: 40 cm<br>• Weight: 12 kg' },
        { emoji: '🐕‍🦺', name: 'Shadow', attrs: '• Breed: German Shepherd<br>• Height: 62 cm<br>• Weight: 35 kg' },
        { emoji: '🐶', name: 'Pip', attrs: '• Breed: Pug<br>• Height: 28 cm<br>• Weight: 8 kg' },
        { emoji: '🦮', name: 'Duke', attrs: '• Breed: Labrador<br>• Height: 58 cm<br>• Weight: 32 kg' }
      ];
      let addIdx = 0;

      window.c22AddExample = function() {
        if (addIdx >= extraExamples.length) {
          document.getElementById('c22-msg').textContent = 'Dataset is full! Notice how diverse the dog examples are in size, breed, and weight.';
          return;
        }

        const ex = extraExamples[addIdx];
        document.getElementById('c22-avatar').textContent = ex.emoji;
        document.getElementById('c22-name').textContent = ex.name;
        document.getElementById('c22-attrs').innerHTML = ex.attrs;
        document.querySelector('#c22-single-card span').textContent = `Single Example #${addIdx + 2}`;

        const coll = document.getElementById('c22-collection');
        const item = document.createElement('div');
        item.style.cssText = 'background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; font-size: 1.5rem; animation: pop 0.2s ease;';
        item.textContent = ex.emoji;
        item.title = ex.name;
        coll.appendChild(item);

        addIdx++;
        document.getElementById('c22-count').textContent = `${addIdx + 1} Examples`;
        document.getElementById('c22-msg').textContent = `Added ${ex.name}! The computer now has ${addIdx + 1} different examples to learn from.`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c22AddExample()">➕ Add Next Dog Example to Dataset</button>
      `;
    },

    observation: 'Can you see Rusty the Golden Retriever on the left? Now change it—click "Add Next Dog Example" below! Look what happens: you added a tiny Pug (8 kg) and a big German Shepherd (35 kg)! If you only showed the computer ONE dog, it might think all dogs in the world are big and golden. Diverse examples teach the real truth!',
    mechanism: 'Why does a computer need many examples? Just like you couldn\'t understand birds by looking at a single penguin, an AI needs to see different shapes, sizes, and colors. In data science, each single item is called an example, and the whole photo album is the dataset!',
    takeaway: 'An example is one individual item with all its clues; a dataset is a collection of many examples.'
  },

  /* -------------------------------------------------------------
     Concept 2.3: Features
  ------------------------------------------------------------- */
  '2.3': {
    kicker: 'Chapter 2 · Concept 2.3',
    title: 'Features',
    question: 'What is a feature in machine learning?',
    questionDesc: 'If you want to describe an apple to a friend over the phone, you tell them its color, how wide it is, and whether it feels smooth or rough. In machine learning, any characteristic or property that we measure as a number is called a feature.',
    visHint: '👆 Move the 3 feature sliders below to see how the mathematical vector describes the fruit!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: center; flex: 1;">
            
            <!-- Visual Object Canvas -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">The Physical Fruit</span>
              <div style="height: 140px; display: flex; align-items: center; justify-content: center; margin: 0.5rem 0;">
                <svg width="140" height="140" viewBox="0 0 100 100">
                  <circle id="c23-fruit" cx="50" cy="50" r="30" fill="#dc2626" />
                  <path id="c23-stem" d="M50 20 Q55 10 65 15" stroke="#15803d" stroke-width="3" fill="none" />
                </svg>
              </div>
              <div id="c23-fruit-summary" style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">
                Red Apple (Radius: 30mm, Redness: 80%)
              </div>
            </div>

            <!-- Feature Vector Display -->
            <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 1.25rem; font-family: monospace;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase;">Feature Vector x</span>
              
              <div style="margin: 1rem 0; font-size: 1.1rem; line-height: 1.8;">
                x = [<br>
                &nbsp;&nbsp;x₁ (Radius): &nbsp;<strong id="c23-v-radius" style="color: #4ade80;">30 mm</strong>,<br>
                &nbsp;&nbsp;x₂ (Redness): <strong id="c23-v-red" style="color: #f87171;">80 %</strong>,<br>
                &nbsp;&nbsp;x₃ (Roughness): <strong id="c23-v-rough" style="color: #fbbf24;">10 %</strong><br>
                ]
              </div>

              <div style="font-size: 0.75rem; color: #94a3b8; border-top: 1px solid #334155; padding-top: 0.5rem;">
                Dimension: 3 numerical features
              </div>
            </div>

          </div>

          <div style="text-align: center; font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">
            A feature is just a numerical ruler measuring one specific property!
          </div>

        </div>
      `;

      window.c23UpdateSliders = function() {
        const radius = parseInt(document.getElementById('c23-s-radius').value, 10);
        const red = parseInt(document.getElementById('c23-s-red').value, 10);
        const rough = parseInt(document.getElementById('c23-s-rough').value, 10);

        document.getElementById('c23-v-radius').textContent = `${radius} mm`;
        document.getElementById('c23-v-red').textContent = `${red} %`;
        document.getElementById('c23-v-rough').textContent = `${rough} %`;

        const circle = document.getElementById('c23-fruit');
        circle.setAttribute('r', radius);

        const gVal = Math.round(180 * (1 - red / 100));
        circle.setAttribute('fill', `rgb(220, ${gVal}, 40)`);

        document.getElementById('c23-fruit-summary').textContent = `Fruit (Radius: ${radius}mm, Redness: ${red}%, Roughness: ${rough}%)`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>x₁ (Radius):</span>
          <input id="c23-s-radius" type="range" min="15" max="45" value="30" oninput="window.c23UpdateSliders()">
        </div>
        <div class="mlk-slider-group">
          <span>x₂ (Redness):</span>
          <input id="c23-s-red" type="range" min="10" max="95" value="80" oninput="window.c23UpdateSliders()">
        </div>
        <div class="mlk-slider-group">
          <span>x₃ (Roughness):</span>
          <input id="c23-s-rough" type="range" min="5" max="90" value="10" oninput="window.c23UpdateSliders()">
        </div>
      `;
    },

    observation: 'Can you see the numbers on the right card: [30, 80, 10]? Now change it! Move the x₁ (Size) slider and x₂ (Redness) slider. Look what happens: the numbers immediately shift! The computer doesn\'t see "juicy fruit"—it only sees this list of 3 numbers. This list of numbers is called a Feature Vector.',
    mechanism: 'Why do we turn clues into numbers? Because a computer chip cannot touch, smell, or taste an apple. It can only do math with numbers! Each measurement (size, redness, roughness) becomes a coordinate. By turning clues into numbers, the computer can place every object onto a mathematical map!',
    takeaway: 'Features are the measurable numerical clues used to describe an object to a computer.'
  },

  /* -------------------------------------------------------------
     Concept 2.4: Labels
  ------------------------------------------------------------- */
  '2.4': {
    kicker: 'Chapter 2 · Concept 2.4',
    title: 'Labels',
    question: 'What is a label?',
    questionDesc: 'Features tell the computer what the object looks like (size, color, weight). But how does the computer know whether those clues belong to an apple, an orange, or a tennis ball? That is where the label comes in: the label is the verified true answer attached to the clues!',
    visHint: '👆 Flip between "Training Mode" (with labels) and "Exam Mode" (without labels)!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-around; padding: 0.5rem; align-items: center;">
          
          <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
            
            <!-- Sample Card 1 -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
              <div style="font-size: 3rem;">🎾</div>
              <div style="font-size: 0.78rem; color: #64748b; margin: 0.35rem 0; line-height: 1.4;">
                Radius: 33 mm<br>Color: Yellow-Green<br>Fuzz: Yes
              </div>
              <div id="c24-tag-1" style="background: #059669; color: white; padding: 0.3rem 0.6rem; border-radius: 6px; font-weight: 700; font-size: 0.85rem; margin-top: 0.5rem;">
                Label: Tennis Ball
              </div>
            </div>

            <!-- Sample Card 2 -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.04);">
              <div style="font-size: 3rem;">🍏</div>
              <div style="font-size: 0.78rem; color: #64748b; margin: 0.35rem 0; line-height: 1.4;">
                Radius: 35 mm<br>Color: Green<br>Fuzz: No
              </div>
              <div id="c24-tag-2" style="background: #2563eb; color: white; padding: 0.3rem 0.6rem; border-radius: 6px; font-weight: 700; font-size: 0.85rem; margin-top: 0.5rem;">
                Label: Green Apple
              </div>
            </div>

          </div>

          <div id="c24-mode-desc" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1.25rem; font-size: 0.875rem; font-weight: 700; color: #1e40af; text-align: center;">
            Training Mode Active: Each example includes both features (clues) AND the true label (answer key).
          </div>

        </div>
      `;

      window.c24SetMode = function(mode) {
        const t1 = document.getElementById('c24-tag-1');
        const t2 = document.getElementById('c24-tag-2');
        const desc = document.getElementById('c24-mode-desc');

        if (mode === 'exam') {
          t1.textContent = 'Label: ??? (Hidden)';
          t1.style.background = '#94a3b8';
          t2.textContent = 'Label: ??? (Hidden)';
          t2.style.background = '#94a3b8';
          desc.textContent = 'Exam Mode Active: The computer only sees the features and must guess the label on its own!';
          desc.style.background = '#fef3c7';
          desc.style.borderColor = '#fde68a';
          desc.style.color = '#92400e';
        } else {
          t1.textContent = 'Label: Tennis Ball';
          t1.style.background = '#059669';
          t2.textContent = 'Label: Green Apple';
          t2.style.background = '#2563eb';
          desc.textContent = 'Training Mode Active: Each example includes both features (clues) AND the true label (answer key).';
          desc.style.background = '#eff6ff';
          desc.style.borderColor = '#bfdbfe';
          desc.style.color = '#1e40af';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn" onclick="window.c24SetMode('train')">🏷️ Training Mode (Show Labels)</button>
        <button class="mlk-control-btn primary" onclick="window.c24SetMode('exam')">❓ Exam Mode (Hide Labels)</button>
      `;
    },

    observation: 'Can you see the green tags on the jars: "Tennis Ball" and "Apple"? Now change it—click "Exam Mode (Hide Labels)" below! Look what happens: the answers disappear! Without the labels, a computer would see round green balls and wouldn\'t know which one you can eat and which one you hit with a racket!',
    mechanism: 'Why are labels so important? In Supervised Learning, labels are the teacher\'s answer key. The computer uses features (size, color, fuzz) to make a guess, and then checks the label to see if it was right. During the final exam, the labels are hidden to test if the model truly learned!',
    takeaway: 'A label is the verified true answer attached to an example during training.'
  },

  /* -------------------------------------------------------------
     Concept 2.5: Patterns in Data
  ------------------------------------------------------------- */
  '2.5': {
    kicker: 'Chapter 2 · Concept 2.5',
    title: 'Patterns in Data',
    question: 'How do scattered dots reveal a pattern on a graph?',
    questionDesc: 'If you look at 100 numbers in a spreadsheet, your eyes get tired quickly. But when you plot each number as a dot on a 2D map, something incredible happens: examples with similar properties naturally cluster into islands!',
    visHint: '👆 Drag the purple mystery dot across the map to see which cluster claims it!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c25-svg" viewBox="0 0 420 220" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1; cursor: crosshair;">
              <!-- Grid axes -->
              <line x1="45" y1="20" x2="45" y2="190" stroke="#cbd5e1" stroke-width="1.5" />
              <line x1="45" y1="190" x2="395" y2="190" stroke="#cbd5e1" stroke-width="1.5" />
              <text x="395" y="210" font-size="10" text-anchor="end" fill="#64748b" font-weight="700">Size (Radius) →</text>
              <text x="40" y="25" font-size="10" text-anchor="end" fill="#64748b" font-weight="700">Weight ↑</text>

              <!-- Cluster 1: Apples (Small radius, light weight) -->
              <g fill="#059669">
                <circle cx="85" cy="155" r="7" /><circle cx="105" cy="140" r="7" />
                <circle cx="125" cy="160" r="7" /><circle cx="95" cy="170" r="7" />
                <circle cx="115" cy="135" r="7" /><circle cx="135" cy="150" r="7" />
              </g>
              <text x="110" y="125" font-size="11" font-weight="700" text-anchor="middle" fill="#059669">Apple Cluster 🍏</text>

              <!-- Cluster 2: Watermelons (Large radius, heavy weight) -->
              <g fill="#d97706">
                <circle cx="310" cy="55" r="8" /><circle cx="340" cy="70" r="8" />
                <circle cx="320" cy="40" r="8" /><circle cx="355" cy="50" r="8" />
                <circle cx="295" cy="65" r="8" /><circle cx="330" cy="80" r="8" />
              </g>
              <text x="325" y="30" font-size="11" font-weight="700" text-anchor="middle" fill="#d97706">Melon Cluster 🍉</text>

              <!-- Separator Line (toggleable) -->
              <line id="c25-boundary" x1="60" y1="30" x2="380" y2="185" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5 3" opacity="0" />

              <!-- Movable Query Dot -->
              <g id="c25-query-group">
                <circle id="c25-q-dot" cx="200" cy="110" r="10" fill="#7c3aed" stroke="#ffffff" stroke-width="2" />
                <text id="c25-q-text" x="200" y="95" font-size="11" font-weight="700" text-anchor="middle" fill="#7c3aed">? Mystery Item</text>
              </g>
            </svg>
          </div>

          <div id="c25-readout" style="margin-top: 0.5rem; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.55rem 1rem; font-size: 0.85rem; font-weight: 700; color: #1e40af; text-align: center;">
            Drag the purple mystery dot around the map to see how proximity reveals its identity!
          </div>

        </div>
      `;

      let qx = 200, qy = 110;
      window.c25MoveDot = function(x, y) {
        qx = x; qy = y;
        const dot = document.getElementById('c25-q-dot');
        const text = document.getElementById('c25-q-text');
        const rd = document.getElementById('c25-readout');

        dot.setAttribute('cx', qx);
        dot.setAttribute('cy', qy);
        text.setAttribute('x', qx);
        text.setAttribute('y', qy - 14);

        if (qx < 170 && qy > 110) {
          rd.textContent = 'The dot is deep inside the Apple zone! Prediction: 100% Apple 🍏';
          rd.style.color = '#059669';
          dot.setAttribute('fill', '#059669');
        } else if (qx > 260 && qy < 100) {
          rd.textContent = 'The dot is deep inside the Melon zone! Prediction: 100% Melon 🍉';
          rd.style.color = '#d97706';
          dot.setAttribute('fill', '#d97706');
        } else {
          rd.textContent = 'Border territory: The mystery item is between both clusters.';
          rd.style.color = '#7c3aed';
          dot.setAttribute('fill', '#7c3aed');
        }
      };

      window.c25ToggleBoundary = function() {
        const line = document.getElementById('c25-boundary');
        if (line.getAttribute('opacity') === '0') {
          line.setAttribute('opacity', '1');
        } else {
          line.setAttribute('opacity', '0');
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn" onclick="window.c25MoveDot(100, 150)">Move to Apple Territory 🍏</button>
        <button class="mlk-control-btn" onclick="window.c25MoveDot(330, 60)">Move to Melon Territory 🍉</button>
        <button class="mlk-control-btn primary" onclick="window.c25ToggleBoundary()">✨ Show Dividing Boundary</button>
      `;
    },

    observation: 'Can you see the two islands of dots? Green dots on the bottom-left are Apples, and orange dots on the top-right are Melons. Now change it—click "Move to Apple Territory 🍏"! Look what happens: the purple mystery dot turns green! Now click "Show Dividing Boundary": a clean dashed line runs right through the empty river between the islands!',
    mechanism: 'Why do the dots group like that? Because similar things have similar numbers! Apples are light and small, so they huddle together at (100, 150). Melons are heavy and large, so they huddle at (330, 60). Machine learning is all about finding the empty highway between islands of dots!',
    takeaway: 'Patterns in data appear as clusters in feature space that allow models to draw separating boundaries.'
  }
};


/**
 * Chapter 3: Classification
 * Concepts 3.1 to 3.6 — Deep visual, mathematical, and interactive implementations.
 */

const CHAPTER_3_CONCEPTS = {
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


/**
 * Chapter 4: Prediction and Regression
 * Deep, rich visual interactive implementations of Concepts 4.1 to 4.6.
 * Explains regression concepts using simple, kid-friendly language (Classes 5-10).
 */

const CHAPTER_4_CONCEPTS = {
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


/**
 * Chapter 5: Mistakes and Learning
 * Deep, rich visual interactive implementations of Concepts 5.1 to 5.6.
 * Explains loss, errors, gradient descent, and learning rate for school students (Classes 5-10).
 */

const CHAPTER_5_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 5.1: Why Are Predictions Sometimes Wrong?
  ------------------------------------------------------------- */
  '5.1': {
    kicker: 'Chapter 5 · Concept 5.1',
    title: 'Why Are Predictions Sometimes Wrong?',
    question: 'Why can\'t even the smartest computer be 100% correct all the time?',
    questionDesc: 'If computers are so fast at math, why do they still make mistakes? The answer is that real life is not a tidy video game! Real objects have weird surprises, fuzzy clues, and messy exceptions that don\'t fit neatly into any simple rule.',
    visHint: '👆 Click the 3 tricky real-world photos below to see how even clever computers can get confused!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn" onclick="window.c51SelectCase(0)" style="background: white;">🐕 Chihuahua vs Muffin</button>
            <button class="mlk-control-btn" onclick="window.c51SelectCase(1)" style="background: white;">🐱 Cat curled up like Croissant</button>
            <button class="mlk-control-btn" onclick="window.c51SelectCase(2)" style="background: white;">🍎 Wax Plastic Apple</button>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1rem; align-items: center; flex: 1; margin: 0.75rem 0;">
            
            <!-- Picture Box -->
            <div style="background: #ffffff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Tricky Test Case</span>
              <div id="c51-icon" style="font-size: 3.8rem; margin: 0.35rem 0;">🧁</div>
              <strong id="c51-name" style="font-size: 1.1rem; color: #0f172a; display: block;">Blueberry Muffin</strong>
              <div id="c51-details" style="font-size: 0.8rem; color: #64748b; margin-top: 0.3rem;">
                Looks round, brown, with dark berry spots that look like eyes!
              </div>
            </div>

            <!-- Model Doubt Breakdown -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Computer's Internal Doubts</span>
              
              <div style="margin: 0.75rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.25rem;">
                  <span id="c51-lbl-1">Chihuahua Dog: 48%</span>
                  <span id="c51-lbl-2">Muffin: 52%</span>
                </div>
                <div style="height: 14px; background: #e2e8f0; border-radius: 999px; display: flex; overflow: hidden;">
                  <div id="c51-bar-1" style="width: 48%; background: #ef4444; transition: width 0.3s ease;"></div>
                  <div id="c51-bar-2" style="width: 52%; background: #3b82f6; transition: width 0.3s ease;"></div>
                </div>
              </div>

              <div id="c51-verdict" style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem; font-size: 0.8rem; color: #991b1b; font-weight: 600;">
                Close Call! The dark berry spots tricked the computer into thinking they were a puppy\'s black nose and eyes!
              </div>
            </div>

          </div>

          <div id="c51-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Even humans take a second glance! Real-world data is noisy and full of ambiguous overlap.
          </div>

        </div>
      `;

      const cases = [
        {
          icon: '🧁',
          name: 'Blueberry Muffin',
          details: 'Round pastry with 3 dark berry spots arranged in a triangle.',
          l1: 'Chihuahua Dog: 48%',
          l2: 'Muffin: 52%',
          w1: '48%',
          w2: '52%',
          verdict: 'Close Call! The dark berry spots tricked the computer into thinking they were puppy eyes and a wet nose!',
          bg: '#fef2f2', border: '#fecaca', color: '#991b1b',
          note: 'Notice how close the percentages are! When clues overlap, the computer feels uncertain.'
        },
        {
          icon: '🥐',
          name: 'Sleeping Ginger Cat',
          details: 'Golden-brown, curved crescent shape, quiet and still on a blanket.',
          l1: 'Croissant Bakery: 45%',
          l2: 'Sleeping Cat: 55%',
          w1: '45%',
          w2: '55%',
          verdict: 'Tough puzzle! A curled-up ginger cat has the exact same golden shade and curved shape as a fresh pastry!',
          bg: '#fffbeb', border: '#fde68a', color: '#92400e',
          note: 'Without seeing the tail flick or whiskers twitch, a still photo can easily fool the shape detector!'
        },
        {
          icon: '🍎',
          name: 'Plastic Display Apple',
          details: 'Bright red, round, glossy skin, leaf on stem, but made of plastic wax!',
          l1: 'Real Fresh Fruit: 88%',
          l2: 'Plastic Replica: 12%',
          w1: '88%',
          w2: '12%',
          verdict: 'Mistake Made! Looks 100% like an apple to a camera, but you can\'t eat it!',
          bg: '#fee2e2', border: '#fca5a5', color: '#b91c1c',
          note: 'Sensors only see what they can measure. A camera cannot feel the weight or smell the wax!'
        }
      ];

      window.c51SelectCase = function(idx) {
        const c = cases[idx];
        document.getElementById('c51-icon').textContent = c.icon;
        document.getElementById('c51-name').textContent = c.name;
        document.getElementById('c51-details').textContent = c.details;
        document.getElementById('c51-lbl-1').textContent = c.l1;
        document.getElementById('c51-lbl-2').textContent = c.l2;
        document.getElementById('c51-bar-1').style.width = c.w1;
        document.getElementById('c51-bar-2').style.width = c.w2;

        const v = document.getElementById('c51-verdict');
        v.textContent = c.verdict;
        v.style.background = c.bg;
        v.style.borderColor = c.border;
        v.style.color = c.color;

        document.getElementById('c51-readout').textContent = c.note;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Click through the examples above to see why predictions can never be 100% guaranteed in messy real life!
        </span>
      `;
    },

    observation: 'Look at the percentages for the blueberry muffin: 48% dog versus 52% muffin! The computer was not being foolish; the visual clues (brown color, round shape, 3 dark dots) genuinely match both things! In real life, different objects can share the exact same clues.',
    mechanism: 'Machine learning algorithms deal in probabilities (likelihoods), not magical absolute truths. When data has noise, blurry camera angles, or overlapping properties, uncertainty is inevitable. Real-world machine learning systems always output a confidence score rather than a blind guess.',
    takeaway: 'Predictions can be wrong because the real world contains messy, noisy, and overlapping clues.'
  },

  /* -------------------------------------------------------------
     Concept 5.2: Measuring Error
  ------------------------------------------------------------- */
  '5.2': {
    kicker: 'Chapter 5 · Concept 5.2',
    title: 'Measuring Error',
    question: 'How do we calculate the exact size of a mistake?',
    questionDesc: 'Before we can fix a mistake, we need to measure how big it is! If your friend guesses your backpack weighs 10 kg, but it actually weighs 14 kg, their mistake is 4 kg. In Machine Learning, the gap between what the computer guesses and what actually happened is called the Error.',
    visHint: '👆 Drag the "Computer\'s Guess" slider below to match the real puppy weight. Watch the Error Ruler shrink!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1.2fr 1fr; gap: 1rem; align-items: center; flex: 1;">
            
            <!-- Actual Reality -->
            <div style="background: #ecfdf5; border: 2px solid #059669; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #047857; text-transform: uppercase;">Real Fact (Truth)</span>
              <div style="font-size: 3rem; margin: 0.35rem 0;">🐶 ⚖️</div>
              <strong style="color: #065f46; font-size: 1.1rem; display: block;">Real Puppy Weight</strong>
              <div style="font-size: 1.8rem; font-weight: 800; color: #047857;">12.0 kg</div>
            </div>

            <!-- The Ruler Gap (Error) -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">The Mistake Gap (Error)</span>
              
              <div style="margin: 0.6rem 0;">
                <div id="c52-gap-arrow" style="font-size: 2rem; color: #dc2626; font-weight: 800;">⟷</div>
                <div id="c52-error-num" style="font-size: 2rem; font-weight: 800; color: #dc2626;">+6.0 kg</div>
                <span id="c52-error-type" style="font-size: 0.8rem; font-weight: 700; color: #dc2626;">Guessed Too High!</span>
              </div>

              <div id="c52-math-calc" style="font-family: monospace; font-size: 0.8rem; background: #f8fafc; padding: 0.4rem; border-radius: 6px;">
                Error = Guess (18.0) - Real (12.0) = +6.0
              </div>
            </div>

            <!-- Computer Guess -->
            <div style="background: #eff6ff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #1d4ed8; text-transform: uppercase;">Computer's Guess</span>
              <div style="font-size: 3rem; margin: 0.35rem 0;">🤖 💭</div>
              <strong style="color: #1e3a8a; font-size: 1.1rem; display: block;">Model's Prediction</strong>
              <div id="c52-guess-read" style="font-size: 1.8rem; font-weight: 800; color: #2563eb;">18.0 kg</div>
            </div>

          </div>

          <!-- Dynamic Readout -->
          <div id="c52-readout" style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #991b1b;">
            Can you move the slider until the Error becomes exactly 0.0 kg?
          </div>

        </div>
      `;

      window.c52UpdateGuess = function(val) {
        const guess = parseFloat(val);
        const actual = 12.0;
        const err = +(guess - actual).toFixed(1);

        document.getElementById('c52-guess-read').textContent = `${guess.toFixed(1)} kg`;
        
        const errNum = document.getElementById('c52-error-num');
        const errType = document.getElementById('c52-error-type');
        const math = document.getElementById('c52-math-calc');
        const rd = document.getElementById('c52-readout');

        math.textContent = `Error = Guess (${guess.toFixed(1)}) - Real (12.0) = ${err >= 0 ? '+' : ''}${err.toFixed(1)}`;

        if (Math.abs(err) < 0.1) {
          errNum.textContent = '0.0 kg';
          errNum.style.color = '#059669';
          errType.textContent = '🎯 Bullseye! Zero Error!';
          errType.style.color = '#059669';
          rd.textContent = '🎉 Perfect Prediction! The guess matches reality exactly. Error is zero!';
          rd.style.background = '#ecfdf5';
          rd.style.borderColor = '#a7f3d0';
          rd.style.color = '#065f46';
        } else if (err > 0) {
          errNum.textContent = `+${err.toFixed(1)} kg`;
          errNum.style.color = '#dc2626';
          errType.textContent = 'Overestimated (Guessed Too High)';
          errType.style.color = '#dc2626';
          rd.textContent = `Too high by ${err.toFixed(1)} kg! Push the slider to the left to lower the guess.`;
          rd.style.background = '#fef2f2';
          rd.style.borderColor = '#fecaca';
          rd.style.color = '#991b1b';
        } else {
          errNum.textContent = `${err.toFixed(1)} kg`;
          errNum.style.color = '#d97706';
          errType.textContent = 'Underestimated (Guessed Too Low)';
          errType.style.color = '#d97706';
          rd.textContent = `Too low by ${Math.abs(err).toFixed(1)} kg! Push the slider to the right to increase the guess.`;
          rd.style.background = '#fffbeb';
          rd.style.borderColor = '#fde68a';
          rd.style.color = '#92400e';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Adjust Computer's Weight Guess:</span>
          <input type="range" min="6.0" max="20.0" step="0.5" value="18.0" oninput="window.c52UpdateGuess(this.value)">
        </div>
      `;
    },

    observation: 'Notice that a mistake can go in two directions: positive (guessed too high) or negative (guessed too low). When you set the slider to 12.0 kg, the distance gap vanished completely and the error score dropped to zero!',
    mechanism: 'In simple math: Error = Prediction - True Value. If we just add up raw positive (+6) and negative (-6) errors, they would cancel out to 0 and fool us into thinking we made zero mistakes! That is why machine learning squares the error: (6)² = 36 and (-6)² = 36. This turns all mistakes positive so every single error counts!',
    takeaway: 'Error is simply the gap between what you guessed and what is actually true.'
  },

  /* -------------------------------------------------------------
     Concept 5.3: Total Error
  ------------------------------------------------------------- */
  '5.3': {
    kicker: 'Chapter 5 · Concept 5.3',
    title: 'Total Error',
    question: 'How do we add up all our mistakes into one big scoreboard?',
    questionDesc: 'A model doesn\'t make just one prediction; it has to make predictions for hundreds of examples! How do we know how well it is doing overall? We add up the mistake from every single example into one master score called the Total Loss.',
    visHint: '👆 Move the dials to fit the line. Watch the Total Loss Tower get shorter and shorter!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- Graph with 4 points and error rulers -->
            <div style="position: relative; height: 100%;">
              <svg id="c53-svg" viewBox="0 0 320 200" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
                <!-- Error bars container -->
                <g id="c53-rulers"></g>
                <!-- Line -->
                <line id="c53-line" x1="30" y1="160" x2="290" y2="70" stroke="#2563eb" stroke-width="3" />
                <!-- 4 points -->
                <circle cx="60" cy="140" r="6" fill="#0f172a" />
                <circle cx="120" cy="115" r="6" fill="#0f172a" />
                <circle cx="190" cy="95" r="6" fill="#0f172a" />
                <circle cx="260" cy="65" r="6" fill="#0f172a" />
              </svg>
            </div>

            <!-- Total Loss Tower -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Total Loss Tower</span>
              
              <div style="height: 120px; display: flex; align-items: flex-end; justify-content: center; margin: 0.5rem 0;">
                <div id="c53-tower" style="width: 60px; height: 80px; background: #ef4444; border-radius: 8px 8px 0 0; transition: height 0.2s ease, background 0.2s ease; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1rem;">
                  80
                </div>
              </div>

              <div style="font-size: 0.8rem; font-weight: 700; color: #475569;">
                Goal: Shrink this tower to 0!
              </div>
            </div>

          </div>

          <!-- Status Bar -->
          <div id="c53-status" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            Turn the tilt dial below to bring down the height of the Total Loss Tower!
          </div>

        </div>
      `;

      const pts = [
        { x: 60, y: 140 },
        { x: 120, y: 115 },
        { x: 190, y: 95 },
        { x: 260, y: 65 }
      ];

      window.c53UpdateTilt = function(val) {
        const t = parseFloat(val);
        const y1 = 160;
        const y2 = y1 - (260 * t);

        const line = document.getElementById('c53-line');
        line.setAttribute('y1', y1);
        line.setAttribute('y2', y2);

        // Calculate total squared error
        let totalLoss = 0;
        const rulers = document.getElementById('c53-rulers');
        rulers.innerHTML = pts.map(p => {
          const lineY = y1 + ((p.x - 30) / 260) * (y2 - y1);
          const diff = Math.abs(p.y - lineY);
          totalLoss += diff;
          return `<line x1="${p.x}" y1="${p.y}" x2="${p.x}" y2="${lineY}" stroke="#dc2626" stroke-width="2" stroke-dasharray="2 2" />`;
        }).join('');

        const tower = document.getElementById('c53-tower');
        const st = document.getElementById('c53-status');

        const towerHeight = Math.min(115, Math.max(12, Math.round(totalLoss * 1.1)));
        tower.style.height = `${towerHeight}px`;
        tower.textContent = Math.round(totalLoss);

        if (totalLoss < 25) {
          tower.style.background = '#059669';
          st.innerHTML = '🎉 <strong>Incredible!</strong> The Total Loss Tower is almost completely flat. Total error is minimized!';
          st.style.color = '#065f46';
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
        } else {
          tower.style.background = '#ef4444';
          st.textContent = `Current Total Loss: ${Math.round(totalLoss)}. Can you tilt the line to get it even lower?`;
          st.style.color = '#1e40af';
          st.style.background = '#eff6ff';
          st.style.borderColor = '#bfdbfe';
        }
      };

      setTimeout(() => window.c53UpdateTilt(0.2), 50);
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Steer the Line Tilt:</span>
          <input type="range" min="0.05" max="0.65" step="0.03" value="0.2" oninput="window.c53UpdateTilt(this.value)">
        </div>
      `;
    },

    observation: 'Look at the red tower on the right. When the line is badly tilted, every single point suffers a large mistake, and their mistakes stack up into a tall red monster! But when the line hugs all the points closely, the tower crumbles down to a tiny green stump.',
    mechanism: 'In Machine Learning, this total combined scoreboard of mistakes is called the Loss Function (or Cost Function). The main goal of machine learning training is very simple: change the model\'s settings until the Loss Function is as close to zero as possible!',
    takeaway: 'Total Loss is the combined scoreboard of all mistakes across the entire dataset.'
  },

  /* -------------------------------------------------------------
     Concept 5.4: How Can a Model Improve?
  ------------------------------------------------------------- */
  '5.4': {
    kicker: 'Chapter 5 · Concept 5.4',
    title: 'How Can a Model Improve?',
    question: 'How does a computer know which direction to change its dials?',
    questionDesc: 'If you are throwing a basketball and your shot lands 1 meter too short, what do you do on your next throw? You throw a little harder! You don\'t throw backwards, and you don\'t throw into the ceiling. You use the mistake to tell you which way to adjust.',
    visHint: '👆 Look at the prediction arrow below. Click "Apply Learning Nudge" to steer the dial in the correct direction!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: flex; justify-content: space-around; align-items: center; flex: 1; flex-wrap: wrap; gap: 1rem;">
            
            <!-- Target Basket -->
            <div style="background: #ffffff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">True Target</span>
              <div style="font-size: 3rem; margin: 0.25rem 0;">🎯</div>
              <strong style="color: #0f172a; font-size: 1rem; display: block;">Target Score</strong>
              <div style="font-size: 1.6rem; font-weight: 800; color: #059669;">80 Points</div>
            </div>

            <!-- Direction Clue -->
            <div style="text-align: center; max-width: 180px;">
              <div id="c54-arrow" style="font-size: 3rem; color: #2563eb; font-weight: 800; transform: rotate(0deg); transition: transform 0.3s ease;">⬆️</div>
              <strong id="c54-clue-title" style="font-size: 0.85rem; color: #1e40af; display: block;">Nudge UPWARDS!</strong>
              <span id="c54-clue-desc" style="font-size: 0.75rem; color: #64748b;">Your guess was too low, so we must add to the dial!</span>
            </div>

            <!-- Current Guess -->
            <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; width: 170px; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Current Model Guess</span>
              <div style="font-size: 3rem; margin: 0.25rem 0;">🤖</div>
              <strong style="color: #0f172a; font-size: 1rem; display: block;">Model Output</strong>
              <div id="c54-curr-guess" style="font-size: 1.6rem; font-weight: 800; color: #2563eb;">40 Points</div>
            </div>

          </div>

          <!-- Readout Bar -->
          <div id="c54-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Mistake = Target (80) - Guess (40) = +40. Click the button below to take a corrective step!
          </div>

        </div>
      `;

      let currentVal = 40;
      const targetVal = 80;

      window.c54Nudge = function() {
        const diff = targetVal - currentVal;
        if (Math.abs(diff) < 2) {
          alert('You hit the bullseye! The guess is 80 and the error is zero!');
          return;
        }

        // Move 50% closer
        const step = Math.round(diff * 0.4);
        currentVal += step;

        document.getElementById('c54-curr-guess').textContent = `${currentVal} Points`;

        const arrow = document.getElementById('c54-arrow');
        const clueT = document.getElementById('c54-clue-title');
        const clueD = document.getElementById('c54-clue-desc');
        const rd = document.getElementById('c54-readout');

        const newDiff = targetVal - currentVal;
        if (Math.abs(newDiff) <= 2) {
          currentVal = 80;
          document.getElementById('c54-curr-guess').textContent = '80 Points';
          arrow.textContent = '🎯';
          clueT.textContent = 'Perfect Landing!';
          clueT.style.color = '#059669';
          clueD.textContent = 'Zero error remaining!';
          rd.innerHTML = '🎉 <strong>Learned!</strong> Through small corrective nudges, the model found the exact answer!';
          rd.style.background = '#ecfdf5';
          rd.style.borderColor = '#a7f3d0';
          rd.style.color = '#065f46';
        } else {
          rd.textContent = `Nudged closer by +${step}! New mistake is only ${Math.abs(newDiff)} points. Click again!`;
        }
      };

      window.c54Reset = function() {
        currentVal = 40;
        document.getElementById('c54-curr-guess').textContent = '40 Points';
        const arrow = document.getElementById('c54-arrow');
        arrow.textContent = '⬆️';
        document.getElementById('c54-clue-title').textContent = 'Nudge UPWARDS!';
        document.getElementById('c54-clue-title').style.color = '#1e40af';
        document.getElementById('c54-clue-desc').textContent = 'Your guess was too low, so we must add to the dial!';
        const rd = document.getElementById('c54-readout');
        rd.textContent = 'Mistake = Target (80) - Guess (40) = +40. Click the button below to take a corrective step!';
        rd.style.background = '#eff6ff';
        rd.style.borderColor = '#bfdbfe';
        rd.style.color = '#1e40af';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c54Nudge()">🦶 Apply Learning Nudge (+Step)</button>
        <button class="mlk-control-btn" onclick="window.c54Reset()">🔄 Reset to Start</button>
      `;
    },

    observation: 'Look at what happened when you clicked "Apply Learning Nudge". The model did not jump blindly to a random number. Because its guess was too low (40 vs 80), the mistake pointed UPWARDS. With each click, it took a step closer until it nailed the bullseye!',
    mechanism: 'In mathematics, the direction that decreases the error fastest is called the Negative Gradient. Think of it like feeling which way the ground slopes down when you walk in the dark. The computer calculates this slope and gently pushes its dials in the downhill direction.',
    takeaway: 'Models improve by looking at their mistake and nudging their dials in the direction that reduces error.'
  },

  /* -------------------------------------------------------------
     Concept 5.5: Learning Step by Step
  ------------------------------------------------------------- */
  '5.5': {
    kicker: 'Chapter 5 · Concept 5.5',
    title: 'Learning Step by Step',
    question: 'Why is learning like a marble rolling down a bowl?',
    questionDesc: 'Imagine placing a shiny marble on the high, steep rim of a soup bowl. If you let it go, which way does gravity pull it? Downward towards the very bottom of the bowl! In Machine Learning, the bowl represents the error, and the bottom is the zero-mistake sweet spot.',
    visHint: '👆 Click "Roll Downhill 1 Step" to watch the marble roll step by step into the lowest error valley!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c55-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- U-shaped Error Bowl: y = 40 + 0.0028 * (x - 250)^2 -->
              <path d="M 70,190 Q 250,220 430,190" fill="none" stroke="#e2e8f0" stroke-width="40" stroke-linecap="round" />
              <path d="M 70,50 Q 250,230 430,50" fill="none" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="6 4" />

              <!-- High error labels on the rims -->
              <text x="80" y="40" font-size="11" fill="#dc2626" font-weight="700">High Error ⚠️</text>
              <text x="420" y="40" font-size="11" fill="#dc2626" font-weight="700" text-anchor="end">High Error ⚠️</text>

              <!-- Sweet spot at bottom -->
              <text x="250" y="215" font-size="12" fill="#059669" font-weight="800" text-anchor="middle">🎯 Lowest Error (Best Model!)</text>

              <!-- Rolling Marble -->
              <circle id="c55-marble" cx="95" cy="65" r="14" fill="#2563eb" stroke="#ffffff" stroke-width="3" style="transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);" />
            </svg>
          </div>

          <!-- Live Step Status -->
          <div id="c55-status" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Step 0: The marble is high on the rim (Error = 100%). Click below to roll downhill!
          </div>

        </div>
      `;

      let stepIndex = 0;
      const trajectory = [
        { x: 95, y: 65, err: '100%', note: 'Step 0: Marble starts at the top rim. Error is very high!' },
        { x: 135, y: 105, err: '68%', note: 'Step 1: Rolled downhill! Error dropped to 68%.' },
        { x: 180, y: 138, err: '35%', note: 'Step 2: Gaining momentum towards the valley. Error dropped to 35%.' },
        { x: 220, y: 153, err: '12%', note: 'Step 3: Almost there! Slope is getting flatter. Error is just 12%.' },
        { x: 250, y: 156, err: '2%', note: '🎯 Step 4: Reached the absolute bottom! Minimum error reached!' }
      ];

      window.c55Step = function() {
        if (stepIndex >= trajectory.length - 1) {
          alert('The marble is already resting at the lowest point of the bowl!');
          return;
        }
        stepIndex++;
        const pt = trajectory[stepIndex];
        const m = document.getElementById('c55-marble');
        m.setAttribute('cx', pt.x);
        m.setAttribute('cy', pt.y);

        const st = document.getElementById('c55-status');
        if (stepIndex === trajectory.length - 1) {
          m.setAttribute('fill', '#059669');
          st.innerHTML = `🎉 <strong>Target Reached!</strong> The marble is settled at the lowest point. The computer has successfully trained!`;
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
        } else {
          st.textContent = pt.note;
        }
      };

      window.c55Reset = function() {
        stepIndex = 0;
        const pt = trajectory[0];
        const m = document.getElementById('c55-marble');
        m.setAttribute('cx', pt.x);
        m.setAttribute('cy', pt.y);
        m.setAttribute('fill', '#2563eb');
        const st = document.getElementById('c55-status');
        st.textContent = pt.note;
        st.style.background = '#f8fafc';
        st.style.borderColor = '#e2e8f0';
        st.style.color = '#334155';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c55Step()">⬇️ Roll Downhill 1 Step</button>
        <button class="mlk-control-btn" onclick="window.c55Reset()">🔄 Put Marble Back on Rim</button>
      `;
    },

    observation: 'Notice that on the steep sides, the marble takes big drops in error. As it gets closer to the rounded bottom, the slope flattens out, and the steps naturally become smaller and gentler until it comes to a peaceful rest right at the lowest point.',
    mechanism: 'This famous algorithm is called Gradient Descent. The word "gradient" means slope, and "descent" means going down. By following the downhill slope of the error bowl, a computer can train complex artificial neural networks with millions of parameters!',
    takeaway: 'Gradient Descent is like a marble rolling down an error bowl until it reaches the lowest possible mistake.'
  },

  /* -------------------------------------------------------------
     Concept 5.6: Learning Rate
  ------------------------------------------------------------- */
  '5.6': {
    kicker: 'Chapter 5 · Concept 5.6',
    title: 'Learning Rate',
    question: 'How big should each learning step be?',
    questionDesc: 'When you take steps down a steep hiking trail, what happens if your steps are too small? It takes until midnight to reach the camp! But what if you take gigantic running leaps? You overshoot the path and tumble over the cliff! Machine learning has the exact same dilemma.',
    visHint: '👆 Choose between "Tiny Steps", "Huge Leap", and "Just Right" below to see how step size affects learning!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c56-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- The valley -->
              <path d="M 70,50 Q 250,230 430,50" fill="none" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="6 4" />
              <text x="250" y="215" font-size="12" fill="#059669" font-weight="800" text-anchor="middle">🎯 The Goal (Bottom of Valley)</text>

              <!-- Path container -->
              <g id="c56-path"></g>

              <!-- Hiker dot -->
              <circle id="c56-hiker" cx="90" cy="65" r="12" fill="#2563eb" stroke="#ffffff" stroke-width="3" style="transition: all 0.3s ease;" />
            </svg>
          </div>

          <!-- Dynamic Status Banner -->
          <div id="c56-status" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.65rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Select a step size below to see the learning speed in action!
          </div>

        </div>
      `;

      window.c56RunSim = function(mode) {
        const hiker = document.getElementById('c56-hiker');
        const path = document.getElementById('c56-path');
        const st = document.getElementById('c56-status');

        path.innerHTML = '';

        if (mode === 'tiny') {
          // Crawls only 2 pixels per click
          hiker.setAttribute('cx', '105');
          hiker.setAttribute('cy', '78');
          hiker.setAttribute('fill', '#d97706');
          st.innerHTML = '🐌 <strong>Too Small (Tiny Learning Rate)!</strong> Barely moved an inch. It will take 10,000 steps to reach the bottom! Training will be painfully slow.';
          st.style.background = '#fffbeb';
          st.style.borderColor = '#fde68a';
          st.style.color = '#92400e';
        } else if (mode === 'huge') {
          // Jumps violently past the bottom to the opposite rim and bounces out
          hiker.setAttribute('cx', '420');
          hiker.setAttribute('cy', '55');
          hiker.setAttribute('fill', '#dc2626');
          path.innerHTML = `<line x1="90" y1="65" x2="420" y2="55" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 4" />`;
          st.innerHTML = '💥 <strong>Too Big (Huge Learning Rate)!</strong> The model took a wild giant leap, completely jumped OVER the bottom, and landed in high error on the opposite wall!';
          st.style.background = '#fee2e2';
          st.style.borderColor = '#fca5a5';
          st.style.color = '#991b1b';
        } else {
          // Just right: smooth 3-step arc to bottom
          hiker.setAttribute('cx', '250');
          hiker.setAttribute('cy', '156');
          hiker.setAttribute('fill', '#059669');
          path.innerHTML = `
            <polyline points="90,65 150,115 210,145 250,156" fill="none" stroke="#059669" stroke-width="3" stroke-dasharray="4 3" />
          `;
          st.innerHTML = '🎯 <strong>Just Right (Optimal Learning Rate)!</strong> Fast, confident strides that land smoothly and gracefully right at the lowest error!';
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn warning" onclick="window.c56RunSim('tiny')">🐌 Step Size: Too Small</button>
        <button class="mlk-control-btn success" onclick="window.c56RunSim('optimal')">🎯 Step Size: Just Right</button>
        <button class="mlk-control-btn danger" onclick="window.c56RunSim('huge')">💥 Step Size: Too Big</button>
      `;
    },

    observation: 'Look at what happened when the step size was too big (Huge): the blue circle flew right across the valley and bounced out! When the step size was too small, it crawled like a snail. But with the "Just Right" step size, it descended gracefully and landed at the lowest point in just a few steps.',
    mechanism: 'In Machine Learning, this step size is called the Learning Rate (often written with the Greek letter α, alpha). Setting the learning rate is one of the most important decisions an AI engineer makes: too large and the model explodes or fails to learn; too small and the computer takes days or weeks to train.',
    takeaway: 'The learning rate controls how big a step the model takes; it must be just right to reach the lowest mistake.'
  }
};


/**
 * Chapter 6: Training and Testing
 * Deep, rich visual interactive implementations of Concepts 6.1 to 6.5.
 * Explains training rounds, train/test split, overfitting, and underfitting for school kids (Classes 5-10).
 */

const CHAPTER_6_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 6.1: Learning from Examples
  ------------------------------------------------------------- */
  '6.1': {
    kicker: 'Chapter 6 · Concept 6.1',
    title: 'Learning from Examples',
    question: 'How does a computer get smarter each time it reviews the examples?',
    questionDesc: 'When you study for a history or spelling test, you don\'t just look at the textbook for one second and close it! You read the chapters, test yourself, make mistakes, review your errors, and try again. A machine learning model learns the exact same way through repeated practice rounds called Epochs.',
    visHint: '👆 Click "Practice Another Round (Epoch)" to watch the prediction line bend and fit closer with every review!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c61-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Data dots -->
              <circle cx="80" cy="180" r="7" fill="#0f172a" />
              <circle cx="150" cy="140" r="7" fill="#0f172a" />
              <circle cx="230" cy="115" r="7" fill="#0f172a" />
              <circle cx="310" cy="85" r="7" fill="#0f172a" />
              <circle cx="410" cy="50" r="7" fill="#0f172a" />

              <!-- Fitting Line -->
              <line id="c61-line" x1="50" y1="120" x2="450" y2="120" stroke="#2563eb" stroke-width="3.5" style="transition: all 0.5s ease;" />
            </svg>
          </div>

          <!-- Training Dashboard -->
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.65rem 1rem; margin-top: 0.4rem; text-align: center;">
            <div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Practice Round</span>
              <div id="c61-epoch-read" style="font-size: 1.25rem; font-weight: 800; color: #2563eb;">Round 0 (Start)</div>
            </div>

            <div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Total Mistake</span>
              <div id="c61-loss-read" style="font-size: 1.25rem; font-weight: 800; color: #dc2626;">Loss: 92</div>
            </div>

            <div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Model Accuracy</span>
              <div id="c61-acc-read" style="font-size: 1.25rem; font-weight: 800; color: #d97706;">Poor (25%)</div>
            </div>
          </div>

        </div>
      `;

      let currentEpoch = 0;
      const rounds = [
        { y1: 120, y2: 120, loss: 92, acc: 'Poor (25%)', color: '#dc2626' },
        { y1: 145, y2: 95, loss: 54, acc: 'Fair (58%)', color: '#d97706' },
        { y1: 170, y2: 70, loss: 26, acc: 'Good (82%)', color: '#2563eb' },
        { y1: 185, y2: 48, loss: 8, acc: 'Excellent (96%)', color: '#059669' }
      ];

      window.c61TrainStep = function() {
        if (currentEpoch >= rounds.length - 1) {
          alert('Training complete! The model has finished all rounds and mastered the pattern.');
          return;
        }
        currentEpoch++;
        const r = rounds[currentEpoch];

        const line = document.getElementById('c61-line');
        line.setAttribute('y1', r.y1);
        line.setAttribute('y2', r.y2);
        if (currentEpoch === rounds.length - 1) {
          line.setAttribute('stroke', '#059669');
        }

        document.getElementById('c61-epoch-read').textContent = `Round ${currentEpoch} of 3`;
        document.getElementById('c61-loss-read').textContent = `Loss: ${r.loss}`;
        document.getElementById('c61-loss-read').style.color = r.color;
        document.getElementById('c61-acc-read').textContent = r.acc;
        document.getElementById('c61-acc-read').style.color = r.color;
      };

      window.c61Reset = function() {
        currentEpoch = 0;
        const r = rounds[0];
        const line = document.getElementById('c61-line');
        line.setAttribute('y1', r.y1);
        line.setAttribute('y2', r.y2);
        line.setAttribute('stroke', '#2563eb');

        document.getElementById('c61-epoch-read').textContent = 'Round 0 (Start)';
        document.getElementById('c61-loss-read').textContent = `Loss: ${r.loss}`;
        document.getElementById('c61-loss-read').style.color = r.color;
        document.getElementById('c61-acc-read').textContent = r.acc;
        document.getElementById('c61-acc-read').style.color = r.color;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c61TrainStep()">📖 Practice Another Round (Epoch)</button>
        <button class="mlk-control-btn" onclick="window.c61Reset()">🔄 Start Fresh</button>
      `;
    },

    observation: 'Look at the line in Round 0: it was completely flat and had a huge mistake of 92! But with each practice round, the line tilted closer and closer to the black dots. By Round 3, the mistake dropped from 92 all the way down to 8!',
    mechanism: 'In Machine Learning, one complete pass through all the training examples is called an Epoch. In each epoch, the model compares its predictions to the true answers, calculates the errors, and slightly adjusts its parameters. After multiple epochs, the model converges on the best pattern.',
    takeaway: 'Models learn by going through the training examples multiple times, reducing mistakes round by round.'
  },

  /* -------------------------------------------------------------
     Concept 6.2: Why Do We Need New Examples?
  ------------------------------------------------------------- */
  '6.2': {
    kicker: 'Chapter 6 · Concept 6.2',
    title: 'Why Do We Need New Examples?',
    question: 'What is the big difference between memorizing and truly understanding?',
    questionDesc: 'Imagine two students preparing for a math test. Student A memorizes the exact numbers on the practice sheet: "If the question says 4 and 5, write 9". Student B learns the secret rule: "Add the two numbers together". What happens when the teacher gives an exam with brand-new numbers?',
    visHint: '👆 Click "Give New Exam Question" to see what happens to the student who only memorized!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- Student A: The Parroted Memorizer -->
            <div style="background: #ffffff; border: 2px solid #ef4444; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #dc2626; text-transform: uppercase;">Student A: Memorizer</span>
                <span style="background: #fee2e2; color: #dc2626; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 999px;">Rote Memory</span>
              </div>

              <div style="font-size: 3rem; margin: 0.35rem 0;">🦜</div>
              <strong style="color: #0f172a; font-size: 1rem; display: block;">Only Memorized Practice</strong>
              <div id="c62-ans-a" style="font-size: 1.2rem; font-weight: 800; color: #dc2626; margin: 0.5rem 0; background: #fef2f2; padding: 0.4rem; border-radius: 6px;">
                "Answer is 9! (Because I saw 9 on the practice sheet)"
              </div>
              <span id="c62-verdict-a" style="font-size: 0.8rem; font-weight: 700; color: #dc2626;">❌ WRONG ANSWER!</span>
            </div>

            <!-- Student B: The Concept Understander -->
            <div style="background: #ffffff; border: 2px solid #059669; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase;">Student B: Understander</span>
                <span style="background: #ecfdf5; color: #059669; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 999px;">True Concept</span>
              </div>

              <div style="font-size: 3rem; margin: 0.35rem 0;">🧠</div>
              <strong style="color: #0f172a; font-size: 1rem; display: block;">Learned the Pattern Rule</strong>
              <div id="c62-ans-b" style="font-size: 1.2rem; font-weight: 800; color: #059669; margin: 0.5rem 0; background: #ecfdf5; padding: 0.4rem; border-radius: 6px;">
                "Answer is 7 + 8 = 15!"
              </div>
              <span id="c62-verdict-b" style="font-size: 0.8rem; font-weight: 700; color: #059669;">✅ 100% CORRECT!</span>
            </div>

          </div>

          <!-- Unseen Exam Question Card -->
          <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 10px; padding: 0.75rem 1rem; text-align: center; margin-top: 0.4rem;">
            <span style="font-size: 0.72rem; font-weight: 800; color: #1d4ed8; text-transform: uppercase;">New Unseen Exam Question</span>
            <div id="c62-question-text" style="font-size: 1.4rem; font-weight: 800; color: #1e3a8a; margin: 0.25rem 0;">
              What is 7 + 8 = ?
            </div>
          </div>

        </div>
      `;

      let qIndex = 0;
      const questions = [
        { q: 'What is 7 + 8 = ?', aAns: 'Answer is 9! (Because I saw 9 on practice)', bAns: 'Answer is 7 + 8 = 15!', aRight: false },
        { q: 'What is 12 + 6 = ?', aAns: 'Answer is 10! (Guessing past sheet)', bAns: 'Answer is 12 + 6 = 18!', aRight: false },
        { q: 'What is 9 + 4 = ?', aAns: 'Answer is 4! (Just repeating a number)', bAns: 'Answer is 9 + 4 = 13!', aRight: false }
      ];

      window.c62NextQ = function() {
        qIndex = (qIndex + 1) % questions.length;
        const q = questions[qIndex];
        document.getElementById('c62-question-text').textContent = q.q;
        document.getElementById('c62-ans-a').textContent = q.aAns;
        document.getElementById('c62-ans-b').textContent = q.bAns;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c62NextQ()">📝 Give Another Unseen Exam Question</button>
      `;
    },

    observation: 'Notice that Student A got 100% on the practice sheet by memorizing every answer. But as soon as a new question appeared on the exam (7 + 8 = ?), Student A failed completely! Meanwhile, Student B understood the underlying rule and solved the new question effortlessly.',
    mechanism: 'In Machine Learning, this ability to perform well on brand-new, unseen examples is called Generalization. A model that simply memorizes the training data like a parrot is completely useless in the real world. That is why we must always test models on new data they have never seen before!',
    takeaway: 'True learning means understanding the pattern so you can solve brand-new examples you have never seen.'
  },

  /* -------------------------------------------------------------
     Concept 6.3: Training Data and Test Data
  ------------------------------------------------------------- */
  '6.3': {
    kicker: 'Chapter 6 · Concept 6.3',
    title: 'Training Data and Test Data',
    question: 'How do scientists split their dataset to keep an honest exam?',
    questionDesc: 'If a teacher gave you the exact same exam questions to practice at home the night before the test, your 100% score wouldn\'t prove you are a genius — you just saw the answers in advance! To prevent cheating, machine learning scientists split all their data into two separate locked boxes.',
    visHint: '👆 Click "Shuffle & Split Dataset" to see how 80% goes to Practice and 20% is locked in the Vault!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- Box 1: Training Data (80%) -->
            <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Box 1: Training Data (80%)</span>
                <span style="background: #eff6ff; color: #1d4ed8; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 999px;">For Learning</span>
              </div>

              <div id="c63-train-cards" style="display: flex; flex-wrap: wrap; gap: 0.4rem; justify-content: center; margin: 1rem 0;">
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍎 Red 1</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍏 Green 2</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍊 Orange 3</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍎 Red 4</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍊 Orange 5</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍏 Green 6</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍎 Red 7</span>
                <span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">🍊 Orange 8</span>
              </div>

              <span style="font-size: 0.78rem; color: #64748b;">The computer is allowed to study, make mistakes, and adjust dials on these 8 cards.</span>
            </div>

            <!-- Box 2: Test Data (20%) -->
            <div style="background: #fefce8; border: 2px dashed #ca8a04; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #854d0e; text-transform: uppercase;">Box 2: Test Data (20%)</span>
                <span style="background: #fef08a; color: #854d0e; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 999px;">Locked Vault</span>
              </div>

              <div id="c63-test-cards" style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center; margin: 1rem 0;">
                <span style="background: #fde047; color: #713f12; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 800;">🔒 Exam Fruit A</span>
                <span style="background: #fde047; color: #713f12; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 800;">🔒 Exam Fruit B</span>
              </div>

              <span style="font-size: 0.78rem; color: #854d0e; font-weight: 600;">STRICT RULE: The computer NEVER sees these cards until exam day!</span>
            </div>

          </div>

          <!-- Readout -->
          <div id="c63-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            80% for Practice + 20% for Final Exam = The Golden Standard of Machine Learning!
          </div>

        </div>
      `;

      window.c63Shuffle = function() {
        const train = document.getElementById('c63-train-cards');
        const test = document.getElementById('c63-test-cards');
        const fruits = ['🍎 Red', '🍏 Green', '🍊 Orange', '🍋 Lemon', '🍇 Plum'];
        
        train.innerHTML = '';
        for (let i = 1; i <= 8; i++) {
          const f = fruits[Math.floor(Math.random() * fruits.length)];
          train.innerHTML += `<span style="background: #dbeafe; color: #1e40af; padding: 0.4rem 0.6rem; border-radius: 6px; font-size: 0.8rem; font-weight: 700;">${f} ${i}</span>`;
        }

        test.innerHTML = '';
        for (let i = 1; i <= 2; i++) {
          const f = fruits[Math.floor(Math.random() * fruits.length)];
          test.innerHTML += `<span style="background: #fde047; color: #713f12; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 800;">🔒 Exam ${f} ${i}</span>`;
        }

        document.getElementById('c63-readout').textContent = 'Shuffled! The computer gets 8 random practice examples, while 2 examples are safely locked in the exam vault!';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c63Shuffle()">🔀 Shuffle & Split Dataset</button>
      `;
    },

    observation: 'Notice that the dataset is divided into two distinct groups. 8 cards are placed in the blue Practice Box (Training Set). 2 cards are locked inside the yellow Vault (Test Set). The model is forbidden from ever peeking into the vault during training.',
    mechanism: 'This technique is called the Train/Test Split (usually 80% train, 20% test). By keeping a portion of data strictly untouched, engineers can test whether the model will work in the real world on fresh customers and new patients, rather than just reciting its homework.',
    takeaway: 'We train models on training data, but measure their true skill on unseen test data.'
  },

  /* -------------------------------------------------------------
     Concept 6.4: Overfitting
  ------------------------------------------------------------- */
  '6.4': {
    kicker: 'Chapter 6 · Concept 6.4',
    title: 'Overfitting',
    question: 'What happens when a line tries too hard to touch every single dot?',
    questionDesc: 'What happens if a student connects the dots with a wild, squiggly snake line that twists, turns, and bends backwards just to touch every single speck of dust and noise on the page? On the practice sheet, the snake line gets 100%. But look what happens when a new test dot arrives!',
    visHint: '👆 Toggle between "Smooth General Line" and "Overfitted Crazy Snake" to see who wins on the unseen test dot!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c64-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Training dots (Blue) -->
              <circle cx="80" cy="170" r="6" fill="#2563eb" />
              <circle cx="140" cy="140" r="6" fill="#2563eb" />
              <circle cx="210" cy="155" r="6" fill="#2563eb" /> <!-- An outlier dip! -->
              <circle cx="280" cy="100" r="6" fill="#2563eb" />
              <circle cx="360" cy="85" r="6" fill="#2563eb" />
              <circle cx="430" cy="45" r="6" fill="#2563eb" />

              <!-- Smooth gentle curve -->
              <path id="c64-smooth" d="M 60,180 Q 250,140 450,40" fill="none" stroke="#059669" stroke-width="4" />

              <!-- Crazy overfitted snake line -->
              <path id="c64-snake" d="M 60,180 C 80,170 110,100 140,140 C 170,180 180,210 210,155 C 240,100 260,60 280,100 C 300,140 330,60 360,85 C 390,110 410,20 430,45" fill="none" stroke="#dc2626" stroke-width="3.5" opacity="0" stroke-dasharray="0" />

              <!-- Unseen Test Dot (Gold Star) -->
              <g id="c64-test-point" opacity="0">
                <circle cx="245" cy="115" r="9" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
                <text x="260" y="120" font-size="11" fill="#b45309" font-weight="800">⭐ Unseen Test Dot</text>
              </g>
            </svg>
          </div>

          <!-- Scoreboard -->
          <div id="c64-status" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 0.65rem 1rem; margin-top: 0.4rem; text-align: center;">
            <div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Score on Practice (Training)</span>
              <div id="c64-train-score" style="font-size: 1.15rem; font-weight: 800; color: #059669;">94% (Great Fit)</div>
            </div>

            <div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Score on Exam (Test Dot)</span>
              <div id="c64-test-score" style="font-size: 1.15rem; font-weight: 800; color: #059669;">95% (Almost Bullseye!)</div>
            </div>
          </div>

        </div>
      `;

      window.c64SetMode = function(mode) {
        const smooth = document.getElementById('c64-smooth');
        const snake = document.getElementById('c64-snake');
        const star = document.getElementById('c64-test-point');
        const trScore = document.getElementById('c64-train-score');
        const teScore = document.getElementById('c64-test-score');

        star.setAttribute('opacity', '1');

        if (mode === 'smooth') {
          smooth.setAttribute('opacity', '1');
          snake.setAttribute('opacity', '0');
          trScore.textContent = '94% (Good, ignores noise)';
          trScore.style.color = '#059669';
          teScore.textContent = '96% (Bullseye on test dot!)';
          teScore.style.color = '#059669';
        } else {
          smooth.setAttribute('opacity', '0');
          snake.setAttribute('opacity', '1');
          trScore.textContent = '100% (Touched every single dot)';
          trScore.style.color = '#2563eb';
          teScore.textContent = '❌ 22% (Completely missed test dot!)';
          teScore.style.color = '#dc2626';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn success" onclick="window.c64SetMode('smooth')">🌱 Smooth General Curve (Balanced)</button>
        <button class="mlk-control-btn danger" onclick="window.c64SetMode('snake')">🐍 Overfitted Crazy Snake Line</button>
      `;
    },

    observation: 'Look at the crazy red snake line: it touched 100% of the training dots by doing wild gymnastics! But look at the gold star (the unseen test dot): the red line missed it by a mile! Meanwhile, the smooth green curve passed right next to the gold star.',
    mechanism: 'This dangerous problem is called Overfitting. It happens when a model is too complex and memorizes random noise and flukes in the training data rather than the true underlying pattern. An overfitted model looks like an A+ student at home, but fails completely on real-world tests.',
    takeaway: 'Overfitting happens when a model memorizes past noise and fails to predict new examples.'
  },

  /* -------------------------------------------------------------
     Concept 6.5: Underfitting
  ------------------------------------------------------------- */
  '6.5': {
    kicker: 'Chapter 6 · Concept 6.5',
    title: 'Underfitting',
    question: 'What happens when a model is too simple and too lazy?',
    questionDesc: 'Overfitting is when a model tries too hard. What is the opposite mistake? Underfitting! This happens when a model is so simple, stiff, or lazy that it cannot even capture the basic curve of the data in the first place.',
    visHint: '👆 Compare the 3 models below to find the "Goldilocks Zone": not too simple, not too crazy, but just right!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c65-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Naturally curved dots: U-shaped curve -->
              <circle cx="80" cy="70" r="7" fill="#0f172a" />
              <circle cx="140" cy="130" r="7" fill="#0f172a" />
              <circle cx="250" cy="170" r="7" fill="#0f172a" />
              <circle cx="360" cy="130" r="7" fill="#0f172a" />
              <circle cx="420" cy="70" r="7" fill="#0f172a" />

              <!-- Path under test -->
              <path id="c65-model-path" d="M 60,130 L 440,130" fill="none" stroke="#dc2626" stroke-width="4" />
            </svg>
          </div>

          <!-- Goldilocks Verdict -->
          <div id="c65-verdict-card" style="background: #fee2e2; border: 2px solid #fca5a5; border-radius: 10px; padding: 0.75rem 1rem; text-align: center; margin-top: 0.4rem;">
            <strong id="c65-verdict-title" style="font-size: 1.05rem; color: #991b1b; display: block;">Underfitting: Too Simple!</strong>
            <span id="c65-verdict-desc" style="font-size: 0.82rem; color: #7f1d1d;">A flat horizontal line cannot bend at all! It misses the curve completely on both practice and exam data.</span>
          </div>

        </div>
      `;

      window.c65SetMode = function(mode) {
        const path = document.getElementById('c65-model-path');
        const card = document.getElementById('c65-verdict-card');
        const title = document.getElementById('c65-verdict-title');
        const desc = document.getElementById('c65-verdict-desc');

        if (mode === 'under') {
          path.setAttribute('d', 'M 60,130 L 440,130');
          path.setAttribute('stroke', '#dc2626');
          card.style.background = '#fee2e2';
          card.style.borderColor = '#fca5a5';
          title.textContent = '❌ Underfitting (Too Simple & Stiff)';
          title.style.color = '#991b1b';
          desc.textContent = 'A flat stick cannot bend! It has high errors on both the practice data AND the test data because it ignored the curve.';
        } else if (mode === 'over') {
          path.setAttribute('d', 'M 60,60 C 70,80 75,65 80,70 C 110,150 120,80 140,130 C 180,230 220,100 250,170 C 290,220 330,80 360,130 C 390,160 410,40 420,70');
          path.setAttribute('stroke', '#d97706');
          card.style.background = '#fffbeb';
          card.style.borderColor = '#fde68a';
          title.textContent = '⚠️ Overfitting (Too Crazy & Complicated)';
          title.style.color = '#92400e';
          desc.textContent = 'Too wiggly! It bends into crazy loops to hit every single dot, but will make foolish predictions on anything new.';
        } else {
          path.setAttribute('d', 'M 60,60 Q 250,210 440,60');
          path.setAttribute('stroke', '#059669');
          card.style.background = '#ecfdf5';
          card.style.borderColor = '#a7f3d0';
          title.textContent = '🎯 Just Right (The Goldilocks Zone!)';
          title.style.color = '#065f46';
          desc.textContent = 'Perfection! A smooth gentle U-shape captures the true natural curve without doing unnecessary gymnastics.';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn danger" onclick="window.c65SetMode('under')">1. Too Simple (Underfitting)</button>
        <button class="mlk-control-btn success" onclick="window.c65SetMode('optimal')">2. Just Right (Goldilocks)</button>
        <button class="mlk-control-btn warning" onclick="window.c65SetMode('over')">3. Too Complex (Overfitting)</button>
      `;
    },

    observation: 'Look at the 3 options. Model 1 (flat line) is too stiff to notice the U-shaped curve. Model 3 (wiggly snake) is so obsessed with details that it twists in knots. But Model 2 (smooth curve) fits the shape naturally. That is the Goldilocks balance!',
    mechanism: 'In Machine Learning, this balance is called the Bias-Variance Tradeoff. Underfitting means the model has high bias (too rigid to learn). Overfitting means the model has high variance (too sensitive to noise). The sweet spot in the middle produces models that generalize best to the real world.',
    takeaway: 'A great model is neither too stiff (underfitting) nor too wiggly (overfitting) — it captures the true underlying shape.'
  }
};


/**
 * Chapter 7: Learning Without Answers
 * Deep, rich visual interactive implementations of Concepts 7.1 to 7.4.
 * Explains Unsupervised Learning and K-Means Clustering for school kids (Classes 5-10).
 */

const CHAPTER_7_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 7.1: Finding Groups
  ------------------------------------------------------------- */
  '7.1': {
    kicker: 'Chapter 7 · Concept 7.1',
    title: 'Finding Groups',
    question: 'Can you spot natural families of dots even if nobody gives them names?',
    questionDesc: 'Up until now, an adult or teacher was always there to tell us the correct answers: "This is an apple", "This is an orange". But what if you land on an alien planet, look down at 12 strange space creatures, and nobody is there to tell you what they are called? Your brain will still naturally group them by how close and similar they look!',
    visHint: '👆 Look at the gray mystery dots below. Click "Reveal Natural Groups" to see if your brain spotted the exact same two families!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c71-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #0f172a; border-radius: 10px; border: 1px solid #1e293b;">
              <!-- Cluster A Cloud Aura -->
              <ellipse id="c71-aura-a" cx="140" cy="115" rx="85" ry="65" fill="#3b82f6" opacity="0" style="transition: opacity 0.4s ease;" />
              <!-- Cluster B Cloud Aura -->
              <ellipse id="c71-aura-b" cx="360" cy="115" rx="85" ry="65" fill="#10b981" opacity="0" style="transition: opacity 0.4s ease;" />

              <!-- Cluster A Dots -->
              <g id="c71-group-a">
                <circle cx="110" cy="95" r="7" fill="#cbd5e1" />
                <circle cx="130" cy="135" r="7" fill="#cbd5e1" />
                <circle cx="160" cy="90" r="7" fill="#cbd5e1" />
                <circle cx="170" cy="125" r="7" fill="#cbd5e1" />
                <circle cx="125" cy="105" r="7" fill="#cbd5e1" />
                <circle cx="150" cy="145" r="7" fill="#cbd5e1" />
              </g>

              <!-- Cluster B Dots -->
              <g id="c71-group-b">
                <circle cx="330" cy="90" r="7" fill="#cbd5e1" />
                <circle cx="350" cy="130" r="7" fill="#cbd5e1" />
                <circle cx="380" cy="85" r="7" fill="#cbd5e1" />
                <circle cx="390" cy="125" r="7" fill="#cbd5e1" />
                <circle cx="340" cy="115" r="7" fill="#cbd5e1" />
                <circle cx="370" cy="145" r="7" fill="#cbd5e1" />
              </g>

              <!-- Labels -->
              <text id="c71-lbl-a" x="140" y="45" font-size="12" fill="#60a5fa" font-weight="800" text-anchor="middle" opacity="0">Group 1: Island of Stars ✨</text>
              <text id="c71-lbl-b" x="360" y="45" font-size="12" fill="#34d399" font-weight="800" text-anchor="middle" opacity="0">Group 2: Distant Constellation 🌟</text>
            </svg>
          </div>

          <!-- Dynamic Status -->
          <div id="c71-status" style="background: #1e293b; color: #f8fafc; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 600; margin-top: 0.4rem;">
            Look at the dark sky: Can your eyes immediately see that there are two separate islands of dots?
          </div>

        </div>
      `;

      window.c71Toggle = function() {
        const auraA = document.getElementById('c71-aura-a');
        const auraB = document.getElementById('c71-aura-b');
        const lblA = document.getElementById('c71-lbl-a');
        const lblB = document.getElementById('c71-lbl-b');
        const st = document.getElementById('c71-status');

        const isHidden = auraA.getAttribute('opacity') === '0';
        auraA.setAttribute('opacity', isHidden ? '0.25' : '0');
        auraB.setAttribute('opacity', isHidden ? '0.25' : '0');
        lblA.setAttribute('opacity', isHidden ? '1' : '0');
        lblB.setAttribute('opacity', isHidden ? '1' : '0');

        const ga = document.querySelectorAll('#c71-group-a circle');
        const gb = document.querySelectorAll('#c71-group-b circle');

        ga.forEach(c => c.setAttribute('fill', isHidden ? '#60a5fa' : '#cbd5e1'));
        gb.forEach(c => c.setAttribute('fill', isHidden ? '#34d399' : '#cbd5e1'));

        if (isHidden) {
          st.innerHTML = '🎉 <strong style="color: #60a5fa;">Your brain was right!</strong> Even without any names or labels, the dots naturally clump into two distinct families based on distance.';
        } else {
          st.textContent = 'Labels hidden. Notice how obvious the two separate clumps are, purely from their physical spacing!';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c71Toggle()">✨ Toggle Natural Groups</button>
      `;
    },

    observation: 'Notice that nobody told the dots what group they belonged to. There were no teacher labels saying "left group" or "right group". Yet, the moment you looked at the screen, your eyes naturally detected the two separate clouds because points inside a cloud are close together, while the space between the clouds is empty!',
    mechanism: 'In Machine Learning, learning without any pre-existing labels or teacher answers is called Unsupervised Learning. Instead of matching examples to teacher tags, the computer measures spatial distances between all items to discover hidden groups on its own.',
    takeaway: 'Even without any labels, computers can discover natural groups by measuring how close examples are to each other.'
  },

  /* -------------------------------------------------------------
     Concept 7.2: Clustering
  ------------------------------------------------------------- */
  '7.2': {
    kicker: 'Chapter 7 · Concept 7.2',
    title: 'Clustering',
    question: 'What is clustering and how does a computer organize a messy room?',
    questionDesc: 'Imagine your bedroom floor is covered in 20 random items: toy cars, building blocks, storybooks, and socks. If someone tells you: "Sort these into 3 tidy piles", you don\'t need an encyclopedia. You put toys with toys, clothes in the laundry hamper, and books on the shelf. This automatic grouping is called Clustering.',
    visHint: '👆 Click "Auto-Cluster Items" to watch the messy items fly into their natural baskets!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Messy Floor Area -->
          <div id="c72-mess-area" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Messy Floor (Unsorted Items)</span>
              <span id="c72-state-badge" style="background: #fee2e2; color: #dc2626; font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.5rem; border-radius: 999px;">Messy & Unsorted</span>
            </div>

            <!-- Items shelf / baskets -->
            <div id="c72-shelf" style="display: flex; justify-content: space-around; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">🚗</div>
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">📚</div>
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">🧦</div>
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">🏎️</div>
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">📖</div>
              <div class="c72-item" style="font-size: 2.2rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.5rem 0.75rem;">👕</div>
            </div>

            <!-- Baskets Area -->
            <div id="c72-baskets" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.75rem;">
              <div style="background: #eff6ff; border: 2px dashed #3b82f6; border-radius: 8px; padding: 0.6rem; text-align: center;">
                <strong style="font-size: 0.75rem; color: #1e40af; text-transform: uppercase;">Cluster 1: Vehicles</strong>
                <div id="c72-b1" style="font-size: 1.6rem; min-height: 40px; margin-top: 0.25rem;"></div>
              </div>

              <div style="background: #ecfdf5; border: 2px dashed #059669; border-radius: 8px; padding: 0.6rem; text-align: center;">
                <strong style="font-size: 0.75rem; color: #065f46; text-transform: uppercase;">Cluster 2: Reading</strong>
                <div id="c72-b2" style="font-size: 1.6rem; min-height: 40px; margin-top: 0.25rem;"></div>
              </div>

              <div style="background: #fdf2f8; border: 2px dashed #db2777; border-radius: 8px; padding: 0.6rem; text-align: center;">
                <strong style="font-size: 0.75rem; color: #831843; text-transform: uppercase;">Cluster 3: Laundry</strong>
                <div id="c72-b3" style="font-size: 1.6rem; min-height: 40px; margin-top: 0.25rem;"></div>
              </div>
            </div>

          </div>

          <!-- Dynamic Status -->
          <div id="c72-status" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            Click below to run the clustering algorithm and sort the room into 3 neat baskets!
          </div>

        </div>
      `;

      window.c72RunClustering = function() {
        document.getElementById('c72-shelf').style.display = 'none';
        document.getElementById('c72-b1').textContent = '🚗 🏎️';
        document.getElementById('c72-b2').textContent = '📚 📖';
        document.getElementById('c72-b3').textContent = '🧦 👕';

        const badge = document.getElementById('c72-state-badge');
        badge.textContent = '✅ Perfectly Clustered!';
        badge.style.background = '#ecfdf5';
        badge.style.color = '#059669';

        const st = document.getElementById('c72-status');
        st.innerHTML = '🎉 <strong>Clustered into 3 natural groups!</strong> Vehicles in Basket 1, Books in Basket 2, and Clothes in Basket 3.';
        st.style.background = '#ecfdf5';
        st.style.borderColor = '#a7f3d0';
        st.style.color = '#065f46';
      };

      window.c72Reset = function() {
        document.getElementById('c72-shelf').style.display = 'flex';
        document.getElementById('c72-b1').textContent = '';
        document.getElementById('c72-b2').textContent = '';
        document.getElementById('c72-b3').textContent = '';

        const badge = document.getElementById('c72-state-badge');
        badge.textContent = 'Messy & Unsorted';
        badge.style.background = '#fee2e2';
        badge.style.color = '#dc2626';

        const st = document.getElementById('c72-status');
        st.textContent = 'Click below to run the clustering algorithm and sort the room into 3 neat baskets!';
        st.style.background = '#eff6ff';
        st.style.borderColor = '#bfdbfe';
        st.style.color = '#1e40af';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn success" onclick="window.c72RunClustering()">🧺 Auto-Cluster Items</button>
        <button class="mlk-control-btn" onclick="window.c72Reset()">🔄 Scatter Back on Floor</button>
      `;
    },

    observation: 'Notice what happened: the cars went together because they share wheels and engines; the books went together because they have pages; the clothes went together because they are made of soft cloth. Similar things naturally belong in the same cluster!',
    mechanism: 'Clustering is an algorithm that measures similarity between items. Items with close feature values are placed into the same cluster, while items with different feature values are placed into separate clusters. No human labels are required.',
    takeaway: 'Clustering is the automatic grouping of similar things together without needing any labels.'
  },

  /* -------------------------------------------------------------
     Concept 7.3: K-Means Intuition
  ------------------------------------------------------------- */
  '7.3': {
    kicker: 'Chapter 7 · Concept 7.3',
    title: 'K-Means Intuition',
    question: 'How do magnet pins glide to the exact center of each group?',
    questionDesc: 'The most famous clustering algorithm in the world is called K-Means. Imagine placing 2 magnet pins (a Red Pin and a Blue Pin) randomly on a table covered in paperclips. How do they find the two clusters? In two simple repeating steps: 1) Paperclips attract to the closer pin. 2) Each pin slides to the exact center of its paperclips!',
    visHint: '👆 Click "Step 1: Color Dots to Closest Pin", then "Step 2: Move Pins to Center" to watch K-Means in action!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c73-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Data dots -->
              <g id="c73-dots">
                <circle cx="100" cy="80" r="7" fill="#94a3b8" />
                <circle cx="120" cy="120" r="7" fill="#94a3b8" />
                <circle cx="150" cy="90" r="7" fill="#94a3b8" />
                <circle cx="160" cy="130" r="7" fill="#94a3b8" />
                <circle cx="110" cy="140" r="7" fill="#94a3b8" />

                <circle cx="340" cy="90" r="7" fill="#94a3b8" />
                <circle cx="360" cy="130" r="7" fill="#94a3b8" />
                <circle cx="390" cy="80" r="7" fill="#94a3b8" />
                <circle cx="410" cy="120" r="7" fill="#94a3b8" />
                <circle cx="370" cy="150" r="7" fill="#94a3b8" />
              </g>

              <!-- Magnet Pin 1 (Blue) -->
              <g id="c73-pin-blue" transform="translate(180, 50)" style="transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);">
                <circle cx="0" cy="0" r="14" fill="#2563eb" stroke="#ffffff" stroke-width="3" />
                <text x="0" y="4" font-size="11" fill="#ffffff" font-weight="800" text-anchor="middle">1</text>
              </g>

              <!-- Magnet Pin 2 (Red) -->
              <g id="c73-pin-red" transform="translate(300, 180)" style="transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);">
                <circle cx="0" cy="0" r="14" fill="#dc2626" stroke="#ffffff" stroke-width="3" />
                <text x="0" y="4" font-size="11" fill="#ffffff" font-weight="800" text-anchor="middle">2</text>
              </g>
            </svg>
          </div>

          <!-- Algorithm Step Banner -->
          <div id="c73-status" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Pins are placed randomly. Click "Step 1: Color Dots to Closer Pin" below!
          </div>

        </div>
      `;

      let kStep = 0;

      window.c73NextStep = function() {
        const dots = document.querySelectorAll('#c73-dots circle');
        const pinB = document.getElementById('c73-pin-blue');
        const pinR = document.getElementById('c73-pin-red');
        const st = document.getElementById('c73-status');

        if (kStep === 0) {
          // Step 1: Assign to closer pin
          dots.forEach((d, i) => {
            if (i < 5) d.setAttribute('fill', '#2563eb');
            else d.setAttribute('fill', '#dc2626');
          });
          st.innerHTML = '🧲 <strong>Step 1 Complete:</strong> Each dot turned the color of whichever magnet pin was closer!';
          st.style.background = '#eff6ff';
          st.style.borderColor = '#bfdbfe';
          st.style.color = '#1e40af';
          kStep = 1;
        } else if (kStep === 1) {
          // Step 2: Move pins to cluster centroids (mean centers)
          pinB.setAttribute('transform', 'translate(128, 112)');
          pinR.setAttribute('transform', 'translate(374, 114)');
          st.innerHTML = '🎯 <strong>Step 2 Complete:</strong> Each pin slid to the exact center (average position) of its dots!';
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
          kStep = 2;
        } else {
          alert('K-Means has converged! The pins are perfectly centered and will not move any further.');
        }
      };

      window.c73Reset = function() {
        kStep = 0;
        const dots = document.querySelectorAll('#c73-dots circle');
        dots.forEach(d => d.setAttribute('fill', '#94a3b8'));
        document.getElementById('c73-pin-blue').setAttribute('transform', 'translate(180, 50)');
        document.getElementById('c73-pin-red').setAttribute('transform', 'translate(300, 180)');
        const st = document.getElementById('c73-status');
        st.textContent = 'Pins are placed randomly. Click "Step 1: Color Dots to Closer Pin" below!';
        st.style.background = '#f8fafc';
        st.style.borderColor = '#cbd5e1';
        st.style.color = '#334155';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c73NextStep()">▶️ Run Next K-Means Step</button>
        <button class="mlk-control-btn" onclick="window.c73Reset()">🔄 Reset Pins</button>
      `;
    },

    observation: 'Look at how the pins moved in Step 2: Pin 1 slid smoothly into the bullseye center of the left cluster, while Pin 2 centered itself in the right cluster! By just repeating: "1) Color by closer pin, 2) Slide pin to center", the computer locked onto both clusters!',
    mechanism: 'In K-Means, the "K" stands for the number of groups (here K=2). The "Means" stands for average (the center position of each group, also called the Centroid). The algorithm repeats these two steps until the pins stop moving, meaning the groups have been completely solved!',
    takeaway: 'K-Means works by assigning points to the closest pin and sliding the pins to the center of each group.'
  },

  /* -------------------------------------------------------------
     Concept 7.4: Clustering vs Classification
  ------------------------------------------------------------- */
  '7.4': {
    kicker: 'Chapter 7 · Concept 7.4',
    title: 'Clustering vs Classification',
    question: 'What is the grand difference between supervised and unsupervised learning?',
    questionDesc: 'Now you know the two major branches of Machine Learning! When an algorithm learns with a teacher who checks every homework answer, that is Supervised Learning. When an algorithm explores on its own like a detective discovering secret clues, that is Unsupervised Learning.',
    visHint: '👆 Click the buttons below to switch between the Classroom (Supervised) and the Detective Lab (Unsupervised)!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: stretch;">
            
            <!-- Supervised Card -->
            <div id="c74-card-sup" style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Type 1: Supervised Learning</span>
                <div style="font-size: 2.8rem; margin: 0.4rem 0;">👩‍🏫 🍎 🍊</div>
                <strong style="color: #0f172a; font-size: 1.05rem; display: block;">Teacher Tells the Answers!</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.35rem; line-height: 1.4;">
                  Every training example comes with a correct label attached (Dog or Cat, Pass or Fail).
                </p>
              </div>

              <div style="background: #eff6ff; border-radius: 8px; padding: 0.5rem; font-size: 0.78rem; font-weight: 700; color: #1e40af;">
                Examples: Classification & Regression
              </div>
            </div>

            <!-- Unsupervised Card -->
            <div id="c74-card-unsup" style="background: #ffffff; border: 2px solid #7c3aed; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #7c3aed; text-transform: uppercase;">Type 2: Unsupervised Learning</span>
                <div style="font-size: 2.8rem; margin: 0.4rem 0;">🕵️‍♂️ 🧩 🔍</div>
                <strong style="color: #0f172a; font-size: 1.05rem; display: block;">No Teacher — Detective Mode!</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.35rem; line-height: 1.4;">
                  Nobody tells the computer what is what! The model finds hidden patterns and groups on its own.
                </p>
              </div>

              <div style="background: #f5f3ff; border-radius: 8px; padding: 0.5rem; font-size: 0.78rem; font-weight: 700; color: #6d28d9;">
                Example: Clustering (K-Means)
              </div>
            </div>

          </div>

          <!-- Bottom Summary -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Both methods are superpowers of AI! Supervised needs labeled data; Unsupervised explores the unknown.
          </div>

        </div>
      `;
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Now you understand the two biggest pillars of Machine Learning! Click Next to explore Decision Trees!
        </span>
      `;
    },

    observation: 'Look at the comparison: In Classification, the computer is like a student with an answer key checking every card. In Clustering, the computer is an explorer landing on a mysterious island, grouping unknown animals by their shapes and sounds.',
    mechanism: 'Supervised learning optimizes against known target labels using loss functions. Unsupervised learning optimizes internal cohesion (keeping clusters tight and separated). Both form the backbone of modern machine learning technology.',
    takeaway: 'Classification sorts data into known categories; Clustering discovers unknown groups on its own.'
  }
};


/**
 * Chapter 8: Decision Trees
 * Deep, rich visual interactive implementations of Concepts 8.1 to 8.4.
 * Explains Decision Trees, branching questions, and pure splits for school kids (Classes 5-10).
 */

const CHAPTER_8_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 8.1: Decisions by Asking Questions
  ------------------------------------------------------------- */
  '8.1': {
    kicker: 'Chapter 8 · Concept 8.1',
    title: 'Decisions by Asking Questions',
    question: 'How can you guess any secret animal by asking just 3 Yes/No questions?',
    questionDesc: 'Have you ever played the game "20 Questions"? One person thinks of a secret animal, and you try to guess it. You don\'t shout wild guesses like "Is it a zebra?", "Is it a jellyfish?". Instead, you ask smart Yes/No questions that eliminate half the animals in one shot!',
    visHint: '👆 Play the Animal Guesser below! Answer the two simple Yes/No questions to watch the game eliminate animals!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Candidate Animals Shelf -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1rem; text-align: center;">
            <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Candidate Animals in the Zoo</span>
            
            <div id="c81-shelf" style="display: flex; justify-content: space-around; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;">
              <div id="c81-card-sparrow" style="background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; width: 95px; text-align: center;">
                <div style="font-size: 2rem;">🐦</div>
                <strong style="font-size: 0.75rem; color: #0f172a;">Sparrow</strong>
              </div>

              <div id="c81-card-goldfish" style="background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; width: 95px; text-align: center;">
                <div style="font-size: 2rem;">🐠</div>
                <strong style="font-size: 0.75rem; color: #0f172a;">Goldfish</strong>
              </div>

              <div id="c81-card-dog" style="background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; width: 95px; text-align: center;">
                <div style="font-size: 2rem;">🐕</div>
                <strong style="font-size: 0.75rem; color: #0f172a;">Puppy Dog</strong>
              </div>

              <div id="c81-card-elephant" style="background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 0.75rem; width: 95px; text-align: center;">
                <div style="font-size: 2rem;">🐘</div>
                <strong style="font-size: 0.75rem; color: #0f172a;">Elephant</strong>
              </div>
            </div>
          </div>

          <!-- Current Question Box -->
          <div style="background: #eff6ff; border: 2px solid #3b82f6; border-radius: 12px; padding: 1rem; text-align: center; margin: 0.6rem 0;">
            <span style="font-size: 0.72rem; font-weight: 800; color: #1d4ed8; text-transform: uppercase;">Question 1</span>
            <h3 id="c81-question-text" style="margin: 0.25rem 0; font-size: 1.25rem; color: #1e3a8a;">Does the animal have feathers and fly in the sky?</h3>
            <div id="c81-options" style="display: flex; gap: 1rem; justify-content: center; margin-top: 0.6rem;">
              <button class="mlk-control-btn success" onclick="window.c81Answer(true)">✅ YES, it flies!</button>
              <button class="mlk-control-btn danger" onclick="window.c81Answer(false)">❌ NO, it stays on ground/water</button>
            </div>
          </div>

          <!-- Result Bar -->
          <div id="c81-readout" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155;">
            Click Yes or No to test your question power!
          </div>

        </div>
      `;

      window.c81Answer = function(isFly) {
        const sparrow = document.getElementById('c81-card-sparrow');
        const goldfish = document.getElementById('c81-card-goldfish');
        const dog = document.getElementById('c81-card-dog');
        const elephant = document.getElementById('c81-card-elephant');
        const qText = document.getElementById('c81-question-text');
        const opts = document.getElementById('c81-options');
        const rd = document.getElementById('c81-readout');

        if (isFly) {
          // Bird
          goldfish.style.opacity = '0.2';
          dog.style.opacity = '0.2';
          elephant.style.opacity = '0.2';
          sparrow.style.borderColor = '#059669';
          sparrow.style.background = '#ecfdf5';

          qText.textContent = '🎉 Guessed in 1 question: It is a Sparrow 🐦!';
          opts.innerHTML = `<button class="mlk-control-btn primary" onclick="window.c81Reset()">🔄 Play Again</button>`;
          rd.innerHTML = '🎯 <strong style="color: #065f46;">One smart question solved it!</strong> Feathers eliminated all non-birds instantly!';
        } else {
          // Land or water
          sparrow.style.opacity = '0.2';
          qText.textContent = 'Question 2: Does it live underwater and breathe with gills?';
          opts.innerHTML = `
            <button class="mlk-control-btn success" onclick="window.c81AnswerQ2(true)">✅ YES, lives underwater</button>
            <button class="mlk-control-btn danger" onclick="window.c81AnswerQ2(false)">❌ NO, walks on land</button>
          `;
          rd.textContent = 'Sparrow eliminated! 3 animals remaining. Answer Question 2!';
        }
      };

      window.c81AnswerQ2 = function(isWater) {
        const goldfish = document.getElementById('c81-card-goldfish');
        const dog = document.getElementById('c81-card-dog');
        const elephant = document.getElementById('c81-card-elephant');
        const qText = document.getElementById('c81-question-text');
        const opts = document.getElementById('c81-options');
        const rd = document.getElementById('c81-readout');

        if (isWater) {
          dog.style.opacity = '0.2';
          elephant.style.opacity = '0.2';
          goldfish.style.borderColor = '#059669';
          goldfish.style.background = '#ecfdf5';
          qText.textContent = '🎉 Guessed in 2 questions: It is a Goldfish 🐠!';
          opts.innerHTML = `<button class="mlk-control-btn primary" onclick="window.c81Reset()">🔄 Play Again</button>`;
          rd.innerHTML = '🎯 <strong style="color: #065f46;">Solved in 2 questions!</strong> Swimming eliminated all land mammals.';
        } else {
          goldfish.style.opacity = '0.2';
          qText.textContent = 'Question 3: Does it weigh more than 1,000 kg and have a long trunk?';
          opts.innerHTML = `
            <button class="mlk-control-btn success" onclick="window.c81AnswerQ3(true)">✅ YES, huge elephant!</button>
            <button class="mlk-control-btn danger" onclick="window.c81AnswerQ3(false)">❌ NO, playful puppy!</button>
          `;
          rd.textContent = 'Only two land animals left: Elephant vs Puppy! One more question will solve it.';
        }
      };

      window.c81AnswerQ3 = function(isHuge) {
        const dog = document.getElementById('c81-card-dog');
        const elephant = document.getElementById('c81-card-elephant');
        const qText = document.getElementById('c81-question-text');
        const opts = document.getElementById('c81-options');
        const rd = document.getElementById('c81-readout');

        if (isHuge) {
          dog.style.opacity = '0.2';
          elephant.style.borderColor = '#059669';
          elephant.style.background = '#ecfdf5';
          qText.textContent = '🎉 It is an Elephant 🐘!';
        } else {
          elephant.style.opacity = '0.2';
          dog.style.borderColor = '#059669';
          dog.style.background = '#ecfdf5';
          qText.textContent = '🎉 It is a Puppy Dog 🐕!';
        }
        opts.innerHTML = `<button class="mlk-control-btn primary" onclick="window.c81Reset()">🔄 Play Again</button>`;
        rd.innerHTML = '🎯 <strong style="color: #065f46;">Every animal was uniquely identified through a sequence of Yes/No questions!</strong>';
      };

      window.c81Reset = function() {
        document.querySelectorAll('#c81-shelf > div').forEach(d => {
          d.style.opacity = '1';
          d.style.borderColor = '#cbd5e1';
          d.style.background = '#f8fafc';
        });
        document.getElementById('c81-question-text').textContent = 'Does the animal have feathers and fly in the sky?';
        document.getElementById('c81-options').innerHTML = `
          <button class="mlk-control-btn success" onclick="window.c81Answer(true)">✅ YES, it flies!</button>
          <button class="mlk-control-btn danger" onclick="window.c81Answer(false)">❌ NO, it stays on ground/water</button>
        `;
        document.getElementById('c81-readout').textContent = 'Click Yes or No to test your question power!';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Answer the questions above to see how a chain of Yes/No splits solves complex choices!
        </span>
      `;
    },

    observation: 'Notice that we didn\'t need a supercomputer to guess the animals. By asking just 3 simple Yes/No questions, we filtered out the wrong answers step by step until only the exact correct animal remained!',
    mechanism: 'In Machine Learning, this branching structure is called a Decision Tree. Each question splits the data into two cleaner branches. By connecting questions in a chain, the computer can classify complex real-world data in milliseconds.',
    takeaway: 'A Decision Tree makes predictions by asking a step-by-step chain of simple Yes/No questions.'
  },

  /* -------------------------------------------------------------
     Concept 8.2: A Tree of Questions
  ------------------------------------------------------------- */
  '8.2': {
    kicker: 'Chapter 8 · Concept 8.2',
    title: 'A Tree of Questions',
    question: 'Why do computer scientists draw decision trees upside-down?',
    questionDesc: 'In nature, trees grow with their roots buried in the soil and their leafy branches reaching up toward the sky. But in computer science, decision trees are drawn upside-down! The main Root question sits proudly at the very top, branches split downwards, and the final answers (the Leaves) hang at the bottom.',
    visHint: '👆 Click the buttons below to highlight the Root Question, the Branches, and the final Leaf Answers!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c82-svg" viewBox="0 0 500 230" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Connecting Branches Lines -->
              <line id="c82-b1" x1="250" y1="45" x2="140" y2="105" stroke="#94a3b8" stroke-width="2.5" />
              <line id="c82-b2" x1="250" y1="45" x2="360" y2="105" stroke="#94a3b8" stroke-width="2.5" />
              <line id="c82-b3" x1="360" y1="125" x2="300" y2="185" stroke="#94a3b8" stroke-width="2" />
              <line id="c82-b4" x1="360" y1="125" x2="420" y2="185" stroke="#94a3b8" stroke-width="2" />

              <text x="180" y="70" font-size="10" fill="#dc2626" font-weight="700">YES</text>
              <text x="315" y="70" font-size="10" fill="#2563eb" font-weight="700">NO</text>

              <!-- Level 1: Root Node (Top) -->
              <g id="c82-root" transform="translate(250, 40)">
                <rect x="-80" y="-18" width="160" height="36" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
                <text x="0" y="4" font-size="11" fill="#1e40af" font-weight="800" text-anchor="middle">Is Weight > 5 kg?</text>
              </g>

              <!-- Level 2: Left Leaf Node -->
              <g id="c82-leaf1" transform="translate(140, 115)">
                <rect x="-60" y="-16" width="120" height="32" rx="8" fill="#ecfdf5" stroke="#059669" stroke-width="2" />
                <text x="0" y="4" font-size="11" fill="#065f46" font-weight="800" text-anchor="middle">Heavy: Elephant 🐘</text>
              </g>

              <!-- Level 2: Right Branch Node -->
              <g id="c82-branch" transform="translate(360, 115)">
                <rect x="-70" y="-16" width="140" height="32" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
                <text x="0" y="4" font-size="11" fill="#334155" font-weight="800" text-anchor="middle">Can it fly in sky?</text>
              </g>

              <!-- Level 3: Leaves -->
              <g id="c82-leaf2" transform="translate(300, 195)">
                <rect x="-45" y="-14" width="90" height="28" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2" />
                <text x="0" y="4" font-size="10" fill="#065f46" font-weight="800" text-anchor="middle">Sparrow 🐦</text>
              </g>

              <g id="c82-leaf3" transform="translate(420, 195)">
                <rect x="-45" y="-14" width="90" height="28" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2" />
                <text x="0" y="4" font-size="10" fill="#065f46" font-weight="800" text-anchor="middle">Goldfish 🐠</text>
              </g>
            </svg>
          </div>

          <!-- Anatomical Guide -->
          <div id="c82-guide" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Click below to highlight the parts of an upside-down Decision Tree!
          </div>

        </div>
      `;

      window.c82Highlight = function(part) {
        const root = document.querySelector('#c82-root rect');
        const leaves = document.querySelectorAll('#c82-leaf1 rect, #c82-leaf2 rect, #c82-leaf3 rect');
        const branches = document.querySelectorAll('#c82-b1, #c82-b2, #c82-b3, #c82-b4');
        const gd = document.getElementById('c82-guide');

        if (part === 'root') {
          root.setAttribute('stroke', '#dc2626');
          root.setAttribute('stroke-width', '4');
          gd.innerHTML = '🌱 <strong style="color: #2563eb;">The Root Node:</strong> Sits at the very top! Every decision starts right here at this master question.';
        } else if (part === 'branches') {
          branches.forEach(b => {
            b.setAttribute('stroke', '#2563eb');
            b.setAttribute('stroke-width', '4');
          });
          gd.innerHTML = '🌿 <strong style="color: #2563eb;">The Branches:</strong> The Yes and No pathways that lead down to more questions or answers.';
        } else {
          leaves.forEach(l => {
            l.setAttribute('stroke', '#d97706');
            l.setAttribute('stroke-width', '4');
          });
          gd.innerHTML = '🍃 <strong style="color: #059669;">The Leaves (Terminal Nodes):</strong> The final green boxes at the bottom that give you the prediction!';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c82Highlight('root')">🌱 1. Highlight Root Question</button>
        <button class="mlk-control-btn warning" onclick="window.c82Highlight('branches')">🌿 2. Highlight Branches</button>
        <button class="mlk-control-btn success" onclick="window.c82Highlight('leaves')">🍃 3. Highlight Final Leaves</button>
      `;
    },

    observation: 'Can you see the upside-down anatomy? 1) The Root question at the top asks the biggest clue. 2) The Branches split off into Yes or No highways. 3) The Leaves at the bottom end the journey and hand you the final answer.',
    mechanism: 'In Computer Science, this tree structure is a Directed Acyclic Graph. There are no loops or dead ends; every single branch leads steadily downwards until you land on exactly one Leaf answer. It is one of the easiest AI models for humans to inspect and understand.',
    takeaway: 'A Decision Tree starts at the top Root question, follows Branches, and ends at a Leaf answer.'
  },

  /* -------------------------------------------------------------
     Concept 8.3: Decision Tree Prediction
  ------------------------------------------------------------- */
  '8.3': {
    kicker: 'Chapter 8 · Concept 8.3',
    title: 'Decision Tree Prediction',
    question: 'How does an unseen test item slide down the tree to find its answer?',
    questionDesc: 'Suppose a mystery fruit rolls into our fruit factory. We don\'t know what it is! Let\'s drop it down our decision tree and watch it navigate the branches based on its measurements.',
    visHint: '👆 Pick a mystery fruit below to watch it slide down the tree and land on its correct label!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Test fruit choices -->
          <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn" onclick="window.c83DropFruit('watermelon')" style="background: white;">🍉 Giant Watermelon</button>
            <button class="mlk-control-btn" onclick="window.c83DropFruit('apple')" style="background: white;">🍎 Red Apple</button>
            <button class="mlk-control-btn" onclick="window.c83DropFruit('lemon')" style="background: white;">🍋 Yellow Lemon</button>
          </div>

          <!-- Tree with animated slider marble -->
          <div style="flex: 1; position: relative; margin: 0.5rem 0;">
            <svg id="c83-svg" viewBox="0 0 500 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Tree Lines -->
              <line x1="250" y1="40" x2="140" y2="100" stroke="#cbd5e1" stroke-width="2.5" />
              <line x1="250" y1="40" x2="360" y2="100" stroke="#cbd5e1" stroke-width="2.5" />
              <line x1="360" y1="120" x2="300" y2="175" stroke="#cbd5e1" stroke-width="2" />
              <line x1="360" y1="120" x2="420" y2="175" stroke="#cbd5e1" stroke-width="2" />

              <!-- Root Node -->
              <rect x="170" y="20" width="160" height="34" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
              <text x="250" y="42" font-size="11" fill="#1e40af" font-weight="800" text-anchor="middle">Is Weight > 2 kg?</text>

              <!-- Left Leaf: Watermelon -->
              <rect id="c83-leaf-wm" x="80" y="90" width="120" height="32" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
              <text x="140" y="110" font-size="11" fill="#334155" font-weight="700" text-anchor="middle">🍉 Watermelon</text>

              <!-- Right Question: Color -->
              <rect x="290" y="90" width="140" height="32" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
              <text x="360" y="110" font-size="11" fill="#1e40af" font-weight="800" text-anchor="middle">Is Color Red?</text>

              <!-- Leaves -->
              <rect id="c83-leaf-ap" x="250" y="165" width="100" height="30" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
              <text x="300" y="184" font-size="10" fill="#334155" font-weight="700" text-anchor="middle">🍎 Apple</text>

              <rect id="c83-leaf-lm" x="370" y="165" width="100" height="30" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
              <text x="420" y="184" font-size="10" fill="#334155" font-weight="700" text-anchor="middle">🍋 Lemon</text>

              <!-- Sliding Token -->
              <circle id="c83-token" cx="250" cy="37" r="12" fill="#f59e0b" stroke="#ffffff" stroke-width="3" style="transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);" />
            </svg>
          </div>

          <!-- Dynamic Path Explainer -->
          <div id="c83-status" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Select a fruit above to trace its step-by-step path down the tree!
          </div>

        </div>
      `;

      window.c83DropFruit = function(type) {
        const token = document.getElementById('c83-token');
        const st = document.getElementById('c83-status');
        const lWm = document.getElementById('c83-leaf-wm');
        const lAp = document.getElementById('c83-leaf-ap');
        const lLm = document.getElementById('c83-leaf-lm');

        [lWm, lAp, lLm].forEach(el => {
          el.setAttribute('fill', '#f8fafc');
          el.setAttribute('stroke', '#cbd5e1');
        });

        if (type === 'watermelon') {
          token.setAttribute('cx', '140');
          token.setAttribute('cy', '106');
          token.setAttribute('fill', '#10b981');
          lWm.setAttribute('fill', '#ecfdf5');
          lWm.setAttribute('stroke', '#059669');
          st.innerHTML = '🍉 <strong>Giant Watermelon Path:</strong> Weight is 4 kg (> 2 kg) → Turned Left at Root → Landed on Leaf: <strong>Watermelon!</strong>';
        } else if (type === 'apple') {
          token.setAttribute('cx', '300');
          token.setAttribute('cy', '180');
          token.setAttribute('fill', '#dc2626');
          lAp.setAttribute('fill', '#fee2e2');
          lAp.setAttribute('stroke', '#dc2626');
          st.innerHTML = '🍎 <strong>Red Apple Path:</strong> Weight is 0.2 kg (Not > 2 kg) → Turned Right → Color is Red → Turned Left → Landed on Leaf: <strong>Apple!</strong>';
        } else {
          token.setAttribute('cx', '420');
          token.setAttribute('cy', '180');
          token.setAttribute('fill', '#eab308');
          lLm.setAttribute('fill', '#fef9c3');
          lLm.setAttribute('stroke', '#ca8a04');
          st.innerHTML = '🍋 <strong>Lemon Path:</strong> Weight is 0.1 kg → Turned Right → Color is NOT Red → Turned Right → Landed on Leaf: <strong>Lemon!</strong>';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Click the fruits above to watch each one navigate its unique path through the decision tree!
        </span>
      `;
    },

    observation: 'Notice that each fruit followed its own personal path down the branches! The giant watermelon only needed 1 question to be identified because its weight (> 2 kg) made it completely unique. The apple and lemon needed a second question to check their color.',
    mechanism: 'During prediction (inference), the decision tree evaluates each condition for the incoming data item. If the condition is True, it follows the left branch; if False, the right branch. The process terminates when a leaf node is reached, returning the predicted class.',
    takeaway: 'To make a prediction, an item starts at the root and follows the branches down to its leaf.'
  },

  /* -------------------------------------------------------------
     Concept 8.4: How a Tree Learns
  ------------------------------------------------------------- */
  '8.4': {
    kicker: 'Chapter 8 · Concept 8.4',
    title: 'How a Tree Learns',
    question: 'How does a computer decide which question to ask first?',
    questionDesc: 'If you have a basket filled with 10 red apples and 10 yellow lemons, what is a terrible question to ask? "Is the fruit round?" — because BOTH apples and lemons are round, leaving you with the exact same messy 50/50 mix! What is a brilliant question? "Is the color yellow?" — that cleanly separates them in one single slice!',
    visHint: '👆 Compare Question A vs Question B below to see the difference between a Messy Split and a 100% Pure Split!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: stretch;">
            
            <!-- Question A: Terrible Messy Split -->
            <div style="background: #ffffff; border: 2px solid #ef4444; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #dc2626; text-transform: uppercase;">Question A (Bad Choice)</span>
                <h4 style="margin: 0.35rem 0; font-size: 1rem; color: #0f172a;">"Is the fruit round?"</h4>
                
                <div style="display: flex; justify-content: space-around; margin: 0.75rem 0;">
                  <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem; width: 45%;">
                    <div style="font-size: 1.4rem;">🍎 🍋 🍎</div>
                    <span style="font-size: 0.72rem; color: #991b1b; font-weight: 700;">Still Messy 50/50!</span>
                  </div>

                  <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem; width: 45%;">
                    <div style="font-size: 1.4rem;">🍋 🍎 🍋</div>
                    <span style="font-size: 0.72rem; color: #991b1b; font-weight: 700;">Still Mixed Up!</span>
                  </div>
                </div>
              </div>

              <div style="background: #fee2e2; color: #991b1b; padding: 0.4rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700;">
                ❌ Low Information Gain (Messy!)
              </div>
            </div>

            <!-- Question B: Brilliant Pure Split -->
            <div style="background: #ffffff; border: 2px solid #059669; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase;">Question B (Brilliant Choice)</span>
                <h4 style="margin: 0.35rem 0; font-size: 1rem; color: #0f172a;">"Is the color yellow?"</h4>
                
                <div style="display: flex; justify-content: space-around; margin: 0.75rem 0;">
                  <div style="background: #fefce8; border: 1px solid #fde047; border-radius: 8px; padding: 0.5rem; width: 45%;">
                    <div style="font-size: 1.4rem;">🍋 🍋 🍋</div>
                    <span style="font-size: 0.72rem; color: #854d0e; font-weight: 800;">100% Lemons!</span>
                  </div>

                  <div style="background: #fee2e2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem; width: 45%;">
                    <div style="font-size: 1.4rem;">🍎 🍎 🍎</div>
                    <span style="font-size: 0.72rem; color: #991b1b; font-weight: 800;">100% Apples!</span>
                  </div>
                </div>
              </div>

              <div style="background: #ecfdf5; color: #065f46; padding: 0.4rem; border-radius: 6px; font-size: 0.78rem; font-weight: 700;">
                ✅ 100% Pure Split! (Winner)
              </div>
            </div>

          </div>

          <!-- Bottom explanation -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            A decision tree always chooses the question that cuts the data into the purest possible groups!
          </div>

        </div>
      `;
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          A tree tests every possible feature, measures the purity of the split, and crowns the best question!
        </span>
      `;
    },

    observation: 'Look at the two bowls under Question B: one bowl contains ONLY lemons, and the other bowl contains ONLY apples. That is a 100% clean, pure split! Question A was useless because both sides remained a messy mixture.',
    mechanism: 'In Machine Learning, this cleanliness score is called Purity (or reduction in Entropy / Information Gain). To build a tree, the computer evaluates every single feature, tests every possible question, and selects the question that produces the highest purity. It repeats this recursively until all leaves are pure!',
    takeaway: 'A Decision Tree learns by always picking the question that separates the data into the cleanest, purest groups.'
  }
};


/**
 * Chapter 9: Neural Networks
 * Deep, rich visual interactive implementations of Concepts 9.1 to 9.6.
 * Explains Neurons, Weights, Layers, Forward Flow, and Backpropagation for school kids (Classes 5-10).
 */

const CHAPTER_9_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 9.1: Combining Several Clues
  ------------------------------------------------------------- */
  '9.1': {
    kicker: 'Chapter 9 · Concept 9.1',
    title: 'Combining Several Clues',
    question: 'How does your brain combine 3 different clues to make a single decision?',
    questionDesc: 'Think about how you decide whether to go to the park to play cricket. You don\'t just look at one clue! You check: 1) Is the weather sunny? 2) Is it the weekend? 3) Are your friends free? Your brain adds all these clues together in your head to make one final choice: "Yes, let\'s play!" or "No, stay inside!".',
    visHint: '👆 Flip the 3 clue switches below to see how your brain calculates the final choice!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- 3 Clue Switches -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.65rem;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Input Clues (Sensory Signals)</span>
              
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.5rem 0.75rem; border-radius: 8px;">
                <span style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">☀️ Weather is Sunny:</span>
                <input id="c91-sw-1" type="checkbox" checked onchange="window.c91Compute()" style="width: 20px; height: 20px; accent-color: #2563eb;">
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.5rem 0.75rem; border-radius: 8px;">
                <span style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">📅 Is It Weekend / Holiday:</span>
                <input id="c91-sw-2" type="checkbox" checked onchange="window.c91Compute()" style="width: 20px; height: 20px; accent-color: #2563eb;">
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.5rem 0.75rem; border-radius: 8px;">
                <span style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">👥 Friends are Free to Play:</span>
                <input id="c91-sw-3" type="checkbox" onchange="window.c91Compute()" style="width: 20px; height: 20px; accent-color: #2563eb;">
              </div>
            </div>

            <!-- Decision Box -->
            <div id="c91-decision-box" style="background: #ecfdf5; border: 2px solid #059669; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #047857; text-transform: uppercase;">Final Decision</span>
              <div id="c91-icon" style="font-size: 3.5rem; margin: 0.35rem 0;">🏏</div>
              <strong id="c91-title" style="font-size: 1.15rem; color: #065f46; display: block;">Go Play Outside!</strong>
              <div id="c91-score" style="font-size: 0.8rem; color: #047857; font-weight: 700; margin-top: 0.25rem;">Score: 2 out of 3 Yes votes</div>
            </div>

          </div>

          <!-- Dynamic Status -->
          <div id="c91-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            When 2 or more clues say YES, the decision triggers to Play!
          </div>

        </div>
      `;

      window.c91Compute = function() {
        const sw1 = document.getElementById('c91-sw-1').checked;
        const sw2 = document.getElementById('c91-sw-2').checked;
        const sw3 = document.getElementById('c91-sw-3').checked;

        let yesCount = 0;
        if (sw1) yesCount++;
        if (sw2) yesCount++;
        if (sw3) yesCount++;

        const box = document.getElementById('c91-decision-box');
        const icon = document.getElementById('c91-icon');
        const title = document.getElementById('c91-title');
        const score = document.getElementById('c91-score');
        const rd = document.getElementById('c91-readout');

        score.textContent = `Score: ${yesCount} out of 3 Yes votes`;

        if (yesCount >= 2) {
          box.style.background = '#ecfdf5';
          box.style.borderColor = '#059669';
          icon.textContent = '🏏';
          title.textContent = 'Go Play Outside!';
          title.style.color = '#065f46';
          rd.textContent = `Score = ${yesCount}. Threshold is 2. The signal fired YES!`;
        } else {
          box.style.background = '#fee2e2';
          box.style.borderColor = '#ef4444';
          icon.textContent = '🏠 🌧️';
          title.textContent = 'Stay Indoors & Read';
          title.style.color = '#991b1b';
          rd.textContent = `Score = ${yesCount}. Not enough positive clues. The signal stayed OFF.`;
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Toggle the switches above to see how incoming inputs combine to cross an activation threshold!
        </span>
      `;
    },

    observation: 'Notice that no single clue made the decision alone! Even if the weather is sunny, if it is a school morning and no friends are outside, you stay home. The decision happens only when enough clues combine to cross a threshold.',
    mechanism: 'Biological neurons in the human brain work exactly like this: they collect electrical signals from thousands of neighboring cells, sum them up, and if the total voltage crosses a threshold, the neuron fires an electrical pulse. AI engineers copied this exact principle to create Artificial Neural Networks!',
    takeaway: 'Our brain makes decisions by combining several clues together and checking if the total crosses a threshold.'
  },

  /* -------------------------------------------------------------
     Concept 9.2: A Simple Artificial Neuron
  ------------------------------------------------------------- */
  '9.2': {
    kicker: 'Chapter 9 · Concept 9.2',
    title: 'A Simple Artificial Neuron',
    question: 'How do you build a tiny electronic brain cell on a computer?',
    questionDesc: 'An Artificial Neuron is the building block of modern AI! It has 3 simple parts: 1) Incoming Input Numbers, 2) Weight Dials that multiply each input, and 3) An Activation Threshold that fires a spark if the total sum is big enough.',
    visHint: '👆 Adjust the Weight dials below. When the total electrical charge reaches 10, the neuron fires!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c92-svg" viewBox="0 0 500 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Input Wires -->
              <line x1="80" y1="65" x2="230" y2="105" stroke="#94a3b8" stroke-width="3" />
              <line x1="80" y1="145" x2="230" y2="105" stroke="#94a3b8" stroke-width="3" />

              <!-- Output Wire -->
              <line id="c92-out-wire" x1="270" y1="105" x2="420" y2="105" stroke="#94a3b8" stroke-width="4" />

              <!-- Inputs Circles -->
              <circle cx="80" cy="65" r="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
              <text x="80" y="70" font-size="11" fill="#1e40af" font-weight="800" text-anchor="middle">x₁ = 2</text>

              <circle cx="80" cy="145" r="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
              <text x="80" y="150" font-size="11" fill="#1e40af" font-weight="800" text-anchor="middle">x₂ = 3</text>

              <!-- Weight Badges on Wires -->
              <rect x="135" y="65" width="50" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1" />
              <text id="c92-w1-txt" x="160" y="79" font-size="10" fill="#dc2626" font-weight="800" text-anchor="middle">w₁=3</text>

              <rect x="135" y="125" width="50" height="20" rx="4" fill="#ffffff" stroke="#cbd5e1" />
              <text id="c92-w2-txt" x="160" y="139" font-size="10" fill="#dc2626" font-weight="800" text-anchor="middle">w₂=2</text>

              <!-- Central Neuron Body (Sum & Fire) -->
              <circle id="c92-soma" cx="250" cy="105" r="32" fill="#f8fafc" stroke="#94a3b8" stroke-width="3" style="transition: all 0.3s ease;" />
              <text x="250" y="100" font-size="14" fill="#0f172a" font-weight="800" text-anchor="middle">Σ Sum</text>
              <text id="c92-sum-txt" x="250" y="118" font-size="11" fill="#2563eb" font-weight="800" text-anchor="middle">= 12</text>

              <!-- Output Light Bulb -->
              <g id="c92-bulb" transform="translate(420, 105)">
                <circle cx="0" cy="0" r="22" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
                <text id="c92-bulb-icon" x="0" y="6" font-size="16" text-anchor="middle">💡</text>
              </g>
            </svg>
          </div>

          <!-- Real-time Sum Calculation -->
          <div id="c92-status" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            Sum = (2 × 3) + (3 × 2) = 12. Threshold is 10. The Neuron Fires ON! ⚡
          </div>

        </div>
      `;

      window.c92Update = function() {
        const w1 = parseInt(document.getElementById('c92-w1-slider').value, 10);
        const w2 = parseInt(document.getElementById('c92-w2-slider').value, 10);

        document.getElementById('c92-w1-txt').textContent = `w₁=${w1}`;
        document.getElementById('c92-w2-txt').textContent = `w₂=${w2}`;

        const sum = (2 * w1) + (3 * w2);
        document.getElementById('c92-sum-txt').textContent = `= ${sum}`;

        const soma = document.getElementById('c92-soma');
        const wire = document.getElementById('c92-out-wire');
        const bulb = document.querySelector('#c92-bulb circle');
        const st = document.getElementById('c92-status');

        if (sum >= 10) {
          soma.setAttribute('fill', '#ecfdf5');
          soma.setAttribute('stroke', '#059669');
          wire.setAttribute('stroke', '#059669');
          bulb.setAttribute('fill', '#fef08a');
          bulb.setAttribute('stroke', '#ca8a04');
          st.innerHTML = `⚡ <strong>FIRED!</strong> Total Sum = ${sum} (≥ 10 threshold). Electrical pulse sent forward!`;
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
        } else {
          soma.setAttribute('fill', '#f8fafc');
          soma.setAttribute('stroke', '#94a3b8');
          wire.setAttribute('stroke', '#94a3b8');
          bulb.setAttribute('fill', '#f1f5f9');
          bulb.setAttribute('stroke', '#94a3b8');
          st.innerHTML = `😴 <strong>Quiet!</strong> Total Sum = ${sum} (< 10 threshold). Not enough charge to fire.`;
          st.style.background = '#f8fafc';
          st.style.borderColor = '#cbd5e1';
          st.style.color = '#475569';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Weight Dial 1 (w₁):</span>
          <input id="c92-w1-slider" type="range" min="0" max="5" value="3" oninput="window.c92Update()">
        </div>
        <div class="mlk-slider-group">
          <span>Weight Dial 2 (w₂):</span>
          <input id="c92-w2-slider" type="range" min="0" max="5" value="2" oninput="window.c92Update()">
        </div>
      `;
    },

    observation: 'Notice that when both weight dials were low (0 or 1), the total sum remained small and the bulb stayed dark. But as soon as you dialed up the weights, the total sum crossed 10 and the entire circuit lit up with bright green energy!',
    mechanism: 'In mathematical terms, a neuron computes: Output = Activation(x₁·w₁ + x₂·w₂ + bias). The weights dictate how much each input matters. The activation function (like ReLU or Sigmoid) decides whether the neuron fires a pulse or stays silent.',
    takeaway: 'An artificial neuron multiplies inputs by weights, sums them up, and fires if the total crosses a threshold.'
  },

  /* -------------------------------------------------------------
     Concept 9.3: Weights
  ------------------------------------------------------------- */
  '9.3': {
    kicker: 'Chapter 9 · Concept 9.3',
    title: 'Weights',
    question: 'Why do important clues get huge weights while silly clues get zero?',
    questionDesc: 'Not all clues are created equal! If you are shopping for a new bicycle, what matters more: 1) Does it have strong working brakes? or 2) Does it have a shiny sticker on the handlebars? Of course the brakes matter 1,000 times more! In Machine Learning, we give huge weights to critical clues and tiny weights to silly clues.',
    visHint: '👆 Compare the Safety Clue (High Weight) vs the Sticker Clue (Low Weight) below!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: stretch;">
            
            <!-- High Weight Clue -->
            <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Heavyweight Clue</span>
                <div style="font-size: 2.5rem; margin: 0.35rem 0;">🛑 🚲</div>
                <strong style="color: #0f172a; font-size: 1rem; display: block;">Working Hand Brakes</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.25rem;">
                  Essential for life and safety! If brakes fail, you crash.
                </p>
              </div>

              <div style="background: #dbeafe; border-radius: 8px; padding: 0.6rem;">
                <div style="font-size: 0.75rem; color: #1e40af; font-weight: 700;">Weight Multiplier:</div>
                <div style="font-size: 1.8rem; font-weight: 800; color: #1d4ed8;">× 10.0</div>
                <span style="font-size: 0.72rem; color: #1e40af;">Massive vote on the decision!</span>
              </div>
            </div>

            <!-- Tiny Weight Clue -->
            <div style="background: #ffffff; border: 2px solid #94a3b8; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Lightweight Clue</span>
                <div style="font-size: 2.5rem; margin: 0.35rem 0;">⭐ 🏷️</div>
                <strong style="color: #0f172a; font-size: 1rem; display: block;">Cool Shiny Sticker</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.25rem;">
                  Fun to look at, but doesn't help you ride up a hill!
                </p>
              </div>

              <div style="background: #f1f5f9; border-radius: 8px; padding: 0.6rem;">
                <div style="font-size: 0.75rem; color: #64748b; font-weight: 700;">Weight Multiplier:</div>
                <div style="font-size: 1.8rem; font-weight: 800; color: #475569;">× 0.1</div>
                <span style="font-size: 0.72rem; color: #64748b;">Tiny, negligible vote.</span>
              </div>
            </div>

          </div>

          <!-- Bottom takeaway -->
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            When an AI trains, it automatically increases the weights of useful clues and silences useless clues!
          </div>

        </div>
      `;
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Weights act like volume knobs: turn up the volume on clues that help, turn down clues that distract!
        </span>
      `;
    },

    observation: 'Look at the multiplier numbers: Working Brakes has a weight of ×10.0, while Shiny Sticker only gets ×0.1. Even if a bicycle has 5 shiny stickers, if the brakes are missing, the heavy brake weight overpowers everything and rejects the bicycle!',
    mechanism: 'In neural networks, training consists almost entirely of adjusting these weights. If an input feature regularly leads to correct predictions, the optimization algorithm boosts its weight. If a feature is random noise, the algorithm drives its weight toward 0.0.',
    takeaway: 'Weights determine how much importance the neuron gives to each incoming clue.'
  },

  /* -------------------------------------------------------------
     Concept 9.4: Connecting Neurons
  ------------------------------------------------------------- */
  '9.4': {
    kicker: 'Chapter 9 · Concept 9.4',
    title: 'Connecting Neurons',
    question: 'How do neurons team up in layers to understand complex pictures?',
    questionDesc: 'One single neuron can only make simple decisions. But when you connect hundreds of neurons together into organized teams called Layers, something magical happens! The first layer detects simple edges, the middle layer combines edges into shapes (like wheels or eyes), and the final layer recognizes the entire object!',
    visHint: '👆 Click "Send Image Pulse" to watch information flow from Left (Pixels) to Middle (Shapes) to Right (Object)!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c94-svg" viewBox="0 0 500 210" style="width: 100%; height: 100%; background: #0f172a; border-radius: 10px; border: 1px solid #1e293b;">
              <!-- Connecting wires between Layer 1 and Layer 2 -->
              <g stroke="#334155" stroke-width="1.5">
                <line x1="80" y1="50" x2="250" y2="60" />
                <line x1="80" y1="50" x2="250" y2="105" />
                <line x1="80" y1="50" x2="250" y2="150" />
                <line x1="80" y1="105" x2="250" y2="60" />
                <line x1="80" y1="105" x2="250" y2="105" />
                <line x1="80" y1="105" x2="250" y2="150" />
                <line x1="80" y1="160" x2="250" y2="60" />
                <line x1="80" y1="160" x2="250" y2="105" />
                <line x1="80" y1="160" x2="250" y2="150" />

                <!-- Layer 2 to Layer 3 -->
                <line x1="250" y1="60" x2="420" y2="105" />
                <line x1="250" y1="105" x2="420" y2="105" />
                <line x1="250" y1="150" x2="420" y2="105" />
              </g>

              <!-- Layer 1: Input Neurons (Edges) -->
              <circle id="c94-l1-1" cx="80" cy="50" r="14" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <circle id="c94-l1-2" cx="80" cy="105" r="14" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <circle id="c94-l1-3" cx="80" cy="160" r="14" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
              <text x="80" y="25" font-size="10" fill="#93c5fd" font-weight="700" text-anchor="middle">Layer 1: Edges</text>

              <!-- Layer 2: Hidden Neurons (Parts) -->
              <circle id="c94-l2-1" cx="250" cy="60" r="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
              <circle id="c94-l2-2" cx="250" cy="105" r="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
              <circle id="c94-l2-3" cx="250" cy="150" r="14" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
              <text x="250" y="25" font-size="10" fill="#c4b5fd" font-weight="700" text-anchor="middle">Layer 2: Parts (Eyes/Ears)</text>

              <!-- Layer 3: Output Neuron (Recognized Object) -->
              <circle id="c94-l3" cx="420" cy="105" r="18" fill="#1e293b" stroke="#10b981" stroke-width="2" />
              <text x="420" y="25" font-size="10" fill="#6ee7b7" font-weight="700" text-anchor="middle">Layer 3: Output</text>
              <text id="c94-l3-icon" x="420" y="110" font-size="14" text-anchor="middle">🐱</text>
            </svg>
          </div>

          <!-- Dynamic Flow Status -->
          <div id="c94-status" style="background: #1e293b; color: #f8fafc; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; margin-top: 0.4rem;">
            Click below to pulse a cat image through the 3 layers!
          </div>

        </div>
      `;

      window.c94Pulse = function() {
        const l1 = [document.getElementById('c94-l1-1'), document.getElementById('c94-l1-2'), document.getElementById('c94-l1-3')];
        const l2 = [document.getElementById('c94-l2-1'), document.getElementById('c94-l2-2'), document.getElementById('c94-l2-3')];
        const l3 = document.getElementById('c94-l3');
        const st = document.getElementById('c94-status');

        // Step 1: Layer 1 glow
        l1.forEach(c => c.setAttribute('fill', '#3b82f6'));
        st.innerHTML = '🌊 <strong>Step 1:</strong> Layer 1 senses horizontal and vertical lines in the image!';

        setTimeout(() => {
          l1.forEach(c => c.setAttribute('fill', '#1e293b'));
          l2.forEach(c => c.setAttribute('fill', '#8b5cf6'));
          st.innerHTML = '✨ <strong>Step 2:</strong> Hidden Layer combines lines into pointed ears and round eyes!';
        }, 600);

        setTimeout(() => {
          l2.forEach(c => c.setAttribute('fill', '#1e293b'));
          l3.setAttribute('fill', '#10b981');
          st.innerHTML = '🎉 <strong>Step 3:</strong> Final Output Layer fires: <strong>Cat Recognized with 99% confidence!</strong>';
        }, 1200);
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn primary" onclick="window.c94Pulse()">⚡ Send Image Pulse Through Layers</button>
      `;
    },

    observation: 'Watch the wave of light travel across the network from left to right! First, the raw sensory layer flashed blue. Then, the hidden layer combined those clues and flashed purple. Finally, the green output neuron fired: Cat recognized!',
    mechanism: 'This multi-tier architecture is why modern AI is called Deep Learning — because the network has multiple hidden layers (depth). Each layer builds on the representations learned by previous layers, enabling neural networks to recognize faces, understand human speech, and drive cars.',
    takeaway: 'Neurons team up in layers: early layers find simple lines, middle layers find shapes, and final layers recognize objects.'
  },

  /* -------------------------------------------------------------
     Concept 9.5: Making a Prediction
  ------------------------------------------------------------- */
  '9.5': {
    kicker: 'Chapter 9 · Concept 9.5',
    title: 'Making a Prediction',
    question: 'What is Forward Propagation?',
    questionDesc: 'When you feed numbers into a neural network, how does the final answer come out? The numbers flow forward through the wires, get multiplied by weights, added up at each neuron, and push through to the end. In AI, this forward journey is called Forward Propagation.',
    visHint: '👆 Choose an animal sketch below to watch the numbers propagate forward to the winning output bulb!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn" onclick="window.c95Test('cat')" style="background: white;">🐱 Cat Sketch</button>
            <button class="mlk-control-btn" onclick="window.c95Test('dog')" style="background: white;">🐶 Dog Sketch</button>
            <button class="mlk-control-btn" onclick="window.c95Test('fish')" style="background: white;">🐟 Fish Sketch</button>
          </div>

          <div style="display: flex; justify-content: space-around; align-items: center; flex: 1; margin: 1rem 0;">
            
            <!-- Input Sketch -->
            <div style="background: #ffffff; border: 2px solid #cbd5e1; border-radius: 12px; padding: 1rem; width: 130px; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Input Image</span>
              <div id="c95-sketch" style="font-size: 3.2rem; margin: 0.25rem 0;">🐱</div>
              <span id="c95-sketch-name" style="font-size: 0.8rem; font-weight: 700; color: #0f172a;">Cat Photo</span>
            </div>

            <!-- Forward arrow -->
            <div style="text-align: center;">
              <div style="font-size: 2.2rem; color: #2563eb; font-weight: 800;">➔ ➔</div>
              <span style="font-size: 0.72rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Forward Pass</span>
            </div>

            <!-- 3 Output Candidate Bars -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1rem; width: 220px;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Output Probabilities</span>
              
              <div style="margin: 0.5rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700;">
                  <span>🐱 Cat:</span>
                  <span id="c95-p-cat">92%</span>
                </div>
                <div style="height: 10px; background: #e2e8f0; border-radius: 999px; overflow: hidden; margin-top: 0.2rem;">
                  <div id="c95-b-cat" style="width: 92%; height: 100%; background: #059669; transition: width 0.3s ease;"></div>
                </div>
              </div>

              <div style="margin: 0.5rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700;">
                  <span>🐶 Dog:</span>
                  <span id="c95-p-dog">6%</span>
                </div>
                <div style="height: 10px; background: #e2e8f0; border-radius: 999px; overflow: hidden; margin-top: 0.2rem;">
                  <div id="c95-b-dog" style="width: 6%; height: 100%; background: #94a3b8; transition: width 0.3s ease;"></div>
                </div>
              </div>

              <div style="margin: 0.5rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700;">
                  <span>🐟 Fish:</span>
                  <span id="c95-p-fish">2%</span>
                </div>
                <div style="height: 10px; background: #e2e8f0; border-radius: 999px; overflow: hidden; margin-top: 0.2rem;">
                  <div id="c95-b-fish" style="width: 2%; height: 100%; background: #94a3b8; transition: width 0.3s ease;"></div>
                </div>
              </div>
            </div>

          </div>

          <!-- Dynamic Status -->
          <div id="c95-status" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Signal propagated forward! The highest output neuron is Cat (92%). Winner decided!
          </div>

        </div>
      `;

      window.c95Test = function(type) {
        const sk = document.getElementById('c95-sketch');
        const skN = document.getElementById('c95-sketch-name');
        const pC = document.getElementById('c95-p-cat');
        const pD = document.getElementById('c95-p-dog');
        const pF = document.getElementById('c95-p-fish');
        const bC = document.getElementById('c95-b-cat');
        const bD = document.getElementById('c95-b-dog');
        const bF = document.getElementById('c95-b-fish');
        const st = document.getElementById('c95-status');

        if (type === 'cat') {
          sk.textContent = '🐱';
          skN.textContent = 'Cat Photo';
          pC.textContent = '92%'; pD.textContent = '6%'; pF.textContent = '2%';
          bC.style.width = '92%'; bC.style.background = '#059669';
          bD.style.width = '6%'; bD.style.background = '#94a3b8';
          bF.style.width = '2%'; bF.style.background = '#94a3b8';
          st.innerHTML = '🎉 Forward pass finished! <strong>Cat neuron lit up at 92%!</strong>';
        } else if (type === 'dog') {
          sk.textContent = '🐶';
          skN.textContent = 'Dog Photo';
          pC.textContent = '4%'; pD.textContent = '94%'; pF.textContent = '2%';
          bC.style.width = '4%'; bC.style.background = '#94a3b8';
          bD.style.width = '94%'; bD.style.background = '#059669';
          bF.style.width = '2%'; bF.style.background = '#94a3b8';
          st.innerHTML = '🎉 Forward pass finished! <strong>Dog neuron lit up at 94%!</strong>';
        } else {
          sk.textContent = '🐟';
          skN.textContent = 'Fish Photo';
          pC.textContent = '1%'; pD.textContent = '1%'; pF.textContent = '98%';
          bC.style.width = '1%'; bC.style.background = '#94a3b8';
          bD.style.width = '1%'; bD.style.background = '#94a3b8';
          bF.style.width = '98%'; bF.style.background = '#059669';
          st.innerHTML = '🎉 Forward pass finished! <strong>Fish neuron lit up at 98%!</strong>';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Select different photos to watch numbers flow forward and ignite the winning output class!
        </span>
      `;
    },

    observation: 'Notice that every input photo produces a percentage for every single category. But because the weights match the cat clues, the Cat neuron scored 92% and easily won the race. The computer picks the category with the highest final score!',
    mechanism: 'In forward propagation, mathematical matrices multiply the inputs through each layer sequentially. At the final layer, a Softmax function converts the raw scores into clean percentages that all add up to 100%. The highest percentage is the model\'s final prediction.',
    takeaway: 'Forward Propagation is the one-way flow of information from inputs to final prediction.'
  },

  /* -------------------------------------------------------------
     Concept 9.6: How Neural Networks Learn
  ------------------------------------------------------------- */
  '9.6': {
    kicker: 'Chapter 9 · Concept 9.6',
    title: 'How Neural Networks Learn',
    question: 'How does an error signal travel backwards to fix all the weights?',
    questionDesc: 'What happens when a brand-new neural network makes a silly mistake — like guessing a dog is a cat? The computer calculates how wrong it was at the output. Then, like an echo rippling backwards through the canyon, the error signal travels in reverse through every single wire to nudge each weight!',
    visHint: '👆 Click "Send Error Signal Backwards (Backpropagation)" to watch the corrective wave tune the network!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; position: relative;">
            <svg id="c96-svg" viewBox="0 0 500 210" style="width: 100%; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- Connecting wires -->
              <line x1="80" y1="70" x2="250" y2="105" stroke="#94a3b8" stroke-width="2.5" />
              <line x1="80" y1="140" x2="250" y2="105" stroke="#94a3b8" stroke-width="2.5" />
              <line x1="250" y1="105" x2="420" y2="105" stroke="#94a3b8" stroke-width="3" />

              <!-- Backprop error ripple wave -->
              <path id="c96-wave" d="M 400,105 L 260,105" stroke="#dc2626" stroke-width="5" stroke-dasharray="6 4" opacity="0" />

              <!-- Input Nodes -->
              <circle cx="80" cy="70" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
              <circle cx="80" cy="140" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
              <text x="80" y="35" font-size="10" fill="#64748b" font-weight="700" text-anchor="middle">Input Nodes</text>

              <!-- Hidden Node -->
              <circle id="c96-hidden" cx="250" cy="105" r="20" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
              <text x="250" y="35" font-size="10" fill="#64748b" font-weight="700" text-anchor="middle">Hidden Node</text>

              <!-- Output Node with Mistake Badge -->
              <circle id="c96-out" cx="420" cy="105" r="22" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5" />
              <text x="420" y="110" font-size="14" text-anchor="middle">❌</text>
              <text x="420" y="35" font-size="10" fill="#dc2626" font-weight="800" text-anchor="middle">Mistake Detected!</text>
            </svg>
          </div>

          <!-- Dynamic Readout -->
          <div id="c96-status" style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #991b1b; margin-top: 0.4rem;">
            Mistake made! Output guessed Cat instead of Dog. Click below to send error signal backwards!
          </div>

        </div>
      `;

      window.c96Backprop = function() {
        const wave = document.getElementById('c96-wave');
        const hid = document.getElementById('c96-hidden');
        const out = document.getElementById('c96-out');
        const st = document.getElementById('c96-status');

        wave.setAttribute('opacity', '1');
        st.innerHTML = '🌊 <strong>Backprop Step 1:</strong> Error calculates who is responsible for the mistake...';

        setTimeout(() => {
          hid.setAttribute('fill', '#fef08a');
          hid.setAttribute('stroke', '#ca8a04');
          st.innerHTML = '🔧 <strong>Backprop Step 2:</strong> Hidden weights nudged! Dial turned down on cat ears clue.';
        }, 600);

        setTimeout(() => {
          out.setAttribute('fill', '#ecfdf5');
          out.setAttribute('stroke', '#059669');
          document.querySelector('#c96-out + text').textContent = '✅';
          document.querySelector('#c96-out + text + text').textContent = 'Weights Tuned!';
          document.querySelector('#c96-out + text + text').setAttribute('fill', '#059669');
          wave.setAttribute('opacity', '0');
          st.innerHTML = '🎉 <strong>Backpropagation Finished!</strong> Next time this photo appears, the network will predict Dog correctly!';
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
        }, 1300);
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn danger" onclick="window.c96Backprop()">⬅️ Run Backpropagation (Error Feedback)</button>
      `;
    },

    observation: 'Notice the reverse direction: forward propagation went from left to right to make the guess. But when the guess was wrong, the error signal traveled backwards from right to left, inspecting each wire and giving its weight dial a tiny corrective tweak!',
    mechanism: 'This famous algorithm is called Backpropagation (Backward Propagation of Errors). Using the Calculus Chain Rule, the computer calculates the partial derivative of the error with respect to every single weight in the network, then nudges every weight in the downhill gradient direction.',
    takeaway: 'Backpropagation sends the mistake backwards through the network to nudge every weight in the right direction.'
  }
};


/**
 * Chapter 10: Learning Through Rewards
 * Deep, rich visual interactive implementations of Concepts 10.1 to 10.3.
 * Explains Reinforcement Learning, Rewards, and Policy Improvement for school kids (Classes 5-10).
 */

const CHAPTER_10_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 10.1: Learning by Trying
  ------------------------------------------------------------- */
  '10.1': {
    kicker: 'Chapter 10 · Concept 10.1',
    title: 'Learning by Trying',
    question: 'How did you learn to ride a bicycle without reading a textbook?',
    questionDesc: 'Nobody learns to ride a bicycle by reading a 200-page physics book or having a teacher label every wobble! You climbed onto the saddle, pedaled, wobbled, fell onto the soft grass, got back up, and adjusted your balance. You learned through pure Trial and Error!',
    visHint: '👆 Move the Handlebar Balance slider below. Can you keep the bicycle in the green upright zone?',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
            
            <!-- Bicycle & Rider Graphic -->
            <div id="c101-bike-box" style="transform-origin: center bottom; transition: transform 0.2s ease; text-align: center;">
              <div id="c101-emoji" style="font-size: 4.5rem; line-height: 1;">🚴</div>
              <strong id="c101-status-badge" style="display: inline-block; background: #ecfdf5; color: #059669; font-size: 0.85rem; font-weight: 800; padding: 0.25rem 0.75rem; border-radius: 999px; margin-top: 0.5rem;">
                Balanced & Rolling Smoothly!
              </strong>
            </div>

            <!-- Road Line -->
            <div style="width: 80%; height: 6px; background: #94a3b8; border-radius: 999px; margin-top: 0.5rem;"></div>

          </div>

          <!-- Dynamic Status -->
          <div id="c101-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Keep the balance close to the center (0°) so the bicycle does not tumble over!
          </div>

        </div>
      `;

      window.c101Balance = function(val) {
        const deg = parseInt(val, 10);
        const box = document.getElementById('c101-bike-box');
        const badge = document.getElementById('c101-status-badge');
        const rd = document.getElementById('c101-readout');

        box.style.transform = `rotate(${deg}deg)`;

        if (Math.abs(deg) <= 10) {
          badge.textContent = 'Balanced & Rolling Smoothly! 🌟';
          badge.style.background = '#ecfdf5';
          badge.style.color = '#059669';
          rd.textContent = `Tilt = ${deg}°. Great balance! Muscles naturally keep the center of gravity stable.`;
        } else if (Math.abs(deg) <= 25) {
          badge.textContent = 'Wobbly! Leaning too far! ⚠️';
          badge.style.background = '#fef3c7';
          badge.style.color = '#d97706';
          rd.textContent = `Tilt = ${deg}°. You feel the wobble! Steer in the opposite direction to recover!`;
        } else {
          badge.textContent = 'CRASH! Tumbled onto the grass! 💥';
          badge.style.background = '#fee2e2';
          badge.style.color = '#dc2626';
          rd.textContent = `Tilt = ${deg}°. Too steep! But you learn from the fall and avoid leaning that hard next time!`;
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Handlebar Balance Angle:</span>
          <input type="range" min="-35" max="35" value="0" oninput="window.c101Balance(this.value)">
        </div>
      `;
    },

    observation: 'Notice that when you tilted too far (+35° or -35°), the bicycle crashed! But after falling once, you immediately knew: "Don\'t steer that sharply!". Your brain used the failure experience to make a better decision.',
    mechanism: 'In Machine Learning, this third major branch is called Reinforcement Learning (RL). The computer acts as an Agent that interacts with an environment. It has no teacher giving it step-by-step labels; it discovers good strategies entirely through trial, error, and feedback.',
    takeaway: 'Reinforcement Learning is learning by trying actions, observing outcomes, and improving through practice.'
  },

  /* -------------------------------------------------------------
     Concept 10.2: Rewards
  ------------------------------------------------------------- */
  '10.2': {
    kicker: 'Chapter 10 · Concept 10.2',
    title: 'Rewards',
    question: 'How do tasty treats and painful penalties teach a puppy new tricks?',
    questionDesc: 'When you train a young puppy dog to sit, you don\'t speak in computer code! When the puppy sits on command, you give it a delicious treat (+10 Reward points!). When the puppy chews on your shoe, you say "No!" (-5 Penalty points). Very quickly, the puppy repeats the actions that earn treats!',
    visHint: '👆 Choose different actions for the puppy below to see how rewards shape behavior!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- Puppy Training Arena -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase;">Puppy Agent</span>
              <div id="c102-dog-emoji" style="font-size: 4rem; margin: 0.4rem 0;">🐕</div>
              <strong id="c102-action-label" style="font-size: 1rem; color: #0f172a; display: block;">Waiting for Command...</strong>
            </div>

            <!-- Scoreboard -->
            <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 1.25rem; text-align: center;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase;">Reward Scoreboard</span>
              <div id="c102-score" style="font-size: 2.8rem; font-weight: 800; color: #4ade80; margin: 0.25rem 0;">+0</div>
              <div id="c102-feedback" style="font-size: 0.8rem; color: #94a3b8;">Click an action below to give feedback!</div>
            </div>

          </div>

          <!-- Dynamic Readout -->
          <div id="c102-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            Positive rewards make good habits stronger; penalties discourage bad habits!
          </div>

        </div>
      `;

      let totalScore = 0;

      window.c102Act = function(action) {
        const dog = document.getElementById('c102-dog-emoji');
        const actLbl = document.getElementById('c102-action-label');
        const sc = document.getElementById('c102-score');
        const fb = document.getElementById('c102-feedback');
        const rd = document.getElementById('c102-readout');

        if (action === 'sit') {
          totalScore += 10;
          dog.textContent = '🐶 🍖';
          actLbl.textContent = 'Puppy sat down politely!';
          sc.textContent = `+${totalScore}`;
          sc.style.color = '#4ade80';
          fb.innerHTML = '🌟 <strong>+10 REWARD:</strong> Delicious crunchy bone awarded!';
          rd.textContent = 'Puppy learned: Sitting politely earns delicious treats! Habit reinforced!';
        } else if (action === 'fetch') {
          totalScore += 15;
          dog.textContent = '🐕 🎾';
          actLbl.textContent = 'Brought the tennis ball back!';
          sc.textContent = `+${totalScore}`;
          sc.style.color = '#4ade80';
          fb.innerHTML = '🌟 <strong>+15 REWARD:</strong> Extra praise and head pats!';
          rd.textContent = 'Puppy learned: Fetching the ball makes everyone super happy!';
        } else {
          totalScore -= 5;
          dog.textContent = '🐕 👟💥';
          actLbl.textContent = 'Chewed on your sneaker!';
          sc.textContent = `${totalScore}`;
          sc.style.color = '#f87171';
          fb.innerHTML = '❌ <strong>-5 PENALTY:</strong> "Bad dog! No shoe chewing!"';
          rd.textContent = 'Puppy learned: Chewing shoes leads to disappointment. Puppy will avoid this!';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn success" onclick="window.c102Act('sit')">🍖 Action 1: Sit on Command (+Reward)</button>
        <button class="mlk-control-btn success" onclick="window.c102Act('fetch')">🎾 Action 2: Fetch Ball (+Reward)</button>
        <button class="mlk-control-btn danger" onclick="window.c102Act('shoe')">👟 Action 3: Chew Shoe (-Penalty)</button>
      `;
    },

    observation: 'Notice how the scoreboard drives the puppy\'s choices! Good actions earned +10 or +15 points, while the bad action deducted points. An intelligent agent will always prefer actions that maximize its total cumulative score.',
    mechanism: 'In Reinforcement Learning, the Reward Signal is the objective function. The agent\'s goal is not just to get an immediate treat, but to maximize the expected sum of future rewards over time. This is how AI agents learn to beat human world champions at chess, Go, and video games!',
    takeaway: 'Rewards encourage helpful behaviors, while penalties discourage mistakes.'
  },

  /* -------------------------------------------------------------
     Concept 10.3: Improving Decisions
  ------------------------------------------------------------- */
  '10.3': {
    kicker: 'Chapter 10 · Concept 10.3',
    title: 'Improving Decisions',
    question: 'How does a robot learn the fastest shortcut through a maze?',
    questionDesc: 'Imagine placing a tiny wheeled robot in a grid maze. At the start, the robot has no idea where the golden star is or where the water traps are! It wanders randomly like a bump-and-go toy. But after trying several paths, how does it discover the single fastest shortcut?',
    visHint: '👆 Compare "Episode 1 (Random Wandering)" vs "Episode 5 (Learned Optimal Path)" below!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <svg id="c103-svg" viewBox="0 0 320 220" style="width: 100%; max-width: 380px; height: 100%; background: #ffffff; border-radius: 10px; border: 1px solid #cbd5e1;">
              <!-- 4x3 Grid Cells -->
              <defs>
                <pattern id="c103-grid" width="80" height="70" patternUnits="userSpaceOnUse">
                  <rect width="80" height="70" fill="none" stroke="#e2e8f0" stroke-width="1.5" />
                </pattern>
              </defs>
              <rect width="320" height="210" fill="url(#c103-grid)" />

              <!-- Water Trap at (1, 1) -->
              <rect x="80" y="70" width="80" height="70" fill="#fee2e2" />
              <text x="120" y="112" font-size="20" text-anchor="middle">💧</text>
              <text x="120" y="130" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">Trap (-10)</text>

              <!-- Water Trap at (2, 0) -->
              <rect x="160" y="0" width="80" height="70" fill="#fee2e2" />
              <text x="200" y="42" font-size="20" text-anchor="middle">💧</text>

              <!-- Star Goal at (3, 2) -->
              <rect x="240" y="140" width="80" height="70" fill="#ecfdf5" />
              <text x="280" y="180" font-size="24" text-anchor="middle">⭐</text>
              <text x="280" y="200" font-size="9" fill="#059669" font-weight="800" text-anchor="middle">Goal (+100)</text>

              <!-- Trail lines -->
              <path id="c103-trail" d="" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="4 4" />

              <!-- Robot Token -->
              <g id="c103-robot" transform="translate(40, 35)">
                <circle cx="0" cy="0" r="18" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
                <text x="0" y="5" font-size="14" text-anchor="middle">🤖</text>
              </g>
            </svg>
          </div>

          <!-- Episode Status Banner -->
          <div id="c103-status" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            Click below to compare the robot\'s first clumsy try vs its mastered smart path!
          </div>

        </div>
      `;

      window.c103Sim = function(mode) {
        const bot = document.getElementById('c103-robot');
        const trail = document.getElementById('c103-trail');
        const st = document.getElementById('c103-status');

        if (mode === 'random') {
          // Wander around, hit trap, stumble to star
          trail.setAttribute('d', 'M 40,35 L 120,35 L 120,105 L 40,105 L 40,175 L 120,175 L 200,175 L 280,175');
          trail.setAttribute('stroke', '#dc2626');
          bot.setAttribute('transform', 'translate(280, 175)');
          st.innerHTML = '😵 <strong>Episode 1 (Random Exploration):</strong> Took 7 clumsy steps, bumped into water trap (-10 penalty), and took the long detour!';
          st.style.background = '#fee2e2';
          st.style.borderColor = '#fca5a5';
          st.style.color = '#991b1b';
        } else {
          // Clean shortest path: Down, Down, Right, Right, Right
          trail.setAttribute('d', 'M 40,35 L 40,175 L 280,175');
          trail.setAttribute('stroke', '#059669');
          bot.setAttribute('transform', 'translate(280, 175)');
          st.innerHTML = '🚀 <strong>Episode 5 (Learned Policy):</strong> Discovered the cleanest shortcut! Avoided all water traps and reached the star in just 4 swift moves!';
          st.style.background = '#ecfdf5';
          st.style.borderColor = '#a7f3d0';
          st.style.color = '#065f46';
        }
      };

      window.c103Reset = function() {
        document.getElementById('c103-robot').setAttribute('transform', 'translate(40, 35)');
        document.getElementById('c103-trail').setAttribute('d', '');
        const st = document.getElementById('c103-status');
        st.textContent = 'Click below to compare the robot\'s first clumsy try vs its mastered smart path!';
        st.style.background = '#f8fafc';
        st.style.borderColor = '#cbd5e1';
        st.style.color = '#334155';
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <button class="mlk-control-btn danger" onclick="window.c103Sim('random')">🎲 Episode 1: Clumsy Random Exploration</button>
        <button class="mlk-control-btn success" onclick="window.c103Sim('optimal')">🚀 Episode 5: Learned Optimal Shortcut</button>
        <button class="mlk-control-btn" onclick="window.c103Reset()">🔄 Reset to Start</button>
      `;
    },

    observation: 'Look at the two paths: In Episode 1, the robot stumbled into the red trap and took a zigzag detour. But by Episode 5, it remembered where the traps were and took the straight green highway straight to the star!',
    mechanism: 'In Reinforcement Learning, the strategy that tells the agent what action to take in each state is called a Policy. By reinforcing paths that earn positive rewards and avoiding penalties, the agent converges on the Optimal Policy — the mathematically perfect strategy.',
    takeaway: 'Through practice and reward feedback, an agent discovers the single best path to reach its goal.'
  }
};


/**
 * Chapter 11: Understanding Real Machine Learning
 * Deep, rich visual interactive implementations of Concepts 11.1 to 11.5.
 * Explains Applications, Confidence, Data Quality, Bias, and Human Ethics for school kids (Classes 5-10).
 */

const CHAPTER_11_CONCEPTS = {
  /* -------------------------------------------------------------
     Concept 11.1: Where Is Machine Learning Used?
  ------------------------------------------------------------- */
  '11.1': {
    kicker: 'Chapter 11 · Concept 11.1',
    title: 'Where Is Machine Learning Used?',
    question: 'How many times did you interact with Machine Learning today without even knowing it?',
    questionDesc: 'Machine Learning isn\'t just in science-fiction movies about flying cars! It is already humming quietly inside your home, in your school tablet, and at the hospital. Every time your phone unlocks with your face, suggests a fun video, or translates a foreign language, machine learning is working behind the scenes.',
    visHint: '👆 Click the 4 real-world apps below to discover the Machine Learning mechanism inside each one!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap;">
            <button class="mlk-control-btn" onclick="window.c111Select(0)" style="background: white;">🎙️ Voice Assistant</button>
            <button class="mlk-control-btn" onclick="window.c111Select(1)" style="background: white;">📺 Video Recommendations</button>
            <button class="mlk-control-btn" onclick="window.c111Select(2)" style="background: white;">📷 Face Unlock</button>
            <button class="mlk-control-btn" onclick="window.c111Select(3)" style="background: white;">🏥 Hospital X-Ray Scan</button>
          </div>

          <!-- App Feature Card -->
          <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; flex: 1; margin: 0.75rem 0; display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 1rem;">
            
            <div style="text-align: center; width: 140px;">
              <div id="c111-icon" style="font-size: 4rem;">🎙️</div>
              <strong id="c111-name" style="font-size: 1rem; color: #0f172a; display: block;">Smart Voice Assistant</strong>
            </div>

            <div style="max-width: 320px;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">How Machine Learning Works Here:</span>
              <p id="c111-desc" style="font-size: 0.85rem; color: #334155; margin: 0.35rem 0; line-height: 1.5;">
                Converts your spoken voice vibrations into sound wave numbers, runs them through a Neural Network, and turns your words into text on screen!
              </p>
              <div id="c111-tag" style="display: inline-block; background: #eff6ff; color: #1e40af; padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700;">
                Speech Recognition (Neural Networks)
              </div>
            </div>

          </div>

          <!-- Readout -->
          <div id="c111-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af;">
            Machine Learning is already powering billions of devices every single day!
          </div>

        </div>
      `;

      const apps = [
        {
          icon: '🎙️',
          name: 'Smart Voice Assistant',
          desc: 'Your microphone records sound frequencies. A deep neural network translates your spoken voice into text in under 0.1 seconds, even if you have an accent!',
          tag: 'Speech Recognition (Neural Networks)'
        },
        {
          icon: '📺',
          name: 'Video & Music Feeds',
          desc: 'Looks at videos you watched and liked in the past. Recommends fresh videos that people with similar tastes also enjoyed!',
          tag: 'Recommendation Systems (Clustering)'
        },
        {
          icon: '📷',
          name: 'Phone Face Unlock',
          desc: 'A sensor projects 30,000 invisible infrared dots onto your face. It calculates facial landmark distances to verify your identity even in the pitch dark!',
          tag: 'Computer Vision & Classification'
        },
        {
          icon: '🏥',
          name: 'Hospital X-Ray Helper',
          desc: 'Scans thousands of medical lung scans to help busy doctors spot tiny infections or fractures that human eyes might miss during long night shifts.',
          tag: 'Medical AI (Pattern Detection)'
        }
      ];

      window.c111Select = function(idx) {
        const a = apps[idx];
        document.getElementById('c111-icon').textContent = a.icon;
        document.getElementById('c111-name').textContent = a.name;
        document.getElementById('c111-desc').textContent = a.desc;
        document.getElementById('c111-tag').textContent = a.tag;
        document.getElementById('c111-readout').textContent = `Loaded ${a.name}! Every concept you learned in this textbook is used here!`;
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Explore all 4 real-world examples above to see how AI concepts touch everyday life!
        </span>
      `;
    },

    observation: 'Notice that every single app uses the exact core tools you discovered: classification, regression, clustering, and neural network weights! AI isn\'t magic; it is clever mathematics applied to real-world sensory measurements.',
    mechanism: 'Modern AI products pipeline multiple models together: for example, a voice assistant uses an acoustic model (audio to phonemes), a language model (phonemes to sentences), and a recommendation policy (what action to take).',
    takeaway: 'Machine Learning powers voice assistants, camera vision, recommendation feeds, and medical health tools.'
  },

  /* -------------------------------------------------------------
     Concept 11.2: Can Machines Always Be Correct?
  ------------------------------------------------------------- */
  '11.2': {
    kicker: 'Chapter 11 · Concept 11.2',
    title: 'Can Machines Always Be Correct?',
    question: 'What happens when a camera takes a blurry photo in thick fog?',
    questionDesc: 'If someone asks you: "What animal is standing 500 meters away in the thick fog at midnight?", you wouldn\'t shout: "100% definitely a tiger!". You would say: "I am only 30% sure, it could just be a big rock!". Intelligent machines must also report their Confidence Score.',
    visHint: '👆 Drag the Camera Fog & Blur slider below. Watch the Confidence score drop when the photo gets fuzzy!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.25rem; flex: 1; align-items: center;">
            
            <!-- Camera Viewfinder -->
            <div style="background: #0f172a; border-radius: 12px; padding: 1.25rem; text-align: center; position: relative; overflow: hidden;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase;">Camera Viewfinder</span>
              
              <div id="c112-lens" style="height: 120px; display: flex; align-items: center; justify-content: center; font-size: 4rem; filter: blur(0px); transition: filter 0.2s ease;">
                🐅
              </div>

              <div id="c112-blur-badge" style="font-size: 0.75rem; color: #94a3b8; font-weight: 600;">
                Image Clarity: Crisp & Sharp (0% Blur)
              </div>
            </div>

            <!-- Confidence Meter -->
            <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Model Confidence Score</span>
              
              <div style="margin: 0.75rem 0;">
                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800;">
                  <span>Prediction: Tiger</span>
                  <span id="c112-conf-num" style="color: #059669;">98% Sure</span>
                </div>
                <div style="height: 14px; background: #e2e8f0; border-radius: 999px; overflow: hidden; margin-top: 0.35rem;">
                  <div id="c112-conf-bar" style="width: 98%; height: 100%; background: #059669; transition: width 0.2s ease, background 0.2s ease;"></div>
                </div>
              </div>

              <div id="c112-warning-box" style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 0.5rem; font-size: 0.8rem; color: #065f46; font-weight: 700;">
                ✅ High Confidence: Safe to proceed automatically!
              </div>
            </div>

          </div>

          <!-- Dynamic Status -->
          <div id="c112-readout" style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">
            When inputs are blurry or corrupted, smart models alert humans rather than guessing blindly!
          </div>

        </div>
      `;

      window.c112UpdateBlur = function(val) {
        const blurPx = parseInt(val, 10);
        const lens = document.getElementById('c112-lens');
        const badge = document.getElementById('c112-blur-badge');
        const num = document.getElementById('c112-conf-num');
        const bar = document.getElementById('c112-conf-bar');
        const warn = document.getElementById('c112-warning-box');
        const rd = document.getElementById('c112-readout');

        lens.style.filter = `blur(${blurPx}px)`;

        // Calculate confidence: drops from 98% at 0px to 38% at 12px
        const conf = Math.max(35, Math.round(98 - (blurPx * 5.2)));
        num.textContent = `${conf}% Sure`;
        bar.style.width = `${conf}%`;

        badge.textContent = `Image Blur: ${blurPx}px`;

        if (conf >= 80) {
          bar.style.background = '#059669';
          num.style.color = '#059669';
          warn.innerHTML = '✅ <strong>High Confidence:</strong> Clear photo, model is very certain!';
          warn.style.background = '#ecfdf5';
          warn.style.borderColor = '#a7f3d0';
          warn.style.color = '#065f46';
          rd.textContent = 'Crisp image! The features are sharp and unmistakable.';
        } else if (conf >= 60) {
          bar.style.background = '#d97706';
          num.style.color = '#d97706';
          warn.innerHTML = '⚠️ <strong>Medium Confidence:</strong> Fog detected, slight hesitation.';
          warn.style.background = '#fffbeb';
          warn.style.borderColor = '#fde68a';
          warn.style.color = '#92400e';
          rd.textContent = 'Getting hazy! The stripes are starting to blend together.';
        } else {
          bar.style.background = '#dc2626';
          num.style.color = '#dc2626';
          warn.innerHTML = '🛑 <strong>LOW CONFIDENCE WARNING:</strong> Too blurry! Requesting Human Inspection!';
          warn.style.background = '#fee2e2';
          warn.style.borderColor = '#fca5a5';
          warn.style.color = '#991b1b';
          rd.textContent = 'Critical Rule: When confidence drops below 50%, an AI should never guess blindly!';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Camera Fog & Lens Blur:</span>
          <input type="range" min="0" max="12" value="0" oninput="window.c112UpdateBlur(this.value)">
        </div>
      `;
    },

    observation: 'Notice what happened when the blur slider reached 10px: the tiger emoji turned into an unrecognizable orange smudge, and the confidence plunged to 46%! The warning box lit up red: "Low Confidence! Asking Human for Help!".',
    mechanism: 'In critical applications like self-driving cars or medical diagnosis, AI models use Confidence Calibration. If an input is noisy or outside the training distribution, the model flags its uncertainty rather than executing a dangerous mistake.',
    takeaway: 'Models are never 100% infallible; responsible AI always measures and reports its confidence.'
  },

  /* -------------------------------------------------------------
     Concept 11.3: Why Does Data Quality Matter?
  ------------------------------------------------------------- */
  '11.3': {
    kicker: 'Chapter 11 · Concept 11.3',
    title: 'Why Does Data Quality Matter?',
    question: 'What happens if you feed rotten ingredients into a gourmet soup blender?',
    questionDesc: 'Computer scientists have a famous saying: "Garbage In, Garbage Out!". If a master chef uses rotten tomatoes and spoiled milk, no blender on Earth can make a delicious soup. If you train an AI on blurry, mislabeled, or messy data, the model will be completely broken!',
    visHint: '👆 Compare "Fresh Quality Dataset" vs "Garbage Dataset" below to see what the model learns!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: stretch;">
            
            <!-- Quality Dataset -->
            <div id="c113-card-good" style="background: #ffffff; border: 2px solid #059669; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase;">Fresh Quality Data</span>
                <div style="font-size: 2.8rem; margin: 0.35rem 0;">🍎 🍅 🍓</div>
                <strong style="color: #065f46; font-size: 1rem; display: block;">Clean & Carefully Labeled</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.35rem; line-height: 1.4;">
                  Sharp photos, accurate labels, well-balanced examples.
                </p>
              </div>

              <div style="background: #ecfdf5; color: #065f46; padding: 0.5rem; border-radius: 8px; font-weight: 800; font-size: 0.85rem;">
                🌟 Output Model: 98% Accurate AI
              </div>
            </div>

            <!-- Garbage Dataset -->
            <div id="c113-card-bad" style="background: #ffffff; border: 2px solid #ef4444; border-radius: 12px; padding: 1.25rem; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.72rem; font-weight: 800; color: #dc2626; text-transform: uppercase;">Garbage Data (Messy)</span>
                <div style="font-size: 2.8rem; margin: 0.35rem 0;">🗑️ 🧦 ❓</div>
                <strong style="color: #991b1b; font-size: 1rem; display: block;">Blurry & Mislabeled</strong>
                <p style="font-size: 0.8rem; color: #475569; margin-top: 0.35rem; line-height: 1.4;">
                  Rotten examples, socks labeled as apples, blurry noise!
                </p>
              </div>

              <div style="background: #fee2e2; color: #991b1b; padding: 0.5rem; border-radius: 8px; font-weight: 800; font-size: 0.85rem;">
                💥 Output Model: Confused & Broken AI
              </div>
            </div>

          </div>

          <!-- Bottom takeaway -->
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.6rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #334155; margin-top: 0.4rem;">
            A model can only ever be as good as the examples used to train it!
          </div>

        </div>
      `;
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          The biggest secret of professional AI engineers is spending 80% of their time cleaning and verifying data!
        </span>
      `;
    },

    observation: 'Look at the comparison: The algorithm in both computers is identical! But Computer 1 produces a brilliant 98% accurate model because its data was clean and true, while Computer 2 fails completely because its training data was full of junk.',
    mechanism: 'In Machine Learning, this principle is known as Data Quality. Algorithms are mathematical mirrors: they reflect whatever patterns exist in their training data. If the training data contains labeling errors, missing values, or contradictions, the model learns those flaws as absolute truth.',
    takeaway: 'Garbage in, garbage out! A machine learning model is only as smart as the data it learns from.'
  },

  /* -------------------------------------------------------------
     Concept 11.4: What Is Bias?
  ------------------------------------------------------------- */
  '11.4': {
    kicker: 'Chapter 11 · Concept 11.4',
    title: 'What Is Bias?',
    question: 'What happens when a dataset forgets to include certain examples?',
    questionDesc: 'Suppose you train a puppy detector, but your training album has 95 photos of White Labradors and only 5 photos of Black Labradors. What happens when a black dog walks past the camera? The model fails because it barely got a chance to learn what a black dog looks like! This unfairness is called Dataset Bias.',
    visHint: '👆 Use the slider below to balance the dataset 50/50. Watch the Black Dog detection score jump to 99%!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <!-- Balance Scale Visualization -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 1.25rem; flex: 1; display: flex; flex-direction: column; justify-content: space-around;">
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <!-- White Dogs -->
              <div style="text-align: center; width: 45%;">
                <div style="font-size: 2.8rem;">🐕‍🦺</div>
                <strong style="color: #0f172a; font-size: 0.9rem;">Golden / White Dogs</strong>
                <div id="c114-num-white" style="font-size: 1.25rem; font-weight: 800; color: #2563eb;">90 Photos</div>
              </div>

              <div style="font-size: 1.8rem; color: #94a3b8; font-weight: 800;">⚖️</div>

              <!-- Black Dogs -->
              <div style="text-align: center; width: 45%;">
                <div style="font-size: 2.8rem;">🐕‍🦺🖤</div>
                <strong style="color: #0f172a; font-size: 0.9rem;">Black Coated Dogs</strong>
                <div id="c114-num-black" style="font-size: 1.25rem; font-weight: 800; color: #dc2626;">10 Photos</div>
              </div>
            </div>

            <!-- Test on Black Dog -->
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.6rem 1rem; display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: #0f172a;">Accuracy on Black Dogs:</span>
              <span id="c114-acc-black" style="font-size: 1.1rem; font-weight: 800; color: #dc2626;">❌ 25% (Fails often!)</span>
            </div>

          </div>

          <!-- Readout -->
          <div id="c114-readout" style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 0.5rem 1rem; text-align: center; font-size: 0.85rem; font-weight: 700; color: #991b1b; margin-top: 0.4rem;">
            Unbalanced! The model has barely seen any black dogs. Push the slider to balance the dataset!
          </div>

        </div>
      `;

      window.c114Balance = function(val) {
        const pctBlack = parseInt(val, 10);
        const pctWhite = 100 - pctBlack;

        document.getElementById('c114-num-white').textContent = `${pctWhite} Photos`;
        document.getElementById('c114-num-black').textContent = `${pctBlack} Photos`;

        const acc = document.getElementById('c114-acc-black');
        const rd = document.getElementById('c114-readout');

        // Accuracy scales with black dog representation
        const score = Math.round(20 + (pctBlack / 50) * 78);
        const displayScore = Math.min(99, score);

        if (pctBlack >= 40) {
          acc.textContent = `✅ ${displayScore}% (Recognizes easily!)`;
          acc.style.color = '#059669';
          document.getElementById('c114-num-black').style.color = '#059669';
          rd.innerHTML = '🎉 <strong>Fair and Balanced!</strong> Both dog colors are equally represented. The model treats all dogs fairly!';
          rd.style.background = '#ecfdf5';
          rd.style.borderColor = '#a7f3d0';
          rd.style.color = '#065f46';
        } else {
          acc.textContent = `❌ ${displayScore}% (Fails often!)`;
          acc.style.color = '#dc2626';
          document.getElementById('c114-num-black').style.color = '#dc2626';
          rd.textContent = `Bias alert! Only ${pctBlack}% black dogs. The model needs a balanced training diet!`;
          rd.style.background = '#fef2f2';
          rd.style.borderColor = '#fecaca';
          rd.style.color = '#991b1b';
        }
      };
    },

    renderControls(container) {
      container.innerHTML = `
        <div class="mlk-slider-group">
          <span>Balance Black Dogs in Training Album:</span>
          <input type="range" min="10" max="50" value="10" oninput="window.c114Balance(this.value)">
        </div>
      `;
    },

    observation: 'Notice that when the dataset had only 10% black dogs, the model failed on black dogs 75% of the time! But as soon as you slid the handle to 50/50, the detection score shot up to 99%! Fair training data created a fair and reliable model.',
    mechanism: 'In AI Ethics, this is called Algorithmic Bias. When training data underrepresents certain groups, skin tones, accents, or geographic regions, the trained model inherits that blindness. Ensuring diverse and representative datasets is one of the highest moral responsibilities in AI engineering.',
    takeaway: 'If training data is missing certain examples, the model will be biased and unfair toward them.'
  },

  /* -------------------------------------------------------------
     Concept 11.5: What ML Can and Cannot Do
  ------------------------------------------------------------- */
  '11.5': {
    kicker: 'Chapter 11 · Concept 11.5',
    title: 'What ML Can and Cannot Do',
    question: 'Can a machine learning model ever have real feelings or replace human kindness?',
    questionDesc: 'Now you have completed the entire journey! You know the algorithms, the math, the training rounds, and the weights. So what is the grand truth about Machine Learning? It is an astonishingly powerful pattern calculator — but it is NOT a conscious human being!',
    visHint: '👆 Compare the Superpowers of Machine Learning vs the Irreplaceable Gifts of Human Beings below!',

    renderVis(container) {
      container.innerHTML = `
        <div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; flex: 1; align-items: stretch;">
            
            <!-- What ML Does Best -->
            <div style="background: #ffffff; border: 2px solid #2563eb; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase;">Machine Superpowers ⚡</span>
                  <span style="font-size: 1.6rem;">🤖</span>
                </div>
                <ul style="font-size: 0.8rem; color: #334155; margin: 0.6rem 0; padding-left: 1.2rem; line-height: 1.6;">
                  <li>Scanning 1,000,000 photos in seconds</li>
                  <li>Finding tiny mathematical patterns in big numbers</li>
                  <li>Repeating tasks tirelessly without getting sleepy</li>
                  <li>Calculating optimal shortest routes on a world map</li>
                </ul>
              </div>

              <div style="background: #eff6ff; color: #1e40af; padding: 0.4rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700; text-align: center;">
                Champion of Pattern Math!
              </div>
            </div>

            <!-- What Humans Do Best -->
            <div style="background: #ffffff; border: 2px solid #ec4899; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.72rem; font-weight: 800; color: #db2777; text-transform: uppercase;">Human Superpowers 💖</span>
                  <span style="font-size: 1.6rem;">🧑‍🎓</span>
                </div>
                <ul style="font-size: 0.8rem; color: #334155; margin: 0.6rem 0; padding-left: 1.2rem; line-height: 1.6;">
                  <li>Feeling genuine love, empathy, and kindness</li>
                  <li>Knowing what is morally fair and right</li>
                  <li>Inventing completely new ideas from imagination</li>
                  <li>Comforting a sad friend or understanding humor</li>
                </ul>
              </div>

              <div style="background: #fdf2f8; color: #9d174d; padding: 0.4rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700; text-align: center;">
                Heart, Wisdom, & Empathy!
              </div>
            </div>

          </div>

          <!-- Grand Graduation Banner -->
          <div style="background: #ecfdf5; border: 2px solid #059669; border-radius: 10px; padding: 0.75rem 1rem; text-align: center; margin-top: 0.4rem;">
            <strong style="color: #065f46; font-size: 1rem; display: block;">🎓 Congratulations! You Mastered Machine Learning!</strong>
            <span style="font-size: 0.82rem; color: #047857;">You understand data, classification, regression, optimization, trees, neural networks, and AI ethics. The future is yours to build!</span>
          </div>

        </div>
      `;
    },

    renderControls(container) {
      container.innerHTML = `
        <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
          Congratulations on completing all 11 chapters of the Machine Learning Visual Textbook!
        </span>
      `;
    },

    observation: 'Look at the comparison: Computers are incredible at crunching millions of numbers without tiring. But computers cannot care about you, cannot create original wisdom from lived life, and cannot choose between right and wrong. The best world is when human empathy guides machine computing!',
    mechanism: 'Machine learning models are mathematical optimizers of data. They possess no consciousness, subjective experience, or intrinsic understanding of their inputs. They are tools created by humans to solve computational problems.',
    takeaway: 'Machine Learning is a powerful pattern tool, but human wisdom, empathy, and creativity remain irreplaceable.'
  }
};



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
