import { ReactNode, useContext } from "react";
import styled, { CSSProp } from "styled-components";
import { CloseButton } from "./ButtonStyle";
import { ModalStateContext } from "./ModalStateProvider";

interface Props {
  modalStyle: CSSProp;
  children: ReactNode;
  closeButtonName: string;
}

const Modal = ({ closeButtonName, children, modalStyle }: Props) => {
  const setIsModalOpen = useContext(ModalStateContext).setIsModalOpen;

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <S.ModalBackdrop className="modal-backdrop" onClick={handleModalClose} />
      <S.Modal className="modal" modalStyle={modalStyle}>
        {children}
        <CloseButton onClick={handleModalClose}>{closeButtonName}</CloseButton>
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
