import { KanaType } from '../../types/kana';
import DataCell from './DataCell';
import { Row, RowHeader } from './KanaTableStyles';

type TableRowProps = {
  kana: KanaType[];
  header: string;
};

export default function TableRow({ kana, header }: TableRowProps) {
  return (
    <Row>
      <RowHeader scope="row">{header}</RowHeader>
      {kana.map(({ pronunciation, id, kana }) => (
        <DataCell key={id} pronunciation={pronunciation} kana={kana} />
      ))}
    </Row>
  );
}
