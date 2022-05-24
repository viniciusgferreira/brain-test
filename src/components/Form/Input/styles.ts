import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  input {
    padding: 6px;

    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.danger : theme.colors.gray200};
    border-radius: 4px;
  }
  span {
    color: ${({ theme }) => theme.colors.danger};
    font-size: 12px;
  }
`;
