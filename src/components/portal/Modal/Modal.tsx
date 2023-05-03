import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as styled from './Modal.styled';

interface Props {
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ closeModal, children }: Props) => {
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  useEffect(() => {
    document.body.classList.add('overflowHidden');

    return () => document.body.classList.remove('overflowHidden');
  }, []);

  return ReactDOM.createPortal(
    <styled.Modal>
      <styled.ModalBackground onClick={closeModal} />
      {children}
    </styled.Modal>,
    modalRoot
  );
};

export default Modal;
