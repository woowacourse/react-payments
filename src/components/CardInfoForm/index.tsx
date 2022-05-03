import { CardInfoContext } from "contexts/CardInfoProvider";
import { CardsContext } from "contexts/CardsProvider";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import type { CardInfoValidationTarget } from "types/cardInfo";

import CardExpirationDate from "./CardExpirationDate";
import CardNumber from "./CardNumber";
import CardPassword from "./CardPassword";
import CardSecurityCode from "./CardSecurityCode";
import CardUserName from "./CardUserName";

export default function CardInfoForm() {
  const { cardInfo, cardInfoValidation, resetCardInfo } = useContext(CardInfoContext);
  const { addCard } = useContext(CardsContext);
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

    addCard(cardInfo);
    if (window.confirm("카드를 등록하시겠습니까?")) {
      alert("카드 등록이 완료되었습니다.");
    }

    resetCardInfo();
    alert("카드 등록이 완료되었습니다.");
    setIsNextButtonShown(false);
  };

  return (
    <form ref={formRef} id="card-info-form" onSubmit={handleSubmit}>
      <CardNumber inputs={inputsRef.current} />
      <CardExpirationDate inputs={inputsRef.current} />
      <CardUserName inputs={inputsRef.current} />
      <CardSecurityCode inputs={inputsRef.current} />
      <CardPassword inputs={inputsRef.current} />
      <button className="submit-button" disabled={!isNextButtonShown}>
        다음
      </button>
    </form>
  );
}
