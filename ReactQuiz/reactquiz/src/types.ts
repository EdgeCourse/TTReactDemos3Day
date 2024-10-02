//when blank, needs exmpty export or something
//export{}

// src/types.ts
export interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
}