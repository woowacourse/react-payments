import { PropsWithChildren, useState } from "react";
import { ModalProvider } from "../../../contexts/modal";

interface ModalState {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProps {
  modalState?: ModalState;
}

export function ModalBox(props: PropsWithChildren<ModalProps>) {
  const { modalState, children } = props;

  return <ModalProvider modalState={modalState}>{children}</ModalProvider>;
}
