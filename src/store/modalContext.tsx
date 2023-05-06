import React, { useContext, useState } from 'react';

export interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = React.createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error('modalContext값이 null입니다.');
  }

  return modalContext;
};

const ModalContextProvider = (props: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

export default ModalContextProvider;
