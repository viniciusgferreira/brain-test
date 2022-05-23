import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.gray200};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
