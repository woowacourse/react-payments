import React, { useState } from "react";

function useCardNumber() {
  const [cardNumberOrigin, setCardNumberOrigin] = useState("");
  const [cardNumberHidden, setCardNumberHidden] = useState("");

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value.replace(/[^\d•]/g, "").slice(0, 16);
    const realNumber = cardNumber.replace(/[^\d]/g, "");

    const hiddenNumber = changeHidden(realNumber, cardNumber.length);
    setCardNumberHidden(hiddenNumber);

    if (cardNumberOrigin.length < cardNumber.length) {
      setCardNumberOrigin(cardNumberOrigin + cardNumber.slice(-1));
    }

    if (cardNumberOrigin.length > cardNumber.length) {
      setCardNumberOrigin(deleteNumber(realNumber));
    }
  };

  const deleteNumber = (realNumber: string) => {
    if (cardNumberOrigin.length <= 8) return realNumber;

    if (realNumber !== cardNumberOrigin.slice(0, 8))
      return realNumber + cardNumberOrigin.slice(8, 16);

    return cardNumberOrigin.slice(0, -1);
  };

  const changeHidden = (realNumber: string, length: number) => {
    const frontNumber =
      realNumber !== cardNumberOrigin.slice(0, 8)
        ? realNumber + cardNumberOrigin.slice(8, 16)
        : realNumber;

    const hiddenNumber =
      length > 8
        ? frontNumber.slice(0, 8) + "•".repeat(length - 8)
        : frontNumber;

    const showNumber = hiddenNumber.match(/.{1,4}/g);
    return showNumber ? showNumber.join("-") : "";
  };

  return {
    cardNumberOrigin,
    cardNumberHidden,
    changeCardNumber,
  };
}

export default useCardNumber;
