import { useState, useEffect } from "react";

const useCardCVCInput = () => {
  const [cardCVC, setCardCVC] = useState("");
  const [isCardCVCCompleted, setIsCardCVCCompleted] = useState(false);

  const handleCardCVC = (value: string) => {
    setCardCVC(value);
  };

  const handleCardCVCCompleted = (isCompleted: boolean) => {
    setIsCardCVCCompleted(isCompleted);
  };

  return {
    cardCVC,
    isCardCVCCompleted,
    handleCardCVC,
    handleCardCVCCompleted,
  };
};

export default useCardCVCInput;
