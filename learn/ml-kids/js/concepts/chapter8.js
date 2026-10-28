/**
 * Chapter 8: Decision Trees
 * Deep, rich visual interactive implementations of Concepts 8.1 to 8.4.
 * Explains Decision Trees, branching questions, and pure splits for school kids (Classes 5-10).
 */

export const CHAPTER_8_CONCEPTS = {
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
