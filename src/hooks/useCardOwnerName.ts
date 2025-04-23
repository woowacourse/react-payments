import { useState } from "react";

const useCardOwnerName = () => {
  const [cardOwnerName, setCardOwnerName] = useState("");

  const handleCardOwnerNameChange = (value: string) => {
    setCardOwnerName(value.trim());
  };

  return {
    cardOwnerName,
    handleCardOwnerNameChange,
  };
};

export default useCardOwnerName;
