import { useState } from 'react';
import { REG_EXP } from '../constants/regexp';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
  ]);

  const isSetCardNumbers = (order: number, value: string) => {
    if (REG_EXP.cardNumberLimit.test(value)) return false;

    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, isSetCardNumbers };
};

export default useCardNumbers;
