import { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ModalComponent from '../components/Modal/Modal';

export default (defaultValue = false) => {
  const [isModalOpened, setModalOpened] = useState(defaultValue);

  const modalRef = useRef(null);

  const openModal = () => setModalOpened(true);

  const closeModal = useCallback(() => setModalOpened(false), []);

  const toggleModal = () => setModalOpened((state) => !state);

  const Modal = ({ children, ...props }) => {
    if (!isModalOpened) return null;

    return (
      <ModalComponent ref={modalRef} onClose={closeModal} {...props}>
        {children}
      </ModalComponent>
    );
  };

  Modal.propTypes = {
    children: PropTypes.node,
  };

  Modal.defaultProps = {
    children: <></>,
  };

  return { Modal, modalRef, isModalOpened, openModal, closeModal, toggleModal };
};
