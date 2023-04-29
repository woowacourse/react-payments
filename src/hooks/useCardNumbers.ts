import { useState } from 'react';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Array<string>>([
    '',
    '',
    '',
    '',
  ]);

  const isSetCardNumbers = (order: number, value: string) => {
    if (/[^0-9]/g.test(value)) return false;

    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, isSetCardNumbers };
};

export default useCardNumbers;
