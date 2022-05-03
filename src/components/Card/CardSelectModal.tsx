import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useCallback, useContext } from "react";
import type { CardColor, CardName, CardType } from "types/cardInfo";

import Modal from "../common/Modal";

const cardType: CardType[] = [
  { name: "빨강 카드", color: "red" },
  { name: "파랑 카드", color: "blue" },
  { name: "오렌지 카드", color: "orange" },
  { name: "토마토 카드", color: "tomato" },
  { name: "스카이블루 카드", color: "skyblue" },
  { name: "보라 카드", color: "purple" },
  { name: "검정 카드", color: "black" },
  { name: "초록 카드", color: "green" },
];

interface CardSelectModalProps {
  isOpened: boolean;
  closeModal: () => void;
}

export default function CardSelectModal({ isOpened, closeModal }: CardSelectModalProps) {
  const { onChangeCardType } = useContext(CardInfoContext);
  const handleClickCardType = useCallback(
    (name: CardName, color: CardColor) => () => {
      onChangeCardType(name, color);
      closeModal();
    },
    [closeModal, onChangeCardType]
  );

  if (!isOpened) return null;

  return (
    <Modal position="bottom" closeModal={closeModal}>
      <div className="modal-content flex-center-wrap">
        {cardType.map(({ name, color }) => (
          <div
            className="modal-item-container flex-column-center"
            key={name + color}
            onClick={handleClickCardType(name, color)}
          >
            <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
            <span className="modal-item-name">{name}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}
