import React, { useState } from 'react';
import { modalContextType } from '../types';

export const ModalContext = React.createContext<modalContextType>({
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

  const contextValue: modalContextType = {
    isModalOpen: isModalOpen,
    openModal: openModal,
    closeModal: closeModal,
  };

  return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider