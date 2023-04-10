import { useState } from 'react';
import { KanaType } from '../../types/kana';
import KanaQuizForm from './KanaQuizForm';
import { QuizStats } from '../../types/kanaQuiz';

type KanaQuizProps = {
  kana: KanaType[];
};

export default function KanaQuiz({ kana }: KanaQuizProps) {
  const [quizStats, setQuizStats] = useState({
    right: 0,
    wrong: 0,
    tries: 0,
    isCompleted: false,
  });

  const typeOfKana = kana[0].type.toUpperCase();

  function finishQuiz(finishedQuizStats: QuizStats) {
    setQuizStats(finishedQuizStats);
  }

  return (
    <section>
      <h2>{typeOfKana} Kana Quiz</h2>
      {quizStats.isCompleted ? (
        <div>
          <h3>Result of {kana.length} kana asked:</h3>
          <ul>
            <li>Right: {quizStats.right}</li>
            <li>Wrong: {quizStats.wrong}</li>
            <li>Tries: {quizStats.tries}</li>
          </ul>
        </div>
      ) : (
        <KanaQuizForm kana={kana} onFinishQuiz={finishQuiz} />
      )}
    </section>
  );
}
