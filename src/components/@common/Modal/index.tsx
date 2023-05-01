import ReactDom from "react-dom";
import { Styled as S, cssDirection } from "./Modal.styles";

export type Dicrection = "top" | "bottom" | "right" | "left" | "center";

interface Props {
  direction: Dicrection;
  children: React.ReactNode;
  closeEvent: () => void;
}

function Modal({ children, closeEvent, direction }: Props) {
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
      <S.ModalContent
        direction={direction}
        customInputStyle={cssDirection[direction]}
        height="228px"
      >
        {children}
      </S.ModalContent>
    </S.Dialog>,
    $modalRoot ?? document.body,
  );
}

export default Modal;
