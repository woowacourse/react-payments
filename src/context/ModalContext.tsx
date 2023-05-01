import { createContext, useContext, useMemo } from "react";
import type { KeyboardEvent, PropsWithChildren } from "react";
import { useModal } from "../hooks/common/useModal";

interface ModalContextProps {
  isModalOpen: boolean;
  isModalClosed: boolean;
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  resetModal: () => void;
  handleClosePress: (event: KeyboardEvent<HTMLElement>) => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

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

  const contextValue = useMemo(
    () => ({
      isModalOpen,
      isModalClosed,
      isVisible,
      openModal,
      closeModal,
      resetModal,
      handleClosePress,
    }),
    [
      isModalOpen,
      isModalClosed,
      isVisible,
      openModal,
      closeModal,
      resetModal,
      handleClosePress,
    ]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error(
      "useModalContext needs to be used inside the ModalProvider"
    );
  }

  return context;
};
