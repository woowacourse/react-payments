import React, { useEffect, useState } from "react";

import type { InputChangeFunction } from "../../types";
import type { CardInfo, CardInfoValidation } from "../../types/cardInfo";
import CardExpirationDate from "./CardExpirationDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";
interface CardInfoFormProps {
  cardInfo: CardInfo;
  onChangeCardNumber: InputChangeFunction;
  onChangeExpirationDate: InputChangeFunction;
  onChangeUserName: InputChangeFunction;
  onBlurUserName: () => void;
  onChangeSecurityCode: InputChangeFunction;
  onChangePassword: InputChangeFunction;
  resetCardInfo: () => void;
  cardInfoValidation: CardInfoValidation;
}

export default function CardInfoForm({
  cardInfo,
  onChangeCardNumber,
  onChangeExpirationDate,
  onChangeUserName,
  onBlurUserName,
  onChangeSecurityCode,
  onChangePassword,
  resetCardInfo,
  cardInfoValidation,
}: CardInfoFormProps) {
  const { cardNumbers, expirationDate, userName, securityCode, password } = cardInfo;
  const [isNextButtonShown, setIsNextButtonShown] = useState(true);
  const { isCardNumbersValid, isExpirationDateValid, isSecurityCodeValid, isPasswordValid } =
    cardInfoValidation;

  useEffect(() => {
    setIsNextButtonShown(Object.keys(cardInfoValidation).every(key => cardInfoValidation[key]));
  }, [cardInfoValidation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetCardInfo();
    alert("카드 등록이 완료되었습니다.");
    setIsNextButtonShown(false);
  };

  return (
    <form id="card-info-form" onSubmit={handleSubmit}>
      <CardNumber
        cardNumbers={cardNumbers}
        onChange={onChangeCardNumber}
        isValid={isCardNumbersValid}
      />
      <CardExpirationDate
        expirationDate={expirationDate}
        onChange={onChangeExpirationDate}
        isValid={isExpirationDateValid}
      />
      <CardUserName userName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <CardSecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        isValid={isSecurityCodeValid}
      />
      <CardPassword password={password} onChange={onChangePassword} isValid={isPasswordValid} />
      {isNextButtonShown && <button className="submit-button">다음</button>}
    </form>
  );
}
