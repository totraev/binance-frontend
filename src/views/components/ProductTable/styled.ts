import styled from 'styled-components';

export const TableWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
  padding: 5px 0 5px 5px;
`;

export const TableBody = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin-top: 10px;
`;

export const EmptyMessage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-top: -10px;
  color: #76808f;
`;
