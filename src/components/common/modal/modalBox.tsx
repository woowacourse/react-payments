import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { ModalContext, ModalProvider } from "../../../contexts/modal";

interface ModalState {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProps {
  modalState?: ModalState;
  defaultOpen?: boolean;
}

export function ModalBox(props: PropsWithChildren<ModalProps>) {
  const { defaultOpen = false, modalState, children } = props;

  return (
    <ModalProvider modalState={modalState} defaultOpen={defaultOpen}>
      {children}
    </ModalProvider>
  );
}
