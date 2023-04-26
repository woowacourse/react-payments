import React, { useState } from "react";
import { toOnlyNumber, toHiddenNumber } from "../util/InputUtil";
import { LENGTH, STRING } from "../abstract/constants";

function useCardNumber() {
  const [cardNumberOrigin, setCardNumberOrigin] = useState("");
  const [cardNumberHidden, setCardNumberHidden] = useState("");

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = toHiddenNumber(e.target.value).slice(
      LENGTH.ZERO,
      LENGTH.CARD
    );
    const realNumber = toOnlyNumber(cardNumber);

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
    if (cardNumberOrigin.length <= LENGTH.CARD_BOUNDARY) return realNumber;

    if (
      realNumber !== cardNumberOrigin.slice(LENGTH.ZERO, LENGTH.CARD_BOUNDARY)
    )
      return (
        realNumber + cardNumberOrigin.slice(LENGTH.CARD_BOUNDARY, LENGTH.CARD)
      );

    return cardNumberOrigin.slice(LENGTH.ZERO, -1);
  };

  const changeHidden = (realNumber: string, length: number) => {
    const frontNumber =
      realNumber !== cardNumberOrigin.slice(LENGTH.ZERO, LENGTH.CARD_BOUNDARY)
        ? realNumber + cardNumberOrigin.slice(LENGTH.CARD_BOUNDARY, LENGTH.CARD)
        : realNumber;

    const hiddenNumber =
      length > LENGTH.CARD_BOUNDARY
        ? frontNumber.slice(LENGTH.ZERO, LENGTH.CARD_BOUNDARY) +
          "•".repeat(length - LENGTH.CARD_BOUNDARY)
        : frontNumber;

    const showNumber = hiddenNumber.match(/.{1,4}/g);
    return showNumber ? showNumber.join(STRING.DASH) : "";
  };

  return {
    cardNumberOrigin,
    cardNumberHidden,
    changeCardNumber,
  };
}

export default useCardNumber;
