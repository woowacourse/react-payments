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
      Object.values(cardNumbersForm.cardNumbers).every(
        (cardNumber) => cardNumber.length === 4
      ) && Object.values(cardNumbersForm.isError).every((isError) => !isError);

    const canCardCVCNumberSubmit =
      cardCVCNumberForm.cardCVCNumber.length === 3 &&
      Object.values(cardCVCNumberForm.isError).every((isError) => !isError);

    const canCardExpirationDateSubmit =
      Object.values(cardExpirationDateForm.cardExpirationDate).every(
        (date) => date.length === 2
      ) &&
      Object.values(cardExpirationDateForm.isError).every(
        (isError) => !isError
      );

    const canCardPasswordSubmit =
      cardPasswordForm.cardPassword.length === 2 &&
      Object.values(cardPasswordForm.isError).every((isError) => !isError);

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
