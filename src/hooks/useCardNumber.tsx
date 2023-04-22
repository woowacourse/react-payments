import React, { useState } from "react";

export default function useCardNumber() {
  const [cardNumberOrigin, setCardNumberOrigin] = useState("");
  const [cardNumberHidden, setCardNumberHidden] = useState("");

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value.replace(/[^\d•]/g, "").slice(0, 16); // 16자리 이상은 자르기

    //오리진 저장
    if (cardNumberOrigin.length > 8) {
      // 별 표시 출력과 관련된 로직
      if (cardNumberOrigin.length < cardNumber.length) {
        // 추가시
        setCardNumberOrigin(cardNumberOrigin + cardNumber.slice(-1));
      }

      if (cardNumberOrigin.length > cardNumber.length) {
        // 제거시
        setCardNumberOrigin(cardNumberOrigin.slice(0, -1));
      }
    }

    if (cardNumberOrigin.length <= 8) {
      setCardNumberOrigin(cardNumber);
    }

    //히든 저장
    const hiddenNumber =
      cardNumber.length > 8
        ? cardNumber.slice(0, 8) + "•".repeat(cardNumber.length - 8)
        : cardNumber;
    const showNumber = hiddenNumber.match(/.{1,4}/g);
    const resultNumber = showNumber ? showNumber.join("-") : "";

    setCardNumberHidden(resultNumber);
  };

  return {
    cardNumberOrigin,
    cardNumberHidden,
    changeCardNumber,
  };
}
