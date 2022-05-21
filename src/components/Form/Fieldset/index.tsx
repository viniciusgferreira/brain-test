import React from 'react';
import { FieldsetContainer } from './styles';

interface FieldsetProps {
  children: React.ReactNode;
  legend: string;
}

export default function Fieldset({ children, legend }: FieldsetProps) {
  return (
    <FieldsetContainer>
      <legend>{legend}</legend>
      {children}
    </FieldsetContainer>
  );
}
