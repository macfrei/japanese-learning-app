import styled from 'styled-components';
import { KanaType } from '../../types/kana';
import { CurrentQuestion } from '../../types/kanaQuiz';

type QuestionProps = {
  currentQuestion: CurrentQuestion;
  onChange: (answer: KanaType) => void;
};

export default function Question({ currentQuestion, onChange }: QuestionProps) {
  return (
    <QuestionStyled>
      <legend>{currentQuestion.question?.kana}</legend>
      {currentQuestion.answers.map(answer => (
        <label key={answer?.id}>
          {answer?.pronunciation}
          <input
            type="radio"
            name={currentQuestion.question?.kana}
            value={answer?.kana}
            onChange={() => onChange(answer)}
          />
        </label>
      ))}
    </QuestionStyled>
  );
}

const QuestionStyled = styled.fieldset`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto fr;
  grid-gap: 12px;
  border: none;
  height: 100%;
  width: 100%;
  padding: 0;
  overflow-y: auto;
  margin: 0;

  legend {
    display: grid;
    place-items: center;
    width: 100%;
    height: 50vh;
    font-size: 200%;
    font-family: serif;
  }

  label {
    position: relative;
    padding: 12px;
    display: block;
    display: grid;
    place-items: center;
    width: inherit;
    height: inherit;
    border: 1px solid;
    border-radius: 8px;
    transition: color 2s, background-color 2s;
  }

  label:focus-within {
    background-color: black;
    color: white;
  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`;
