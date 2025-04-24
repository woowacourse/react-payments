import { useState } from 'react';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../constants';

export const useControlledCardCVCNumber = () => {
  const [isCardCVCNumberNextStep, setIsCardCVCNumberNextStep] = useState<boolean>(false);
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>('');

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    return '';
  };

  const handleCardCVCNumberInputChange = (value: string) => {
    setCardCVCNumber((prev) => (prev = value));
    setCardCVCNumberErrorMessage((prev) => (prev = getErrorMessage(value)));
  };
  if (cardCVCNumber.length === 3 && cardCVCNumberErrorMessage === '' && !isCardCVCNumberNextStep)
    setIsCardCVCNumberNextStep(true);

  return { cardCVCNumber, cardCVCNumberErrorMessage, isCardCVCNumberNextStep, handleCardCVCNumberInputChange };
};
