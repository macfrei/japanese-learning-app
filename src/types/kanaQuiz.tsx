import { KanaType } from './kana';

type CurrentQuestion = { question: KanaType; answers: KanaType[] };
type QuizStats = {
  right: number;
  wrong: number;
  tries: number;
  isCompleted: boolean;
};

type HookReturn = {
  quizKanaLength: number;
  isDisabled: boolean;
  currentQuestion: CurrentQuestion;
  quizStats: QuizStats;
  feedback: string;
  getNewQuestion: () => void;
  checkAnswer: (answer: KanaType) => void;
};

export type { CurrentQuestion, QuizStats, HookReturn };
