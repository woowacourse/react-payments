import { PropsWithChildren, createContext, useState } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isModalOpen: true,
  openModal: () => {},
  closeModal: () => {},
});

type ModalProviderProps = {
  defaultOpen?: boolean;
};

export const ModalProvider = ({ defaultOpen = false, children }: PropsWithChildren<ModalProviderProps>) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(defaultOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
