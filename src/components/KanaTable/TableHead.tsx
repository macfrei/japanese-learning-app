import { ColumnHeader, Row, RowHeader } from './KanaTableStyles';

type TableHeadProps = {
  columnHeaders: string[];
};

export default function TableHead({ columnHeaders }: TableHeadProps) {
  return (
    <thead>
      <Row>
        <RowHeader></RowHeader>
        {columnHeaders.map(header => (
          <ColumnHeader key={header}>{header}</ColumnHeader>
        ))}
      </Row>
    </thead>
  );
}
