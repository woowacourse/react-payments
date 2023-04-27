import { useState } from 'react';

import { CardNumbers, ExpirationDate, OwnerName, Password, CardCompany } from '../types/state';

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

  const [cardCompany, setCardCompany] = useState<CardCompany>({
    name: null,
    theme: null,
  });

  const isOpenBottomSheet = !cardCompany.name && !cardCompany.theme;

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
    cardCompany,
    setCardCompany,
    isOpenBottomSheet,
  };
};
