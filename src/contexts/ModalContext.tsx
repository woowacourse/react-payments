import { PropsWithChildren, createContext, useContext } from 'react';
import { useModal } from '../hooks/common/useModal';

interface ModalContextProps {
  isModalOpen: boolean;
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  isVisible: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { isModalOpen, isVisible, openModal, closeModal } = useModal();

  return (
    <ModalContext.Provider value={{ isModalOpen, isVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModalContext need's to be used within a ModalProvider");
  }

  return context;
};
