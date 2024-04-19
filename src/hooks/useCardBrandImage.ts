import { useState, useEffect } from 'react';
import validate from '../utils/validate';
import MasterCardImage from '../assets/images/mastercard.png';
import VisaCardImage from '../assets/images/visa.png';
import { InitialCardNumberState } from './useCardNumber';

const useCardBrandImage = (cardNumberStates: InitialCardNumberState[]) => {
  const [cardImageSrc, setCardImageSrc] = useState('');

  useEffect(() => {
    setCardImageSrc('');

    const cardNumberString = cardNumberStates.map((cardNumber) => cardNumber.value).join('');

    if (validate.isVisa(cardNumberString)) {
      setCardImageSrc(VisaCardImage);
    }

    if (validate.isMasterCard(cardNumberString)) {
      setCardImageSrc(MasterCardImage);
    }
  }, [cardNumberStates]);

  return { cardImageSrc };
};

export default useCardBrandImage;
