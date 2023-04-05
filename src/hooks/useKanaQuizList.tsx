import { useState } from 'react';
import { KanaType } from '../types/kana';
import { sample, sampleSize } from 'lodash';
import { Answer, CurrentQuestion, HookReturn } from '../types/kanaQuiz';

export default function useKanaQuizList(kana: KanaType[]): HookReturn {
  const [quizKana, setQuizKana] = useState(kana);
  const [feedback, setFeedback] = useState('');
  const [quizStats, setQuizStats] = useState({ right: 0, wrong: 0, tries: 0 });
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(
    createNewQuestion(quizKana, kana)
  );

  function createNewQuestion(
    currentList: KanaType[],
    defaultList: KanaType[]
  ): CurrentQuestion {
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
      setFeedback('Please try again!');
    }

    if (answer?.id === currentQuestion.question?.id) {
      setQuizStats({
        ...quizStats,
        right: quizStats.right + 1,
        tries: quizStats.tries + 1,
      });
      setIsDisabled(false);
      setFeedback('Nice job, ready for the next question?');
    }
  }

  function getNewQuestion() {
    const quizKanaWithoutCurrentQuestion = quizKana.filter(
      kana => kana.id !== currentQuestion.question?.id
    );
    const newQuestion = createNewQuestion(quizKanaWithoutCurrentQuestion, kana);

    setQuizKana(quizKanaWithoutCurrentQuestion);
    setIsDisabled(true);
    setCurrentQuestion(newQuestion);
    setFeedback('');
  }

  return {
    quizKanaLength: quizKana.length,
    isDisabled,
    currentQuestion,
    quizStats,
    feedback,
    getNewQuestion,
    checkAnswer,
  };
}
