import React from "react";

import Input from "../../elements/Input";

export default function CardNumber({ cardNumbers, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumbers.map((cardNumber, index) => (
          <React.Fragment key={index}>
            <Input
              type={index < 2 ? "text" : "password"}
              value={cardNumber}
              onChange={onChange}
              maxLength={4}
              name="cardNumbers"
              data-index={index}
            />
            {index !== 3 ? <span className="card-number-delimiter">-</span> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
