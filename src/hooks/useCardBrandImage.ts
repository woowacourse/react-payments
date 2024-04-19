import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import { InitialCardNumberState } from './useCardNumber';

const useCardBrandImage = (cardNumberStates: InitialCardNumberState[]) => {
  const [cardBrand, setCardBrand] = useState<'none' | 'Visa' | 'MasterCard'>('none');

  useEffect(() => {
    setCardBrand('none');

    const cardNumberString = cardNumberStates.map((cardNumber) => cardNumber.value).join('');

    if (validate.isVisa(cardNumberString)) {
      setCardBrand('Visa');
    }

    if (validate.isMasterCard(cardNumberString)) {
      setCardBrand('MasterCard');
    }
  }, [cardNumberStates]);

  return { cardBrand };
};

export default useCardBrandImage;
