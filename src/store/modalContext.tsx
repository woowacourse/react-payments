import React, { useState, ReactChild } from 'react';

export const ModalContext = React.createContext<{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = (props: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const contextValue: {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  } = {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider