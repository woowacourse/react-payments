import styled, { keyframes } from "styled-components";

type ModalProps = {
  children: React.ReactNode;
  modalOpen: boolean;
};

const Modal = ({ children, modalOpen }: ModalProps) => {
  return (
    <ModalBackDrop modalOpen={modalOpen}>
      <ModalContent modalOpen={modalOpen}>{children}</ModalContent>
    </ModalBackDrop>
  );
};

const ModalBackDrop = styled.div<{ modalOpen: boolean }>`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  z-index: 3;
  overflow: hidden;

  background: rgba(0, 0, 0, 0.5);

  visibility: ${({ modalOpen }) => (modalOpen ? "visible" : "hidden")};

  ${({ modalOpen }) =>
    !modalOpen &&
    `
    transition-delay: 0.4s;
  `};
`;

const slideUp = keyframes`
  0% { 
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const ModalContent = styled.div<{ modalOpen: boolean }>`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  position: absolute;

  padding: 20px;

  width: 100%;
  height: 30%;

  border-radius: 5px 0px;

  bottom: 0;

  background: #f5f5f5;

  animation: ${({ modalOpen }) => (modalOpen ? slideUp : slideDown)} 0.4s ease-out;
`;

export default Modal;
