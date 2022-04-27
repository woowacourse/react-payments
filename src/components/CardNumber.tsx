import React from "react";

import Input from "./Input";

export default function CardNumber({ cardInfo, onChange }) {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <Input
          type="text"
          value={cardInfo.cardNumbers[0] || ""}
          onChange={e => onChange(e, 0)}
          maxLength={4}
        />
        <Input type="text" onChange={onChange} maxLength={4} />
        <Input type="password" onChange={onChange} maxLength={4} />
        <Input type="password" onChange={onChange} maxLength={4} />
      </div>
    </div>
  );
}
