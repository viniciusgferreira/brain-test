import { ReactNode } from 'react';
import ReactModal from 'react-modal';
import './styles.css';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const styles = {
  content: {
    maxWidth: '800px',
    margin: 'auto',
    maxHeight: '700px',
  },
  overlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default function Modal({ children, isOpen }: ModalProps) {
  return (
    <ReactModal
      closeTimeoutMS={200}
      isOpen={isOpen}
      aria={{
        labelledby: 'heading',
        describedby: 'full_description',
      }}
      style={styles}
    >
      {children}
    </ReactModal>
  );
}
