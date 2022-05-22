import React, { FormEvent, useEffect, useState } from 'react';
import Button from '../../../../components/Form/Button';
import DynamicSelectCityByUf from '../../../../components/Form/DynamicSelects/DynamicSelectUF';
import Fieldset from '../../../../components/Form/Fieldset';
import { Input } from '../../../../components/Form/Input';
import SelectInput from '../../../../components/Form/Select';
import WrapperInput from '../../../../components/Form/WrapperInput';
import { ButtonContainer } from './styles';

export default function FormRegister() {
  const [stateOptions, setStateOptions] = useState<StateProps[]>([]);
  const [loadingStateOptions, setLoadingStateOptions] = useState(false);
  const [loadingCitiesOptions, setLoadingCityOptions] = useState(false);

  const [formValues, setFormValues] = useState<RegisterForm>(
    {} as RegisterForm,
  );

  const [validationErrors, setValidationErrors] = useState();

  function handleChangeDocument(valueDocument: string) {
    setFormValues({ ...formValues, document: valueDocument });
  }
  function handleChangeProductorName(valueProductorName: string) {
    setFormValues({ ...formValues, productor_name: valueProductorName });
  }
  function handleChangeFarmName(farmName: string) {
    setFormValues({ ...formValues, farm_name: farmName });
  }
  function handleChangeState(valueState: string) {
    setFormValues({ ...formValues, state: valueState });
  }
  function handleChangeCity(valueCity: string) {
    setFormValues({ ...formValues, city: valueCity });
  }
  function handleChangeAgriculture(valueAgriculture: number) {
    setFormValues({ ...formValues, total_area_agriculture: valueAgriculture });
  }
  function handleChangeVegatation(valueVegetation: number) {
    setFormValues({ ...formValues, total_area_vegetation: valueVegetation });
  }
  function handleChangeTotalArea(totalArea: number) {
    setFormValues({ ...formValues, total_area_farm: totalArea });
  }
  function handleChangeCultures(culture: string) {
    setFormValues({
      ...formValues,
      cultures: [...formValues.cultures, culture],
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(stateOptions);
  }

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

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <Fieldset legend="Cadastrar nova fazenda">
        <Input
          name="Nome"
          id="productor_name"
          label="Nome do produtor"
          onChange={e => {
            handleChangeDocument(e.target.value);
          }}
        />
        <Input name="Nome" id="farm_name" label="Nome da produtor" />
        <WrapperInput>
          <SelectInput
            name="Nome"
            id="state"
            label="Estado"
            loading={loadingStateOptions}
            onChange={e => {
              handleChangeState(e.target.value);
            }}
          >
            {loadingStateOptions ? (
              <option>Carregando...</option>
            ) : (
              stateOptions && (
                <>
                  <option value="">Selecione o estado</option>
                  {stateOptions.map(state => (
                    <option value={state.id}>{state.nome}</option>
                  ))}
                </>
              )
            )}
          </SelectInput>
          <DynamicSelectCityByUf
            Uf={formValues.state}
            onChange={handleChangeCity}
            selectedValue={formValues.city}
            name="city"
            loading={loadingCitiesOptions}
            setLoadingCityOptions={setLoadingCityOptions}
          />
        </WrapperInput>
        <Input
          name="Endereço"
          id="agriculture_area"
          label="Area de agricultura"
          type="number"
          onChange={e => {
            handleChangeAgriculture(Number(e.target.value));
          }}
        />
        <Input
          name="Endereço"
          id="vegetation_area"
          label="Area de vegetação"
          type="number"
          onChange={e => {
            handleChangeVegatation(Number(e.target.value));
          }}
        />
        <Input
          name="Cidade"
          id="total_area"
          label="Área total"
          type="number"
          onChange={e => {
            handleChangeTotalArea(Number(e.target.value));
          }}
        />
        <Input
          name="Culturas"
          id="cultures"
          label="Culturas plantadas"
          onChange={e => {
            handleChangeCultures(e.target.value);
          }}
        />

        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </Fieldset>
    </form>
  );
}
