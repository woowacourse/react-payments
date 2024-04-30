import { useState } from 'react';
import { CardBrand } from '../types/card';

const useCardBrand = (initCardBrand: string) => {
  const [cardBrand, setCardBrand] = useState({
    cardBrandField: {
      cardBrand: { value: initCardBrand, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  const handleUpdateCardBrandIsNextField = () => {
    setCardBrand((prevState: CardBrand) => {
      return {
        ...prevState,
        isNextField: true,
      };
    });
  };

  const handleUpdateCardBrand = (brandName: string) => {
    const cardKey = 'cardBrand' as keyof typeof cardBrand.cardBrandField;
    setCardBrand((prevState: CardBrand) => {
      return {
        ...prevState,
        cardBrandField: {
          ...prevState.cardBrandField,
          [cardKey]: {
            ...prevState.cardBrandField[cardKey],
            value: brandName,
          },
        },
      };
    });
  };

  return { cardBrand, handleUpdateCardBrand, handleUpdateCardBrandIsNextField };
};

export default useCardBrand;
