import { KanaType } from '../../types/kana';
import { Caption, Table } from './KanaTableStyles';
import TableHead from './TableHead';
import TableRow from './TableRow';

type YoonKanaTableProps = {
  kana: KanaType[];
  caption: string;
};

export default function YoonKanaTable({ kana, caption }: YoonKanaTableProps) {
  return (
    <Table>
      <Caption>{caption}</Caption>
      <TableHead columnHeaders={['A', 'U', 'O']} />
      <tbody>
        <TableRow
          kana={kana.filter(({ group }) => group === 'ky')}
          header="K -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'sh')}
          header="S -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'ch')}
          header="T -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'ny')}
          header="N -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'hy')}
          header="H -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'my')}
          header="M -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'ry')}
          header="R -"
        />

        <TableRow
          kana={kana.filter(({ group }) => group === 'gy')}
          header="G -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'j')}
          header="J -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'by')}
          header="B -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'py')}
          header="P -"
        />
      </tbody>
    </Table>
  );
}
