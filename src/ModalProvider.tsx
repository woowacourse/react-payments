/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

export interface ModalState {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  modalContent: React.ReactNode;
  setModalContent: (content: React.ReactNode) => void;
}

export const ModalContext = React.createContext<ModalState>({
  modalOpen: false,
  setModalOpen: () => { },
  modalContent: <></>,
  setModalContent: () => { },
});

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(<></>);
  const state = {
    modalOpen,
    setModalOpen,
    modalContent,
    setModalContent
  };

  return (
    <ModalContext.Provider value={state}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
