import { SyntheticEvent, useEffect, useState } from 'react';
import { CARD_NUMBERS_UNIT_LENGTH, CARD_NUMBER_UNIT_LENGTH } from '../constants/input';
import useErrorMessages from './useErrorMessages';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(new Array(CARD_NUMBERS_UNIT_LENGTH).fill(''));
  const { errorMessages, setErrorMessages } = useErrorMessages<string>(cardNumbers.length, '');
  const [isValid, setIsValid] = useState(false);

  // 값과, 에러가 났는지, 업데이트, (유효성 검사)

  const updateCardNumbers = (index: number, cardNumber: string) => {
    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = cardNumber;
    setCardNumbers(updatedCardNumbers);
  };

  const isNotNumberInput = (numberUnit: string, eventType: string) => {
    return eventType === 'change' && isNaN(Number(numberUnit)) && numberUnit.length !== 0;
  };

  const isFilledUnit = (numberUnit: string, eventType: string) => {
    return eventType === 'blur' && numberUnit.length < CARD_NUMBER_UNIT_LENGTH;
  };

  const isFilledAllUnit = (cardNumbers: string[]) => {
    return cardNumbers.every((cardNumberUnit) => cardNumberUnit.length === CARD_NUMBER_UNIT_LENGTH);
  };

  const getErrorMessage = (numberUnit: string, eventType: string) => {
    if (isNotNumberInput(numberUnit, eventType)) {
      return ERROR_MESSAGES.NOT_NUMBER;
    }
    if (isFilledUnit(numberUnit, eventType)) {
      return ERROR_MESSAGES.CARD_NUMBER_UNIT_LENGTH;
    }

    return '';
  };

  const handleCardNumbersChange = (index: number) => (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    const errorMessage = getErrorMessage(value, e.type);
    setErrorMessages({ errorMessage: errorMessage, index });

    if (errorMessage !== '') return;

    updateCardNumbers(index, value);
  };

  useEffect(() => {
    if (errorMessages.some((msg) => msg !== '')) {
      setIsValid(false);
      return;
    }

    setIsValid(isFilledAllUnit(cardNumbers));
  }, [cardNumbers, errorMessages]);

  const reset = () => {
    setCardNumbers(new Array(CARD_NUMBERS_UNIT_LENGTH).fill(''));
  };

  return {
    value: cardNumbers,
    handleCardNumbersChange,
    errorMessages,
    isValid,
    reset,
  };
};

export default useCardNumbers;

/**
 * isValid: errorMessage만으로 처리하기엔 입력 안된 값들과 혼동될 여지 존재
 * value
 * errorMessage
 */
