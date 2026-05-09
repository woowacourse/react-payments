import { useState } from "react";
import { isNumeric } from "../utils/validators";

export function useCardNumberInput() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [cardNumberError, setCardNumberError] = useState(["", "", "", ""]);

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

  return { cardNumber, cardNumberError, handleCardNumberChange };
}
