import { useCallback, useState } from 'react';
import { HandleInputChangeProps, SequenceType } from '../type';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../constants';

export const useControlledCardNumber = () => {
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

    return '';
  };

  const handleCardNumberInputChange = useCallback(({ value, sequence }: HandleInputChangeProps) => {
    setCardNumber((prev) => ({ ...prev, [sequence]: value }));
    setCardNumberErrorMessage((prev) => ({ ...prev, [sequence]: getErrorMessage(value) }));
  }, []);

  return { cardNumber, cardNumberErrorMessage, handleCardNumberInputChange };
};
