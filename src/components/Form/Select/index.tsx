import { ReactNode, SelectHTMLAttributes } from 'react';
import { Container } from './styles';
// import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  children: ReactNode;
}

export default function SelectInput({
  name,
  label,
  children,
  ...rest
}: SelectProps) {
  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <select name={name} id={name} {...rest}>
        {children}
      </select>

      {/* {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </Container>
  );
}
