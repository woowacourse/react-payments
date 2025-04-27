import { useState } from 'react';
import useCardCVCNumber from './useCardCVCNumber';
import useCardExpirationDate from './useCardExpirationDate';
import useCardNumbers from './useCardNumbers';
import useCardPassword from './useCardPassword';
import useError from './useError';

const useCardForm = () => {
  const cardNumbersForm = useCardNumbers();
  const cardCVCNumberForm = useCardCVCNumber();
  const cardExpirationDateForm = useCardExpirationDate();
  const cardPasswordForm = useCardPassword();
  const [cardCompany, setCardCompany] = useState('');
  const cardCompanyForm = {
    cardCompany,
    setCardCompany,
  };

  const getCardInfo = () => ({
    cardNumbers: cardNumbersForm.cardNumbers,
    cardCompany: cardCompanyForm,
    cardCVCNumber: cardCVCNumberForm.cardCVCNumber,
    cardExpirationDate: cardExpirationDateForm.cardExpirationDate,
    cardPassword: cardPasswordForm.cardPassword,
  });

  const canSubmit = (): boolean => {
    const canCardNumbersSubmit =
      canSubmitByLength(cardNumbersForm.cardNumbers, 4) &&
      isErrorFree(cardNumbersForm.isError);

    const canCardCVCNumberSubmit =
      canSubmitByLength(cardCVCNumberForm.cardCVCNumber, 3) &&
      isErrorFree(cardCVCNumberForm.isError);

    const canCardExpirationDateSubmit =
      canSubmitByLength(cardExpirationDateForm.cardExpirationDate, 2) &&
      isErrorFree(cardExpirationDateForm.isError);

    const canCardPasswordSubmit =
      canSubmitByLength(cardPasswordForm.cardPassword, 2) &&
      isErrorFree(cardPasswordForm.isError);

    return (
      canCardNumbersSubmit &&
      canCardCVCNumberSubmit &&
      canCardExpirationDateSubmit &&
      canCardPasswordSubmit
    );
  };

  const resetForm = () => {
    cardNumbersForm.resetCardNumbers();
    cardCVCNumberForm.resetCardCVCNumber();
    cardExpirationDateForm.resetCardExpirationDate();
    cardPasswordForm.resetCardPassword();
  };

  return {
    cardNumbersForm,
    cardCVCNumberForm,
    cardCompanyForm,
    cardExpirationDateForm,
    cardPasswordForm,
    getCardInfo,
    canSubmit,
    resetForm,
  };
};

export default useCardForm;

const canSubmitByLength = (
  value: string | Record<string, string>,
  expectedLength: number
) => {
  if (typeof value === 'string') {
    return value.length === expectedLength;
  }
  return Object.values(value).every((v) => v.length === expectedLength);
};

const isErrorFree = (errors: Record<string, boolean>) => {
  return Object.values(errors).every((isError) => !isError);
};
