import { useState, useEffect } from "react";

const useCardNumberInput = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);

  const handleCardNumberChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "");
    const formattedValue = filteredValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  const handleCardNumberCompleted = (isCompleted: boolean) => {
    setIsCardNumberCompleted(isCompleted);
  };

  return {
    cardNumber,
    isCardNumberCompleted,
    handleCardNumberChange,
    handleCardNumberCompleted,
  };
};

export default useCardNumberInput;
