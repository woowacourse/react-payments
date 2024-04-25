import { useState, useCallback } from "react";
import validators from "../validators/newCardInputValidator";

interface CardExpirationState {
  value: number[];
  errorMessage: string[];
  isNextVisible: boolean;
  isValid: boolean;
}

function useCardExpirationInput(): [CardExpirationState, (value: string, index: number) => void] {
  const [cardExpirationState, setCardExpirationState] = useState<CardExpirationState>({
    value: [0, 0],
    errorMessage: ["", ""],
    isNextVisible: false,
    isValid: false,
  });

  const handleCardExpirationChange = useCallback(
    (value: string, index: number) => {
      const updatedCardExpiration = cardExpirationState.value.map((num, i) => (i === index ? Number(value) : num));
      const errorMessage = cardExpirationState.errorMessage.map((msg, i) => (i === index ? validators.cardExpiration(value, index) : msg));
      const isValid = updatedCardExpiration.every((number) => number !== 0) && errorMessage.every((message) => !message);
      const isNextVisible = cardExpirationState.isNextVisible || isValid;

      setCardExpirationState((prevState) => ({
        ...prevState,
        value: updatedCardExpiration,
        errorMessage,
        isNextVisible,
        isValid,
      }));
    },
    [cardExpirationState]
  );

  return [cardExpirationState, handleCardExpirationChange];
}

export default useCardExpirationInput;
