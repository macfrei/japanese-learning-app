import React from 'react';
import styled from 'styled-components';
import useKanaQuizList from '../../hooks/useKanaQuizList';
import { KanaType } from '../../types/kana';
import Question from './Question';
import { QuizStats } from '../../types/kanaQuiz';

type KanaQuizFormProps = {
  kana: KanaType[];
  onFinishQuiz: (arg0: QuizStats) => void;
};

type FeedbackProps = {
  isRight: boolean;
};

export default function KanaQuizForm({
  kana,
  onFinishQuiz,
}: KanaQuizFormProps) {
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
    const completedQuizStats = { ...quizStats, isCompleted: true };
    onFinishQuiz(completedQuizStats);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Question currentQuestion={currentQuestion} onChange={checkAnswer} />
      {quizKanaLength > 1 && (
        <Button type="button" onClick={getNewQuestion} disabled={isDisabled}>
          Next
        </Button>
      )}
      {quizKanaLength === 1 && (
        <Button type="submit" disabled={isDisabled}>
          Result
        </Button>
      )}
      {feedback.length > 0 && (
        <Feedback isRight={!isDisabled}>{feedback}</Feedback>
      )}
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 45px 45px;
  align-content: start;
  gap: 24px;
  padding: 12px;
  height: 100vh;
`;

const Feedback = styled.p<FeedbackProps>`
  color: ${props => (props.isRight ? 'green' : 'red')};
  font-style: italic;
  margin: 0;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  font-size: inherit;
  background-color: white;
  color: black;
  border: 1px solid;
  border-radius: 8px;
  padding: 12px;

  &:disabled {
    color: lightgray;
    border-color: lightgray;
  }
`;
