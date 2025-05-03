import { useRef, useState } from 'react';
import {
  DECIMAL_RADIX,
  ERROR_MESSAGE,
  MAX_VALID_MONTH,
  MIN_VALID_MONTH,
  ONLY_NUMBER_PATTERN,
} from '../../../../constants';
import { DateType, HandleInputChangeProps } from '../types';
import { EXPIRATION_DATE_ERROR_MESSAGE, EXPIRATION_DATE_MAX_LENGTH } from '../constants';
import { validateErrorMessages } from '../../../../utils';

export const useControlledCardExpirationDate = () => {
  const [isCardExpirationDateNextStep, setIsCardExpirationDateNextStep] = useState(false);
  const [cardExpirationDate, setCardExpirationDate] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });
  const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<DateType, string>>({
    month: '',
    year: '',
  });
  const cardExpirationDateRefs = useRef<{ [key in DateType]: HTMLInputElement | null }>({
    month: null,
    year: null,
  });
  const handleCardExpirationDateInputChange = ({ index, value, dateType }: HandleInputChangeProps) => {
    setCardExpirationDate({ ...cardExpirationDate, [dateType]: value });
    setCardExpirationDateErrorMessage({
      ...cardExpirationDateErrorMessage,
      [dateType]: '',
    });

    if (!ONLY_NUMBER_PATTERN.test(value)) {
      setCardExpirationDateErrorMessage({ ...cardExpirationDateErrorMessage, [dateType]: ERROR_MESSAGE.onlyNumber });
      return;
    }

    if (value.length < EXPIRATION_DATE_MAX_LENGTH) {
      setCardExpirationDateErrorMessage({
        ...cardExpirationDateErrorMessage,
        [dateType]: EXPIRATION_DATE_ERROR_MESSAGE.minLength,
      });
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

    const nextSequence = Object.keys(cardExpirationDateRefs.current)[index + 1] as DateType;
    cardExpirationDateRefs.current[nextSequence]?.focus();
  };

  const isCardNumberFill = Object.values(cardExpirationDate).every(
    (number) => number.length === EXPIRATION_DATE_MAX_LENGTH,
  );
  const isValid = validateErrorMessages<DateType, Record<DateType, string>>(cardExpirationDateErrorMessage);
  if (isCardNumberFill && isValid && !isCardExpirationDateNextStep) setIsCardExpirationDateNextStep(true);

  return {
    cardExpirationDate,
    cardExpirationDateErrorMessage,
    isCardExpirationDateNextStep,
    cardExpirationDateRefs,
    handleCardExpirationDateInputChange,
  };
};
