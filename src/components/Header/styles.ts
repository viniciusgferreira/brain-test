import styled from 'styled-components';

interface NavLinkProps {
  active: boolean;
}

export const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  height: 5rem;
  padding: 0 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  div {
    max-width: 1200px;
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    img {
      height: 2.5rem;
    }
  }
`;
export const NavLink = styled.a<NavLinkProps>`
  padding: 0 0.5rem;
  border-radius: 4px;
  font-weight: bold;

  transition: color 0.2s;
  color: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.gray300};

  background: ${({ active, theme }) =>
    active
      ? `linear-gradient(0deg, ${theme.colors.gray600}, ${theme.colors.shape})`
      : `linear-gradient(${theme.colors.gray300})`};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  & + a {
    margin-left: 2rem;
  }
`;
