import React, { ReactChild, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

interface Props {
  children: ReactChild;
  closeModalHandler: () => void;
}

const ModalPortal = (props: Props) => {
  const $modalRoot = document.getElementById('modal-root') as HTMLElement;
  const modalRef = useRef<HTMLDialogElement>(null);

  const dialogKeyDownListener = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      props.closeModalHandler();
    }
  };

  const dialogBackdropListener = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      props.closeModalHandler();
    }
  };

  useEffect(() => {
    modalRef.current?.showModal();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modalRef.current?.close();
    };
  }, []);

  return ReactDom.createPortal(
    <dialog ref={modalRef} onKeyDown={dialogKeyDownListener} onClick={dialogBackdropListener}>
      <ModalContainer>{props.children}</ModalContainer>
    </dialog>,
    $modalRoot
  );
};

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 95%;
  padding: 32px 16px;

  display: flex;
  flex-direction: column;

  border-radius: 8px 8px 0px 0px;
  background: #ffffff;

  overflow: scroll;
`;

export default ModalPortal;
