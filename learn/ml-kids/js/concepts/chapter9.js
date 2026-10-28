/**
 * Chapter 9: Neural Networks
 * Deep, rich visual interactive implementations of Concepts 9.1 to 9.6.
 * Explains Neurons, Weights, Layers, Forward Flow, and Backpropagation for school kids (Classes 5-10).
 */

export const CHAPTER_9_CONCEPTS = {
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
