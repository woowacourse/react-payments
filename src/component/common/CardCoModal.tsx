import { DialogHTMLAttributes } from "react";
import { CardCo } from "../../type";
import CardCoButton from "./CardCoButton";

import "./cardCoModal.css";

interface CardCoModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  cardCoList: CardCo[];
  closeCardCoModal: () => void;
}

export default function CardCoModal({
  cardCoList,
  closeCardCoModal,
}: CardCoModalProps) {
  return (
    <>
      <div className="cardCo-modal-background" onClick={closeCardCoModal}></div>
      <div className="cardCo-modal-container">
        <div className="cardCo-button-container">
          {cardCoList.map((cardCo) =>
            CardCoButton({ cardCo, closeCardCoModal })
          )}
        </div>
      </div>
    </>
  );
}
