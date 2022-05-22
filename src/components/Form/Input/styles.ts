import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  input {
    padding: 6px;

    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 4px;
  }
`;
