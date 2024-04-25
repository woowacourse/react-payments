import {
  validateCardNumber,
  validateCardholderName,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../../validators';
import useInput from '../useInput';
import useInputs from '../useInputs';

const initialCardNumbers = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const useCardInfoInputs = () => {
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

export default useCardInfoInputs;
