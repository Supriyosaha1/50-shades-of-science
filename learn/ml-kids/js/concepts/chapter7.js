/**
 * Chapter 7: Learning Without Answers
 * Deep, rich visual interactive implementations of Concepts 7.1 to 7.4.
 * Explains Unsupervised Learning and K-Means Clustering for school kids (Classes 5-10).
 */

export const CHAPTER_7_CONCEPTS = {
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
