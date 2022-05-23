import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;
export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.secondary};

  th {
    background: ${({ theme }) => theme.colors.gray400};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0px;
    padding: 15px;
  }
  & + tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    padding: 15px;
    border-radius: 8px;
  }
`;
