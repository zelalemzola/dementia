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
  { id: 1, text: "What is your gender?", type: "gender", category: "Demographics", options: ["Male", "Female", "Other", "Prefer not to say"] },
  
  // Memory Questions Block 1
  { id: 2, text: "Do you frequently forget recent conversations?", type: "frequency", category: "Memory" },
  { id: 3, text: "Do you have trouble recalling the names of people you meet often?", type: "frequency", category: "Memory" },
  { id: 4, text: "Do you misplace items frequently?", type: "frequency", category: "Memory" },
  { id: 5, text: "Do you have difficulty remembering appointments or events?", type: "frequency", category: "Memory" },
  
  // IQ Question 1
  { id: 6, text: "If a train travels 60 miles in 1 hour, how far will it travel in 2.5 hours?", type: "iq", category: "Cognitive", options: ["120 miles", "150 miles", "180 miles", "100 miles"] },
  
  { id: 7, text: "Can you easily remember details from recent television shows or books?", type: "frequency", category: "Memory" },
  { id: 8, text: "Do you find yourself asking the same questions repeatedly?", type: "frequency", category: "Memory" },
  { id: 9, text: "Is it challenging to remember recent instructions?", type: "frequency", category: "Memory" },
  { id: 10, text: "Do you frequently forget what you intended to do upon entering a room?", type: "frequency", category: "Memory" },
  
  // IQ Question 2
  { id: 11, text: "Which number comes next in the sequence: 2, 6, 12, 20, 30, ?", type: "iq", category: "Cognitive", options: ["36", "40", "42", "44"] },
  
  { id: 12, text: "Do you have trouble recalling details from recent meals?", type: "frequency", category: "Memory" },
  { id: 13, text: "Do you easily recall phone numbers you recently learned?", type: "frequency", category: "Memory" },
  { id: 14, text: "Do you struggle to remember where you parked your car?", type: "frequency", category: "Memory" },
  { id: 15, text: "Are you forgetting to perform daily tasks?", type: "frequency", category: "Memory" },
  
  // IQ Question 3
  { id: 16, text: "If all Bloops are Razzles and all Razzles are Lazzles, are all Bloops definitely Lazzles?", type: "iq", category: "Cognitive", options: ["Yes", "No", "Cannot determine", "Sometimes"] },
  
  { id: 17, text: "Do you rely heavily on reminders or notes?", type: "frequency", category: "Memory" },
  { id: 18, text: "Do you find yourself confused about recent family activities?", type: "frequency", category: "Memory" },
  { id: 19, text: "Do you easily remember grocery lists without writing them down?", type: "frequency", category: "Memory" },
  
  // Executive Function Questions
  { id: 20, text: "Do you find planning tasks challenging?", type: "frequency", category: "Executive Function" },
  
  // IQ Question 4
  { id: 21, text: "A farmer has 17 sheep. All but 9 die. How many sheep are left?", type: "iq", category: "Cognitive", options: ["8", "9", "17", "0"] },
  
  { id: 22, text: "Is it difficult for you to solve simple problems?", type: "frequency", category: "Executive Function" },
  { id: 23, text: "Do you struggle with managing your time effectively?", type: "frequency", category: "Executive Function" },
  { id: 24, text: "Can you easily organize your daily activities?", type: "frequency", category: "Executive Function" },
  { id: 25, text: "Do you find following recipes or instructions challenging?", type: "frequency", category: "Executive Function" },
  
  // IQ Question 5
  { id: 26, text: "Which shape does not belong: Circle, Square, Triangle, Cube?", type: "iq", category: "Cognitive", options: ["Circle", "Square", "Triangle", "Cube"] },
  
  { id: 27, text: "Is it difficult to handle financial matters (like bills or budgeting)?", type: "frequency", category: "Executive Function" },
  { id: 28, text: "Do you frequently lose track of steps in multi-step tasks?", type: "frequency", category: "Executive Function" },
  { id: 29, text: "Do you often struggle with decision-making?", type: "frequency", category: "Executive Function" },
  { id: 30, text: "Do you find it hard to prioritize your activities?", type: "frequency", category: "Executive Function" },
  
  // Attention Questions
  { id: 31, text: "Is maintaining focus on complex tasks difficult for you?", type: "frequency", category: "Attention" },
  { id: 32, text: "Do you frequently start tasks and leave them unfinished?", type: "frequency", category: "Attention" },
  
  // IQ Question 6
  { id: 33, text: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):", type: "iq", category: "Cognitive", options: ["Ocean", "City", "Animal", "Country"] },
  
  { id: 34, text: "Do you find it hard to concentrate on conversations?", type: "frequency", category: "Attention" },
  { id: 35, text: "Can you easily maintain attention when reading?", type: "frequency", category: "Attention" },
  { id: 36, text: "Do you frequently lose focus when watching television?", type: "frequency", category: "Attention" },
  { id: 37, text: "Is it challenging to stay attentive during longer meetings or events?", type: "frequency", category: "Attention" },
  { id: 38, text: "Do you find yourself daydreaming often?", type: "frequency", category: "Attention" },
  
  // IQ Question 7
  { id: 39, text: "Complete the analogy: Book is to Reading as Fork is to:", type: "iq", category: "Cognitive", options: ["Eating", "Kitchen", "Spoon", "Drawing"] },
  
  { id: 40, text: "Can you easily shift your attention from one task to another?", type: "frequency", category: "Attention" },
  { id: 41, text: "Do you regularly lose track of the conversation topic?", type: "frequency", category: "Attention" },
  { id: 42, text: "Do you often forget what you were about to say?", type: "frequency", category: "Attention" },
  { id: 43, text: "Is maintaining concentration on repetitive tasks difficult?", type: "frequency", category: "Attention" },
  
  // Orientation Questions
  { id: 44, text: "Do you frequently feel confused about the date?", type: "frequency", category: "Orientation" },
  { id: 45, text: "Can you easily remember the day of the week?", type: "frequency", category: "Orientation" },
  
  // IQ Question 8
  { id: 46, text: "What is 15% of 200?", type: "iq", category: "Cognitive", options: ["20", "25", "30", "35"] },
  
  { id: 47, text: "Do you find yourself unsure about your current location occasionally?", type: "frequency", category: "Orientation" },
  { id: 48, text: "Do you frequently forget the month or year?", type: "frequency", category: "Orientation" },
  { id: 49, text: "Can you confidently state the current season?", type: "frequency", category: "Orientation" },
  { id: 50, text: "Are you usually aware of your surroundings?", type: "frequency", category: "Orientation" },
  { id: 51, text: "Do you regularly confuse past events with recent ones?", type: "frequency", category: "Orientation" },
  
  // IQ Question 9
  { id: 52, text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", type: "iq", category: "Cognitive", options: ["5 minutes", "100 minutes", "20 minutes", "1 minute"] },
  
  { id: 53, text: "Do you often lose track of the time of day?", type: "frequency", category: "Orientation" },
  { id: 54, text: "Do you regularly get confused about upcoming holidays or events?", type: "frequency", category: "Orientation" },
  
  // Language Questions
  { id: 55, text: "Do you frequently have trouble finding the right word?", type: "frequency", category: "Language" },
  { id: 56, text: "Is it challenging for you to understand common phrases or expressions?", type: "frequency", category: "Language" },
  { id: 57, text: "Do you often forget names of common objects?", type: "frequency", category: "Language" },
  
  // IQ Question 10
  { id: 58, text: "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What is the fifth daughter's name?", type: "iq", category: "Cognitive", options: ["Nunu", "Mary", "Nana", "None"] },
  
  { id: 59, text: "Do you struggle to follow conversations involving multiple people?", type: "frequency", category: "Language" },
  { id: 60, text: "Is it difficult for you to clearly express your thoughts?", type: "frequency", category: "Language" },
  { id: 61, text: "Do you frequently repeat yourself during conversations?", type: "frequency", category: "Language" },
  { id: 62, text: "Do you often pause or hesitate while speaking?", type: "frequency", category: "Language" },
  { id: 63, text: "Do you find understanding written instructions difficult?", type: "frequency", category: "Language" },
  { id: 64, text: "Is naming familiar places occasionally challenging for you?", type: "frequency", category: "Language" },
  
  // Mood & Behavioral Questions
  { id: 65, text: "Do you often feel unusually sad or depressed?", type: "frequency", category: "Mood & Behavior" },
  { id: 66, text: "Do you frequently experience anxiety without clear cause?", type: "frequency", category: "Mood & Behavior" },
  { id: 67, text: "Are you increasingly irritable or easily frustrated?", type: "frequency", category: "Mood & Behavior" },
  { id: 68, text: "Do you frequently feel apathetic or lose interest in usual activities?", type: "frequency", category: "Mood & Behavior" },
  { id: 69, text: "Have you recently noticed changes in your personality?", type: "frequency", category: "Mood & Behavior" },
  { id: 70, text: "Do you often withdraw from social interactions?", type: "frequency", category: "Mood & Behavior" },
  { id: 71, text: "Do you feel less motivated to perform daily tasks?", type: "frequency", category: "Mood & Behavior" },
  { id: 72, text: "Are you experiencing increased nervousness or restlessness?", type: "frequency", category: "Mood & Behavior" },
  { id: 73, text: "Do you often feel overwhelmed by routine tasks?", type: "frequency", category: "Mood & Behavior" },
  { id: 74, text: "Have family or friends commented on changes in your mood?", type: "frequency", category: "Mood & Behavior" },
  { id: 75, text: "Do you feel more isolated or lonely lately?", type: "frequency", category: "Mood & Behavior" },
  { id: 76, text: "Are you having difficulty managing stress recently?", type: "frequency", category: "Mood & Behavior" },
  { id: 77, text: "Do you frequently experience mood swings without apparent reason?", type: "frequency", category: "Mood & Behavior" },
];

