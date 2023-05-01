import React, { ReactChild, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: ReactChild;
  closeModalHandler: () => void;
}

const ModalPortal=(props:Props)=> {
  const $modalRoot = document.getElementById('modal-root') as HTMLElement;
  const modalRef = useRef<HTMLDialogElement>(null);

  const dialogKeyDownListener=(event: React.KeyboardEvent<HTMLDialogElement>)=>{
    if (event.key === 'Escape') {
      props.closeModalHandler();
    }
  }

  const dialogBackdropListener=(event: React.MouseEvent<HTMLDialogElement>)=>{
    if (event.target === event.currentTarget) {
      props.closeModalHandler();
    }
  }

  useEffect(() => {
    modalRef.current?.showModal();
    
    return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        modalRef.current?.close();
    };
  }, []);

    return ReactDom.createPortal(
      <dialog ref={modalRef} onKeyDown={dialogKeyDownListener} onClick={dialogBackdropListener}>
        {props.children}
      </dialog>,
      $modalRoot
    );
}

export default ModalPortal;