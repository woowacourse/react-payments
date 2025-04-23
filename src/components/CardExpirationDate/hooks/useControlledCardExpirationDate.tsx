import { useState } from 'react';
import {
  DECIMAL_RADIX,
  ERROR_MESSAGE,
  MAX_VALID_MONTH,
  MIN_VALID_MONTH,
  ONLY_NUMBER_PATTERN,
} from '../../../constants';
import { DateType, HandleInputChangeProps } from '../type';

export const useControlledCardExpirationDate = () => {
  const [cardExpirationDate, setCardExpirationDate] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });
  const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });

  const handleCardExpirationDateInputChange = ({ value, dateType }: HandleInputChangeProps) => {
    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value });
    setCardExpirationDateErrorMessage({
      ...cardExpirationDateErrorMessage,
      [dateType]: '',
    });

    if (!ONLY_NUMBER_PATTERN.test(value)) {
      setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.onlyNumber });
      return;
    }

    const valueAsNumber = parseInt(value, DECIMAL_RADIX);

    if (dateType === 'month') {
      if (valueAsNumber < MIN_VALID_MONTH || valueAsNumber > MAX_VALID_MONTH) {
        setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.validMonth });
      }

      if (
        Number(cardExpirationDate.year) === Number(String(new Date().getFullYear()).slice(2)) &&
        valueAsNumber < new Date().getMonth() + 1
      ) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }
    }

    if (dateType === 'year') {
      if (valueAsNumber < Number(String(new Date().getFullYear()).slice(2))) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }

      if (
        valueAsNumber === Number(String(new Date().getFullYear()).slice(2)) &&
        Number(cardExpirationDate.month) < new Date().getMonth() + 1
      ) {
        setCardExpirationDateErrorMessage({
          ...cardExpirationDateErrorMessage,
          [dateType]: ERROR_MESSAGE.pastYear,
        });
      }
    }
  };

  return {
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    handleCardExpirationDateInputChange,
  };
};
