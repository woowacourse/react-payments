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
  const {
    isCardNumbersValid,
    isExpiredDateValid,
    isUserNameValid,
    isSecurityCodeValid,
    isPasswordValid,
  } = cardInfoValidation;

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
      <CardNumber
        cardNumbers={cardNumbers}
        onChange={onChangeCardNumber}
        isValid={isCardNumbersValid}
      />
      <ExpiredDate
        expiredDate={expiredDate}
        onChange={onChangeExpiredDate}
        isValid={isExpiredDateValid}
      />
      <CardUserName
        cardUserName={userName}
        onChange={onChangeUserName}
        onBlur={onBlurUserName}
        isValid={isUserNameValid}
      />
      <SecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        isValid={isSecurityCodeValid}
      />
      <CardPassword password={password} onChange={onChangePassword} isValid={isPasswordValid} />
      {isNextButtonShown && <button className="submit-button">다음</button>}
    </form>
  );
}
