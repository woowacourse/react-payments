import React, { useCallback, useEffect, useRef, useState } from "react";
import type { InputChangeFunction } from "types";
import type { CardInfo, CardInfoValidation, CardInfoValidationTarget } from "types/cardInfo";

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
  addCard: () => void;
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
  addCard,
}: CardInfoFormProps) {
  const { cardNumbers, expirationDate, userName, securityCode, password } = cardInfo;
  const [isNextButtonShown, setIsNextButtonShown] = useState(true);
  const inputsRef = useRef<HTMLInputElement[]>(null);
  const formRef = useCallback((node: HTMLFormElement) => {
    if (!node) return;
    inputsRef.current = Array.from(node.querySelectorAll("input"));
  }, []);

  useEffect(() => {
    setIsNextButtonShown(
      Object.keys(cardInfoValidation).every(
        (key: keyof CardInfoValidationTarget) => cardInfoValidation[key].isValid
      )
    );
  }, [cardInfoValidation]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addCard();
    if (window.confirm("카드를 등록하시겠습니까?")) {
      alert("카드 등록이 완료되었습니다.");
    }

    resetCardInfo();
    setIsNextButtonShown(false);
  };

  return (
    <form ref={formRef} id="card-info-form" onSubmit={handleSubmit}>
      <CardNumber
        cardNumbers={cardNumbers}
        onChange={onChangeCardNumber}
        validation={cardInfoValidation.cardNumbers}
        inputs={inputsRef.current}
      />
      <CardExpirationDate
        expirationDate={expirationDate}
        onChange={onChangeExpirationDate}
        validation={cardInfoValidation.expirationDate}
        inputs={inputsRef.current}
      />
      <CardUserName
        userName={userName}
        onChange={onChangeUserName}
        onBlur={onBlurUserName}
        inputs={inputsRef.current}
      />
      <CardSecurityCode
        securityCode={securityCode}
        onChange={onChangeSecurityCode}
        validation={cardInfoValidation.securityCode}
        inputs={inputsRef.current}
      />
      <CardPassword
        password={password}
        onChange={onChangePassword}
        validation={cardInfoValidation.password}
        inputs={inputsRef.current}
      />
      <button className="submit-button" disabled={!isNextButtonShown}>
        다음
      </button>
    </form>
  );
}
