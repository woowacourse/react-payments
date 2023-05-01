import React, { useState } from 'react';

export interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }

export const ModalContext = React.createContext<ModalContextType>({
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

  const contextValue: ModalContextType = {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider