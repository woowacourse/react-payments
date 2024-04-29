import { useState } from "react";

const useCardPasswordInput = () => {
  const [cardPassword, setCardPassword] = useState("");
  const [isCardPasswordCompleted, setIsCardPasswordCompleted] = useState(false);

  const handleCardPasswordChange = (value: string) => {
    setCardPassword(value);
  };

  const handleCardPasswordCompleted = (isCompleted: boolean) => {
    setIsCardPasswordCompleted(isCompleted);
  };

  return {
    cardPassword,
    isCardPasswordCompleted,
    handleCardPasswordChange,
    handleCardPasswordCompleted,
  };
};

export default useCardPasswordInput;
