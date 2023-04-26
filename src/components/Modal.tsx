import { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

interface Props {
  modalStyle: CSSProp;
  children: ReactNode;
}

const Modal = ({ children, modalStyle }: Props) => {
  return (
    <>
      <S.ModalBackdrop className="modal-backdrop" />
      <S.Modal className="modal" modalStyle={modalStyle}>
        {children}
      </S.Modal>
    </>
  );
};
const S = {
  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
  `,

  Modal: styled.div<{ modalStyle: CSSProp }>`
    ${(props) => props.modalStyle}
  `,
};

export default Modal;
