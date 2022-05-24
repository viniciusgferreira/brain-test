import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 10px;
  margin-top: 14px;
`;
export const SubmitButton = styled.button`
  max-width: 120px;
  width: 100%;
  padding: 10px;

  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 4px;
`;
export const CloseButton = styled.button`
  max-width: 120px;
  width: 100%;
  padding: 10px;

  background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 4px;
`;

export const ContentCultures = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    width: 100%;
    justify-content: center;

    button {
      margin-top: 26px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 100%;
      max-width: 500px;
      padding: 10px;
      border-radius: 6px;

      background: ${({ theme }) => theme.colors.gray100};

      p {
        width: 200px;
      }

      button {
        max-width: 50px;
      }

      & + li {
        margin-top: 4px;
      }
    }
  }
`;
