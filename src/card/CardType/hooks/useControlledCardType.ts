import { useCallback, useState } from "react";
import type { CardType } from "@/pages/add-card/types";

const useControlledCardType = () => {
  const [cardType, setCardType] = useState<CardType | null>(null);

  const handleCardTypeChange = useCallback((value: CardType) => {
    setCardType(value);
  }, []);

  const checkCardTypeNextStep = useCallback((cardType: CardType | null) => {
    if (cardType === null) {
      return false;
    }

    return true;
  }, []);

  return {
    cardType,
    handleCardTypeChange,
    isNextStep: checkCardTypeNextStep(cardType),
  };
};

export default useControlledCardType;
