import React from "react";

import { CardInfo } from "../../types";
import CardExpiredDate from "./CardExpiredDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";

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

  const focusNextInput = e => {
    const targetInputElement = e.target as HTMLInputElement;
    const targetFormElement = e.currentTarget as HTMLFormElement;

    const findElementIndex = Array.from(e.currentTarget.elements).findIndex(
      element => element === targetInputElement
    );

    const currentElement = targetFormElement[findElementIndex] as HTMLInputElement;
    const nextElement = targetFormElement[findElementIndex + 1] as HTMLInputElement;

    if (currentElement.value.length === currentElement.maxLength) nextElement.focus();
  };

  return (
    <form
      onChange={focusNextInput}
      onSubmit={e => {
        e.preventDefault();
        resetCardInfo();
      }}
    >
      <CardNumber cardNumbers={cardNumbers} onChange={onChangeCardNumber} />
      <CardExpiredDate expiredDate={expiredDate} onChange={onChangeExpiredDate} />
      <CardUserName cardUserName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <CardSecurityCode securityCode={securityCode} onChange={onChangeSecurityCode} />
      <CardPassword password={password} onChange={onChangePassword} />
      <button type="submit" className="submit-button">
        다음
      </button>
    </form>
  );
}
