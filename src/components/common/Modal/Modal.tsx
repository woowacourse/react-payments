import { PropsWithChildren } from "react";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ children, isOpen, closeModal }: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen ? (
        <>
          <ModalOverlay onClick={closeModal} />
          <ModalContent>
            {children}
            <CloseButton onClick={closeModal}>✖</CloseButton>
          </ModalContent>
        </>
      ) : null}
    </>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 36px;
  border-radius: 8px 8px 0px 0px;
  background-color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
