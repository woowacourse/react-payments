import React, { useEffect, useState } from "react";

import { CardInfo } from "../../types";
import CardExpiredDate from "./CardExpiredDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";
import { useCardInfoValidation } from "../../hooks/useCardInfoValidation";
import cardInfoValidator from "../../lib/validation";

interface CardInfoFormProps {
  cardInfo: CardInfo;
  onChangeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeExpiredDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurUserName: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onChangeSecurityCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetCardInfo: () => void;
}

export default function CardInfoForm({
  cardInfo,
  onChangeCardNumber,
  onChangeExpiredDate,
  onChangeUserName,
  onBlurUserName,
  onChangeSecurityCode,
  onChangePassword,
  resetCardInfo,
}: CardInfoFormProps) {
  const { cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;
  const [isNextButtonShown, setIsNextButtonShown] = useState(true);

  const cardInfoValidation = useCardInfoValidation(cardInfo, cardInfoValidator);
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
      <CardExpiredDate
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
      <CardSecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        isValid={isSecurityCodeValid}
      />
      <CardPassword password={password} onChange={onChangePassword} isValid={isPasswordValid} />
      {isNextButtonShown && (
        <button type="submit" className="submit-button">
          다음
        </button>
      )}
    </form>
  );
}
