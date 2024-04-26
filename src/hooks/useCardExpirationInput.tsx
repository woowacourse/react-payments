import { useState } from "react";
import validators from "../validators/newCardInputValidator";

interface CardExpirationState {
  value: string[];
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCardExpirationInput(): [CardExpirationState, (e: React.ChangeEvent<HTMLInputElement>, index: number) => void] {
  const [cardExpirationState, setCardExpirationState] = useState<CardExpirationState>({
    value: ["", ""],
    errorMessage: ["", ""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardExpirationChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const cardExpirationValid = /^[0-9]]*/.test(value);

    const updatedCardExpiration = cardExpirationState.value.map((num, i) => (i === index ? value : num));
    const errorMessage = cardExpirationState.errorMessage.map((msg, i) => (i === index ? validators.cardExpiration(value, index) : msg));
    const isValid = updatedCardExpiration.every((number) => number.length === 2) && errorMessage.every((message) => !message);
    const isNextVisible = cardExpirationState.isNextVisible || isValid;

    if (!errorMessage[index] && index < updatedCardExpiration.length - 1) {
      const nextInput = e.target.nextSibling;
      if (nextInput && nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }

    setCardExpirationState((prevState) => ({
      ...prevState,
      errorMessage,
      isNextVisible,
      isValid,
    }));

    if (!cardExpirationValid) return;

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
