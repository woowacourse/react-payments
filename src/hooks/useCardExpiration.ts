import {useState, ChangeEvent, FocusEvent, useRef, KeyboardEvent} from 'react';
import {CardExpirationDate, CardExpirationDateError} from '../types';
import {isOnlyDigits} from '../utils/validateNumber';
import {CARD_EXPIRATION_ERROR, CARD_EXPIRATION} from '../constants';

const initialCardExpirationDate: CardExpirationDate = {
  month: '',
  year: '',
}

const initialCardExpirationDateError: CardExpirationDateError = {
  month: '',
  year: '',
};

export const useCardExpiration = (onComplete: () => void) => {
  const [cardExpirationDate, setCardExpirationDate] = useState<CardExpirationDate>(initialCardExpirationDate);
  const [error, setError] = useState<CardExpirationDateError>(initialCardExpirationDateError);

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setError({
        ...error,
        [name]: CARD_EXPIRATION_ERROR.onlyNumbers,
      });
      return;
    }

    if (isNumber) {
      if (name === 'month' && value.length > 0) {
        const monthValue = Number(value);
        if (
          monthValue < CARD_EXPIRATION.minMonth ||
          monthValue > CARD_EXPIRATION.maxMonth
        ) {
          setError({
            ...error,
            month: CARD_EXPIRATION_ERROR.invalidMonth,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            month: value,
          });
          return;
        }
      }

      if (name === 'year' && value.length === CARD_EXPIRATION.monthLength) {
        const yearValue = Number(value);
        if (yearValue < CARD_EXPIRATION.minYear) {
          setError({
            ...error,
            year: CARD_EXPIRATION_ERROR.invalidYear,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            year: value,
          });
          return;
        }
      }

      setCardExpirationDate({
        ...cardExpirationDate,
        [name]: value,
      });

      setError({
        ...error,
        [name]: '',
      });
    }

    if (value.length === CARD_EXPIRATION.monthLength) {
      yearRef.current?.focus();
      return;
    }
  };

  const onYearKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !cardExpirationDate.year) {
      monthRef.current?.focus();
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (value === '') {
      return;
    }

    if (value.length < CARD_EXPIRATION.maxLength) {
      setError({
        ...error,
        [name]: CARD_EXPIRATION_ERROR.invalidFormat,
      });
    }
  }

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    const {name} = e.target;

    if (error[name as keyof CardExpirationDateError]) {
      setError({
        ...error,
        [name]: ''
      });
    }
  };

  const resetCardExpiration = () => {
    setCardExpirationDate(initialCardExpirationDate);
    setError(initialCardExpirationDateError);
  }

  const isCardExpirationValid = () => {
    const {month, year} = cardExpirationDate;

    const monthValue = Number(month);
    const yearValue = Number(year);

    return (
      month.length === CARD_EXPIRATION.monthLength &&
      year.length === CARD_EXPIRATION.yearLength &&
      monthValue >= CARD_EXPIRATION.minMonth &&
      monthValue <= CARD_EXPIRATION.maxMonth &&
      yearValue >= CARD_EXPIRATION.minYear &&
      !error.month &&
      !error.year
    );
  }

  return {
    value: cardExpirationDate,
    error,
    monthRef,
    yearRef,
    onChange,
    onYearKeyDown,
    onBlur,
    onFocus,
    resetCardExpiration,
    isValid: isCardExpirationValid(),
  };
};
