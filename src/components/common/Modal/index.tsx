import React from "react";

import { ModalContainer, ModalInner, ModalOverlay } from "./styled";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dimensions: {
    width: number;
    height: number;
  };
  children: React.ReactNode;
}

function Modal({ isOpen, setIsOpen, dimensions: { width, height }, children }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalOverlay
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
        isOpen={isOpen}
        width={width}
        height={height}
      >
        <ModalInner width={width} height={height}>
          {children}
        </ModalInner>
      </ModalOverlay>
    </ModalContainer>
  );
}

export default Modal;
