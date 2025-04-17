import { useState, ChangeEvent } from 'react';
import { CardCVC } from './types';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_CVC_ERROR, CARD_CVC } from '../constants';

export const useCardCVC = () => {
  const [cardCVC, setCardCVC] = useState<CardCVC>(null);
  const [cardCVCError, setCardCVCError] = useState(false);

  const handleCardCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (isNumber) {
      setCardCVC(value === '' ? null : Number(value));
      setCardCVCError(false);
    } else {
      setCardCVCError(true);
    }
  };

  const resetCardCVC = () => {
    setCardCVC(null);
    setCardCVCError(false);
  };

  const isCardCVCValid = () => {
    return (
      cardCVC !== null &&
      cardCVC.toString().length === CARD_CVC.maxLength &&
      !cardCVCError
    );
  };

  const getCardCVCErrorMessage = (): string | null => {
    if (!cardCVCError) return null;

    return CARD_CVC_ERROR.onlyNumbers;
  };

  return {
    cardCVC,
    cardCVCError,
    handleCardCVCChange,
    resetCardCVC,
    isCardCVCValid,
    getCardCVCErrorMessage,
  };
};
