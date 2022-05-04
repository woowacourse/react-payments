import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
function Modal({ children, setIsShowModal }) {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    const onClickDimmed = e => {
      const {
        target: { className },
      } = e;

      if (className.includes('modal-dimmed')) {
        setIsShowModal(false);
      }
    };

    container.addEventListener('click', onClickDimmed);
    container.classList.add('modal-dimmed');

    document.querySelector('.root').appendChild(container);

    return () => {
      container.removeEventListener('click', onClickDimmed);
      document.querySelector('.root').removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(children, container);
}

Modal.propTypes = {
  setIsShowModal: PropTypes.func,
};

export default Modal;
