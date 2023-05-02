import { useState } from 'react';
import { CardCompanyName } from '../types/Card';

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState<CardCompanyName>('카드사');
  const onSetCardCompany = (value: CardCompanyName) => {
    setCardCompany(value);
  };

  return { cardCompany, onSetCardCompany };
};

export default useCardCompany;
