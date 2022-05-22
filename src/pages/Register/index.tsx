import { useState } from 'react';
import Modal from 'react-modal';
import ReactModal from '../../components/Modal';

import Header from '../../components/Header';
import FormRegister from './components/FormRegister';
import { Container } from './styles';

export default function Register() {
  const [modalOpened, setModalOpened] = useState(true);
  // function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   console.log();
  // }

  return (
    <>
      <Header />
      <Container>
        <ReactModal
          title="Nova fazenda"
          isOpen={modalOpened}
          // style={{ content: { maxWidth: '800px', alignSelf: 'center' } }}
        >
          <FormRegister />
        </ReactModal>
      </Container>
    </>
  );
}
