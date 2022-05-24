type StateIBGEProps = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

type FarmFormTypes = {
  id?: string;
  document: string;
  productor_name: string;
  farm_name: string;
  state: string;
  city: string;
  total_area: number;
  area_agriculture: number;
  area_vegetation: number;
  cultures: string[];
};
