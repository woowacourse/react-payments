import React, { useContext } from "react";
import { CARD_TYPE } from "../../constants";
import { Context } from "../../contexts/CardContext";

import ModalPortal from "../../Portal";

interface SelectCardProps {
  onClose: () => void;
  changeCardType?: () => void;
}

const cardTypeList = ["poco", "jun", "park", "bran", "loyd", "dobi", "colin", "sun"];

export default function SelectCard({ onClose, changeCardType = () => {} }: SelectCardProps) {
  const [cardInfo, dispatch] = useContext(Context);
  const handleClick = e => {
    const { type } = e.target.dataset;

    dispatch({ type: "CHANGE_CARD_TYPE", payload: { cardType: type } });
    changeCardType();
    onClose();
  };

  return (
    <ModalPortal>
      <div
        className="modal-dimmed"
        onClick={e => {
          const eventTarget = e.target as HTMLDivElement;

          if (eventTarget.className === "modal-dimmed") onClose();
        }}
        aria-hidden="true"
      >
        <div className="modal">
          {cardTypeList.map((cardType, index) => {
            return (
              <div className="modal-item-container" key={index}>
                <div
                  className={`modal-item-dot ${CARD_TYPE[cardType].color}`}
                  onClick={handleClick}
                  data-type={cardType}
                  aria-hidden="true"
                ></div>
                <span className="modal-item-name">{CARD_TYPE[cardType].name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ModalPortal>
  );
}
