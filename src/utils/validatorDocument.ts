import { cpf, cnpj } from 'cpf-cnpj-validator';

interface validadeProps {
  value: string;
  masked: string;
}

export function validateDocument(
  valueDocument: string,
): validadeProps | undefined {
  // verifica se é um número válido

  const valueNormalized = valueDocument.replace(/[^a-zA-Z0-9s]/g, '');

  if (cpf.isValid(valueNormalized)) {
    const cpfFormatted = cpf.format(valueNormalized);

    return { value: valueNormalized, masked: cpfFormatted };
  }

  if (cnpj.isValid(valueDocument)) {
    const cnpjFormatted = cnpj.format(valueNormalized);

    return { value: valueNormalized, masked: cnpjFormatted };
  }

  return undefined;
}
