import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 10px;
  margin-right: 10px;

  input {
    padding: 6px;

    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 4px;
  }

  label {
    margin-top: 10px;
  }
`;
