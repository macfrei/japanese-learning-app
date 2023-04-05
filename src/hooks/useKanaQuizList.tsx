import { useState } from 'react';
import { KanaType } from '../types/kana';
import { sample, sampleSize } from 'lodash';

type Answer = KanaType | undefined;
type Question = KanaType | undefined;

export default function useKanaQuizList(kana: KanaType[]) {
  const [quizKana, setQuizKana] = useState(kana);
  const [quizStats, setQuizStats] = useState({ right: 0, wrong: 0, tries: 0 });
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(
    createNewQuestion(quizKana, kana)
  );

  function createNewQuestion(
    currentList: KanaType[],
    defaultList: KanaType[]
  ): { question: Question; answers: Answer[] } {
    const question = sample(currentList);
    const answers = sampleSize(
      defaultList.filter(kana => kana.id !== question?.id),
      3
    );

    const initialQuestion = {
      question,
      answers: [question, ...answers],
    };

    return initialQuestion;
  }

  function checkAnswer(answer: Answer) {
    if (answer?.id !== currentQuestion.question?.id) {
      setQuizStats({
        ...quizStats,
        wrong: quizStats.wrong + 1,
        tries: quizStats.tries + 1,
      });
      setIsDisabled(true);
      console.log('Please try again');
    }

    if (answer?.id === currentQuestion.question?.id) {
      setQuizStats({
        ...quizStats,
        right: quizStats.right + 1,
        tries: quizStats.tries + 1,
      });
      setIsDisabled(false);
    }
  }

  function getNewQuestion() {
    const quizKanaWithoutCurrentQuestion = quizKana.filter(
      kana => kana.id !== currentQuestion.question?.id
    );
    setQuizKana(quizKanaWithoutCurrentQuestion);
    setIsDisabled(true);
    const newQuestion = createNewQuestion(quizKanaWithoutCurrentQuestion, kana);
    setCurrentQuestion(newQuestion);
  }

  return {
    quizKanaLength: quizKana.length,
    isDisabled,
    currentQuestion,
    quizStats,
    getNewQuestion,
    checkAnswer,
  };
}
