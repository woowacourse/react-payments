import React from "react";
import ModalPortal from "../../Portal";

export default function Modal({ onClose }) {
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
          <div className="flex-center">
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#E24141" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">포코 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#547CE4" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">준 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#73BC6D" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">공원 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#DE59B9" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">브랜 카드</span>
            </div>
          </div>
          <div className="flex-center">
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{
                  backgroundColor:
                    "radial-gradient(50% 50% at 50% 50%, rgba(4, 192, 158, 0.31) 0%, rgba(4, 192, 158, 0.457344) 65.1%, #04C09E 100%)",
                }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">로이드 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#E76E9A" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">도비 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#F37D3B" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">콜린 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#FBCD58" }}
                onClick={onClose}
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">썬 카드</span>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
