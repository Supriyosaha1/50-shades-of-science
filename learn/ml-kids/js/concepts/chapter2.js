/**
 * Chapter 2: Understanding Data
 * Concepts 2.1 to 2.5 — Deep, visual, and interactive implementations.
 */

export const CHAPTER_2_CONCEPTS = {
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
