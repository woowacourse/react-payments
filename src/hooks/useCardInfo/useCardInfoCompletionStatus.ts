import { useMemo } from 'react';
import { IInputControl } from '../useInput';
import { IInputsControl } from '../useInputs';

interface CardInfoControl {
  cardNumbers: IInputsControl;
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
  isExpiryDateCompleted: boolean;
  isCardholderNameCompleted: boolean;
  isCvcCompleted: boolean;
  isPasswordCompleted: boolean;
}

const useCardInfoCompletionStatus = ({
  cardNumbers,
  expiryDate: { month: expiryMonth, year: expiryYear },
  cardholderName,
  cvc,
  password,
}: CardInfoControl): ICardInfoCompletionStatus => {
  const isCardNumbersCompleted = useMemo(
    () =>
      Object.values(cardNumbers.value).every(v => v) && Object.values(cardNumbers.errorStatus.isError).every(v => !v),
    [cardNumbers],
  );
  const isExpiryDateCompleted = useMemo(
    () =>
      Boolean(expiryMonth.value) &&
      !expiryMonth.errorStatus.isError &&
      Boolean(expiryYear.value) &&
      !expiryYear.errorStatus.isError,
    [expiryMonth, expiryYear],
  );
  const isCardholderNameCompleted = useMemo(
    () => Boolean(cardholderName.value) && !cardholderName.errorStatus.isError,
    [cardholderName],
  );
  const isCvcCompleted = useMemo(() => Boolean(cvc.value) && !cvc.errorStatus.isError, [cvc]);
  const isPasswordCompleted = useMemo(() => Boolean(password.value) && !password.errorStatus.isError, [password]);

  return {
    isCardNumbersCompleted,
    isExpiryDateCompleted,
    isCardholderNameCompleted,
    isCvcCompleted,
    isPasswordCompleted,
  };
};

export default useCardInfoCompletionStatus;
