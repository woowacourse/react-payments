import React from "react";
import ModalPortal from "../../Portal";

export default function SelectCard({ onClose, changeCardType }) {
  const handleClick = e => {
    const { type } = e.target.dataset;

    changeCardType(type);
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
          <div className="flex-center">
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#E24141" }}
                onClick={handleClick}
                data-type="poco"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">포코 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#547CE4" }}
                onClick={handleClick}
                data-type="jun"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">준 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#73BC6D" }}
                onClick={handleClick}
                data-type="park"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">공원 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#DE59B9" }}
                onClick={handleClick}
                data-type="bran"
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
                  backgroundColor: "#04c09e",
                }}
                onClick={handleClick}
                data-type="loyd"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">로이드 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#E76E9A" }}
                onClick={handleClick}
                data-type="dobi"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">도비 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#F37D3B" }}
                onClick={handleClick}
                data-type="colin"
                aria-hidden="true"
              ></div>
              <span className="modal-item-name">콜린 카드</span>
            </div>
            <div className="modal-item-container">
              <div
                className="modal-item-dot"
                style={{ backgroundColor: "#FBCD58" }}
                onClick={handleClick}
                data-type="sun"
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
