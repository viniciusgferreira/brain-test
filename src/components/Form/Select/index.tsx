import { ReactNode, SelectHTMLAttributes } from 'react';
import { Oval } from 'react-loader-spinner';
import { Container } from './styles';
// import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  children: ReactNode;
  loading?: boolean;
}

export default function SelectInput({
  name,
  label,
  children,
  loading,
  ...rest
}: SelectProps) {
  return (
    <Container>
      {!!label && (
        <label htmlFor={name}>
          {label}
          {loading && (
            <Oval
              ariaLabel="loading-indicator"
              height={10}
              width={10}
              strokeWidth={5}
              color="green"
              secondaryColor="black"
            />
          )}
        </label>
      )}
      <select name={name} id={name} {...rest}>
        {children}
      </select>

      {/* {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>} */}
    </Container>
  );
}
