import styled from "styled-components";

import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  closeModal: () => void;
  canBackdropClickClose?: boolean;
}

const ModalFrame = ({ children, closeModal, canBackdropClickClose = true }: React.PropsWithChildren<ModalProps>) => {
  return createPortal(
    <div>
      <Backdrop onClick={canBackdropClickClose ? closeModal : undefined}></Backdrop>
      <Container>{children}</Container>
    </div>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  height: 227px;
  padding: 34px 30px;

  border-radius: 8px 8px 0px 0px;
  background: white;
`;

export default React.memo(ModalFrame);
