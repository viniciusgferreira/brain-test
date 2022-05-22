type StateProps = {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
};

type RegisterForm = {
  id?: string;
  document: string;
  productor_name: string;
  farm_name: string;
  state: string;
  city: string;
  total_area_farm: number;
  total_area_agriculture: number;
  total_area_vegetation: number;
  cultures: string[];
};
