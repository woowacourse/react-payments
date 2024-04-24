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

  return {
    cardNumbers: cardNumbersControl,
    expiryDate: { month: expiryMonthControl, year: expiryYearControl },
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfo;
