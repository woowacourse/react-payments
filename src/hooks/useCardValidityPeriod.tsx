import { useRef, useState } from 'react';
import { validateCardValidityPeriod } from '../validations/cardValidityPeriod';
import { PARSE_RULE } from '../constants/cardValidityPeriod';

function useCardValidityPeriod() {
  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    month: '',
    year: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    month: '',
    year: '',
  });

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const setInputRef = (el: HTMLInputElement | null, index: number) => {
    if (el) {
      inputRefs.current[index] = el;
    }
  };

  const focusNextInput = (index: number) => {
    if (index < Object.values(cardValidityPeriod).length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const { value } = e.target;

    const isNumeric = value === '' || /^[0-9]+$/.test(value);
    if (!isNumeric) {
      return;
    }

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const nextMonth = type === 'month' ? value : cardValidityPeriod.month;
    const nextYear = type === 'year' ? value : cardValidityPeriod.year;

    setCardValidityPeriod({
      month: nextMonth,
      year: nextYear,
    });

    const newErrorMessage = validateCardValidityPeriod({
      month: nextMonth,
      year: nextYear,
    });

    setErrorMessage(newErrorMessage);

    if (nextMonth !== '' && newErrorMessage.month === '') {
      focusNextInput(0);
    }
  };

  return {
    cardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage,
    setInputRef,
  };
}

export default useCardValidityPeriod;
