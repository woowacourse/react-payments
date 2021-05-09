import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalContent: '',
  });

  const onOpenModal = (modalContent) => {
    setModal({
      isModalOpen: true,
      modalContent,
    });
  };

  const onCloseModal = () => {
    setModal({
      isModalOpen: false,
      modalContent: '',
    });
  };

  return (
    <ModalContext.Provider value={{ modal, onOpenModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};
