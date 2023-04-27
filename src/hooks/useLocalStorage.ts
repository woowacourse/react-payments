import type { Dispatch } from 'react';
import { useState } from 'react';
import type { CreditCard } from '../types/CreditCard';

const CREDIT_CARDS_KEY = 'creditCards' as const;

const CREDIT_CARD_FORM_KEY = 'creditCardForm' as const;

export const useLocalStorage = () => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    JSON.parse(localStorage.getItem(CREDIT_CARDS_KEY) ?? '[]'),
  );

  const [creditCardForm, setCreditCardForm] = useState<CreditCard>(
    JSON.parse(localStorage.getItem(CREDIT_CARD_FORM_KEY) ?? '{}'),
  );

  const internalSetCreditCards: Dispatch<CreditCard[]> = (nextCreditCards) => {
    localStorage.setItem(CREDIT_CARDS_KEY, JSON.stringify(nextCreditCards));

    setCreditCards(nextCreditCards);

    return { creditCards, internalSetCreditCards };
  };

  const internalSetCreditCardForm: Dispatch<CreditCard> = (newCreditCardForm) => {
    localStorage.setItem(CREDIT_CARD_FORM_KEY, JSON.stringify(newCreditCardForm));

    setCreditCardForm(newCreditCardForm);
  };

  return { creditCards, internalSetCreditCards, creditCardForm, internalSetCreditCardForm };
};
