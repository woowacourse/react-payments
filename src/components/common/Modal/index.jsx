import React from "react";

import { ModalContainer, ModalInner, ModalOverlay } from "./style";

function Modal({ isOpen, setIsOpen, dimensions: { width, height }, children }) {
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
