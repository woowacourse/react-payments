import { useState } from 'react';

import { CardNumbers, ExpirationDate, OwnerName, Password } from '../types/state';

export const useCardInfo = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>({
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
  });
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: null,
    year: null,
  });
  const [ownerName, setOwnerName] = useState<OwnerName>(null);
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState<Password>({
    firstPassword: '',
    secondPassword: '',
  });

  return {
    cardNumbers,
    setCardNumbers,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
  };
};
