/**
 * Complete Curriculum Metadata: 11 Chapters, 52 Atomic Concepts
 * Clean, simple, minimalist learning path.
 */

export const CHAPTERS = [
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

export function getConceptInfo(id) {
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

