import { useEffect, useState } from 'react';
import { INPUT_RULES, REGEX } from '../constants/card-app';

const useCardCVCNumberInput = () => {
  const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
  const [cardCVCNumberError, setCardCVCNumberError] = useState<boolean>(false);
  const [isNextVisible, setIsNextVisible] = useState<boolean>(false);

  const handleCardCVCNumberChange = (value: string) => {
    const isNumberInput = REGEX.onlyOneDigitNumber.test(value);
    const isValidCVCNumber = value.length <= INPUT_RULES.maxCardCVCNumberLength;

    setCardCVCNumberError(!isNumberInput);
    if (!isNumberInput || !isValidCVCNumber) return;

    setCardCVCNumber(value);
  };

  const isCardCVCNumberComplete = !cardCVCNumberError && cardCVCNumber.length === INPUT_RULES.maxCardCVCNumberLength;

  useEffect(() => {
    setIsNextVisible((prev) => prev || isCardCVCNumberComplete);
  }, [isCardCVCNumberComplete]);

  return {
    cardCVCNumberState: {
      value: cardCVCNumber,
      error: cardCVCNumberError,
      isComplete: isCardCVCNumberComplete,
      isNextVisible: isNextVisible,
    },
    handleCardCVCNumberChange,
  };
};

export default useCardCVCNumberInput;
