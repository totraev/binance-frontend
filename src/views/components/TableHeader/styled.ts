import styled from 'styled-components';

interface TableHeaderProps {
  flex: number;
}

export const TableHeaderWrap = styled.div`
  display: flex;
`;

export const TableHeaderCell = styled.div<TableHeaderProps>`
  flex: ${({ flex }) => flex};
`;
