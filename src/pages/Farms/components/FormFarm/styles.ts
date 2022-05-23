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
