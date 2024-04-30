import useInput, { IInputControl } from '../useInput';
import useInputs, { IInputsControl } from '../useInputs';
import {
  validateCardNumber,
  validateCardholderName,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
  validateCardType,
} from '../../validators';

export interface ICardInfoInputsControl {
  cardNumbers: IInputsControl;
  cardType: IInputControl<HTMLSelectElement>;
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
  const cardTypeControl = useInput<HTMLSelectElement>(validateCardType);
  const expiryMonthControl = useInput(validateExpiryMonth);
  const expiryYearControl = useInput(validateExpiryYear);
  const cardholderNameControl = useInput(validateCardholderName);
  const cvcControl = useInput(validateCvc);
  const passwordControl = useInput(validatePassword);

  return {
    cardNumbers: cardNumbersControl,
    cardType: cardTypeControl,
    expiryDate: { month: expiryMonthControl, year: expiryYearControl },
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfoInputs;
