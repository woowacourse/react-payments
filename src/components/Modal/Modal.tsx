import { PropsWithChildren } from "react";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
};

const Modal = ({ children, isOpen }: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpen ? (
        <StyledModalContainer>
          <StyledModalBackdrop></StyledModalBackdrop>
          <StyledModalContentWrapper>{children}</StyledModalContentWrapper>
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

  padding: 32px 48px;

  border-radius: 8px 8px 0px 0px;
  background-color: #fff;
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export default Modal;
