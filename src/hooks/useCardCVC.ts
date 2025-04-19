import { CARD_CVC, CARD_CVC_ERROR } from '../constants';
import { useCardField } from './useCardField';
import { CardCVC } from '../../types/types';

export const useCardCVC = () => {
  const {
    value: cvcValue,
    error: cardCVCError,
    handleChange,
    reset: resetCardCVC,
    isValid: isCardCVCValid,
    getErrorMessage: getCardCVCErrorMessage,
  } = useCardField({
    requiredLength: CARD_CVC.maxLength,
    errorMessages: {
      onlyNumbers: CARD_CVC_ERROR.onlyNumbers,
    },
  });

  const cardCVC: CardCVC = cvcValue ? Number(cvcValue) : null;

  const handleCardCVCChange = (value: string) => {
    handleChange(value);
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
