import { useState } from "react";
import { isNumeric } from "../utils/validators";
import { selectCardType } from "../utils/selectCardType";

export function useCardNumberInput() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [cardNumberError, setCardNumberError] = useState(["", "", "", ""]);
  const { inputConfig, cardType } = selectCardType(cardNumber);

  const handleCardNumberChange = (index: number, value: string) => {
    const newError = [...cardNumberError];

    if (!isNumeric(value)) {
      newError[index] = "숫자를 입력해주세요.";
      setCardNumberError(newError);
      return;
    }

    newError[index] = "";
    setCardNumberError(newError);

    setCardNumber((prev) => {
      const newArray = [...prev];
      newArray[index] = value;
      return newArray;
    });
  };

  const handleBlur = (index: number) => {
    const newError = [...cardNumberError];
    const maxLength = inputConfig[index].maxLength;

    if (cardNumber[index].length !== maxLength) {
      newError[index] = "완전히 입력해 주세요.";
      setCardNumberError(newError);
      return;
    }
  };

  return {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    handleBlur,
    inputConfig,
    cardType,
  };
}
