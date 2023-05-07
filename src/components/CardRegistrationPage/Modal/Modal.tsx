import styled, { keyframes } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  const handleClickModalContainer = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <BackDrop onClick={closeModal} isOpen={isOpen}>
      <ModalContainer onClick={handleClickModalContainer} isOpen={isOpen}>
        {children}
      </ModalContainer>
    </BackDrop>
  );
};

const BackDrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;

  width: inherit;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.2s ease-out;
`;

const ModalContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 0;

  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  background-color: white;

  width: 100%;
  min-height: 227px;

  animation: ${({ isOpen }) => isOpen && slideUp} 0.2s ease-out;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export default Modal;
