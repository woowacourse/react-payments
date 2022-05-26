import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './index.styled';

interface Props {
  children: React.ReactNode;
  isModalOpened: boolean;
  closeModal: () => void;
}

const Modal = ({ children, isModalOpened, closeModal }: Props) => {
  const root = document.getElementById('modal-root');

  return isModalOpened && root
    ? ReactDOM.createPortal(
        <div>
          <Styled.Dimmer onClick={closeModal} />
          {children}
        </div>,
        root,
      )
    : null;
};

export default Modal;
