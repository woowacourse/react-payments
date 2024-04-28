import { useState, useEffect } from "react";

const useCardCompanySelect = () => {
  const [selectedCard, setSelectedCard] = useState<CardCompany | "">("");
  const [isSelectedCardCompleted, setIsSelectedCardCompleted] = useState(false);

  const handleSelect = (value: CardCompany | "") => {
    setSelectedCard(value);
  };

  const handleSelectedCardCompleted = (isCompleted: boolean) => {
    setIsSelectedCardCompleted(isCompleted);
  };

  return {
    selectedCard,
    isSelectedCardCompleted,
    handleSelect,
    handleSelectedCardCompleted,
  };
};

export default useCardCompanySelect;
