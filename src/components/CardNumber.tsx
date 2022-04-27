import React from "react";

import Input from "./Input";

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
              onChange={e => onChange(e, index)}
              maxLength={4}
            />
            {index !== 3 ? <span>-</span> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
