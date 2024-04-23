import useCvc from './useCvc';
import useCardNumbers from './useCardNumbers';
import useCardHolderName from './useCardholderName';
import useExpiryDate from './useExpiryDate';

const useCardInfo = () => {
  const cardNumbersControl = useCardNumbers();
  const expiryDateControl = useExpiryDate();
  const cardholderNameControl = useCardHolderName();
  const cvcControl = useCvc();

  return {
    cardNumbers: cardNumbersControl,
    expiryDate: expiryDateControl,
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
  };
};

export default useCardInfo;
