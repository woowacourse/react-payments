import {useState, ChangeEvent, useRef, KeyboardEvent, FocusEvent} from 'react';
import {CardNumber, CardNumberError} from '../types';
import {isOnlyDigits} from '../utils/validateNumber';
import {CARD_NUMBER, CARD_NUMBER_ERROR} from '../constants';

const initialCardNumber: CardNumber = {
  first: '',
  second: '',
  third: '',
  forth: '',
}

const initialError: CardNumberError = {
  first: '',
  second: '',
  third: '',
  forth: '',
}

export const useCardNumber = (onComplete?: () => void) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(initialCardNumber);
  const [error, setError] = useState<CardNumberError>(initialError);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    const updatedError = {...error};
    const cardFields: Array<keyof CardNumberError> = ['first', 'second', 'third', 'forth'];

    cardFields.forEach((field) => {
      if (field !== name && updatedError[field] === CARD_NUMBER_ERROR.onlyNumbers) {
        updatedError[field] = '';
      }
    });

    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setError({
        ...updatedError,
        [name]: CARD_NUMBER_ERROR.onlyNumbers,
      });

      return;
    }

    const newCardNumber = {
      ...cardNumber,
      [name]: value,
    };

    setCardNumber({
      ...cardNumber,
      [name]: value,
    });

    setError({
      ...updatedError,
      [name]: '',
    });

    const index = getIndexFromName(name);
    if (value.length === CARD_NUMBER.maxLength) {
      if (index < 3) {
        inputRefs[index + 1].current?.focus();
        return;
      }

      if (index === 3) {
        if (newCardNumber.first.length === CARD_NUMBER.maxLength &&
          newCardNumber.second.length === CARD_NUMBER.maxLength &&
          newCardNumber.third.length === CARD_NUMBER.maxLength &&
          newCardNumber.forth.length === CARD_NUMBER.maxLength) {
          setTimeout(() => onComplete?.(), 100);
        }
      }
    }
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const {name, value} = e.target as HTMLInputElement;

    if (e.key === 'Backspace' && value.length === 0) {
      const index = getIndexFromName(name);

      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    if (value === '') {
      return;
    }

    if (value.length < CARD_NUMBER.maxLength) {
      setError({
        ...error,
        [name]: CARD_NUMBER_ERROR.invalidFormat
      });
    }
  };

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    const {name} = e.target;

    if (error[name as keyof CardNumberError]) {
      setError({
        ...error,
        [name]: ''
      });
    }
  };

  const getIndexFromName = (name: string) => {
    switch (name) {
      case 'first':
        return 0;
      case 'second':
        return 1;
      case 'third':
        return 2;
      case 'forth':
        return 3;
      default:
        return 0;
    }
  };

  const resetCardNumber = () => {
    setCardNumber(initialCardNumber);
    setError(initialError);
  };

  const isCardNumberValid = () => {
    const {first, second, third, forth} = cardNumber;

    return (
      first.length === CARD_NUMBER.maxLength &&
      second.length === CARD_NUMBER.maxLength &&
      third.length === CARD_NUMBER.maxLength &&
      forth.length === CARD_NUMBER.maxLength
    );
  };

  return {
    value: cardNumber,
    error,
    inputRefs,
    onChange,
    onKeyDown,
    onBlur,
    onFocus,
    resetCardNumber,
    isValid: isCardNumberValid(),
  };
};
