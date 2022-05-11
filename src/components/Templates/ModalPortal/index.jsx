import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

function ModalPortal({ isOpenModal, children }) {
  const [isMounted, setIsMounted] = useState(false);

  const modalContainer = useRef(null);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }

    modalContainer.current = document.getElementById('modal-container');

    return () => {
      setIsMounted(false);
    };
  }, []);

  if (modalContainer.current && isOpenModal) {
    return ReactDOM.createPortal(children, modalContainer.current);
  }

  return <></>;
}

export default ModalPortal;
