import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
  ]);
  const [cardNumbersError, setCardNumbersError] = useState<string>('');

  const handleCardNumbers = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) {
      setCardNumbersError('숫자로만 카드 번호를 입력해주세요.');
      return;
    }

    setCardNumbersError('');
    setCardNumbers({ ...cardNumbers, [order]: value });
  };

  return { cardNumbers, cardNumbersError, handleCardNumbers };
};

export default useCardNumbers;
