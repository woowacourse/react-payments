import { PATH } from "constant/path";
import useFormComplete from "hooks/useFormComplete";
import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputChangeFunction } from "types";
import type { CardInfo, CardInfoValidation } from "types/cardInfo";

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
  const navigate = useNavigate();
  const { cardNumbers, expirationDate, userName, securityCode, password } = cardInfo;
  const isNextButtonActive = useFormComplete(cardInfoValidation);

  const inputsRef = useRef<HTMLInputElement[]>(null);
  const formRef = useCallback((node: HTMLFormElement) => {
    if (!node) return;
    inputsRef.current = Array.from(node.querySelectorAll("input"));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.confirm("카드를 등록하시겠습니까?")) {
      navigate(PATH.COMPLETE, { state: cardInfo });
      resetCardInfo();
    }
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
      <button className="submit-button" disabled={!isNextButtonActive}>
        다음
      </button>
    </form>
  );
}
