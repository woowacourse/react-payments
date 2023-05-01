import { PropsWithChildren, createContext, useContext } from 'react';

import useModal from './hooks/useModal';

import { noop } from '../../../utils/noop';

interface ModalContextProps {
  isModalOpen: boolean;
  isClosing: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  isClosing: false,
  openModal: noop,
  closeModal: noop,
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isModalOpen, isClosing, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider
      value={{ isModalOpen, isClosing, openModal, closeModal }}
    >
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
