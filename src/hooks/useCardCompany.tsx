import { useState } from 'react';
import type { CardCompanyHandler, CardCompanyStatus } from '../types/cardStausTypes';

export function useCardCompany(): [CardCompanyStatus, CardCompanyHandler] {
  const [cardCompany, setCardCompany] = useState<CardCompanyStatus['cardCompany']>('');

  const handleCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany(e.target.value as CardCompanyStatus['cardCompany']);
  };

  return [
    {
      cardCompany,
    },
    {
      handleCardCompany,
    },
  ];
}
