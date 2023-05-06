import { PropsWithChildren, createContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  defaultOpen: boolean;
};

export const ModalProvider = ({ defaultOpen, children }: PropsWithChildren<ModalProviderProps>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(defaultOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
