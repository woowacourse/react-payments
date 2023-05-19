import { PropsWithChildren, createContext, useContext } from 'react';
import { useModal } from '@suyoungj/react-simple-modal-ts';

import { noop } from '../noop';

interface ModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  openModal: noop,
  closeModal: noop,
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
