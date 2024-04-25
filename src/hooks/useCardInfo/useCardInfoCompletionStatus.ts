import { useMemo } from 'react';
import { IUseInputReturn } from '../useInput';
import { IUseInputsReturn } from '../useInputs';

interface CardInfoControl {
  cardNumbers: IUseInputsReturn;
  expiryDate: {
    month: IUseInputReturn;
    year: IUseInputReturn;
  };
  cardholderName: IUseInputReturn;
  cvc: IUseInputReturn;
  password: IUseInputReturn;
}

const useCardInfoCompletionStatus = ({
  cardNumbers,
  expiryDate: { month: expiryMonth, year: expiryYear },
  cardholderName,
  cvc,
  password,
}: CardInfoControl) => {
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
