import { useState } from 'react';
import Modal from 'react-modal';
import ReactModal from '../../components/Modal';

import Header from '../../components/Header';
import FormFarm from './components/FormFarm';
import { Container } from './styles';
import TableFarms from './components/TableFarms';
import { farmsMocked } from '../../utils/mock';

export default function Farms() {
  const [modalOpened, setModalOpened] = useState(false);
  const [farms, setFarms] = useState<FarmFormTypes[]>(farmsMocked);
  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   console.log();
  // }

  const [formValues, setFormValues] = useState<FarmFormTypes>(
    {} as FarmFormTypes,
  );

  console.log(formValues);

  function handleNewFarm() {
    setFormValues({} as FarmFormTypes);
    setModalOpened(true);
  }
  function handleEditFarm(value: FarmFormTypes) {
    setFormValues(value);
    setModalOpened(true);
  }

  function handleDelete(id: string | undefined) {
    setFarms(farms.filter(farm => farm.id !== id));
  }

  return (
    <>
      <Header />
      <Container>
        <ReactModal isOpen={modalOpened}>
          <FormFarm
            setModalOpened={setModalOpened}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </ReactModal>

        <TableFarms
          handleNewFarm={handleNewFarm}
          handleEditFarm={handleEditFarm}
          handleDelete={handleDelete}
          farms={farms}
        />
      </Container>
    </>
  );
}
