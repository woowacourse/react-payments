import useCardCVCNumber from './useCardCVCNumber';
import useCardExpirationDate from './useCardExpirationDate';
import useCardNumbers from './useCardNumbers';
import useCardPassword from './useCardPassword';

const useCardForm = () => {
  const cardNumbersForm = useCardNumbers();
  const cardCVCNumberForm = useCardCVCNumber();
  const cardExpirationDateForm = useCardExpirationDate();
  const cardPasswordForm = useCardPassword(); // Assuming you have a useCardPassword hook

  const getCardInfo = () => ({
    cardNumbers: cardNumbersForm.cardNumbers,
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
