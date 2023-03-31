import hiragana from './assets/hiragana';
import katakana from './assets/katakana';
import BasicKanaTable from './components/KanaTable/BasicKanaTable';
import TenTenKanaTable from './components/KanaTable/TenTenKanaTable';
import YoonKanaTable from './components/KanaTable/YoonKanaTable';

function App() {
  const basicHiragana = hiragana.filter(({ type }) => type === 'basic');
  const basicKatakana = katakana.filter(({ type }) => type === 'basic');

  const tentenHiragana = hiragana.filter(({ type }) => type === 'tenten');
  const tentenKatakana = katakana.filter(({ type }) => type === 'tenten');

  const yoonHiragana = hiragana.filter(({ type }) => type === 'yoon');
  const yoonKatakana = katakana.filter(({ type }) => type === 'yoon');
  return (
    <div>
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
