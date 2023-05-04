import { DialogHTMLAttributes } from "react";

import "./cardCoModal.css";

interface CardCoModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  children: any;
}

export default function CardCoModal({ isOpen, children }: CardCoModalProps) {
  return isOpen ? (
    <>
      <div className="cardCo-modal-background"></div>
      <div className="cardCo-modal-container" style={{ margin: 0 }}>
        <div className="cardCo-button-container">{children}</div>
      </div>
    </>
  ) : (
    <></>
  );
}
