import { useState } from "react";

export default function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardNumbersError, setError] = useState(["", "", "", ""]);
  const [cardType, setCardType] = useState("default");

  const cardNumbersValidate = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value.slice(0, 4);
    setCardNumbers(newCardNumbers);

    const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

    if (firstTwoDigits >= 40 && firstTwoDigits <= 49) {
      setCardType("visa");
    } else if (firstTwoDigits >= 51 && firstTwoDigits <= 55) {
      setCardType("master");
    } else {
      setCardType("default");
    }

    const isValidLength = value.length <= 4;
    const isNumber = /^[0-9]*$/.test(value);

    if (!isValidLength) {
      const newError = [...cardNumbersError];
      newError[index] = "카드 번호는 4자리 숫자여야 합니다.";
      setError(newError);
      return;
    }

    if (!isNumber) {
      const newError = [...cardNumbersError];
      newError[index] = "숫자만 입력 가능합니다.";
      setError(newError);
      return;
    }

    const newError = [...cardNumbersError];
    newError[index] = "";
    setError(newError);
  };

  return { cardNumbers, cardType, cardNumbersError, cardNumbersValidate };
}
