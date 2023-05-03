import { useState } from 'react';
import { cardCompanies } from '../constants/cards';
import { NOT_A_NUMBER_REGEX } from '../constants/regex';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const cardCodeNumbers = cardCompanies.map((company) => company.codeNumber);

  const checkCardNumbers = (order: number, value: string) => {
    if (NOT_A_NUMBER_REGEX.test(value)) return false;
    if (order === 0 && value.length === 4) {
      if (!cardCodeNumbers.includes(Number(value))) {
        alert('잘못된 카드 번호 입력입니다.');
        setCardNumbers({ ...cardNumbers, [order]: '' });
        return false;
      }
    }
    setCardNumbers({ ...cardNumbers, [order]: value });
    return true;
  };

  return { cardNumbers, checkCardNumbers };
};

export default useCardNumbers;
