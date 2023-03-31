import KanaType from '../../types/kana';
import { Caption, Table } from './KanaTableStyles';
import TableHead from './TableHead';
import TableRow from './TableRow';

type TenTenKanaTableProps = {
  kana: KanaType[];
  caption: string;
};

export default function TenTenKanaTable({
  kana,
  caption,
}: TenTenKanaTableProps) {
  return (
    <Table>
      <Caption>{caption}</Caption>
      <TableHead columnHeaders={['A', 'I', 'U', 'E', 'O']} />
      <tbody>
        <TableRow
          kana={kana.filter(({ group }) => group === 'g')}
          header="K - G"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'z')}
          header="S - Z"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'd')}
          header="T - D"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'b')}
          header="H - B"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'p')}
          header="H - P"
        />
      </tbody>
    </Table>
  );
}
