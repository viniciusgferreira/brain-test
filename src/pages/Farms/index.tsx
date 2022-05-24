import { FormEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from '../../components/Modal';

import Header from '../../components/Header';
import FormFarm from './components/FormFarm';
import { Container } from './styles';
import TableFarms from './components/TableFarms';
import api from '../../services/api';
import { MySwal } from '../../utils/modalAlerts';
import FarmCounter from '../../components/FarmCounter';
import { increment } from '../../redux/context/farm';

export default function Farms() {
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [farms, setFarms] = useState<FarmFormTypes[]>([]);
  const [formValues, setFormValues] = useState<FarmFormTypes>(
    {} as FarmFormTypes,
  );

  const dispatch = useDispatch();

  const loadDataFarms = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get('farms');
      setFarms(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao buscar os dados das fazendas.',
      });
    }
  }, []);

  async function handleAddFarm(event: FormEvent) {
    event.preventDefault();
    try {
      await api.post('farms', formValues);
      MySwal.fire({
        icon: 'success',
        title: 'Nova fazenda cadastrada',
        text: 'Cadastro de nova fazenda realizado com sucesso!',
      });
      loadDataFarms();
      setModalOpened(false);
      dispatch(increment());
    } catch (error) {
      setModalOpened(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao cadastrar novas fazendas!',
      });
    }
  }
  async function handleUpdateFarm(event: FormEvent) {
    event.preventDefault();
    try {
      await api.put(`farms/${formValues.id}`, formValues);
      MySwal.fire({
        icon: 'success',
        title: 'Registro atualizado',
        text: 'Cadastro atualizado com sucesso!',
      });
      loadDataFarms();
      setModalOpened(false);
    } catch (error) {
      setModalOpened(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao cadastrar novas fazendas!',
      });
    }
  }

  function handleNewFarm() {
    setFormValues({} as FarmFormTypes);
    setModalOpened(true);
  }
  function handleEditFarm(value: FarmFormTypes) {
    setIsEditing(true);
    setFormValues(value);
    setModalOpened(true);
  }

  async function handleDelete(id: string | undefined) {
    try {
      await api.delete(`farms/${id}`);
      MySwal.fire({
        icon: 'success',
        title: 'Registro excluido',
        text: 'Cadastro excluido com sucesso!',
      });
      loadDataFarms();
      setModalOpened(false);
    } catch (error) {
      setModalOpened(false);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao excluir a fazenda!',
      });
    }
  }

  useEffect(() => {
    loadDataFarms();
  }, [loadDataFarms]);

  return (
    <>
      <Header />
      <FarmCounter />
      <Container>
        <ReactModal isOpen={modalOpened}>
          <FormFarm
            setModalOpened={setModalOpened}
            formValues={formValues}
            setFormValues={setFormValues}
            isEditing={isEditing}
            handleSubmit={isEditing ? handleUpdateFarm : handleAddFarm}
          />
        </ReactModal>

        <TableFarms
          handleNewFarm={handleNewFarm}
          handleEditFarm={handleEditFarm}
          handleDelete={handleDelete}
          farms={farms}
          loading={loading}
        />
      </Container>
    </>
  );
}
