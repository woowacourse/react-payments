import { useEffect, useState } from 'react';
import { MAX_LENGTH } from '../App';
import { CARD_NUMBER } from '../constants/cardSection';
import { UseDetectCompleteHookProps, InitialCardNumberState } from 'types';

const useDetectComplete = ({
  cardNumbers,
  month,
  year,
  cvc,
  password,
  name,
}: UseDetectCompleteHookProps) => {
  const [isValidAllFormStates, setIsValidAllFormStates] = useState(false);

  useEffect(() => {
    const totalCardNumbers = cardNumbers
      .map((cardNumber: InitialCardNumberState) => cardNumber.value)
      .join('');

    if (
      month.length === MAX_LENGTH.MONTH &&
      year.length === MAX_LENGTH.YEAR &&
      totalCardNumbers.length === CARD_NUMBER.TOTAL_MAX_LENGTH &&
      cvc.length === MAX_LENGTH.CVC &&
      password.length === MAX_LENGTH.PASSWORD &&
      name.length
    ) {
      setIsValidAllFormStates(true);

      return;
    }

    setIsValidAllFormStates(false);
  }, [month, year, cardNumbers, cvc, name, password]);

  return { isValidAllFormStates };
};

export default useDetectComplete;
