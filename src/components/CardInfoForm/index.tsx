import React from "react";

import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardUserName from "./CardUserName";
import ExpiredDate from "./ExpiredDate";
import SecurityCode from "./SecurityCode";

export default function CardInfoForm({
  cardInfo,
  onChangeCardNumber,
  onChangeExpiredDate,
  // onChangeCardUserName,
  // onChangeSecurityCode,
  // onChangePassword,
}) {
  const { cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;

  return (
    <div>
      <CardNumber cardNumbers={cardNumbers} onChange={onChangeCardNumber} />
      <ExpiredDate expiredDate={expiredDate} onChange={onChangeExpiredDate} />
      {/* <CardUserName cardUserName={userName} onChange={onChangeCardUserName} />
      <SecurityCode securityCode={securityCode} onChange={() => {}} />
      <CardPassword password={password} onChange={() => {}} /> */}
    </div>
  );
}
