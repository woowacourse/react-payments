import { useRef, useState } from "react";
import { isNumeric } from "../utils/validators";
import { selectCardType } from "../utils/selectCardType";

const initialState = {
  cardNumber: ["", "", "", ""],
  cardNumberError: ["", "", "", ""],
};

export function useCardNumberInput() {
  const [cardNumber, setCardNumber] = useState(initialState.cardNumber);
  const [cardNumberError, setCardNumberError] = useState(
    initialState.cardNumberError,
  );
  const { inputConfig, cardType } = selectCardType(cardNumber);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setCardNumberServerError = (message: string) => {
    inputRefs.current[0]?.focus();
    setCardNumberError([message, "", "", "", ""]);
  };

  const handleCardNumberChange = (index: number, value: string) => {
    const newError = [...cardNumberError];
    const maxLength = inputConfig[index].maxLength;

    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const sliceValue = onlyNumbers.slice(0, maxLength);

    if (onlyNumbers.length === maxLength && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!isNumeric(value)) {
      newError[index] = "숫자를 입력해주세요.";
    } else {
      newError[index] = "";
    }
    setCardNumberError(newError);

    setCardNumber((prev) => {
      const newArray = [...prev];
      newArray[index] = sliceValue;
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
    inputRefs,
    setCardNumberServerError,
  };
}
