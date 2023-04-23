import { useState } from 'react';
import { NUMBER_REGEX } from '../constants/regex';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const checkCardNumbers = (order: number, value: string) => {
    if (NUMBER_REGEX.test(value)) return false;
    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, checkCardNumbers };
};

export default useCardNumbers;
