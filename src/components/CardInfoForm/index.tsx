import React, { useEffect, useState } from "react";

import { CardInfoValidation } from "../../hooks/useCardInfoValidation";
import { CardInfo } from "../../types";
import AutoFocusForm from "../common/AutoFocusForm";
import CardExpirationDate from "./CardExpirationDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";

const INPUTS_FOCUS_CONDITION = [4, 4, 4, 4, 2, 2, 30, 3, 1, 1];

interface CardInfoFormProps {
  cardInfo: CardInfo;
  onChangeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeExpirationDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurUserName: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChangeSecurityCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  const {
    isCardNumbersValid,
    isExpirationDateValid,
    isUserNameValid,
    isSecurityCodeValid,
    isPasswordValid,
  } = cardInfoValidation;

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
    <AutoFocusForm
      onSubmit={handleSubmit}
      values={cardInfo}
      focusCondition={INPUTS_FOCUS_CONDITION}
    >
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
      <CardUserName
        userName={userName}
        onChange={onChangeUserName}
        onBlur={onBlurUserName}
        isValid={isUserNameValid}
      />
      <CardSecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        isValid={isSecurityCodeValid}
      />
      <CardPassword password={password} onChange={onChangePassword} isValid={isPasswordValid} />
      {isNextButtonShown && <button className="submit-button">다음</button>}
    </AutoFocusForm>
  );
}
