import { createPortal } from "react-dom";
import useKeyDown from "hooks/useKeyDown";
import React from "react";
import St from "./ModalStyled";

type ModalContainerProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

function Modal({ children, closeModal }: ModalContainerProps) {
  useKeyDown("Escape", closeModal);

  return createPortal(
    <>
      <St.Backdrop onClick={closeModal} />
      <St.Container>{children}</St.Container>
    </>,

    document.getElementById("modal") as HTMLDivElement
  );
}

export default Modal;
