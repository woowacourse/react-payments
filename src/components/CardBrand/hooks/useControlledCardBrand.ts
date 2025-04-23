import { useState } from 'react';
import { CardBrandType } from '../CardBrand';

export const useControlledCardBrand = () => {
  const [cardBrandType, setCardBrandType] = useState<CardBrandType | null>(null);
  const handleDropdownChange = (value: CardBrandType) => {
    setCardBrandType(value);
  };

  return { cardBrandType, handleDropdownChange };
};