export const popups: PopupData[] = [
  {
    triggerAfterQuestion: 5,
    title: "Important Notice",
    content: "From your answers so far, we are seeing signs that could be related to dementia.\n\nThis does not mean you have it.\n\nBut if you keep going, you may see results about your memory and thinking that are worrying.\n\nOnce your report is ready, you cannot hide or undo it.\n\nOnly continue if you are ready to see the full result — even if it is bad news.",
    type: "warning"
  },
  {
    triggerAfterQuestion: 25,
    title: "Please Pause",
    content: "Based on your answers so far, we are seeing something unusual in how your memory and thinking are working.\n\nTo understand what this means, you need to continue and answer a few more questions.\n\nThe good news is that by the end of this check, you will receive a clear report to help determine whether dementia may be present — or not.",
    type: "info"
  },
  {
    triggerAfterQuestion: 50,
    title: "Memory Check",
    content: "Do you remember the first question we asked you at the start of this quiz?\n\nWe did not tell you to remember it on purpose.\n\nThis helps us check how your memory works over time.\n\nPlease answer honestly.",
    type: "recall"
  }
];

export const iqAnswers: Record<number, string> = {
  6: "150 miles",
  11: "42",
  16: "Yes",
  21: "9",
  26: "Cube",
  33: "Ocean",
  39: "Eating",
  46: "30",
  52: "5 minutes",
  58: "Mary"
};
