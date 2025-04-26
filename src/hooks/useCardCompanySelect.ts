import { useState } from 'react';
import { CardCompany } from '../types/card';

export function useCardCompanySelect() {
  const [cardCompany, setCardCompany] = useState<CardCompany>('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany(e.target.value as CardCompany);
  };

  return { cardCompany, handleSelectChange };
}
