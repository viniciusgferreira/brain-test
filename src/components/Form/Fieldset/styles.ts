import styled from 'styled-components';

export const FieldsetContainer = styled.fieldset`
  width: 100%;
  padding: 30px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-color: ${({ theme }) => theme.colors.secondary};
  padding-bottom: 48px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  legend {
    padding: 8px;
    font-weight: bold;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
