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
  const cardNumbersValue = cardNumbers.value;
  const cardTypeValue = cardType.value;
  const expiryMonthValue = expiryMonth.value;
  const expiryYearValue = expiryYear.value;
  const cardholderNameValue = cardholderName.value;
  const cvcValue = cvc.value;
  const passwordValue = password.value;

  const isCardNumbersCompleted = getObjectValues<string>(cardNumbersValue)
    .map(number => !validateCardNumber(number).isError)
    .every(v => v);
  const isCardTypeCompleted = !validateCardType(cardTypeValue).isError;
  const isExpiryDateCompleted =
    !validateExpiryMonth(expiryMonthValue).isError && !validateExpiryYear(expiryYearValue).isError;
  const isCardholderNameCompleted = !validateCardholderName(cardholderNameValue).isError;
  const isCvcCompleted = !validateCvc(cvcValue).isError;
  const isPasswordCompleted = !validatePassword(passwordValue).isError;

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
