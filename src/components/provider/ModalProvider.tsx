import { createContext, useContext } from "react";
import useIsOpen from "../../hooks/useModal";

interface ModalProviderProps {
  children: React.ReactNode;
}

interface ModalAction {
  isOpenModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalAction | null>(null);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen: isOpenModal, open: openModal, close: closeModal } = useIsOpen();

  const modalAction = {
    isOpenModal,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={modalAction}>{children}</ModalContext.Provider>;
};

export const useModalAction = () => {
  const value = useContext(ModalContext);
  if (value === null) {
    throw new Error("ModalContext 에러");
  }
  return value;
};

export default ModalProvider;
