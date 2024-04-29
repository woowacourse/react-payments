import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface CardNumbersState {
  value: string[];
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

interface CardNumbersInputResult {
  CardNumbersState: CardNumbersState;
  handleCardNumbersChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

function useCardNumbersInput(): CardNumbersInputResult {
  const [cardNumbersState, setCardNumbersState] = useState<CardNumbersState>({
    value: ["", "", "", ""],
    errorMessage: ["", "", "", ""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardNumbersChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const cardNumbersValid = /^[0-9]*$/.test(value);

    const updatedCardNumbers = cardNumbersState.value.map((num, i) => (i === index ? value : num));
    const errorMessage = cardNumbersState.errorMessage.map((msg, i) => (i === index ? validators.cardNumbers(value) : msg));
    const isValid = updatedCardNumbers.every((number) => number.length === 4) && errorMessage.every((message) => !message);
    const isNextVisible = cardNumbersState.isNextVisible || isValid;

    if (value && !errorMessage[index] && index < updatedCardNumbers.length - 1) {
      const nextInput = e.target.nextSibling;
      if (nextInput && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }

    setCardNumbersState((prevState) => ({
      ...prevState,
      value: cardNumbersValid ? updatedCardNumbers : prevState.value,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return { CardNumbersState: cardNumbersState, handleCardNumbersChange };
}

export default useCardNumbersInput;
