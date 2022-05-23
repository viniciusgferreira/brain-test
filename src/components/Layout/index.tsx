import { ReactNode } from 'react';
import { Container } from './styles';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <Container>{children}</Container>;
}
