/**
 * Chapter 6: Training and Testing
 * Deep, rich visual interactive implementations of Concepts 6.1 to 6.5.
 * Explains training rounds, train/test split, overfitting, and underfitting for school kids (Classes 5-10).
 */

export const CHAPTER_6_CONCEPTS = {
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
