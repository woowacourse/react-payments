import React from "react";

import CardNumber from "./CardNumber";

export default function CardInfoForm({ cardInfo, onChangeCardNumber }) {
  return (
    <div>
      <CardNumber cardInfo={cardInfo} onChange={onChangeCardNumber} />
    </div>
  );
}
