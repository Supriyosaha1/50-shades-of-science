/**
 * Chapter 5: Mistakes and Learning
 * Deep, rich visual interactive implementations of Concepts 5.1 to 5.6.
 * Explains loss, errors, gradient descent, and learning rate for school students (Classes 5-10).
 */

export const CHAPTER_5_CONCEPTS = {
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
