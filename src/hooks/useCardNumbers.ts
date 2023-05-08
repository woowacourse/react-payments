import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';
import { CardNumbersType } from '../types/';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [cardNumbersError, setCardNumbersError] = useState<string>('');

  const isValidatedCardNumbers = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) {
      setCardNumbersError('숫자로만 카드 번호를 입력해주세요.');
      return false;
    }

    setCardNumbersError('');
    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, cardNumbersError, isValidatedCardNumbers };
};

export default useCardNumbers;
