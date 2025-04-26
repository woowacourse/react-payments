import { useState } from 'react';
import { CardBrandType } from '../types';

export const useControlledCardBrand = () => {
  const [isCardBrandNextStep, setIsCardBrandNextStep] = useState(false);
  const [cardBrandTypeState, setCardBrandTypeState] = useState<CardBrandType | null>(null);
  const handleDropdownChange = (value: CardBrandType) => {
    setCardBrandTypeState(value);
  };

  if (cardBrandTypeState !== null && !isCardBrandNextStep) setIsCardBrandNextStep(true);

  return { cardBrandTypeState, isCardBrandNextStep, handleDropdownChange };
};
