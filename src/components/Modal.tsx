import { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";
import useModal from "hooks/useModal";
import Button, { CloseButton } from "./Button";

interface Props {
  modalStyle: CSSProp;
  children: ReactNode;
  closeButtonName: string;
}

const Modal = ({ closeButtonName, children, modalStyle }: Props) => {
  const { handleModalClose } = useModal();

  return (
    <>
      <S.ModalBackdrop className="modal-backdrop" onClick={handleModalClose} />
      <S.Modal role="dialog" className="modal" modalStyle={modalStyle}>
        {children}
        <Button
          children={closeButtonName}
          name={closeButtonName}
          ButtonStyle={CloseButton}
          onClick={handleModalClose}
        />
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
    animation: modal-backdrop-show 0.8s;

    cursor: pointer;

    @keyframes modal-backdrop-show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  Modal: styled.div<{ modalStyle: CSSProp }>`
    ${(props) => props.modalStyle}
  `,
};

export default Modal;
