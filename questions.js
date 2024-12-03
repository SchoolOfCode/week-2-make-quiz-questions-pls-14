// questions.js

const questions = [

  //1
  {
    question_text: "What is the name of the 60 second pitch we had to make?",
    question_type: "multiple_choice",
    options: ["Lift pitch", "Elevator pitch", "Travelator pitch", "Flux-Capacitor pitch"],
    correct_option: 1,
    correct_explanation: "It is called an Elevator pitch because that's approximately how long it takes for an elevator to reach the floor you are travelling to.",
  },

  //2
  {
    question_text: "Which of the following best defines an algorithm?",
    question_type: "multiple_choice",
    options: ["A set of instructions designed to solve a specific problem or perform a specific task.", "A type of software used to optimise computer performance.", "A mathematical formula used in data analysis.", "A type of hardware used to execute instructions in a computer system"],
    correct_option: 0,
    correct_explanation: "An algorithm is essentially a step-by-step procedure or a set of well-defined instructions that are designed to solve a specific problem or perform a task.",
  },

  //3
  {
    question_text: "What mindset should you cultivate at the School Of Code?",
    question_type: "multiple_choice",
    options: ["Sleep mindset", "Coding mindset", "Development mindset", "Growth mindset"],
    correct_option: 3,
    correct_explanation: "You must believe that learning is possible through effort and well structured learning.",
  },

  //4
  {
    question_text: "Which one of these should you NOT do when giving feedback, according to what you have learnt?",
    question_type: "multiple_choice",
    options: ["Point out where the person is going wrong without suggestions for improvement.", "Be objective and specific.", "Ask what they think of the feedback.", "Set up a meeting first to see when a good time for feedback might be."],
    correct_option: 0,
    correct_explanation: "Criticism is de-motivating and could cause the person to become defensive, cultivating a poor learning environment.",
  },

  //5
  {
    question_text: `How many key values form the "Agile Manifesto"?`,
    question_type: "multiple_choice",
    options: ["1", "546", "5", "4"],
    correct_option: 3,
    correct_explanation: "The Agile Manifesto is a set of four key values and twelve principles emphasising flexibility, collaboration, customer satisfaction, and continuous improvement.",
  },

  //6
  {
    question_text: "What isn't one of the 5 learning principles which have the acronym spelling out the first name of a very handsome man?",
    question_type: "multiple_choice",
    options: ["Challenge", "Hunger", "Recover", "Spaced repetition"],
    correct_option: 2,
    correct_explanation: "Recover should be Retrieval. Actively retrieving information is one of the best ways to learn.",
  },

  //7
  {
    question_text: "Neural networks consist of 3 named layers; Input layer, Output layer and what other layer?",
    question_type: "multiple_choice",
    options: ["Hidden layer", "Secret layer", "Computing layer", "Engineers layer"],
    correct_option: 0,
    correct_explanation: "The hidden layer is whereThe hidden layers are where learning happens in the neural network. They help the network to extract and transform the raw input data into more abstract, useful features.",
  },

  //8
  {
    question_text: "Why is pair programming becoming an essential way of work? Pick the most relevant answer.",
    question_type: "multiple_choice",
    options: ["So you don't have to know the answers yourself.", "In case someone gets run over by a bus.", "Team collaboration is an accepted practice in programming.", "If you want some company whilst doing your work."],
    correct_option: 2,
    correct_explanation: "Pair programming (working together) improves code quality, shares knowledge, and catches errors early.",
  },

  //9
  {
    question_text: "What ..... makes perfect?",
    question_type: "multiple_choice",
    options: ["Running", "Screaming", "Forgetting", "Practise"],
    correct_option: 3,
    correct_explanation: "Repetition is one of the most effective ways to refine a skill. When you practice something repeatedly, your brain creates stronger neural connections related to that activity.",
  },

  //10
  {
    question_text: "Which isn't a 'job' you need to do at the School of Code?",
    question_type: "multiple_choice",
    options: ["Get yourself unstuck", "Enjoy the struggle", "Learn how to learn", "Become a coding master!"],
    correct_option: 3,
    correct_explanation: "Coding won't be the most valuable thing you learn at SoC:  becoming a multiplier and setting yourself up for success plus the other options above are the key 'jobs'.",
  }  
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;