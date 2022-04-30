import React from "react";

import type { CardColor, CardName, CardType } from "../../types";
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

export default function CardSelectModal({
  isOpened,
  setIsModalOpened,
  onChangeCardType,
}: {
  isOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeCardType: (name: CardName, color: CardColor) => void;
}) {
  if (!isOpened) return null;

  return (
    <Modal position="bottom">
      <div className="modal flex-center">
        {cardType.map(({ name, color }) => (
          <div
            className="modal-item-container"
            key={name}
            onClick={() => {
              onChangeCardType(name, color);
              setIsModalOpened(false);
            }}
          >
            <div className="modal-item-dot" style={{ backgroundColor: `${color}` }}></div>
            <span className="modal-item-name">{name}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}
