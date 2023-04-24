import { useState } from 'react';
import { NOT_A_NUMBER_REGEX } from '../constants/regex';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const checkCardNumbers = (order: number, value: string) => {
    if (NOT_A_NUMBER_REGEX.test(value)) return false;
    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, checkCardNumbers };
};

export default useCardNumbers;
