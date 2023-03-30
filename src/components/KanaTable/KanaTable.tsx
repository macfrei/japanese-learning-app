import styled from 'styled-components';
import kanaType from '../../types/kana';
import DataCell from './DataCell';

type KanaTableProps = {
  kana: kanaType[];
  caption: string;
};

export default function KanaTable({ kana, caption }: KanaTableProps) {
  const yKana = kana.filter(({ group }) => group === 'y');
  const newYKanaArray = [
    yKana[0],
    { pronunciation: '', id: '1', kana: '' },
    yKana[1],
    { pronunciation: '', id: '2', kana: '' },
    yKana[2],
  ];

  const wKana = kana.filter(({ group }) => group === 'w');
  const newWKanaArray = [
    wKana[0],
    { pronunciation: '', id: '1', kana: '' },
    { pronunciation: '', id: '2', kana: '' },
    { pronunciation: '', id: '3', kana: '' },
    wKana[1],
  ];

  return (
    <Table>
      <Caption>{caption}</Caption>
      <thead>
        <Row>
          <RowHeader></RowHeader>
          <ColumnHeader>A</ColumnHeader>
          <ColumnHeader>I</ColumnHeader>
          <ColumnHeader>U</ColumnHeader>
          <ColumnHeader>E</ColumnHeader>
          <ColumnHeader>O</ColumnHeader>
        </Row>
      </thead>
      <tbody>
        <Row>
          <RowHeader scope="row">-</RowHeader>
          {kana
            .filter(({ group }) => group === 'basic')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">K -</RowHeader>
          {kana
            .filter(({ group }) => group === 'k')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">S -</RowHeader>
          {kana
            .filter(({ group }) => group === 's')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">T -</RowHeader>
          {kana
            .filter(({ group }) => group === 't')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">N -</RowHeader>
          {kana
            .filter(({ group }) => group === 'n')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">H -</RowHeader>
          {kana
            .filter(({ group }) => group === 'h')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">M -</RowHeader>
          {kana
            .filter(({ group }) => group === 'm')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">Y -</RowHeader>
          {newYKanaArray.map(({ pronunciation, id, kana }) => (
            <DataCell key={id} pronunciation={pronunciation} kana={kana} />
          ))}
        </Row>
        <Row>
          <RowHeader scope="row">R -</RowHeader>
          {kana
            .filter(({ group }) => group === 'r')
            .map(({ pronunciation, id, kana }) => (
              <DataCell key={id} pronunciation={pronunciation} kana={kana} />
            ))}
        </Row>
        <Row>
          <RowHeader scope="row">W -</RowHeader>
          {newWKanaArray.map(({ pronunciation, id, kana }) => (
            <DataCell key={id} pronunciation={pronunciation} kana={kana} />
          ))}
        </Row>
        <Row>
          <RowHeader scope="row">N</RowHeader>
          {kana
            .filter(({ group }) => group === 'n/m')
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
