import hiragana from './assets/hiragana';
import katakana from './assets/katakana';
import KanaQuiz from './components/KanaQuiz/KanaQuiz';
import BasicKanaTable from './components/KanaTable/BasicKanaTable';
import TenTenKanaTable from './components/KanaTable/TenTenKanaTable';
import YoonKanaTable from './components/KanaTable/YoonKanaTable';
import { TypeOfKana } from './types/kana';

function App() {
  const basicHiragana = hiragana.filter(
    ({ type }) => type === TypeOfKana.basic
  );
  const basicKatakana = katakana.filter(
    ({ type }) => type === TypeOfKana.basic
  );

  const tentenHiragana = hiragana.filter(
    ({ type }) => type === TypeOfKana.tenten
  );
  const tentenKatakana = katakana.filter(
    ({ type }) => type === TypeOfKana.tenten
  );

  const yoonHiragana = hiragana.filter(({ type }) => type === TypeOfKana.yoon);
  const yoonKatakana = katakana.filter(({ type }) => type === TypeOfKana.yoon);
  return (
    <div>
      <KanaQuiz kana={yoonHiragana} />
      <BasicKanaTable kana={basicHiragana} caption="Basic Hiragana Table" />
      <BasicKanaTable kana={basicKatakana} caption="Basic Katakana Table" />
      <TenTenKanaTable kana={tentenHiragana} caption="Tenten Hiragana Table" />
      <TenTenKanaTable kana={tentenKatakana} caption="Tenten Katakana Table" />
      <YoonKanaTable kana={yoonHiragana} caption="Yoon Hiragana Table" />
      <YoonKanaTable kana={yoonKatakana} caption="Yoon Katakana Table" />
    </div>
  );
}

export default App;
