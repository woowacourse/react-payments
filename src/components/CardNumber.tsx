import React from "react";

import Input from "./Input";

export default function CardNumber({ cardNumbers, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumbers.map((cardNumber, index) => (
          <Input
            key={index}
            type={index < 2 ? "text" : "password"}
            value={cardNumber}
            onChange={e => onChange(e, index)}
            maxLength={4}
          />
        ))}
      </div>
    </div>
  );
}
