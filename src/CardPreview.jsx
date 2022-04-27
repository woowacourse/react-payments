import React from "react";

export default function CardPreview({ cardNumber, holderName, expireDate }) {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">클린카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">
              {cardNumber[0]} - {cardNumber[1]} -{" "}
              {"•".repeat(cardNumber[2].length)} -{" "}
              {"•".repeat(cardNumber[2].length)}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text holder-name">{holderName}</span>
            <span className="card-text">
              {expireDate[0]} / {expireDate[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
