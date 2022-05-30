import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ID } from 'constant/selector';

function ModalPortal({ isOpenModal, children }) {
  const modalContainer = useRef(null);

  useEffect(() => {
    modalContainer.current = document.getElementById(ID.MODAL_CONTAINER);
  }, []);

  if (isOpenModal && modalContainer.current) {
    return ReactDOM.createPortal(children, modalContainer.current);
  }

  return <></>;
}

export default ModalPortal;
