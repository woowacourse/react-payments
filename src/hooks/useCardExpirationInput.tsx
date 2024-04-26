import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface CardExpirationState {
  value: number[];
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCardExpirationInput(): [CardExpirationState, (e: React.ChangeEvent<HTMLInputElement>, index: number) => void] {
  const [cardExpirationState, setCardExpirationState] = useState<CardExpirationState>({
    value: [0, 0],
    errorMessage: ["", ""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardExpirationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    const updatedCardExpiration = cardExpirationState.value.map((num, i) => (i === index ? Number(value) : num));
    const errorMessage = cardExpirationState.errorMessage.map((msg, i) => (i === index ? validators.cardExpiration(value, index) : msg));
    const isValid = updatedCardExpiration.every((number) => number !== 0) && errorMessage.every((message) => !message);
    const isNextVisible = cardExpirationState.isNextVisible || isValid;

    if (!errorMessage[index] && index < updatedCardExpiration.length - 1) {
      const nextInput = e.target.nextSibling;
      if (nextInput && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }

    setCardExpirationState((prevState) => ({
      ...prevState,
      value: updatedCardExpiration,
      errorMessage,
      isNextVisible,
      isValid,
    }));
  };

  return [cardExpirationState, handleCardExpirationChange];
}

export default useCardExpirationInput;
