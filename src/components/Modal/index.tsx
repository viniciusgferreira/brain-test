import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import Button from '../Form/Button';
import { ButtonCloseHeader, HeaderModal } from './styles';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  title: string;
}

const styles = {
  content: {
    maxWidth: '800px',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
};

export default function Modal({ children, isOpen, title }: ModalProps) {
  return (
    <ReactModal isOpen={isOpen} style={styles}>
      <HeaderModal>
        <h4>{title}</h4>

        <ButtonCloseHeader>
          <MdClose color="red" fontSize={20} />
        </ButtonCloseHeader>
      </HeaderModal>
      {children}
    </ReactModal>
  );
}
