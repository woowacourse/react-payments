import React, { useEffect, useState } from "react";

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
  onChangePassword,
  resetCardInfo,
  cardInfoValidation,
}) {
  const { cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;
  const [isNextButtonShown, setIsNextButtonShown] = useState(true);

  useEffect(() => {
    setIsNextButtonShown(Object.keys(cardInfoValidation).every(key => cardInfoValidation[key]));
  }, [cardInfoValidation]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        resetCardInfo();
        alert("카드 등록이 완료되었습니다.");
        setIsNextButtonShown(false);
      }}
    >
      <CardNumber cardNumbers={cardNumbers} onChange={onChangeCardNumber} />
      <ExpiredDate expiredDate={expiredDate} onChange={onChangeExpiredDate} />
      <CardUserName cardUserName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <SecurityCode securityCode={securityCode} onChange={onChangeSecurityCode} />
      <CardPassword password={password} onChange={onChangePassword} />
      {isNextButtonShown && <button className="submit-button">다음</button>}
    </form>
  );
}
