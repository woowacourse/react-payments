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
      setError('숫자로만 카드 번호를 입력해주세요.');
      return;
    }

    setError('');
    setSate(order, value);
  };

  const setSate = (order: number, value: string) => {
    setCardNumbers({ ...cardNumbers, [order]: value });
  };

  const setError = (message: string) => {
    setCardNumbersError(message);
  };

  return { cardNumbers, cardNumbersError, handleCardNumbers };
};

export default useCardNumbers;
