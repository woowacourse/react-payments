import { useRef, useState } from 'react';
import { validateCardValidityPeriod } from '../validations/cardValidityPeriod';
import { PARSE_RULE } from '../constants/cardValidityPeriod';
import getErrorMessageFromList from '../utils/getErrorMessageFromList';

const useCardValidityPeriod = ({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) => {
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

  const onChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumeric = value === '' || /^[0-9]+$/.test(value);
    if (!isNumeric) {
      return;
    }

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const newCardValidityPeriod = {
      ...cardValidityPeriod,
      month: value,
    };

    setCardValidityPeriod(newCardValidityPeriod);

    const newErrorMessage = validateCardValidityPeriod({
      month: value,
      year: cardValidityPeriod.year,
    });

    setErrorMessage(newErrorMessage);

    if (value !== '' && newErrorMessage.month === '') {
      focusNextInput(0);
    }

    const isCardValidityPeriodValid =
      Object.values(newCardValidityPeriod).every((value) => value !== '') &&
      !getErrorMessageFromList(Object.values(newErrorMessage));

    if (!isCardValidityPeriodValid) {
      return;
    }

    handleNextStep();
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumeric = value === '' || /^[0-9]+$/.test(value);
    if (!isNumeric) {
      return;
    }

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const newCardValidityPeriod = {
      ...cardValidityPeriod,
      year: value,
    };

    setCardValidityPeriod(newCardValidityPeriod);

    const newErrorMessage = validateCardValidityPeriod({
      month: cardValidityPeriod.month,
      year: value,
    });

    setErrorMessage(newErrorMessage);

    const isCardValidityPeriodValid =
      Object.values(newCardValidityPeriod).every((value) => value !== '') &&
      !getErrorMessageFromList(Object.values(newErrorMessage));

    if (!isCardValidityPeriodValid) {
      return;
    }

    handleNextStep();
  };

  return {
    cardValidityPeriod,
    onChangeMonth,
    onChangeYear,
    errorMessage,
    setInputRef,
    isCardValidityPeriodValid:
      Object.values(cardValidityPeriod).every((value) => value !== '') &&
      !getErrorMessageFromList(Object.values(errorMessage)),
  };
};

export default useCardValidityPeriod;
