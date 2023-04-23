import { useState } from 'react';
import type { CardInformation } from '../../Common/Card/types';

function useCardForm(
  initialState: CardInformation = {
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    owner: '',
    securityCode: '',
    password: ['', ''],
  },
) {
  const [card, setCard] = useState<CardInformation>(initialState);

  const setCardNumber = (cardNumber: string[]) => {
    setCard(prev => ({ ...prev, cardNumber } as CardInformation));
  };

  const setExpirationDate = (expirationDate: string[]) => {
    setCard(prev => ({ ...prev, expirationDate } as CardInformation));
  };

  const setOwner = (owner: string[]) => {
    setCard(prev => ({ ...prev, owner: owner[0] }));
  };

  const setSecurityCode = (securityCode: string[]) => {
    setCard(prev => ({ ...prev, securityCode: securityCode[0] }));
  };

  const setPassword = (password: string[]) => {
    setCard(prev => ({ ...prev, password } as CardInformation));
  };

  return { card, setCardNumber, setExpirationDate, setOwner, setSecurityCode, setPassword };
}

export default useCardForm;
