import useCvc from './useCvc';
import useCardNumbers from './useCardNumbers';
import useCardHolderName from './useCardholderName';
import useExpiryDate from './useExpiryDate';
import usePassword from './usePassword';

const useCardInfo = () => {
  const cardNumbersControl = useCardNumbers();
  const expiryDateControl = useExpiryDate();
  const cardholderNameControl = useCardHolderName();
  const cvcControl = useCvc();
  const passwordControl = usePassword();

  return {
    cardNumbers: cardNumbersControl,
    expiryDate: expiryDateControl,
    cardholderName: cardholderNameControl,
    cvc: cvcControl,
    password: passwordControl,
  };
};

export default useCardInfo;
