import { ButtonHTMLAttributes } from 'react';
import { ColorsProps } from '../../../styles/styled';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof ColorsProps;
}

export default function Button({ children, color, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest} color={color}>
      {children}
    </Container>
  );
}
