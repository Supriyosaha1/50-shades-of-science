/**
 * ML Adventure Lab - Curriculum Data
 * Written in simple, friendly language for school kids (Classes 5-10).
 * Conversational style: "Can you see...", "Now you try!", "Look what happens..."
 */

export const CURRICULUM = {
  worlds: [
    {
      id: 1,
      slug: 'world-01',
      title: 'World 1: What is Learning?',
      simpleQuestion: 'Can a computer learn from examples like you do?',
      icon: '🍎',
      color: '#059669',
      missions: [
        {
          id: 'w01-m01',
          number: 1,
          title: 'You Guess, Computer Guesses',
          shortDesc: 'Can you spot the difference between your smart brain and a computer?',
          estimatedMinutes: 5,
          unlocked: true
        },
        {
          id: 'w01-m02',
          number: 2,
          title: 'Fixed Rules vs. Learning',
          shortDesc: 'What happens when a rigid rule meets a surprise? Can you see it break?',
          estimatedMinutes: 6,
          unlocked: true
        },
        {
          id: 'w01-m03',
          number: 3,
          title: 'Fruit Sorting Studio',
          shortDesc: 'Can you see the mystery fruit? Drag it, teach the computer, and watch it vote!',
          estimatedMinutes: 8,
          isPilot: true,
          unlocked: true
        },
        {
          id: 'w01-m04',
          number: 4,
          title: 'New Fruit Surprise!',
          shortDesc: 'Oops! The computer got tricked! Can you add a good example to help it?',
          estimatedMinutes: 7,
          unlocked: true
        }
      ]
    },
    {
      id: 2,
      slug: 'world-02',
      title: 'World 2: Data Detective',
      simpleQuestion: 'What clues help a computer make good guesses?',
      icon: '🔍',
      color: '#2563eb',
      missions: [
        { id: 'w02-m01', number: 1, title: 'Collect Your Clues', shortDesc: 'Can you pick the clues that actually help?', estimatedMinutes: 6, unlocked: false },
        { id: 'w02-m02', number: 2, title: 'Label Mix-Up', shortDesc: 'What happens if we give the wrong name to a photo?', estimatedMinutes: 6, unlocked: false },
        { id: 'w02-m03', number: 3, title: 'Missing Pieces', shortDesc: 'Can the computer still guess if some clues are missing?', estimatedMinutes: 7, unlocked: false },
        { id: 'w02-m04', number: 4, title: 'The Clean Data Challenge', shortDesc: 'Now you clean the messy cards!', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 3,
      slug: 'world-03',
      title: 'World 3: Pattern Playground',
      simpleQuestion: 'How does a computer spot shapes in a crowd of dots?',
      icon: '🎨',
      color: '#7c3aed',
      missions: [
        { id: 'w03-m01', number: 1, title: 'The Dot Garden', shortDesc: 'Can you see the red and blue groups?', estimatedMinutes: 6, unlocked: false },
        { id: 'w03-m02', number: 2, title: 'Who is My Nearest Neighbor?', shortDesc: 'Count the closest friends to cast votes!', estimatedMinutes: 7, unlocked: false },
        { id: 'w03-m03', number: 3, title: 'Draw the Dividing Line', shortDesc: 'Where should the boundary go?', estimatedMinutes: 8, unlocked: false },
        { id: 'w03-m04', number: 4, title: 'Tricky Points Challenge', shortDesc: 'Can you find the point that confuses the line?', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 4,
      slug: 'world-04',
      title: 'World 4: Prediction Factory',
      simpleQuestion: 'Can a computer guess a number, like ice cream sales on a sunny day?',
      icon: '🍦',
      color: '#d97706',
      missions: [
        { id: 'w04-m01', number: 1, title: 'Hot Days & Cold Treats', shortDesc: 'Look at the dots: when it is hotter, do people buy more?', estimatedMinutes: 6, unlocked: false },
        { id: 'w04-m02', number: 2, title: 'Draw the Best-Fit Line', shortDesc: 'Drag the line so it passes through the middle of the dots!', estimatedMinutes: 7, unlocked: false },
        { id: 'w04-m03', number: 3, title: 'The Error Meter', shortDesc: 'Watch the ruler measure mistakes! Can you make them smaller?', estimatedMinutes: 8, unlocked: false },
        { id: 'w04-m04', number: 4, title: 'Too Hot to Guess!', shortDesc: 'What happens if temperature goes to 100 degrees?', estimatedMinutes: 6, unlocked: false }
      ]
    },
    {
      id: 5,
      slug: 'world-05',
      title: 'World 5: How Machines Improve',
      simpleQuestion: 'Why does the second try get better than the first?',
      icon: '🧗',
      color: '#0284c7',
      missions: [
        { id: 'w05-m01', number: 1, title: 'Turn the Knobs', shortDesc: 'Adjust the dial and watch the mistake bar shrink!', estimatedMinutes: 6, unlocked: false },
        { id: 'w05-m02', number: 2, title: 'Roll Down the Valley', shortDesc: 'Can our little robot find the lowest spot in the bowl?', estimatedMinutes: 7, unlocked: false },
        { id: 'w05-m03', number: 3, title: 'Giant Leaps vs Tiny Steps', shortDesc: 'Look what happens if you take steps that are too big!', estimatedMinutes: 7, unlocked: false },
        { id: 'w05-m04', number: 4, title: 'Knowing When to Stop', shortDesc: 'Did it finish learning or is it just running in circles?', estimatedMinutes: 6, unlocked: false }
      ]
    },
    {
      id: 6,
      slug: 'world-06',
      title: 'World 6: The Testing Lab',
      simpleQuestion: 'Is getting 100% on old homework always a good sign?',
      icon: '🧪',
      color: '#e11d48',
      missions: [
        { id: 'w06-m01', number: 1, title: 'Practice vs The Real Test', shortDesc: 'Keep secret test cards in a locked box!', estimatedMinutes: 6, unlocked: false },
        { id: 'w06-m02', number: 2, title: 'The Memorizer Monster', shortDesc: 'It memorized every answer but cannot solve a new riddle!', estimatedMinutes: 7, unlocked: false },
        { id: 'w06-m03', number: 3, title: 'The Wobbly Spaghetti Line', shortDesc: 'Why a wiggly line that touches every dot is bad news.', estimatedMinutes: 8, unlocked: false },
        { id: 'w06-m04', number: 4, title: 'The Final Exam', shortDesc: 'Test your model on unseen surprises!', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 7,
      slug: 'world-07',
      title: 'World 7: Decision Forest',
      simpleQuestion: 'Can playing 20 Questions become a smart computer program?',
      icon: '🌲',
      color: '#15803d',
      missions: [
        { id: 'w07-m01', number: 1, title: 'Yes or No Questions', shortDesc: 'Does it have wings? Can it swim?', estimatedMinutes: 6, unlocked: false },
        { id: 'w07-m02', number: 2, title: 'Build a Branching Tree', shortDesc: 'Drag question cards to split the animals!', estimatedMinutes: 7, unlocked: false },
        { id: 'w07-m03', number: 3, title: 'Trim the Wild Branches', shortDesc: 'Too many tiny questions make the tree confused!', estimatedMinutes: 7, unlocked: false },
        { id: 'w07-m04', number: 4, title: 'Trick the Tree!', shortDesc: 'Can you invent an animal the tree gets wrong?', estimatedMinutes: 6, unlocked: false }
      ]
    },
    {
      id: 8,
      slug: 'world-08',
      title: 'World 8: Meet the Neurons',
      simpleQuestion: 'How can tiny friendly counters team up to make big decisions?',
      icon: '⚡',
      color: '#f59e0b',
      missions: [
        { id: 'w08-m01', number: 1, title: 'The Weighted Vote', shortDesc: 'Some clues matter more than others. Give them bigger weights!', estimatedMinutes: 7, unlocked: false },
        { id: 'w08-m02', number: 2, title: 'The Light Switch Click', shortDesc: 'When the total power passes the mark, the bulb lights up!', estimatedMinutes: 7, unlocked: false },
        { id: 'w08-m03', number: 3, title: 'One Neuron Dividing Line', shortDesc: 'Can one neuron separate cats and dogs on a map?', estimatedMinutes: 8, unlocked: false },
        { id: 'w08-m04', number: 4, title: 'Teamwork in Layers', shortDesc: 'Two neurons work together to solve a tricky puzzle!', estimatedMinutes: 8, unlocked: false }
      ]
    },
    {
      id: 9,
      slug: 'world-09',
      title: 'World 9: Grouping Without Labels',
      simpleQuestion: 'Can a computer find groups all by itself without any teacher?',
      icon: '🪐',
      color: '#6366f1',
      missions: [
        { id: 'w09-m01', number: 1, title: 'Mystery Star Clusters', shortDesc: 'Look at the glowing stars. Can you see 3 natural groups?', estimatedMinutes: 6, unlocked: false },
        { id: 'w09-m02', number: 2, title: 'Move the Centers', shortDesc: 'Put down magnets and watch dots jump to the closest one!', estimatedMinutes: 7, unlocked: false },
        { id: 'w09-m03', number: 3, title: 'The K-Means Dance', shortDesc: 'Step by step: assign dots, move center, repeat!', estimatedMinutes: 8, unlocked: false },
        { id: 'w09-m04', number: 4, title: 'How Many Groups?', shortDesc: 'What happens if you ask for 2 groups instead of 4?', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 10,
      slug: 'world-10',
      title: 'World 10: Learn by Trying',
      simpleQuestion: 'How does a robot learn to find treats and dodge mud puddles?',
      icon: '🤖',
      color: '#0d9488',
      missions: [
        { id: 'w10-m01', number: 1, title: 'The Maze Runner', shortDesc: 'Help the little robot explore the maze!', estimatedMinutes: 7, unlocked: false },
        { id: 'w10-m02', number: 2, title: 'Gold Stars & Sticky Mud', shortDesc: 'Give +10 points for batteries and -5 for mud!', estimatedMinutes: 7, unlocked: false },
        { id: 'w10-m03', number: 3, title: 'Try New Things or Stick to What Works?', shortDesc: 'Should the robot explore or be safe?', estimatedMinutes: 8, unlocked: false },
        { id: 'w10-m04', number: 4, title: 'The Bad Reward Trap', shortDesc: 'The robot found a silly shortcut to get points!', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 11,
      slug: 'world-11',
      title: 'World 11: Trust & AI in Real Life',
      simpleQuestion: 'When should we ask: "Hey, is the computer really right?"',
      icon: '🛡️',
      color: '#be123c',
      missions: [
        { id: 'w11-m01', number: 1, title: 'The Unfair Training Box', shortDesc: 'If we only teach it about yellow cats, what happens to black cats?', estimatedMinutes: 7, unlocked: false },
        { id: 'w11-m02', number: 2, title: 'Counting the Two Kinds of Mistakes', shortDesc: 'Is missing a sick patient worse than a false alarm?', estimatedMinutes: 8, unlocked: false },
        { id: 'w11-m03', number: 3, title: 'Protect Your Secret Photos', shortDesc: 'What should we never feed into an online model?', estimatedMinutes: 6, unlocked: false },
        { id: 'w11-m04', number: 4, title: 'Be the Human Referee', shortDesc: 'Can you catch the computer making a silly error?', estimatedMinutes: 7, unlocked: false }
      ]
    },
    {
      id: 12,
      slug: 'world-12',
      title: 'World 12: Junior ML Inventor',
      simpleQuestion: 'What can you build and explain to your friends?',
      icon: '🏆',
      color: '#b45309',
      missions: [
        { id: 'w12-m01', number: 1, title: 'Pick Your Mission', shortDesc: 'Sort recyclables or recognize animal sounds?', estimatedMinutes: 6, unlocked: false },
        { id: 'w12-m02', number: 2, title: 'Make Your Mini Dataset', shortDesc: 'Add 10 clear, fair examples to your project!', estimatedMinutes: 8, unlocked: false },
        { id: 'w12-m03', number: 3, title: 'Train & Check Mistakes', shortDesc: 'Run the learner and see where it needs more help.', estimatedMinutes: 8, unlocked: false },
        { id: 'w12-m04', number: 4, title: 'Your Project Card', shortDesc: 'Print or save your project card to show your class!', estimatedMinutes: 6, unlocked: false }
      ]
    }
  ]
};

