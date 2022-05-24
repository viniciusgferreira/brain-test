import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  /* padding: 40px; */
`;
export const ContentState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 660px;
  height: 600px;
  padding-top: 40px;
  margin: 20px 0;

  background: ${({ theme }) => theme.colors.secondary};

  border-radius: 6px;
`;
export const ContentCultAg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1200px;

  width: 100%;
  padding-top: 40px;

  @media (max-width: 829px) {
    flex-direction: column;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.secondary};
  padding: 20px;

  border-radius: 6px;

  @media (max-width: 829px) {
    margin-top: 10px;
  }

  width: 400px;
  height: 400px;
`;
