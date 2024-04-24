import useInputs from './useInputs';
import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';
import useCardholderName from './useCardholderName';
import validateCardNumber from '../validator/validateCardNumber';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const useCardInfo = () => {
  const cardNumberInfo = useInputs(INITIAL_CARD_NUMBER, validateCardNumber);
  const expiryMonth = useExpiryMonth();
  const expiryYear = useExpiryYear();
  const cardholderNameInfo = useCardholderName();

  return { cardNumberInfo, cardholderNameInfo, expiryDateInfo: { month: expiryMonth, year: expiryYear } };
};

export default useCardInfo;
