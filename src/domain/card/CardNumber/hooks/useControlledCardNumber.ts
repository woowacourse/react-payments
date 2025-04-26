import { useCallback, useState } from 'react';
import { HandleInputChangeProps, SequenceType } from '../type';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../../constants';

export const useControlledCardNumber = () => {
  const [isCardNumberNextStep, setIsCardNumberNextStep] = useState(false);
  const [cardNumber, setCardNumber] = useState<Record<SequenceType, string>>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<Record<SequenceType, string>>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    if (value.length < 4) {
      return '4자리 숫자를 입력해 주세요';
    }

    return '';
  };

  const handleCardNumberInputChange = useCallback(({ value, sequence }: HandleInputChangeProps) => {
    setCardNumber((prev) => ({ ...prev, [sequence]: value }));
    setCardNumberErrorMessage((prev) => ({ ...prev, [sequence]: getErrorMessage(value) }));
  }, []);

  const isCardNumberFill = Object.values(cardNumber).every((number) => number.length === 4);
  const isError = Object.values(cardNumberErrorMessage).every((message) => message === '');
  if (isCardNumberFill && isError && !isCardNumberNextStep) setIsCardNumberNextStep(true);

  return { cardNumber, cardNumberErrorMessage, isCardNumberNextStep, handleCardNumberInputChange };
};
