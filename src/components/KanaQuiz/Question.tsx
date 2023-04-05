import { Answer, CurrentQuestion } from '../../types/kanaQuiz';

type QuestionProps = {
  currentQuestion: CurrentQuestion;
  onChange: (answer: Answer) => void;
};

export default function Question({ currentQuestion, onChange }: QuestionProps) {
  return (
    <fieldset>
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
    </fieldset>
  );
}
