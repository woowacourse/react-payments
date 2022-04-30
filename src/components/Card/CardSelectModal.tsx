import React from "react";

import Modal from "../common/Modal";

const cardCategory = [
  { name: "빨간 카드", color: "red" },
  { name: "파랑 카드", color: "blue" },
  { name: "오렌지 카드", color: "orange" },
  { name: "토마토 카드", color: "tomato" },
  { name: "스카이블루 카드", color: "skyblue" },
  { name: "노랑 카드", color: "yellow" },
  { name: "검정 카드", color: "black" },
  { name: "초록 카드", color: "green" },
];

export default function CardSelectModal() {
  return (
    <Modal position="bottom">
      <div className="modal flex-center">
        {cardCategory.map(({ name, color }) => (
          <div className="modal-item-container" key={name}>
            <div className="modal-item-dot" style={{ backgroundColor: `${color}` }}></div>
            <span className="modal-item-name">{name}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}
