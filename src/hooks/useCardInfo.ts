import useInput from './useInput';
import useInputs from './useInputs';

import {
  validateCardNumber,
  validateCardholderName,
  validateExpiryMonth,
  validateExpiryYear,
  validateCvc,
  validatePassword,
} from '../validators';
import { useMemo } from 'react';

const initialCardNumbers = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const useCardInfo = () => {
  const cardNumbersControl = useInputs(validateCardNumber, initialCardNumbers);
  const expiryMonthControl = useInput(validateExpiryMonth);
  const expiryYearControl = useInput(validateExpiryYear);
  const cardholderNameControl = useInput(validateCardholderName);
  const cvcControl = useInput(validateCvc);
  const passwordControl = useInput(validatePassword);

  const isCardNumbersCompleted = useMemo(
    () =>
      Object.values(cardNumbersControl.value).every(v => v) &&
      Object.values(cardNumbersControl.errorStatus.isError).every(v => !v),
    [cardNumbersControl],
  );
  const isExpiryDateCompleted = useMemo(
    () =>
      Boolean(expiryMonthControl.value) &&
      !expiryMonthControl.errorStatus.isError &&
      Boolean(expiryYearControl.value) &&
      !expiryYearControl.errorStatus.isError,
    [expiryMonthControl, expiryYearControl],
  );
  const isCardholderNameCompleted = useMemo(
    () => Boolean(cardholderNameControl.value) && !cardholderNameControl.errorStatus.isError,
    [cardholderNameControl],
  );
  const isCvcCompleted = useMemo(() => Boolean(cvcControl.value) && !cvcControl.errorStatus.isError, [cvcControl]);
  const isPasswordCompleted = useMemo(
    () => Boolean(passwordControl.value) && !passwordControl.errorStatus.isError,
    [passwordControl],
  );

  const isFieldsCompleted = [
    isCardNumbersCompleted,
    isExpiryDateCompleted,
    isCardholderNameCompleted,
    isCvcCompleted,
    isPasswordCompleted,
  ];

  return {
    cardNumbers: cardNumbersControl,
    expiryDate: { month: expiryMonthControl, year: expiryYearControl },
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
    isFieldsCompleted,
  };
};

export default useCardInfo;
