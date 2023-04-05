import React from 'react';
import useKanaQuizList from '../hooks/useKanaQuizList';
import { KanaType } from '../types/kana';

type KanaQuizProps = {
  kana: KanaType[];
};

export default function KanaQuiz({ kana }: KanaQuizProps) {
  const {
    quizKanaLength,
    isDisabled,
    currentQuestion,
    quizStats,
    feedback,
    getNewQuestion,
    checkAnswer,
  } = useKanaQuizList(kana);

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log(quizStats);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{currentQuestion.question?.kana}</legend>
        {currentQuestion.answers.map(answer => (
          <label key={answer?.id}>
            {answer?.pronunciation}
            <input
              type="radio"
              name={currentQuestion.question?.kana}
              value={answer?.kana}
              onChange={() => checkAnswer(answer)}
            />
          </label>
        ))}
      </fieldset>
      {feedback.length > 0 && <p>{feedback}</p>}
      {quizKanaLength > 1 && (
        <button type="button" onClick={getNewQuestion} disabled={isDisabled}>
          Next
        </button>
      )}
      {quizKanaLength === 1 && (
        <button type="submit" disabled={isDisabled}>
          Result
        </button>
      )}
    </form>
  );
}
