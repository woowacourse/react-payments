import { CardNumberKey } from '../types/card';
import { UseCardNumberReturnType } from '../types/hooks';
import validateCardNumber from '../validator/validateCardNumber';
import validateNumber from '../validator/validateNumber';
import useInputs from './useInputs';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const useCardNumber = (): UseCardNumberReturnType => {
  const cardNumberInfo = useInputs<Record<CardNumberKey, string>>(INITIAL_CARD_NUMBER, {
    onChange: validateNumber,
    onBlur: validateCardNumber,
  });

  return cardNumberInfo;
};

export default useCardNumber;
