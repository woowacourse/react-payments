import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
function ModalDimmed({ closeModal, children }) {
  const onClickDimmed = e => {
    const {
      target: { className },
    } = e;

    if (className.includes('modal-dimmed')) {
      closeModal();
    }
  };
  return (
    <div className="modal-dimmed" onClick={onClickDimmed}>
      {children}
    </div>
  );
}

function Modal({ children, closeModal }) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.querySelector('.root').appendChild(container);
    return () => {
      document.querySelector('.root').removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <ModalDimmed closeModal={closeModal}>{children}</ModalDimmed>,
    container,
  );
}

ModalDimmed.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.node,
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
