import { useState } from 'react';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../../constants';
import { CVC_ERROR_MESSAGE, CVC_NUMBER_MAX_LENGTH } from '../constants';

export const useControlledCardCVCNumber = () => {
  const [isCardCVCNumberNextStep, setIsCardCVCNumberNextStep] = useState<boolean>(false);
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>('');

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    if (value.length < CVC_NUMBER_MAX_LENGTH) {
      return CVC_ERROR_MESSAGE.minLength;
    }

    return '';
  };

  const handleCardCVCNumberInputChange = (value: string) => {
    setCardCVCNumber((prev) => (prev = value));
    setCardCVCNumberErrorMessage((prev) => (prev = getErrorMessage(value)));
  };
  if (cardCVCNumber.length === CVC_NUMBER_MAX_LENGTH && cardCVCNumberErrorMessage === '' && !isCardCVCNumberNextStep)
    setIsCardCVCNumberNextStep(true);

  return { cardCVCNumber, cardCVCNumberErrorMessage, isCardCVCNumberNextStep, handleCardCVCNumberInputChange };
};
