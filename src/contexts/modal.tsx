import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const ModalContext = createContext({
  isOpen: false,
  openLocalModal: () => {},
  closeLocalModal: () => {},
});

interface ModalState {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  modalState?: ModalState;
  defaultOpen: boolean;
}

export function ModalProvider(props: PropsWithChildren<ModalProviderProps>) {
  const { modalState, defaultOpen = false, children } = props;
  const [isOpen, setIsOpen] = useState(modalState?.modalOpen ?? false);

  useEffect(() => {
    defaultOpen && setIsOpen(true);
  }, []);

  function openLocalModal() {
    setIsOpen(true);
    modalState?.openModal();
  }

  function closeLocalModal() {
    setIsOpen(false);
    modalState?.closeModal();
  }

  return (
    <ModalContext.Provider value={{ isOpen, openLocalModal, closeLocalModal }}>
      {children}
    </ModalContext.Provider>
  );
}
