import { useState, useCallback } from "react";
import validators from "../validators/newCardInputValidator";

interface CardNumbersState {
  value: number[];
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCardNumbersInput(): [CardNumbersState, (value: string, index: number) => void] {
  const [cardNumbersState, setCardNumbersState] = useState<CardNumbersState>({
    value: [0, 0, 0, 0],
    errorMessage: ["", "", "", ""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardNumbersChange = useCallback(
    (value: string, index: number) => {
      const updatedCardNumbers = cardNumbersState.value.map((num, i) => (i === index ? Number(value) : num));
      const errorMessage = cardNumbersState.errorMessage.map((msg, i) => (i === index ? validators.cardNumbers(value) : msg));
      const isValid = updatedCardNumbers.every((number) => number !== 0) && errorMessage.every((message) => !message);
      const isNextVisible = cardNumbersState.isNextVisible || isValid;

      setCardNumbersState((prevState) => ({
        ...prevState,
        value: updatedCardNumbers,
        errorMessage,
        isNextVisible,
        isValid,
      }));
    },
    [cardNumbersState]
  );

  return [cardNumbersState, handleCardNumbersChange];
}

export default useCardNumbersInput;
