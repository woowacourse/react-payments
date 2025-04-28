import {useState, ChangeEvent, useRef} from 'react';
import {CardCVC} from '../types';
import {isOnlyDigits} from '../utils/validateNumber';
import {CARD_CVC, CARD_CVC_ERROR} from '../constants';

export const useCardCVC = (onComplete?: () => void) => {
  const [cardCVC, setCardCVC] = useState<CardCVC>('');
  const [error, setError] = useState('');

  const cvcRef = useRef<HTMLInputElement>(null);

  const handleCardCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setError(CARD_CVC_ERROR.onlyNumbers);
      return;
    }

    setCardCVC(value === '' ? '' : value);
    setError('');

    if (value.length === CARD_CVC.maxLength) {
      setTimeout(() => onComplete?.(), 100);
    }
  };

  const resetCardCVC = () => {
    setCardCVC('');
    setError('');
  };

  const isCardCVCValid = () => {
    return (
      cardCVC !== '' &&
      cardCVC?.length === CARD_CVC.maxLength
    );
  };

  return {
    cardCVC,
    cardCVCError: error,
    cvcRef,
    handleCardCVCChange,
    resetCardCVC,
    isValid: isCardCVCValid(),
  };
};
