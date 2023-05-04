import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
  onCloseModal: () => void;
};

const Modal = ({ children, onCloseModal }: PropsWithChildren<ModalProps>) => {
  const onKeyDownEscape = (event: KeyboardEvent) => {
    if (event.code !== 'Escape') return;
    onCloseModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownEscape);
    return () => window.removeEventListener('keydown', onKeyDownEscape);
  });

  return createPortal(
    <ModalWrapper>
      <ModalBackdrop onClick={onCloseModal} />
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>,
    document.body,
  );
};

const ModalWrapper = styled.div`
  position: relative;
  z-index: 9999;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000059;
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 80vh;
  overflow: auto;
  padding: 34px 0;
  border-radius: 8px 8px 0px 0px;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

export default Modal;
