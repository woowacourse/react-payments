import useExpiryMonth from './useExpiryMonth';
import useExpiryYear from './useExpiryYear';
import useCardholderName from './useCardholderName';
import useSelect from './useSelect';
import { CARD_TYPE } from '../types/card';
import useCardCVC from './useCardCVC';
import useCardNumber from './useCardNumber';
import useCardPassword from './useCardPassword';

const useCardInfo = () => {
  const cardNumberInfo = useCardNumber();
  const expiryMonth = useExpiryMonth();
  const expiryYear = useExpiryYear();
  const cardholderNameInfo = useCardholderName();
  const cardCompanyInfo = useSelect<CARD_TYPE>('');
  const cardPasswordInfo = useCardPassword();
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
