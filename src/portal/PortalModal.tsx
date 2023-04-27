import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: flex-end;

  width: 100vw;
  height: 100vh;
`;

const ModalBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(1, 1, 1, 0.5);
`;

interface PortalModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const PortalModal = ({ closeModal, children }: PortalModalProps) => {
  const modalRoot = document.querySelector('#modal-root') as HTMLElement;

  useEffect(() => {
    document.body.classList.add('overflowHidden');

    return () => document.body.classList.remove('overflowHidden');
  }, []);

  return ReactDOM.createPortal(
    <Modal>
      <ModalBackground onClick={closeModal} />
      {children}
    </Modal>,
    modalRoot
  );
};

export default PortalModal;
