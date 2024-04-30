import { IInputControl } from '../useInput';
import { IInputsControl } from '../useInputs';
import getObjectValues from '../../utils/getObjectValues';
import {
  validateCardNumber,
  validateCardType,
  validateCardholderName,
  validateCvc,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../../validators';

interface CardInfoControl {
  cardNumbers: IInputsControl;
  cardType: IInputControl<HTMLSelectElement>;
  expiryDate: {
    month: IInputControl;
    year: IInputControl;
  };
  cardholderName: IInputControl;
  cvc: IInputControl;
  password: IInputControl;
}

interface DynamicObject<T> {
  [key: string]: T;
}

export interface ICardInfoCompletionStatus extends DynamicObject<boolean> {
  isCardNumbersCompleted: boolean;
  isCardTypeCompleted: boolean;
  isExpiryDateCompleted: boolean;
  isCardholderNameCompleted: boolean;
  isCvcCompleted: boolean;
  isPasswordCompleted: boolean;
}

const useCardInfoCompletionStatus = ({
  cardNumbers,
  cardType,
  expiryDate: { month: expiryMonth, year: expiryYear },
  cardholderName,
  cvc,
  password,
}: CardInfoControl): ICardInfoCompletionStatus => {
  const evaluateCompletion = (value: string, validate: (value: string) => { isError: boolean }) =>
    !validate(value).isError;

  return {
    isCardNumbersCompleted: getObjectValues<string>(cardNumbers.value)
      .map(val => evaluateCompletion(val, validateCardNumber))
      .every(v => v),
    isCardTypeCompleted: evaluateCompletion(cardType.value, validateCardType),
    isExpiryDateCompleted:
      evaluateCompletion(expiryMonth.value, validateExpiryMonth) &&
      evaluateCompletion(expiryYear.value, validateExpiryYear),
    isCardholderNameCompleted: evaluateCompletion(cardholderName.value, validateCardholderName),
    isCvcCompleted: evaluateCompletion(cvc.value, validateCvc),
    isPasswordCompleted: evaluateCompletion(password.value, validatePassword),
  };
};

export default useCardInfoCompletionStatus;
