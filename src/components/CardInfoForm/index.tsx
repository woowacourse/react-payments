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
  onChangeUserName,
  onBlurUserName,
  onChangeSecurityCode,
  // onChangePassword,
}) {
  const { cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;

  return (
    <div>
      <CardNumber cardNumbers={cardNumbers} onChange={onChangeCardNumber} />
      <ExpiredDate expiredDate={expiredDate} onChange={onChangeExpiredDate} />
      <CardUserName cardUserName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <SecurityCode securityCode={securityCode} onChange={onChangeSecurityCode} />
      {/* <CardPassword password={password} onChange={() => {}} /> */}
    </div>
  );
}
