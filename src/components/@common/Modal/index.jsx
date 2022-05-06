import PropTypes from 'prop-types';
import reactDom from 'react-dom';
import { useState, useEffect } from 'react';

import { Container, ModalContent } from './styles';

function Modal({ isVisible, handleClose, children }) {
  const [modalClassName, setClassName] = useState('hidden');

  useEffect(() => {
    if (modalClassName === 'hidden' && isVisible === false) return;

    setClassName(isVisible ? 'visible' : 'disappear');
  }, [isVisible]);

  const onDisappeared = () => {
    if (modalClassName === 'visible') return;
    setClassName('hidden');
  };

  const render = (
    <Container
      className={modalClassName}
      isVisible={isVisible}
      onClick={handleClose}
      onAnimationEnd={onDisappeared}
    >
      <ModalContent>{children}</ModalContent>
    </Container>
  );

  const modalContainer = document.getElementById('root');
  return reactDom.createPortal(render, modalContainer);
}

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
