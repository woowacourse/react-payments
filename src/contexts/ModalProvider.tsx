import React from 'react';
import { createContext, useState } from 'react';

type ModalContextType = {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  content: null,
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  children?: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setIsOpen(() => true);
    setContent(() => content);
  };

  const closeModal = () => {
    setIsOpen(() => false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        content,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
