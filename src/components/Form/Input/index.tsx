import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

export function InputBase(
  { name, label, error, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Container error={!!error}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input name={name} id={name} ref={ref} {...rest} />

      {!!error && <span>{error}</span>}
    </Container>
  );
}

export const Input = forwardRef(InputBase);
