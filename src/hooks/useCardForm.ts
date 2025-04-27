import useCardCVCNumber from './useCardCVCNumber';
import useCardExpirationDate from './useCardExpirationDate';
import useCardNumbers from './useCardNumbers';

const useCardForm = () => {
  const cardNumbersForm = useCardNumbers();
  const cardCVCNumberForm = useCardCVCNumber();
  const cardExpirationDateForm = useCardExpirationDate();

  const getCardInfo = () => ({
    cardNumbers: cardNumbersForm.cardNumbers,
    cardCVCNumber: cardCVCNumberForm.cardCVCNumber,
    cardExpirationDate: cardExpirationDateForm.cardExpirationDate,
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

    return (
      canCardNumbersSubmit &&
      canCardCVCNumberSubmit &&
      canCardExpirationDateSubmit
    );
  };

  const resetForm = () => {
    cardNumbersForm.resetCardNumbers();
    cardCVCNumberForm.resetCardCVCNumber();
    cardExpirationDateForm.resetCardExpirationDate();
  };

  return {
    cardNumbersForm,
    cardCVCNumberForm,
    cardExpirationDateForm,
    getCardInfo,
    canSubmit,
    resetForm,
  };
};

export default useCardForm;
