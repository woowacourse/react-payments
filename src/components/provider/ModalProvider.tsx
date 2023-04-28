import { createContext, useContext } from "react";
import useModal from "../../hooks/useModal";

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
  const { isOpenModal, openModal, closeModal } = useModal();

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
