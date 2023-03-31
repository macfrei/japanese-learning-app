import styled from 'styled-components';
import kanaType from '../../types/kana';
import DataCell from './DataCell';

type YoonKanaTableProps = {
  kana: kanaType[];
  caption: string;
};

export default function YoonKanaTable({ kana, caption }: YoonKanaTableProps) {
  return (
    <Table>
      <Caption>{caption}</Caption>
      <thead>
        <Row>
          <RowHeader></RowHeader>
          <ColumnHeader>A</ColumnHeader>
          <ColumnHeader>U</ColumnHeader>
          <ColumnHeader>O</ColumnHeader>
        </Row>
      </thead>
      <tbody>
        <Row>
          <RowHeader scope="row">K -</RowHeader>
          {kana
            .filter(({ group }) => group === 'ky')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">S -</RowHeader>
          {kana
            .filter(({ group }) => group === 'sh')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">T -</RowHeader>
          {kana
            .filter(({ group }) => group === 'ch')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">N -</RowHeader>
          {kana
            .filter(({ group }) => group === 'ny')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">H -</RowHeader>
          {kana
            .filter(({ group }) => group === 'hy')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">M -</RowHeader>
          {kana
            .filter(({ group }) => group === 'my')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">R -</RowHeader>
          {kana
            .filter(({ group }) => group === 'ry')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">G -</RowHeader>
          {kana
            .filter(({ group }) => group === 'gy')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">J -</RowHeader>
          {kana
            .filter(({ group }) => group === 'j')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">B -</RowHeader>
          {kana
            .filter(({ group }) => group === 'by')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">P -</RowHeader>
          {kana
            .filter(({ group }) => group === 'py')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
      </tbody>
    </Table>
  );
}

const Caption = styled.caption`
  font-size: 1.2rem;
  padding: 12px;
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

const RowHeader = styled.th`
  text-align: left;
  font-weight: normal;
  padding: 6px;
  border: 1px solid black;
  background-color: lightgray;
`;

const ColumnHeader = styled.th`
  font-weight: normal;
  padding: 6px;
  background-color: lightgray;
`;

const Row = styled.tr`
  border: 1px black solid;
`;
