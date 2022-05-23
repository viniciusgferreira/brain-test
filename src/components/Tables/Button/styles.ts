import styled from 'styled-components';
import { shade } from 'polished';
import { ColorsProps } from '../../../styles/styled';

interface ColorButtonProps {
  color: keyof ColorsProps;
}

export const Container = styled.button<ColorButtonProps>`
  max-width: 80px;
  width: 100%;
  padding: 8px;

  background: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  &:hover {
    background: ${({ theme, color }) => shade(0.2, theme.colors[color])};
  }

  & + button {
    margin-top: 8px;
  }
`;
