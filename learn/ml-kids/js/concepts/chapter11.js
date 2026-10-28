/**
 * Chapter 11: Understanding Real Machine Learning
 * Deep, rich visual interactive implementations of Concepts 11.1 to 11.5.
 * Explains Applications, Confidence, Data Quality, Bias, and Human Ethics for school kids (Classes 5-10).
 */

export const CHAPTER_11_CONCEPTS = {
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
