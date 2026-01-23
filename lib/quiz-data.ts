export type QuestionType = "frequency" | "yes-no" | "iq" | "gender" | "recall";

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  category: string;
  options?: string[];
}

export interface PopupData {
  triggerAfterQuestion: number;
  title: string;
  content: string;
  type: "warning" | "info" | "recall";
}

export const questions: Question[] = [
  // Gender question
  {
    id: 1,
    text: "What is your gender?",
    type: "gender",
    category: "Demographics",
    options: ["Male", "Female", "Other", "Prefer not to say"],
  },

  // Memory Questions Block 1 (8 questions)
  {
    id: 2,
    text: "Do you frequently forget recent conversations?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 3,
    text: "Do you have trouble recalling the names of people you meet often?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 4,
    text: "Do you misplace items frequently?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 5,
    text: "Do you have difficulty remembering appointments or events?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 6,
    text: "Can you easily remember details from recent television shows or books?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 7,
    text: "Do you find yourself asking the same questions repeatedly?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 8,
    text: "Is it challenging to remember recent instructions?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 9,
    text: "Do you frequently forget what you intended to do upon entering a room?",
    type: "frequency",
    category: "Memory",
  },

  // IQ Question 1
  {
    id: 10,
    text: "If a train travels 60 miles in 1 hour, how far will it travel in 2.5 hours?",
    type: "iq",
    category: "Cognitive",
    options: ["120 miles", "150 miles", "180 miles", "100 miles"],
  },

  // Memory Questions Block 2 (6 questions)
  {
    id: 11,
    text: "Do you have trouble recalling details from recent meals?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 12,
    text: "Do you easily recall phone numbers you recently learned?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 13,
    text: "Do you struggle to remember where you parked your car?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 14,
    text: "Are you forgetting to perform daily tasks?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 15,
    text: "Do you rely heavily on reminders or notes?",
    type: "frequency",
    category: "Memory",
  },
  {
    id: 16,
    text: "Do you find yourself confused about recent family activities?",
    type: "frequency",
    category: "Memory",
  },

  // IQ Question 2
  {
    id: 17,
    text: "Which number comes next in the sequence: 2, 6, 12, 20, 30, ?",
    type: "iq",
    category: "Cognitive",
    options: ["36", "40", "42", "44"],
  },

  // Executive Function Questions (5 questions)
  {
    id: 18,
    text: "Do you find planning tasks challenging?",
    type: "frequency",
    category: "Executive Function",
  },
  {
    id: 19,
    text: "Is it difficult for you to solve simple problems?",
    type: "frequency",
    category: "Executive Function",
  },
  {
    id: 20,
    text: "Do you struggle with managing your time effectively?",
    type: "frequency",
    category: "Executive Function",
  },
  {
    id: 21,
    text: "Can you easily organize your daily activities?",
    type: "frequency",
    category: "Executive Function",
  },
  {
    id: 22,
    text: "Do you find following recipes or instructions challenging?",
    type: "frequency",
    category: "Executive Function",
  },

  // IQ Question 3
  {
    id: 23,
    text: "If all Bloops are Razzles and all Razzles are Lazzles, are all Bloops definitely Lazzles?",
    type: "iq",
    category: "Cognitive",
    options: ["Yes", "No", "Cannot determine", "Sometimes"],
  },

  // Attention Questions (5 questions)
  {
    id: 24,
    text: "Is maintaining focus on complex tasks difficult for you?",
    type: "frequency",
    category: "Attention",
  },
  {
    id: 25,
    text: "Do you frequently start tasks and leave them unfinished?",
    type: "frequency",
    category: "Attention",
  },
  {
    id: 26,
    text: "Do you find it hard to concentrate on conversations?",
    type: "frequency",
    category: "Attention",
  },
  {
    id: 27,
    text: "Can you easily maintain attention when reading?",
    type: "frequency",
    category: "Attention",
  },
  {
    id: 28,
    text: "Do you frequently lose focus when watching television?",
    type: "frequency",
    category: "Attention",
  },

  // IQ Question 4
  {
    id: 29,
    text: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
    type: "iq",
    category: "Cognitive",
    options: ["8", "9", "17", "0"],
  },

  // Orientation Questions (4 questions)
  {
    id: 30,
    text: "Do you frequently feel confused about the date?",
    type: "frequency",
    category: "Orientation",
  },
  {
    id: 31,
    text: "Can you easily remember the day of the week?",
    type: "frequency",
    category: "Orientation",
  },
  {
    id: 32,
    text: "Do you find yourself unsure about your current location occasionally?",
    type: "frequency",
    category: "Orientation",
  },
  {
    id: 33,
    text: "Do you frequently forget the month or year?",
    type: "frequency",
    category: "Orientation",
  },

  // IQ Question 5
  {
    id: 34,
    text: "Which shape does not belong: Circle, Square, Triangle, Cube?",
    type: "iq",
    category: "Cognitive",
    options: ["Circle", "Square", "Triangle", "Cube"],
  },

  // Language Questions (4 questions)
  {
    id: 35,
    text: "Do you frequently have trouble finding the right word?",
    type: "frequency",
    category: "Language",
  },
  {
    id: 36,
    text: "Is it challenging for you to understand common phrases or expressions?",
    type: "frequency",
    category: "Language",
  },
  {
    id: 37,
    text: "Do you often forget names of common objects?",
    type: "frequency",
    category: "Language",
  },
  {
    id: 38,
    text: "Do you struggle to follow conversations involving multiple people?",
    type: "frequency",
    category: "Language",
  },

  // Final Questions (2 questions)
  {
    id: 39,
    text: "Do you often feel unusually sad or depressed?",
    type: "frequency",
    category: "Mood & Behavior",
  },
  {
    id: 40,
    text: "Have family or friends commented on changes in your mood or behavior?",
    type: "frequency",
    category: "Mood & Behavior",
  },
];

export const popups: PopupData[] = [
  {
    triggerAfterQuestion: 8,
    title: "Medical Notice",
    content:
      "Based on your responses, we're detecting patterns that warrant attention.\n\nThis assessment helps identify cognitive changes early.\n\nContinuing will provide you with a comprehensive analysis of your results.",
    type: "warning",
  },
  {
    triggerAfterQuestion: 20,
    title: "Progress Update",
    content:
      "You're halfway through the assessment.\n\nOur system is analyzing your response patterns to provide accurate insights.\n\nPlease continue answering honestly for the most reliable results.",
    type: "info",
  },
  {
    triggerAfterQuestion: 27,
    title: "Memory Check",
    content:
      "Do you remember the first question we asked you at the start of this assessment?\n\nWe asked about your gender to help personalize your results.\n\nThis memory check helps us evaluate your recall ability.",
    type: "recall",
  },
];

export const iqAnswers: Record<number, string> = {
  10: "150 miles",
  17: "42",
  23: "Yes",
  29: "9",
  34: "Cube",
};
