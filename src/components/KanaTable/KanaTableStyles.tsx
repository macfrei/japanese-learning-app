import styled from 'styled-components';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

const Caption = styled.caption`
  font-size: 1.2rem;
  padding: 12px;
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

export { Table, ColumnHeader, Caption, Row, RowHeader };
