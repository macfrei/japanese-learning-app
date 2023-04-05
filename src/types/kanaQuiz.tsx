import { KanaType } from './kana';

// Becuase of Lodash. Can I overwrite the Lodash Types to get rid of the undefined?
type Answer = KanaType | undefined;
type Question = KanaType | undefined;
type CurrentQuestion = { question: Question; answers: Answer[] };
type QuizStats = { right: number; wrong: number; tries: number };

type HookReturn = {
  quizKanaLength: number;
  isDisabled: boolean;
  currentQuestion: CurrentQuestion;
  quizStats: QuizStats;
  feedback: string;
  getNewQuestion: () => void;
  checkAnswer: (answer: Answer) => void;
};

export type { Answer, Question, CurrentQuestion, QuizStats, HookReturn };
