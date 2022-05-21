import { FormEvent, useEffect, useState } from 'react';
import Button from '../../components/Form/Button';
import Fieldset from '../../components/Form/Fieldset';
import { Input } from '../../components/Form/Input';
import SelectInput from '../../components/Form/Select';
import WrapperInput from '../../components/Form/WrapperInput';
import Header from '../../components/Header';
import { Container } from './styles';

export default function Register() {
  const [stateOptions, setStateOptions] = useState<StateProps[]>([]);
  const [loadingStateOptions, setLoadingStateOptions] = useState(false);

  useEffect(() => {
    try {
      setLoadingStateOptions(true);
      fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
        method: 'GET',
      })
        .then(response => {
          return response.json();
        })
        .then(data => setStateOptions(data));
      setLoadingStateOptions(false);
    } catch (error) {
      setLoadingStateOptions(false);
      console.log(error);
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(stateOptions);
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={e => handleSubmit(e)}>
          <Fieldset legend="Cadastrar nova fazenda">
            <Input name="Nome" id="productor_name" label="Nome do produtor" />
            <Input name="Nome" id="farm_name" label="Nome da produtor" />
            <WrapperInput>
              <SelectInput name="Nome" id="state" label="Estado">
                {loadingStateOptions ? (
                  <option>Carregando...</option>
                ) : (
                  stateOptions &&
                  stateOptions.map(state => (
                    <option value={state.id}>{state.nome}</option>
                  ))
                )}
              </SelectInput>
              <Input name="Nome" id="city" label="Cidade" />
            </WrapperInput>
            <Input
              name="Endereço"
              id="agriculture_area"
              label="Area de agricultura"
            />
            <Input
              name="Endereço"
              id="vegetation_area"
              label="Area de vegetação"
            />
            <Input name="Cidade" id="total_area" label="Área total" />
            <Input name="Culturas" id="cultures" label="Culturas plantadas" />

            <Button type="submit">Enviar</Button>
          </Fieldset>
        </form>
      </Container>
    </>
  );
}
