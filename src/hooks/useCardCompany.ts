import { useState } from 'react';
import { CardCompany } from '../types/cardCompany';
import { ERROR_MESSAGES } from '../constants/errorMessages';

const useCardCompany = () => {
  const [cardCompany, setCardCompany] = useState<CardCompany | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCardCompanyChange = (cardCompany: CardCompany | null) => {
    if (cardCompany === null) {
      setErrorMessage(ERROR_MESSAGES.EMPTY);
      return;
    }

    setCardCompany(cardCompany);
  };

  return { value: cardCompany, handleCardCompanyChange, errorMessage: errorMessage };
};

export default useCardCompany;
