import useInputs from './useInputs';
import useInput from './useInput';
import { validateCardNumber, validateCardholderName, validateExpiryMonth, validateExpiryYear } from '../validator';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const useCardInfo = () => {
  const cardNumberInfo = useInputs(INITIAL_CARD_NUMBER, validateCardNumber);
  const cardholderNameInfo = useInput('', validateCardholderName);
  const expiryMonth = useInput('', validateExpiryMonth);
  const expiryYear = useInput('', validateExpiryYear);

  return { cardNumberInfo, cardholderNameInfo, expiryDateInfo: { month: expiryMonth, year: expiryYear } };
};

export default useCardInfo;
