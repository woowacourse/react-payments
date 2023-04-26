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
        <StyledModalContainer>
          <StyledModalBackdrop onClick={closeModal}></StyledModalBackdrop>
          <StyledModalContentWrapper>
            {children}
            <CloseButton onClick={closeModal}>✖</CloseButton>
          </StyledModalContentWrapper>
        </StyledModalContainer>
      ) : null}
    </>
  );
};

const StyledModalContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const StyledModalContentWrapper = styled.div`
  position: absolute;
  left: 0;
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

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);

  cursor: pointer;
`;

export default Modal;
