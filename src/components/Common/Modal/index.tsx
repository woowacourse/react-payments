import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Style = {
  BackDrop: styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
  `,
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 16px;
    border-radius: 8px 8px 0 0;
    background: white;
  `,
};

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

function Modal({ children, closeModal }: ModalProps) {
  return createPortal(
    <>
      <Style.BackDrop onClick={closeModal} />
      <Style.Wrapper>{children}</Style.Wrapper>
    </>,
    document.body,
  );
}

export default Modal;
