import useInputs from './useInputs';
import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';
import useCardholderName from './useCardholderName';
import validateCardNumber from '../validator/validateCardNumber';
import useSelect from './useSelect';
import { CARD_TYPE } from '../types/card';
import useInput from './useInput';
import validateNumber from '../validator/validateNumber';
import validateCardPassword from '../validator/validateCardPassword';
import useCardCVC from './useCardCVC';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const useCardInfo = () => {
  const cardNumberInfo = useInputs(INITIAL_CARD_NUMBER, {
    onChange: validateNumber,
    onBlur: validateCardNumber,
  });
  const expiryMonth = useExpiryMonth();
  const expiryYear = useExpiryYear();
  const cardholderNameInfo = useCardholderName();

  const cardCompanyInfo = useSelect<CARD_TYPE>('');
  const cardPasswordInfo = useInput('', {
    onChange: validateNumber,
    onBlur: validateCardPassword,
  });
  const cardCVCInfo = useCardCVC();

  return {
    cardNumberInfo,
    cardCompanyInfo,
    expiryDateInfo: { month: expiryMonth, year: expiryYear },
    cardholderNameInfo,
    cardCVCInfo,
    cardPasswordInfo,
  };
};

export default useCardInfo;
