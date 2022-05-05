import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
function ModalDimmed({ setIsShowModal, children }) {
  const onClickDimmed = e => {
    const {
      target: { className },
    } = e;

    if (className.includes('modal-dimmed')) {
      setIsShowModal(false);
    }
  };
  return (
    <div className="modal-dimmed" onClick={onClickDimmed}>
      {children}
    </div>
  );
}

function Modal({ children, setIsShowModal }) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.querySelector('.root').appendChild(container);
    return () => {
      document.querySelector('.root').removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <ModalDimmed setIsShowModal={setIsShowModal}>{children}</ModalDimmed>,
    container,
  );
}

ModalDimmed.propTypes = {
  setIsShowModal: PropTypes.func,
  children: PropTypes.node,
};

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
