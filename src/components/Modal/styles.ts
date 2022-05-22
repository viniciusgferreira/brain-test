import styled from 'styled-components';

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const ButtonCloseHeader = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
`;
