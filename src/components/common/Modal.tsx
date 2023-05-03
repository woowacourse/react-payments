import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface ModalProps {
  closeModal?: () => void;
}

export const Modal = ({
  children,
  closeModal,
}: PropsWithChildren<ModalProps>) => {
  return createPortal(
    <>
      <BackDrop onClick={closeModal} />
      <ModalContainer>{children}</ModalContainer>
    </>,
    document.body
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  position: fixed;
  bottom: 0;
  height: 33%;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 5px 5px 0 0;
  background-color: white;
`;
