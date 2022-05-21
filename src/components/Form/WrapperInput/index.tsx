import { ReactNode } from 'react';
import { Container } from './styles';

interface WrapperInputProps {
  children: ReactNode;
}

export default function WrapperInput({ children }: WrapperInputProps) {
  return <Container>{children}</Container>;
}
