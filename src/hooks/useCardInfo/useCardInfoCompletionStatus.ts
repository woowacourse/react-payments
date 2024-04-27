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
  const isCardNumbersCompleted = getObjectValues<string>(cardNumbers.value)
    .map(number => !validateCardNumber(number).isError)
    .every(v => v);
  const isCardTypeCompleted = !validateCardType(cardType.value).isError;
  const isExpiryDateCompleted =
    !validateExpiryMonth(expiryMonth.value).isError && !validateExpiryYear(expiryYear.value).isError;
  const isCardholderNameCompleted = !validateCardholderName(cardholderName.value).isError;
  const isCvcCompleted = !validateCvc(cvc.value).isError;
  const isPasswordCompleted = !validatePassword(password.value).isError;

  return {
    isCardNumbersCompleted,
    isCardTypeCompleted,
    isExpiryDateCompleted,
    isCardholderNameCompleted,
    isCvcCompleted,
    isPasswordCompleted,
  };
};

export default useCardInfoCompletionStatus;
