import {
  validateCardNumber,
  validateCardholderName,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../../validators';
import useInput, { IInputControl } from '../useInput';
import useInputs, { IInputsControl } from '../useInputs';

export interface ICardInfoInputsControl {
  cardNumbers: IInputsControl;
  expiryDate: { month: IInputControl; year: IInputControl };
  cardholderName: IInputControl;
  cvc: IInputControl;
  password: IInputControl;
}

const initialCardNumbers = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const useCardInfoInputs = (): ICardInfoInputsControl => {
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
