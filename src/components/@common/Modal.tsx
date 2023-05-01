import ReactDom from "react-dom";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  closeEvent: () => void;
}

function Modal({ children, closeEvent }: Props) {
  const $modalRoot = document.getElementById("modal-root") as HTMLElement;

  const dialogKeyDownListener = (
    event: React.KeyboardEvent<HTMLDialogElement>,
  ) => {
    if (event.key === "Escape") {
      closeEvent();
    }
  };

  const dialogBackdropListener = (
    event: React.MouseEvent<HTMLDialogElement>,
  ) => {
    if (event.target === event.currentTarget) {
      closeEvent();
    }
  };

  return ReactDom.createPortal(
    <Styled.Dialog
      onKeyDown={dialogKeyDownListener}
      onClick={dialogBackdropListener}
    >
      <Styled.ModalContent>{children}</Styled.ModalContent>
    </Styled.Dialog>,
    $modalRoot,
  );
}

const Styled = {
  Dialog: styled.dialog`
    width: 100%;
    height: 100%;

    display: block;
    position: fixed;
    background: rgba(0, 0, 0, 0.55);

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    margin: 0;
    padding: 0;

    border: none;

    &::backdrop {
      background: rgba(0, 0, 0, 0.5);
    }
  `,

  ModalContent: styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 228px;
    padding: 34px 0;
    border-radius: 5px 5px 0px 0px;
    background: #fff;
  `,
};

export default Modal;
