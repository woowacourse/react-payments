import { useState } from 'react';
import type { CardCompanyHandler, CardCompanyStatus } from '../types/cardStausTypes';

export function useCardCompany(): { cardCompanyStatus: CardCompanyStatus; cardCompanyHandler: CardCompanyHandler } {
  const [cardCompany, setCardCompany] = useState<CardCompanyStatus['cardCompany']>('');

  const handleCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardCompany(e.target.value as CardCompanyStatus['cardCompany']);
  };

  return {
    cardCompanyStatus: {
      cardCompany,
    },
    cardCompanyHandler: {
      handleCardCompany,
    },
  };
}
