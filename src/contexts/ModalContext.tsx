import { KeyboardEvent, PropsWithChildren, createContext, useContext } from 'react';
import { useModal } from '../hooks/common/useModal';

interface ModalContextProps {
  isModalOpen: boolean;
  isModalClosed: boolean;
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  resetModal: () => void;
  handleClosePress: (event: KeyboardEvent<HTMLElement>) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  isModalClosed: false,
  isVisible: false,
  openModal: () => {},
  closeModal: () => {},
  resetModal: () => {},
  handleClosePress: () => {},
});

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const {
    isModalOpen,
    isModalClosed,
    isVisible,
    openModal,
    closeModal,
    resetModal,
    handleClosePress,
  } = useModal();

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isModalClosed,
        isVisible,
        openModal,
        closeModal,
        resetModal,
        handleClosePress,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext needs to be used inside the ModalProvider');
  }

  return context;
};
