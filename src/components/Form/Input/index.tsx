import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export function InputBase(
  { name, label, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} ref={ref} {...rest} />

      {/* {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </Container>
  );
}

export const Input = forwardRef(InputBase);
