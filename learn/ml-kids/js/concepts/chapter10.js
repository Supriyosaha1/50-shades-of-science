/**
 * Chapter 10: Learning Through Rewards
 * Deep, rich visual interactive implementations of Concepts 10.1 to 10.3.
 * Explains Reinforcement Learning, Rewards, and Policy Improvement for school kids (Classes 5-10).
 */

export const CHAPTER_10_CONCEPTS = {
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
