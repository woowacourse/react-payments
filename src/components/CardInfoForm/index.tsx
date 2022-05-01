import React, { useEffect, useState } from "react";

import type { InputChangeFunction } from "../../types";
import type { CardInfo, CardInfoValidation, CardInfoValidationTarget } from "../../types/cardInfo";
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

  useEffect(() => {
    setIsNextButtonShown(
      Object.keys(cardInfoValidation).every(
        (key: keyof CardInfoValidationTarget) => cardInfoValidation[key].isValid
      )
    );
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
        validation={cardInfoValidation.cardNumbers}
      />
      <CardExpirationDate
        expirationDate={expirationDate}
        onChange={onChangeExpirationDate}
        validation={cardInfoValidation.expirationDate}
      />
      <CardUserName userName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <CardSecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        validation={cardInfoValidation.securityCode}
      />
      <CardPassword
        password={password}
        onChange={onChangePassword}
        validation={cardInfoValidation.password}
      />
      <button className="submit-button" disabled={!isNextButtonShown}>
        다음
      </button>
    </form>
  );
}
