import React, { FormEvent, useEffect, useState } from 'react';
import Button from '../../../../components/Form/Button';
import DynamicSelectCityByUf from '../../../../components/Form/DynamicSelects/DynamicSelectUF';
import Fieldset from '../../../../components/Form/Fieldset';
import { Input } from '../../../../components/Form/Input';
import SelectInput from '../../../../components/Form/Select';
import WrapperInput from '../../../../components/Form/WrapperInput';
import { ButtonContainer, CloseButton, SubmitButton } from './styles';

interface FormFarmProps {
  setModalOpened: (value: boolean) => void;
  formValues: FarmFormTypes;
  setFormValues: (values: FarmFormTypes) => void;
}

export default function FormRegister({
  setModalOpened,
  formValues,
  setFormValues,
}: FormFarmProps) {
  const [stateOptions, setStateOptions] = useState<StateIBGEProps[]>([]);
  const [loadingStateOptions, setLoadingStateOptions] = useState(false);
  const [loadingCitiesOptions, setLoadingCityOptions] = useState(false);

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

  function handleCloseModal() {
    setFormValues({} as FarmFormTypes);

    setModalOpened(false);
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
        .then((data: StateIBGEProps[]) => {
          const ordenationStates = data.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
          });
          setStateOptions(ordenationStates);
        });
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
          value={formValues.productor_name}
          onChange={e => {
            handleChangeDocument(e.target.value);
          }}
        />
        <Input name="Nome" id="farm_name" label="Nome da fazenda" />
        <WrapperInput>
          <SelectInput
            name="state"
            id="state"
            value={formValues.state}
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
          value={formValues.total_area_agriculture}
          type="number"
          onChange={e => {
            handleChangeAgriculture(Number(e.target.value));
          }}
        />
        <Input
          name="Endereço"
          id="vegetation_area"
          label="Area de vegetação"
          value={formValues.total_area_vegetation}
          type="number"
          onChange={e => {
            handleChangeVegatation(Number(e.target.value));
          }}
        />
        <Input
          name="Cidade"
          id="total_area"
          label="Área total"
          value={formValues.total_area_farm}
          type="number"
          onChange={e => {
            handleChangeTotalArea(Number(e.target.value));
          }}
        />
        <Input
          name="Culturas"
          id="cultures"
          value={formValues.cultures}
          label="Culturas plantadas"
          onChange={e => {
            handleChangeCultures(e.target.value);
          }}
        />

        <ButtonContainer>
          <SubmitButton type="submit">Enviar</SubmitButton>

          <CloseButton type="button" onClick={handleCloseModal}>
            Fechar
          </CloseButton>
        </ButtonContainer>
      </Fieldset>
    </form>
  );
}
