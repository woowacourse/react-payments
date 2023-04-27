import { useState } from 'react';

import {
  CardNumbers,
  ExpirationDate,
  OwnerName,
  Password,
  CardCompany,
  CardAlias,
} from '../types/state';
import { DEFAULT_STATE } from '../constants/state';

export const useCardInfo = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>(DEFAULT_STATE.CARD_NUMBERS);
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>(
    DEFAULT_STATE.EXPIRATION_DATE
  );
  const [ownerName, setOwnerName] = useState<OwnerName>(DEFAULT_STATE.OWNER_NAME);
  const [securityCode, setSecurityCode] = useState(DEFAULT_STATE.SECURITY_CODE);
  const [password, setPassword] = useState<Password>(DEFAULT_STATE.PASSWORD);
  const [cardCompany, setCardCompany] = useState<CardCompany>(DEFAULT_STATE.CARD_COMPANY);
  const [cardAlias, setCardAlias] = useState<CardAlias>(DEFAULT_STATE.CARD_ALIAS);

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
    cardAlias,
    setCardAlias,
  };
};
