import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

export const TableHead = styled.thead`
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;

  &:hover {
    background-color: #e4e4e4;
  }
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;

  &:first-child {
    border-left: 1px solid #e4e4e4;
  }

  &:last-child {
    border-right: 1px solid #e4e4e4;
  }
`;

export const TableHeadActionsCell = styled.th`
  padding: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;

  &:first-child {
    border-left: 1px solid #e4e4e4;
  }

  &:last-child {
    border-right: 1px solid #e4e4e4;
  }
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  &:hover {
    cursor: pointer;
    background-color: #e4e4e4;
  }
`;

export const TableBodyCell = styled.td`
  padding: 16px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: #000;

  &:first-child {
    border-left: 1px solid #e4e4e4;
  }

  &:last-child {
    border-right: 1px solid #e4e4e4;
  }
`;

export const TableBodyActions = styled.div`
  padding: 16px;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: #000;

  &:first-child {
    border-left: 1px solid #e4e4e4;
  }

  &:last-child {
    border-right: 1px solid #e4e4e4;
  }
`;

export const TableBodyAction = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
`;
