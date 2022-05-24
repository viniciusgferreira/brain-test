import { FormEvent, useEffect, useState } from 'react';
import { MdAdd, MdDelete } from 'react-icons/md';
import CustomButton from '../../../../components/Buttons/CustomButton';
import DynamicSelectCityByUf from '../../../../components/Form/DynamicSelects/DynamicSelectUF';
import Fieldset from '../../../../components/Form/Fieldset';
import { Input } from '../../../../components/Form/Input';
import SelectInput from '../../../../components/Form/Select';
import WrapperInput from '../../../../components/Form/WrapperInput';
import { MySwal } from '../../../../utils/modalAlerts';
import { validateDocument } from '../../../../utils/validatorDocument';
import {
  ButtonContainer,
  CloseButton,
  ContentCultures,
  SubmitButton,
} from './styles';

interface FormFarmProps {
  setModalOpened: (value: boolean) => void;
  formValues: FarmFormTypes;
  setFormValues: (values: FarmFormTypes) => void;
  isEditing: boolean;
  handleSubmit: (event: FormEvent) => void;
}

export default function FormRegister({
  setModalOpened,
  formValues,
  setFormValues,
  isEditing,
  handleSubmit,
}: FormFarmProps) {
  const [stateOptions, setStateOptions] = useState<StateIBGEProps[]>([]);
  const [loadingStateOptions, setLoadingStateOptions] = useState(false);
  const [loadingCitiesOptions, setLoadingCityOptions] = useState(false);
  const [currentCulture, setCurrentCulture] = useState('');
  const [currentStateOption, setcurrentStateOption] = useState('');

  const [errorDocument, setErrorDocument] = useState(false);

  function handleChangeDocument(valueDocument: string) {
    const validDocument = validateDocument(valueDocument);
    setFormValues({
      ...formValues,
      document: validDocument?.masked || valueDocument,
    });
    if (!validDocument?.value) {
      setErrorDocument(true);
    } else {
      setErrorDocument(false);
    }
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
    setFormValues({ ...formValues, area_agriculture: valueAgriculture });
  }
  function handleChangeVegatation(valueVegetation: number) {
    setFormValues({ ...formValues, area_vegetation: valueVegetation });
  }
  function handleChangeTotalArea(totalArea: number) {
    setFormValues({ ...formValues, total_area: totalArea });
  }
  function handleAddCultures(culture: string) {
    const haveCultures = formValues.cultures;
    setFormValues({
      ...formValues,
      cultures: haveCultures ? [...formValues.cultures, culture] : [culture],
    });
    setCurrentCulture('');
  }

  function handleDeleteCulture(cultureToDelete: string) {
    const filteresCultures = [
      ...formValues.cultures.filter(culture => culture !== cultureToDelete),
    ];

    setFormValues({
      ...formValues,
      cultures: [...filteresCultures],
    });
  }

  function handleCloseModal() {
    setFormValues({} as FarmFormTypes);

    setModalOpened(false);
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
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao buscar os estados.',
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset legend="Cadastrar nova fazenda">
        <Input
          name="Documento"
          id="document"
          label="Documento"
          error={errorDocument ? 'Digite um documento válido' : ''}
          value={formValues.document}
          onChange={e => {
            handleChangeDocument(e.target.value);
          }}
        />
        <Input
          name="Nome"
          id="productor_name"
          label="Nome do produtor"
          value={formValues.productor_name}
          onChange={e => {
            handleChangeProductorName(e.target.value);
          }}
        />
        <Input
          name="Nome"
          id="farm_name"
          value={formValues.farm_name}
          label="Nome da fazenda"
          onChange={e => {
            handleChangeFarmName(e.target.value);
          }}
        />
        <WrapperInput>
          <SelectInput
            name="state"
            id="state"
            label="Estado"
            loading={loadingStateOptions}
            onChange={e => {
              setcurrentStateOption(e.target.value);
              handleChangeState(e.target.options[e.target.selectedIndex].text);
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
            Uf={currentStateOption}
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
          value={formValues.area_agriculture}
          type="number"
          onChange={e => {
            handleChangeAgriculture(Number(e.target.value));
          }}
        />
        <Input
          name="Endereço"
          id="vegetation_area"
          label="Area de vegetação"
          value={formValues.area_vegetation}
          type="number"
          onChange={e => {
            handleChangeVegatation(Number(e.target.value));
          }}
        />
        <Input
          name="Cidade"
          id="total_area"
          label="Área total"
          value={formValues.total_area}
          type="number"
          onChange={e => {
            handleChangeTotalArea(Number(e.target.value));
          }}
        />

        <ContentCultures>
          <div>
            <Input
              name="Culturas"
              id="cultures"
              value={currentCulture}
              label="Culturas plantadas"
              onChange={e => {
                setCurrentCulture(e.target.value);
              }}
            />
            <CustomButton
              color="new"
              onClick={() => handleAddCultures(currentCulture)}
            >
              <MdAdd size={14} style={{ marginRight: '4px' }} />
              Adicionar
            </CustomButton>
          </div>

          <ul>
            {formValues.cultures?.map(culture => (
              <li>
                <p>{culture}</p>
                <CustomButton
                  color="danger"
                  onClick={() => handleDeleteCulture(culture)}
                >
                  <MdDelete size={14} style={{ marginRight: '4px' }} />
                </CustomButton>
              </li>
            ))}
          </ul>
        </ContentCultures>

        <ButtonContainer>
          <SubmitButton type="submit">
            {isEditing ? 'Salvar' : 'Concluir'}
          </SubmitButton>

          <CloseButton type="button" onClick={handleCloseModal}>
            Fechar
          </CloseButton>
        </ButtonContainer>
      </Fieldset>
    </form>
  );
}
