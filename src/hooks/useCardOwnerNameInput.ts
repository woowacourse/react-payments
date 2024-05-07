import { useState } from "react";

const useCardOwnerNameInput = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [isCardholderNameCompleted, setIsCardholderNameCompleted] =
    useState(false);

  const handleCardholderNameChange = (value: string) => {
    setCardholderName(value.toUpperCase());
  };

  const handleCardholderNameCompleted = (isCompleted: boolean) => {
    setIsCardholderNameCompleted(isCompleted);
  };

  return {
    cardholderName,
    isCardholderNameCompleted,
    handleCardholderNameChange,
    handleCardholderNameCompleted,
  };
};

export default useCardOwnerNameInput;
