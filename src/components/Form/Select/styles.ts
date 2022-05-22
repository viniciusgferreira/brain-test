import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 10px;

  select {
    padding: 6px;

    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 4px;
  }

  label {
    display: flex;
  }
`;
