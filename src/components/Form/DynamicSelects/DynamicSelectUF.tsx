import { useCallback, useState, useEffect, ChangeEventHandler } from 'react';
import { Oval } from 'react-loader-spinner';
import SelectInput from '../Select';

interface IDynamicSelectCityByUfProps {
  Uf: string;
  onChange: (value: string) => void;
  selectedValue: string;
  name: string;
  showUf?: boolean;
  getIBGECode?: boolean;
  readOnly?: boolean;
  loading: boolean;
  setLoadingCityOptions: (values: boolean) => void;
}

interface ICityByUf {
  id: number;
  nome: string;
  microrregiao: {
    nome: string;
    mesorregiao: {
      nome: string;
      UF: {
        sigla: string;
        nome: string;
        regiao: {
          sigla: string;
          nome: string;
        };
      };
    };
  };
}

export function DynamicSelectCityByUf({
  onChange,
  selectedValue,
  name,
  Uf,
  showUf,
  getIBGECode,
  readOnly,
  loading,
  setLoadingCityOptions,
}: IDynamicSelectCityByUfProps) {
  const [cityOptions, setCityOptions] = useState<ICityByUf[]>([]);

  const getCitiesByUf = useCallback(async () => {
    try {
      setLoadingCityOptions(true);
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${Uf}/municipios`,
        {
          method: 'GET',
        },
      )
        .then(response => {
          return response.json();
        })
        .then((data: ICityByUf[]) => {
          const ordenationCities = data.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
          });
          setCityOptions(ordenationCities);
          setLoadingCityOptions(false);
        });
    } catch (error) {
      setLoadingCityOptions(false);
      console.log({
        message: 'Houve um problema ao buscar as cidades por UF no IBGE!',
        error,
      });
    }
  }, [Uf, setLoadingCityOptions]);

  useEffect(() => {
    if (Uf !== '') {
      getCitiesByUf();
    }
  }, [Uf, getCitiesByUf]);

  const options =
    cityOptions.length > 0 &&
    cityOptions.map(city => (
      <option
        key={city.id}
        value={getIBGECode ? city.id : city.nome}
        selected={city.nome === selectedValue}
      >
        {showUf
          ? `${city.nome}/${city.microrregiao.mesorregiao.UF.sigla}`
          : city.nome}
      </option>
    ));

  return cityOptions.length > 0 ? (
    <SelectInput
      name={name}
      onChange={e => onChange(e.target.value)}
      value={selectedValue}
      disabled={readOnly}
      label="Cidade"
      loading={loading}
    >
      {loading ? (
        <option>
          <span>Carregando...</span>
        </option>
      ) : (
        <>
          <option value="">Selecione uma cidade</option>
          {options}
        </>
      )}
    </SelectInput>
  ) : (
    <SelectInput name={name} label="Cidade" value={selectedValue} disabled>
      <option value="">Selecione o estado primeiro</option>
    </SelectInput>
  );
}

export default DynamicSelectCityByUf;
