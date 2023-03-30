import hiragana from './assets/hiragana';
import katakana from './assets/katakana';
import KanaTable from './components/KanaTable/KanaTable';

function App() {
  const basicHiragana = hiragana.filter(({ type }) => type === 'basic');
  const basicKatakana = katakana.filter(({ type }) => type === 'basic');
  return (
    <div>
      <KanaTable kana={basicHiragana} caption="Basic Hiragana Table" />
      <KanaTable kana={basicKatakana} caption="Basic Katakana Table" />
    </div>
  );
}

export default App;
