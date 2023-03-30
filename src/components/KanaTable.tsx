import kanaType from '../types/kana';

type KanaTableProps = {
  kana: kanaType[];
  caption: string;
};

export default function KanaTable({ kana, caption }: KanaTableProps) {
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <td></td>
          <th>A</th>
          <th>I</th>
          <th>U</th>
          <th>E</th>
          <th>O</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Basic</th>
          {kana
            .filter(({ group }) => group === 'basic')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">K -</th>
          {kana
            .filter(({ group }) => group === 'k')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">S -</th>
          {kana
            .filter(({ group }) => group === 's')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">T -</th>
          {kana
            .filter(({ group }) => group === 't')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">N -</th>
          {kana
            .filter(({ group }) => group === 'n')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">H -</th>
          {kana
            .filter(({ group }) => group === 'h')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">M -</th>
          {kana
            .filter(({ group }) => group === 'm')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">Y -</th>
          {kana
            .filter(({ group }) => group === 'y')
            .map(({ pronunciation, id, kana }) => (
              <td colSpan={2} key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">R -</th>
          {kana
            .filter(({ group }) => group === 'r')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">W -</th>
          {kana
            .filter(({ group }) => group === 'w')
            .map(({ pronunciation, id, kana }) => (
              <td colSpan={4} key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
        <tr>
          <th scope="row">N</th>
          {kana
            .filter(({ group }) => group === 'n/m')
            .map(({ pronunciation, id, kana }) => (
              <td key={id}>
                {kana} {pronunciation}
              </td>
            ))}
        </tr>
      </tbody>
    </table>
  );
}
