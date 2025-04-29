import { useCallback, useMemo, useState } from "react";
import type { CardType } from "@/pages/add-card/types";

export interface ControlledCardType {
  cardType: CardType | null;
  handleCardTypeChange: (value: CardType) => void;
  isNextStep: boolean;
}

const useControlledCardType = (): ControlledCardType => {
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
    isNextStep: useMemo(() => checkCardTypeNextStep(cardType), [cardType]),
  };
};

export default useControlledCardType;
