import styled from 'styled-components';

type DataCellProps = {
  kana: string;
  pronunciation: string;
};

export default function DataCell({ kana, pronunciation }: DataCellProps) {
  return (
    <td>
      <KanaGroup>
        <span>{kana}</span>
        <Pronunciation>{pronunciation}</Pronunciation>
      </KanaGroup>
    </td>
  );
}

const KanaGroup = styled.span`
  display: grid;
  gap: 6px;
  place-items: center;
`;

const Pronunciation = styled.span`
  font-size: 0.5rem;
  font-style: italic;
`;
