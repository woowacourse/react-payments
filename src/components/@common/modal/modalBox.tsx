import { PropsWithChildren } from "react";
import { ModalProvider } from "../../../contexts/modal";
import { ModalBackDrop } from "./modalBackDrop";
import { ModalContent } from "./modalContent";
import { ModalTrigger } from "./modalTrigger";

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

export const Modal = Object.assign(ModalBox, {
  Backdrop: ModalBackDrop,
  Trigger: ModalTrigger,
  Content: ModalContent,
});
