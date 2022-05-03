import React, { useState } from "react";

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
  const [isNextButtonShown, setIsNextButtonShown] = useState(true);

  return (
    <form
      onSubmit={e => {
        console.log(e);
        e.preventDefault();
        resetCardInfo();
        alert("카드 등록이 완료되었습니다.");
      }}
    >
      <CardNumber cardNumbers={cardNumbers} onChange={onChangeCardNumber} />
      <CardExpiredDate expiredDate={expiredDate} onChange={onChangeExpiredDate} />
      <CardUserName cardUserName={userName} onChange={onChangeUserName} onBlur={onBlurUserName} />
      <CardSecurityCode securityCode={securityCode} onChange={onChangeSecurityCode} />
      <CardPassword password={password} onChange={onChangePassword} />
      {isNextButtonShown && (
        <button type="submit" className="submit-button">
          다음
        </button>
      )}
    </form>
  );
}
