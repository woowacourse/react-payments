import { useCallback, useState } from "react";
import type { CardType } from "@/pages/addCard/types";

const useControlledCardType = () => {
  const [cardType, setCardType] = useState<CardType | null>(null);

  const handleCardTypeChange = useCallback((value: CardType) => {
    setCardType(value);
  }, []);

  return {
    cardType,
    handleCardTypeChange,
  };
};

export default useControlledCardType;
