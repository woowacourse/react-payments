/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

export interface ModalState {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const ModalContext = React.createContext<ModalState>({
  modalOpen: false,
  setModalOpen: () => { },
});

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const state = {
    modalOpen,
    setModalOpen,
  };

  return (
    <ModalContext.Provider value={state}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
