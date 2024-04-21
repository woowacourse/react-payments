import useCardNumbers from './useCardNumbers';
import useCardHolderName from './useCardholderName';
import useExpiryDate from './useExpiryDate';

const useCardInfo = () => {
  const cardNumbersControl = useCardNumbers();
  const expiryDateControl = useExpiryDate();
  const cardholderNameControl = useCardHolderName();

  return {
    cardNumbers: cardNumbersControl,
    expiryDate: expiryDateControl,
    cardholderName: cardholderNameControl,
  };
};

export default useCardInfo;
