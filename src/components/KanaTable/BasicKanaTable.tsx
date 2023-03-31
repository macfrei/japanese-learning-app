import KanaType from '../../types/kana';
import { Caption, Table } from './KanaTableStyles';
import TableHead from './TableHead';
import TableRow from './TableRow';

type BasicKanaTableProps = {
  kana: KanaType[];
  caption: string;
};

export default function BasicKanaTable({ kana, caption }: BasicKanaTableProps) {
  const yKana = kana.filter(({ group }) => group === 'y');
  const newYKanaArray: KanaType[] = [
    yKana[0],
    { id: '1', pronunciation: '', kana: '', type: 'basic', group: '' },
    yKana[1],
    { id: '2', pronunciation: '', kana: '', type: 'basic', group: '' },
    yKana[2],
  ];

  const wKana = kana.filter(({ group }) => group === 'w');
  const newWKanaArray: KanaType[] = [
    wKana[0],
    { id: '1', pronunciation: '', kana: '', type: 'basic', group: '' },
    { id: '2', pronunciation: '', kana: '', type: 'basic', group: '' },
    { id: '3', pronunciation: '', kana: '', type: 'basic', group: '' },
    wKana[1],
  ];

  return (
    <Table>
      <Caption>{caption}</Caption>
      <TableHead columnHeaders={['A', 'I', 'U', 'E', 'O']} />
      <tbody>
        <TableRow
          kana={kana.filter(({ group }) => group === 'basic')}
          header="-"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'k')}
          header="K -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 's')}
          header="S -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 't')}
          header="T -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'n')}
          header="N -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'h')}
          header="H -"
        />
        <TableRow
          kana={kana.filter(({ group }) => group === 'm')}
          header="M -"
        />
        <TableRow kana={newYKanaArray} header="Y -" />
        <TableRow
          kana={kana.filter(({ group }) => group === 'r')}
          header="R -"
        />
        <TableRow kana={newWKanaArray} header="W -" />
        <TableRow
          kana={kana.filter(({ group }) => group === 'n/m')}
          header="N/M"
        />
      </tbody>
    </Table>
  );
}
