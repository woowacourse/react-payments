import ReactDom from "react-dom";
import { Styled as S } from "./Modal.styles";

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
    <S.Dialog
      onKeyDown={dialogKeyDownListener}
      onClick={dialogBackdropListener}
    >
      <S.ModalContent>{children}</S.ModalContent>
    </S.Dialog>,
    $modalRoot,
  );
}

export default Modal;
