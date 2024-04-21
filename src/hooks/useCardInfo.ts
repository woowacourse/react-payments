import useInputs from './useInputs';
import useInput from './useInput';
import { inquireCardNumber, inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from '../inquiry';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const useCardInfo = () => {
  const cardNumberInfo = useInputs(INITIAL_CARD_NUMBER, inquireCardNumber);
  const cardholderNameInfo = useInput('', inquireCardholderName);
  const expiryMonth = useInput('', inquireExpiryMonth);
  const expiryYear = useInput('', inquireExpiryYear);

  return { cardNumberInfo, cardholderNameInfo, expiryDateInfo: { month: expiryMonth, year: expiryYear } };
};

export default useCardInfo;
